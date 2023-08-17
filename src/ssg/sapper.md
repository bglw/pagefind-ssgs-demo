---
layout: article
title: Sapper
emoji: 🌳
date: 2017-12-31
era: "Maybe Static Wasn't So Bad"
lead: |-
    In his announcement post for Sapper, Rich Harris commends Next.js on being close to an ideal web application framework. In his view, however, it's not perfect. He points out one of Next.js's main flaws: vast amounts of JavaScript files, even for the most straightforward applications.
---

One year earlier, Rich introduced the world to Svelte — an innovative JavaScript framework making it easier to build interactive user interfaces with one key difference:

    Svelte converts your app into ideal JavaScript at build time, rather than interpreting your application code at run time. This means you don't pay the performance cost of the framework's abstractions, and you don't incur a penalty when your app first loads.

Sapper aims to bring the advantages of a Next.js style framework while "dramatically reducing the amount of code that gets sent to the browser." React and Next ships 204kb of JavaScript for a simple hello world. With Sapper it's just 7kb.

Spoiler alert: Sapper would have a successor in the future. (More on that later.)