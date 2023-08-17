---
layout: article
title: Blitz.js
emoji: ⚡️
date: 2020-02-17
era: "Let's Recreate Rails"
lead: |-
    Blitz.js started when Brandon Bayer conversed with his friend about the pros and cons of Ruby on Rails versus React. He realized that while the development community has made a tremendous amount of progress on JavaScript frameworks, these frameworks can't compete with the simplicity and developer experience offered by Ruby on Rails. Monolithic applications — for all their shortcomings — are easier to get your head around and give far greater flexibility to the developer.

---

Prisma 2 had recently been released; Next.js was seeing massive success. Brandon thought if he could pull all these pieces together into a full-stack framework, he could bridge the best of both worlds between Ruby on Rails and React.

Brandon started with a set of core philosophies for the new framework:

1. Fullstack monolithic — monoliths are faster and easier to scale.
2. API not required — APIs add complexity and slow you down.
3. Convention over configuration — By default, things should just work.
4. Loose opinions — Gives you a happy path on routine decisions. Gives you a choice when there's no consensus.
5. Easy to start, easy to scale — Easy for beginners, yet scalable for large-scale organizations.
6. Stability — Predictable release cycles.
7. Community over code — People are far more important than anything else.

Before long, Brandon had the first version of Blitz.js.

Blitz.js shares many similarities with Redwoodjs:

- They're both heavily inspired by Ruby on Rails.
- They're full-stack React frameworks.
- They make heavy use of Prisma for their data layer.
- They use code scaffolding to get you developing rapidly.
- They have built-in authentication.
- They value convention over configuration.

Their vision is slightly different, however. For one, Blitz.js sits on top of Next.js, whereas Redwoodjs is a standalone tool. Brandon himself differentiates the two:

> Redwood is tooling & conventions for traditional SPAs. Blitz is not a traditional SPA. The end UX of a Blitz app is the same or better than an SPA, but the DX is like a traditional server-rendered MVC app.
