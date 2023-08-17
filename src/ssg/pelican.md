---
layout: article
title: Pelican
emoji: 🦤
date: 2010-10-16
era: "After Jekyll"
lead: |-
    Pelican wasn't the first Python-based static site generator, but it was the first to gather considerable popularity. Alexis Metaireau created Pelican in November 2010 to scratch his own itch:
---

> I was previously using wordpress, a solution you can host on a web server to manage your blog. Most of the time, I prefer using markup languages such as Markdown or RestructuredText to type my articles. To do so, I use vim. I think it is important to let the people choose the tool they want to write the articles. In my opinion, a blog manager should just allow you to take any kind of input and transform it to a weblog. That's what pelican does. You can write your articles using the tool you want, and the markup language you want, and then generate a static HTML weblog.

Using Jinja2 as a templating language and accessing the Python ecosystem was a huge win for the Python audience. Many of Pelican's features mirror Jekyll's, some with a bit of Pelican flair of their own. For example, front matter does not have the triple dash lines:

```
Title: My super title
Date: 2010-12-03 10:20

This is the content of my super blog post.
```

In other areas, Pelican outshines Jekyll. In particular:

    Translations — Is core functionality in Pelican.
    Pagination — The pagination in Jekyll is notoriously painful. Pagination in Pelican is a core feature that can be configured to your needs.
    Atom & RSS Feed support — Jekyll has Atom feeds through a plugin. Pelican goes to the next level allowing you to have a feed per category, tag, and/or author, in addition to an overall feed.

Justin Mayer took over the reins as Pelican's lead maintainer in 2014, and he has steadily added new functionality, fixed bugs, and added quality-of-life improvements since then.