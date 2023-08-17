---
layout: article
title: Zola
emoji: 🦀
date: 2016-12-06
era: "Reinvention"
lead: |-
    Vincent gets straight to the point in his announcement of 'Gutenberg' (later renamed to Zola).

    Why would we possibly want another static site engine? I already hear some say. That's a very valid question!
---

He initially used Pelican to power the static websites he worked on, and later switched to Hugo "for the speed and the standalone binary and [he] stayed for the instant live reload." Hugo was great, but he soon grew frustrated with the Go templating engine.

Vincent had been working on his own templating engine, Tera in Rust, and thought building a static site generator would be a great way to further his knowledge of the language. Before long, he had created Gutenberg, an opinionated yet flexible way to build "all kinds of sites, from landing pages to knowledge bases, not only blogs." Gutenberg launched with support for CommonMark for content, category and tag support, automatic RSS feeds, and a host of other features that made it a viable alternative to Hugo.

In 2018, WordPress announced its block-based editor, Gutenberg, and began a heavy marketing campaign. Up against the platform that powered most of the web (an SEO matchup he described as "a plankton vs a tsunami"), Vincent changed the name to Zola, after the famous French writer.

Zola is now a fully-fledged SSG with support for shortcodes, pagination, taxonomies, search, Sass preprocessing, image processing, and multilingual sites.