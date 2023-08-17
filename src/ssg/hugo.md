---
layout: article
title: Hugo
emoji: 🎷
date: 2013-07-04
era: "Reinvention"
lead: |-
    Prior to this point, the majority of SSGs have been about converting Jekyll's functionality into another language. Hugo is a standout in the history of SSGs because it directly addresses some of Jekyll's weaknesses.
---

Most notably:

- Build speed — Jekyll is notoriously slow and building sites. Hugo is written in Go, which is a compiled language and, according to its current leader maintainer, a "perfect match for many of the tasks that Hugo performs". The result is Hugo's ability to build tens of thousands of pages in seconds.
- Dependencies — Setting up Ruby, dealing with Gemfiles and installing Jekyll can be surprisingly challenging. Hugo is a binary file; just download it and run it.

The story of how Hugo came to be starts with Steve Francia. At the time, his blog used WordPress. Over time, he became frustrated at how WordPress was optimized for writing content rather than for the reader. The website was slow, and the WYSIWYG editor was introducing poorly rendered HTML. Steve was interested in static site generators and took his frustrations with WordPress as an opportunity to focus on both the content and structure of his site.

He evaluated other SSGs and found the build times too slow and content inflexible, typically restricted to blogging workflows.

> Since I was already looking for a good project to write in golang I decided to build my own static site generator called hugo.

Hugo took some ideas from other static site generators like front matter and Markdown-based content and introduced some of its own. These include taxonomies, built-in image processing, i18n, custom outputs, RSS feeds, menus, and more. Everything is included. No plugins are required.

Hugo has seen success with corporate customers, including 1Password, Linode Digital.gov, KeyCDN, and Let's Encrypt, to name just a few. Bjørn Erik Pedersen took over as the lead maintainer in 2015 and continues to lead Hugo's thriving community.