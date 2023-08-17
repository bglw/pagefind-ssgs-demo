---
layout: article
title: Metalsmith
emoji: 🤘
date: 2014-02-04
era: "Reinvention"
lead: |-
    In 2011, Ian Storm Taylor cofounded Segment, a customer data platform that helps collect, clean, and control customer data. Years later, he created the SSG Metalsmith, which he used to power the Segment technical documentation. Just this week, after a 5-year maintenance mode break, Kevin Van Lierde took over as lead developer and maintainer, and shared his roadmap for future features and patches.
---

In some ways, Metalsmith is one of the simplest SSGs. The entire codebase is under 400 lines(!), but don't let that fool you — this is one of the most powerful and flexible SSGs out there. Everything in Metalsmith is a plugin. From layouts, to collections, pagination, drafts, permalinks, image processing — you name it, there's a plugin for that. You configure these plugins to process files on your site and have complete control over where and how they're run. If a plugin doesn't exist, you can always add your own using Metalsmith's simple Node.js API.

Metalsmith isn't just restricted to HTML-based websites either; on their website they have workflows for creating ebooks, building assets, and project scaffolding.