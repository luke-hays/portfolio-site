---
title: "Test Post"
publishDate: "2023-04-10"
publish: false
---

# Thoughts on Astro

## What is this?

Astro is another front end framework for building "content-driven" websites and boasting fast load times and good SEO. I can't say I'm disappointed with the results. Really the features make it pretty interesting - [Islands](https://docs.astro.build/en/concepts/islands/) - I didn't actually use. The ability to dip into different seems like it may be useful but in this case very unnecessary to shift away from vanilla html and js

## Why this?

Curiousity and I'm tired of looking at React despite it becoming second nature. Too much exhaustion towards that and Next just kind of annoys me. The content collections provides an interesting way to add organize static markdown and json (and probably other data files), so I actullay had fun with that.  It was also dead simple to get up and running with tailwind and a deployment pipeline

## Tailwind Integration

Very simple, run astro add for your plugin. TBH I've never used tailwind that much before and I can't tell whether I like it or not. Some things seem pretty easy to run with but I found myself getting annoyed at trying to mess with styling the scroll bar. I think on a project with other people it might start to get rapidly worse to manage

## State management with nanostores

Astro's Island architecture will necissitate the use of Nano Stores to actually share state between the islands. This was fairly easy to integrate and seems like a decent library

## Cloudflare Pages
Dead simple hosting with easy integration with github actions

## Takeaway

Astro is cool. May use it some more to actually 