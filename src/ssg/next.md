---
layout: article
title: Next
emoji: ⚛️
date: 2016-10-25
era: "SPAs are awesome"
lead: |-
    Guillermo and his company Ziet (now Vercel) had "been pursuing a vision of universal JavaScript applications." In other words: a way to develop websites and web applications using JavaScript to run in both the frontend and backend. This idea is also known as isomorphic JavaScript and was first popularized by the Meteor framework in 2011. Next.js is Vercel's take on this vision.
---

Next.js started with six principles in mind:

1. Zero setup. Use the filesystem as an API — Automatically route files in the pages directory. For example, pages/about.js maps to /about.
2. Only JavaScript. Everything is a function — Every route in Next.js is a function or extension of React.Component. Doing this keeps everything modular, flexible, and highly testable.
3. Automatic server rendering and code splitting — Every component inside pages/ gets server-rendered automatically and their scripts inlined. Each page has its own set of dependencies that don't impact the performance of the rest of the site.
4. Data fetching is up to the developer — Fetching data is unopinionated and straightforward, giving the developer complete flexibility to work with any API implementation.
5. Anticipation is the key to performance — In Next.js, "if you navigate around, odds are that by the time you follow a link or trigger a route transition, the component has already been fetched."
6. Simple deployment — Running Next.js is a two-step process: first a build step, and then starting it. Deploying to Vercel can be done with a single command.

Next.js isn't just a static site generator. It's a hybrid framework, meaning it blends server-side generated pages with static pages. You also have the option to run next export to create a purely static website that doesn't need the Next server to run.

Within six months of launching, Next.js had already amassed 10k stars on GitHub. Along with Gatsby.js, Next.js was embraced by the fast-growing React community, which further fuelled its popularity. The hybrid approach meant that Next.js could power websites that wouldn't be feasible with a purely static approach, for example:

- Content-rich websites — Most SSGs will have an excruciatingly long build time on a website with 100k+ pages. With server-side rendering, these pages render on demand, meaning no upfront build time.
- E-commerce — Large e-commerce stores typically rely on search and filtering to help customers find what they're looking for. They also highly value SEO to bring customers inbound. Ticking these boxes is difficult for a static website, particularly when there are millions of products. Again, server-side rendering gives the developer more flexibility to handle sites of this scale flawlessly.

Next.js is currently the world's most popular static site generator, due to its excellent developer experience, flexibility, and ability to work it a wide range of use-cases. It powers the websites for world-leading brands such as Ticketmaster, Realtor.co, AT&T, and Tiktok.