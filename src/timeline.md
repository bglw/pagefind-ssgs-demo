---
layout: timeline
title: "The SSG Timeline"
eleventyNavigation:
    key: timeline
    order: 2
---

# The SSG Timeline

{% eraHeading "The Before Jekyll Era" %}

Static site generators (SSGs) have exploded in adoption over the past few years. What were once tools for developers to build their personal blogs are now something millions of developers are reaching for to build commercial websites and web applications.

But how did we get here? Carl Sagan said it best: “You have to know the past to understand the present.” The history of SSGs involves a long line of innovators, building on each other's ideas and pushing the boundaries of what is possible on a static website. This blog series explores that history and navigates from the first SSG to where we are today.

Writing this series has been an adventure in piecing together internet history from old commit messages, overlooked tweets, and long-forgotten blog posts on the Wayback Machine. I hope you enjoy reading it as much as I did writing it.

{% eraSsgs "Before Jekyll" %}

{% eraHeading "The After Jekyll Era" %}

By 2008, static websites were seen by most as ancient, obsolete technology, a holdover from the previous decade (or millennium, depending on your viewpoint).

Jekyll changed that. It was a breath of fresh air for developers coming from a world of complex APIs, plugins, and databases. The control and simplicity offered by Jekyll inspired developers to start creating their personal blogs on the platform. Before long, Jekyll was frequently used for documentation and other commercial projects.

Jekyll's success triggered a decade of recreation and iteration. Open-source developers around the world created their own special versions of Jekyll, bringing their own ideas and implementing them in their favorite languages. Static site generators were truly here to stay.

{% eraSsgs "After Jekyll" %}

{% eraHeading "The Reinvention Era" %}

After years of recreating and iterating on Jekyll, the reinvention period sees a flurry of static site generators challenging some of Jekyll's underlying foundations.

We see SSGs doing new things with taxonomies, specialized SSGs that do less, plugin-based SSGs that can do anything. It's a wild period of play and experimentation that pushes the limits of SSGs.

{% eraSsgs "Reinvention" %}

{% eraHeading "The SPAs are awesome Era" %}

In the early 2010s — while Jekyll was being reinvented — web browsers were becoming ever more capable, spurring a proliferation of companies developing single-page applications. However, building single-page web applications required a level of shared data consistency that the most popular JavaScript framework at the time, JQuery, was not equipped to handle. We saw a number of frameworks tackle this problem, including Backbone, Ember, Knockout, and most popular, AngularJs. These frameworks provided a structure for creating large applications.

Adding your own event handlers and manually manipulating the Document Object Model (DOM) is error-prone and slow. It also makes it difficult to reuse views. In 2013, React was released by Jordan Walke at Facebook and offered a completely new way of thinking about the view layer. Instead of having to manipulate the DOM directly to get to your desired state, React takes a declarative approach. You tell React what state you want the UI to be in, and it works out the details. React handles the events and performs the time-consuming DOM manipulations on a virtual DOM, which is significantly faster as it only updates the objects that have changed on the real DOM.

Around the same time, Evan You was using AngularJs on some internal projects at Google. He like parts of AngularJs but felt it was too heavyweight for his projects. Evan set out to build a lightweight version of the framework which he released in 2014, under the name Vue.js.

Both React and Vue.js surged in popularity in the mid 2010s. Developers in the SSG community were working out how to integrate these technologies with their existing static site. A new wave of tooling arrived soon after this, which made these new JavaScript frameworks first-class citizens of the static site generator world.

{% eraSsgs "SPAs are awesome" %}

{% eraHeading "The Maybe Static Wasn't So Bad Era" %}

After a period of heavy, complex JavaScripts integrated into SSGs, the following period pulls back to simpler times. And what could be simpler than straight HTML templates with Markdown content?

{% eraSsgs "Maybe Static Wasn't So Bad" %}

{% eraHeading "The Let's Recreate Rails Era" %}

It's 2019. Next.js/Nuxt.js are pushing the boundaries of what SSGs are capable of, and are surging in popularity. The 'Let's Recreate Rails' era questions if we can take this paradigm even further. Why don't we create full-stack applications in one framework, in the same vein as Rails?

{% eraSsgs "Let's Recreate Rails" %}

{% eraHeading "The Rebirth Era" %}

What’s old is new again. With modern tooling and the knowledge of better ways of implementing SSGs, the rebirth era sees reincarnations of several older SSGs with modern ideas.

{% eraSsgs "Rebirth" %}

{% eraHeading "The Islands Era" %}

Islands architecture or 'partial hydration' is an approach that gives the fast-loading nature of a purely static website, paired with the dynamic iterations you get from an SPA. To understand why islands architecture is such as big deal, we need a brief internet history lesson.

As JavaScript grew more powerful in the early 2000s, we could suddenly push browsers to do more. Instead of loading an entirely new page for each request, we could use JavaScript to rewrite the existing page to make it feel more like a native application. This idea is called Single Page Applications, or SPAs, and expanded the possibilities of what a website could be. They created a wave of moving desktop software into the browser including Gmail, Google Docs, and Netflix.

SPAs aren't a silver bullet, however. There are several downsides to consider:

1. They require large amounts of JavaScript to download and execute, which is particularly an issue for slower devices and limited internet speeds.
2. While waiting for the JavaScript to download, the user will likely see a loading spinner.
3. Search engines can execute JavaScript. However, it's not as straightforward as a typical HTML web page, making it harder to rank well with an SPA.

To mitigate points 2 & 3, frameworks like Gatsby, Next.js, Nuxt.js, and Gridsome prerendered the JavaScript components into HTML and hydrated them on page load. They work like this:

1. Prerender JavaScript components to HTML.
2. On a page request, send the prerendered, HTML version of the page.
3. On page load, initiate the JavaScript framework. The framework will look over the HTML and attach event handlers, so now it acts as a single page application.

It's a middle ground where you quickly get a static version of the site while your large JavaScript framework downloads and runs. It's better but not perfect. You're still loading and processing a large JavaScript file, albeit at a more convenient time.

For many websites, full hydration is overkill. There may only be a handful of components that need interaction. This is the fundamental idea behind partial hydration, and it works something like this:

1. Prerender JavaScript components to HTML.
2. On a page request, send the prerendered, HTML version of the page.
3. On page load, only hydrate the components that the developer has specifically marked as needing hydration.

The islands era sees a number of SSGs bringing the advantages of partial hydration to reality.

{% eraSsgs "Islands" %}

{% eraHeading "Today" %}

Where to from here?

This brings us to the end of this series (for now). The history of SSGs has been a constant journey of adding new ideas, then reinventing it in simpler or more powerful ways. The future of SSGs isn’t heading in single direction; instead we have a four-headed hydra:

    The pure (Jekyll, Hugo, 11ty) — A focus on simplicity and pure HTML generation.
    The partial hydration (Elder.js, Astro, Slinkity) — Striking a balance between page speed and dynamic interactions.
    The SPA (Next.js, Nuxt, Gatsby, Sveltekit) — Bridging the gap between static and dynamic.
    The full stack (Redwood.js, Blitz.js) — Everything you need to build modern web applications.

Which direction will win? Well, all of them! Each direction has its own benefits and tradeoffs that make sense for particular use cases. The SSG hydra now has full coverage of the web development gamut from a simple company website to a full blown application.

As for what comes next, I think we’re already starting to see it — iterations and new SSGs that address downsides of current SSGs. Namely:

    Faster build speeds — The days of SSGs used or created specifically for a 20-page personal developer blog are long gone. Commercial use cases can have thousands of pages and waiting 20+ minutes for a build to complete is a deal breaker.
    Smarter JS Hydration — Pushing huge JavaScript files to the client goes against one of the original reasons for using a SSG, which was shipping smaller and faster handcrafted websites. Partial hydration has the potential to strike a perfect balance between fast loading websites and dynamic, interactive components.
    Static / Dynamic smoothie — We’re seeing the line between static and dynamic blur further with every year that passes. We’re seeing smart ways of making dynamic content, static and mitigating some of the downsides of dynamic by moving everything to the edge.

Momentum and innovation is accelerating in the world of static site generators. What do you think will be the biggest developments in the coming years?
