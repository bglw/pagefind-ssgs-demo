---
layout: article
title: VitePress
emoji: 🌩️
date: 2020-04-30
era: "Rebirth"
lead: |-
    Four years after creating VuePress, Evan You came back with a new SSG, VitePress. "VitePress is VuePress' little brother, built on top of Vite."
---

Evan You had recently released Vite to combat many of the pain points developers face using Webpack. The days of having a single JavaScript file for your website are long gone for most of us and build tools have become a necessary evil. Webpack is a popular build tool that builds a tree of all the dependencies on a site, transpiles (makes the JS work in older browsers) or compiles (turn SCSS into CSS) them, concatenates the files and optimizes them. Needless to say, this process can be time-consuming, which is especially painful when you’re developing. Waiting minutes to see your change appear in the browser is not a fun experience.

Vite takes a different approach. It assumes you’re using a modern browser during development, allowing it to leverage native ES modules rather than bundling. The result is seeing updates in the browser in a fraction of the time you would using Webpack. And you can still run a bundled build for production.

VitePress shares many of the updates coming to VuePress 2, including:

- Vue 3 support
- Using Vite instead of Webpack for the build

While it shares many similarities with VuePress 2, the goals of the project are slightly different, in that VitePress is more opinionated and less configurable:

> VitePress aims to scale back the complexity in the current VuePress and restart from its minimalist roots.
