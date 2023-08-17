---
layout: article
title: Bridgetown
emoji: 🌉
date: 2020-04-07
era: "Rebirth"
lead: |-
    Much of Jekyll's success can be attributed to the free hosting provided by GitHub Pages. We don't know exactly how many websites are on GitHub Pages, but it's likely in the hundreds of thousands, if not millions. GitHub Pages runs a single version of Jekyll (currently 3.9.0) to build all of the sites on the platform. Upgrading Jekyll to a newer version (Jekyll 4.2.1 was released in September 2021) on GitHub Pages would likely cause issues the next time anyone built their site.
---

Suffice it to say, Jekyll is in a tricky spot. At this rate, new features won't reach the Jekyll users on GitHub Pages anytime soon, leaving little incentive for the core team to continue making improvements.

Jared White grew frustrated with the Jekyll situation. He had been using Jekyll to build websites for clients as part of his agency, Whitefusion. As a Rubyist at heart, Jared loved Jekyll but realized it was starting to show its age.

> After an amicable conversation with the Jekyll core team, I decided to take on the exciting (but incredibly daunting!) task of "forking" Jekyll and using it as the starting point for a reimagined Ruby-based website framework: Bridgetown.

Forking Jekyll allowed Jared to develop rapidly as he didn't need to maintain backward compatibility. Bridgetown was a new SSG based on the bones of Jekyll. The changes include:

- Change the codebase into a monorepo rather than splitting off into Gems.
- Removing deprecated code and confusing config options.
- Improving the default site structure.
- Add a console command to interact with the site data and plugins.
- Replace the asset pipeline with Webpack.
- Make pagination a first-class citizen — a common pain-point with Jekyll.
- Streamline taxonomy pages.
- Support environment-based configuration
- ERB support in templates
- Enable component-based templating

Bridgetown has an ambitious roadmap for the coming year. It's going to be exciting to see what a modern reincarnation of Jekyll is capable of without the shackles of GitHub Pages.