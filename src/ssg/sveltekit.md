---
layout: article
title: Sveltekit
emoji: 🪁
date: 2022-12-14
era: "Islands"
lead: |-
    After years of working on Sapper, Rich Harris and the Svelte team reflected on the state of the project and had a few realizations:
---

- The distinction between Svelte templates and Sapper templates is confusing.
- The codebase had become unkempt over the years and was due for some heavy refactoring.
- Sapper has assumed a module bundler like Webpack was necessary to create code that can run anywhere. Build tools like Snowpack and Vite bridge the pros and cons of an unbundled/bundled workflow and bring a better developer experience.
- Sapper requires running a Node.js server. The Svelte team identified a trend towards serverless platforms and wanted a framework that fully embraced the paradigm.

These ideas led Rich and the Svelte team to build a new Svelte-based application framework from scratch, SvelteKit. The framework addresses the shortcomings of Sapper including:

- The introduction of adapters allowing tight integration with serverless platforms such as Netlify, Vercel, and Cloudflare
- A Vite-powered build to provide a better/faster developer experience
- The ability to prerender a subset of pages and dynamically render the rest
- Standardized workflows for working with Svelte

SvelteKit is actively working towards its 1.0, where it will have stable APIs ready for production use. It's a framework that addresses the tradeoffs between having a simple document web page versus a single page application. The icing on the cake will be if Svelte can add an elegant solution for partial hydration.