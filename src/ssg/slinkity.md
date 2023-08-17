---
layout: article
title: Slinkity
emoji: 🪀
date: 2021-06-15
era: "Islands"
lead: |-
    If there were an award for best SSG launch video, Ben's Slinkity announcement would get my vote. Slinkity isn't an SSG in its own right. It's a plugin that extends 11ty to bring React, Vue, or Svelte magic to your static website.
---

At a high level, there are two types of static site generators:

    The traditional "simple" SSGs — These frameworks focus on outputting simple HTML and CSS based websites.
    The application SSGs — These are based on JavaScript application frameworks like React, Vue, and Svelte. They output HTML and CSS, then hydrate the page with JavaScript to enable client-side interactions.

Slinkity is part of the new wave. Along with Astro and Elder.js, these SSGs are trying to find a middle ground between the above two extremes. Where Slinkity separates itself is instead of being a standalone framework, it's bolted onto 11ty. This integration is a major bonus as it means you can start building your website using 11ty, which has a low learning curve, then when you need more dynamic interactions, you're free to layer on React, Vue, or Svelte where you need it.

You have complete control over how components partially hydrate in Slinkity. By default, they render 'eager', which means they're hydrated as soon as the page loads. You can also render them 'lazy', which is the same except the component only loads when it's scrolled into view. Finally, you can render them 'static', which means no JavaScript and no interactivity.

11ty + Slinkity is an exciting duo, I'm looking forward to see where Ben takes it. Slinkity is currently in early alpha, so probably isn't much just in production yet, but hopefully soon.