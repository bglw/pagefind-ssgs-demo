---
layout: article
title: Hakyll
emoji: λ
date: 2009-12-02
era: "After Jekyll"
lead: |-
    In November 2009, Jasper Van der Jeugt set out to create a personal blog. He started researching platforms and found the following as his best options:

    (Any Jekyll user can relate to Jasper's Ruby struggles. It's often the most challenging part of installing Jekyll.)
---

> Wordpress is probably the most common blog software. I didn't really like it, because it's written in php, and because I recently became interested in static site generators.

> nanoc, written by someone I know, seemed more appropriate. The downside was that it requires some Ruby knowledge, which I am currently lacking.

> yst is a similar static site generator, mostly based on data files. I didn't really like its configuration system, and the next item looked better:

> jekyll is also written in Ruby, but it seems more high-level and blog-ready (which is a good thing, you know, with my non-existent Ruby skills…). However, when I tried it out I ran across a certain bug, and I started googling. It turned out jekyll is not perfectly compatible with Ruby 1.9. Yeah, I'll repeat that: it's not compatible with Ruby 1.9. I didn't feel like downgrading any packages

Not finding any satisfactory options, Jasper did what many developers would do in this situation, and built his own SSG. Jekyll spurred many developers to build something different in their language of choice; going forward, we'll see this trend repeat across many SSGs. In this case, Jasper was learning Haskell, and creating a new SSG was the perfect opportunity to apply his new knowledge.

Hakyll stands out from its predecessors for two reasons:

    It's highly configurable — you have deep control over the routing and compilers (how pages are processed).
    It has tight integration with pandoc — pandoc is the Swiss Army knife of file conversions. You could write your content in Jira Wiki and output it as a PDF or Asciidoc to HTML. It supports many different formats allowing you to write and output in the languages you need.

These strengths are also Hakyll's weaknesses — if you want a simple SSG to quickly spin up a Markdown blog, this is probably not the SSG for you.