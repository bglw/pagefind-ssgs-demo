---
layout: article
title: Redwoodjs
emoji: 🌲
date: 2019-06-24
era: "Let's Recreate Rails"
lead: |-
    Eleven years after the launch of Jekyll, Tom Preston-Werner et al started working on a new project in the SSG space, Redwoodjs. Calling Redwoodjs a static site generator is misleading, however. The ambition for the project is far greater:

    "We're looking to be a modern replacement for something like Ruby on Rails, so think full-on web application vs a blog or simple eCommerce site."
---

Redwoodjs is about bringing the full stack to the Jamstack. It has a React frontend, talks via GraphQL to a backend running on serverless functions, and is all deployed with a Git push. It's an opinionated framework that puts developer experience at its heart.

Like many popular SSGs, Redwoodjs started with a set of core philosophies:

- Jamstack architecture is the best way to write and deploy web applications.
- Strong conventions help developers organize and collaborate on web projects.
- Traditional, relational databases like PostgreSQL and MySQL are still the workhorses of today's web applications.
- You should be able to operate in a serverless mindset and deploy to a generic computational grid.
- Deployment and scaling should be super easy.
- The framework should be equally useful for writing both simple, toy applications and complex, mission-critical applications.
- Use JavaScript for both the frontend and backend. Using a single language simplifies everything from code reuse to hiring developers.

Just like Rails, Redwoodjs makes heavy use of CLI generators to rapidly create boilerplates for your components, layouts, data migrations, and more. You can also use the CLI to deploy your site directly to popular hosting providers.

Redwoodjs is purposefully pushing the boundaries of what's possible with Jamstack. It's a new approach to building web applications and has flexible solutions for Auth, makes accessibility a first-class citizen, and uses the popular database toolkit library Prisma for your data layer. The project is aiming to have a production-ready 1.0 launch in early 2022.