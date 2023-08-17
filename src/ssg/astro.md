---
layout: article
title: Astro
emoji: 🚀
date: 2021-06-09
era: "Islands"
lead: |-
    "There's a simple secret to building a faster website — just ship less." 
    
    Frameworks like React have normalized shipping hundreds of kb of JavaScript. The choice to use a JavaScript framework involves considering some tradeoffs. How much interactivity do I need? Is it worth the overhead of downloading an entire web framework? Would I be better off using simple HTML, CSS, and vanilla JavaScript?
---

The team of open source developers behind Snowpack had been pondering these questions and saw an opportunity to create a new SSG, Astro.

Astro "borrowed the best parts of our favorite tools and then added a few innovations of our own".

With Astro, you can bring your own JavaScript framework, including React, Svelte, Vue, Preact, web components, or vanilla HTML & JavaScript. On build, Astro renders the entire website to completely static HTML. Static HTML means the pages load extremely quickly with no JavaScript overhead. When you do need interactive JavaScript on a component, Astro loads just that one component. It's partial hydration or islands architecture like Elder.js. On top of that, Astro has SEO features such as automatic site maps, RSS feeds, pagination, and collections to help ensure your site ranks well.

The combination of bringing your own JavaScript framework with partial hydration created tremendous hype in the community. Astro is still in beta and has already amassed a large following of 8k+ stars on GitHub, as well as taking out the 2021 Jammies Ecosystem Innovation Award. It's certainly one to watch in the future.