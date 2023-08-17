class Emoji {
  constructor(glyph, x, y) {
    this.glyph = glyph;
    this.x = x;
    this.y = y + document.documentElement.scrollTop;

    this.offsetx = 0;
    this.offsety = -document.documentElement.scrollTop;

    this.pushx = 0;
    this.pushy = 0;

    this.active = true;

    this.el = document.createElement("span");
    this.el.classList.add("float-emoji");
    this.el.innerText = this.glyph;

    this.update();

    document.body.insertAdjacentElement("beforeend", this.el);

    this.relocate();
  }

  remove() {
    this.el.remove();
  }

  adjust(x, y) {
    this.offsetx = x ?? this.offsetx;
    this.offsety = y ?? this.offsety;
    this.update();
  }

  pushBy(x, y) {
    this.pushx += x ?? 0;
    this.pushy += y ?? 0;
  }

  relocate() {
    if (!this.active) return;

    this.y -= 1;

    this.y += this.pushy;
    this.x += this.pushx;

    this.pushx = this.pushx * 0.98;
    if (Math.abs(this.pushx) < 0.1) this.pushx = 0;
    this.pushy = this.pushy * 0.98;
    if (Math.abs(this.pushy) < 0.1) this.pushy = 0;

    this.update();

    window.requestAnimationFrame(() => {
      this.relocate();
    });
  }

  update() {
    this.el.setAttribute(
      "style",
      `transform: translateX(${this.x + this.offsetx}px) translateY(${
        this.y + this.offsety
      }px)`
    );
  }
}

(function () {
  const emojiEl = document.querySelector("[data-ssg-emoji]");
  if (!emojiEl) return;

  const emoji = emojiEl.dataset.ssgEmoji;

  const emojis = [];

  const new_emoji = () => {
    let w = window.innerWidth;
    let h = window.innerHeight;
    if (document.hasFocus()) {
      emojis.push(new Emoji(emoji, Math.random() * w, Math.random() * 500));
    }

    if (emojis.length) {
      for (let i = emojis.length - 1; i >= 0; i -= 1) {
        if (emojis[i] && emojis[i].y < -h) {
          emojis[i].remove();
          emojis.splice(i, 1);
        }
      }
    }
  };

  new_emoji();
  setInterval(new_emoji, 3000);

  document.addEventListener("scroll", (e) => {
    emojis.forEach((em) =>
      em.adjust(undefined, -document.documentElement.scrollTop)
    );
  });

  document.addEventListener("mousemove", (e) => {
    emojis.forEach((em) => em.pushBy(e.movementX / 200, 0));
  });
})();
