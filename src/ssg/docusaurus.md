---
layout: article
title: Docusaurus
emoji: 🦖
date: 2017-12-14
era: "Maybe Static Wasn't So Bad"
lead: |-
    Docusaurus was born inside Facebook, where there was a growing need for custom websites to document the company's open-source projects.

    "Since each site was unique, adding basic infrastructure such as a blog, consistent navigation, search, etc. became challenging undertakings."
---

To solve this problem, the open-source team set out to build a documentation template in Jekyll. It would serve as a starting point for new projects to provide all the basic functionality they would need, though they soon encountered issues with maintainability.

"Projects were free to modify the template as desired and apply their own project-specific features to it. So while projects share the same site generation platform, they have now diverted enough where they cannot take advantage of the new features we have added to the template over time."

The team went back to the drawing board and explored how they could keep their portfolio of documentation sites updated and consistent, yet be flexible enough for each site to adapt the platform to their needs. Docusaurus was born, and focused on the following principles:

    To put the focus on writing good documentation instead of worrying about the infrastructure of a website.
    To provide features that many open source websites need, like blog support, search, and versioning.
    To make it easy to push updates, new features, and bug fixes to everyone all at once.
    And, finally, to provide a consistent look and feel across all of our open-source projects.

Docusaurus is powered mostly by JavaScript and React, Remarkable for Markdown, and highlight.js for syntax highlighting. It features a configurable sidebar, documentation versioning, translations, search, and blog support. It can be extended through plugins and theming for anything it can't do out of the box.

Docusaurus powers the documentation sites for many of the tools developers use every day, including Algolia Docsearch, Jest, React Native, and Redis.

More recently, Docusaurus has been working towards their 2.0 to make quality-of-life improvements, including a better React implementation, Webpack for an extendable build pipeline, easier extensibility around layouts, and more. Sébastien Lorber, Alexey Pyltsyn, and Yangshun Tay have joined the maintenance team to push Docusaurus forward.