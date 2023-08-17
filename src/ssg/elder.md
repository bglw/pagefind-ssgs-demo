---
layout: article
title: Elder.js
emoji: 🧓
date: 2020-08-26
era: "Islands"
lead: |-
    Nick Reese is the co-founder of Elder Guide — a website to find and compare senior living options. Over the past 14 years, Nick has managed five major SEO properties, so the benefits of Jamstack are highly tangible to him.
---

When he started Elder Guide, he evaluated six SSGs: Gatsby, Next.js, Nuxt.js, 11ty, Sapper, and Hydrogen.js. Unfortunately, none of these ticked all of his requirements.

Nick had three realizations:

1. Most SSGs cater to either simple sites/blogs or full-scale web applications. There's no in-between.
2. Fetching data from multiple sources is difficult.
3. Fully hydrating a web page is overkill for most websites. But what if we could only hydrate the components that need to be hydrated?

He whipped up a rudimentary prototype based on Svelte, named it Elder.js, and started using it to power Elder Guide.

Elder.js was one of the first SSGs to pioneer partial hydration or islands architecture and is currently "stable and production-ready". Nick has executed his vision of what he wanted in an SSG and has rolled it out over a couple of the websites he manages. Now his roadmap is about working on bug fixes and incremental changes that are primarily under the hood.