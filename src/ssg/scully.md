---
layout: article
title: Scully
emoji: 🤔
date: 2019-12-12
era: "Let's Recreate Rails"
lead: |-
    The Angular community finally had their answer for SSGs in 2019 with Scully. Scully follows a similar model to Gatsby:

    Write your views using Angular.
    Scully renders these into static web pages.
    On page load, the static HTML turns into an interactive web app or SPA through hydration.
---

The idea is to give the best of both worlds — a fast page load for SEO and user experience, followed by loading hundreds of KBs of JavaScript to enable client-side interactions.

The magical part of Scully is its use of the Guess.js library and machine learning. Scully automatically finds all the routes in an existing Angular project and prerenders an HTML page for each. If you have an Angular project you're looking to bring to the Jamstack world, look no further than Scully.