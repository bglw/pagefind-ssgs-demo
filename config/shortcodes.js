const { EleventyRenderPlugin } = require("@11ty/eleventy");

const countIndent = (line) => {
  return /\S/.test(line) ? line.split(/\S/)[0].length : Infinity;
};

const removeCommonIndentation = (content) => {
  const lines = content.split("\n");
  let shortestIndent = Infinity;
  lines.forEach((line) => {
    const indent = countIndent(line);
    if (indent < shortestIndent) {
      shortestIndent = indent;
    }
  });
  console.log(`${shortestIndent}`);
  if (shortestIndent < Infinity) {
    content = lines.map((line) => line.substring(shortestIndent)).join("\n");
  }
  return content;
};

const eraHeadingShortCode = (eraTitle) => {
  return `<div class="eraHead">
  <span class="gutterIcon" data-emoji="🌟"></span>
<h2 id="${eraTitle.toLowerCase().replace(/[^a-z]/g, "-")}">${eraTitle}</h2>
</div>`;
};

function addEraSsgsShortCode(eleventyConfig) {
  const rm = new EleventyRenderPlugin.RenderManager();

  eleventyConfig.on("eleventy.config", (cfg) => {
    rm.templateConfig = cfg;
  });

  eleventyConfig.addAsyncShortcode("eraSsgs", async function (era) {
    const fn = await rm.compile(
      `
      <ul class="eraSsgs">
        {% for article in collections.ssgs | inEra("${era}") | reverse %}
          {% include "./src/_includes/components/ssgListing.njk" %}
        {% endfor %}
      </ul>`,
      "njk,md"
    );
    return fn(this.ctx);
  });
}

const Image = require("@11ty/eleventy-img");
function addImageShortcode(eleventyConfig) {
  eleventyConfig.addShortcode("image", async function (src, alt, sizes) {
    let metadata = await Image(src, {
      widths: [300, 600],
      formats: ["png"],
      outputDir: "./_site/img/",
    });

    let data = metadata.png[metadata.png.length - 1];
    return `<img 
      src="${data.url}"
      width="${data.width}"
      height="${data.height}"
      alt="${alt}"
      loading="lazy"
      decoding="async">`;
  });
}

module.exports = {
  eraHeadingShortCode,
  addEraSsgsShortCode,
  addImageShortcode,
};
