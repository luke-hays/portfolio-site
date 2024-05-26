---
title: "Astro - A Framework Review"
publishDate: 2023-04-10
---

I'm getting sick of React, after spending 8 hours a day in it for the past few years. The logo that looks like an atom is giving me radiation sickness, I think. I've decided to explore some other frameworks (well, one other) and go back to normal frontend development without JSX in my personal time. Personally, I just wanted to explore an alternative framework while keeping my use case in mind, building this website. Yes, a framework is overkill for what is essentially a static site serving up articles and and links to portfolio projects. I thought it was enjoyable enough to work with and I think will service me well going forward with my goal - to easily shove markdown or json into a repo and be done with it. Luckily Astro offered Content Collections which is what drew me to it to begin with.

## Content Collecitons

Astro's Conent Collections feature is interesting. You have a special directory in your project that holds collections of data that can be reinforced with a schema for ease of querying and manipulation. A simple example is how my blog posts are set up. All they need are a title and publish data and the website will take care of rendering. Admittedly, I feel like this is more of a preference in how to manage collections, since the logic doesn't sound that special (I'm not familiar with CMS). 

One fun thing I did JSON with a schema for a tag system that can be used by this site. My intent is to have this be a repository of notes and thoughts on different ideas and so as it grows (i Hope), I would like to be able to filter this out. I can define tags within the content collection with a title and reference to documentation, and easily tag portfolio project (and maybe articles later) with technology I've used on a project.

My Portfolio schema - the `reference('tags)` line is referencing the directory within `content` called `tags`.

```TypeScript
const projectCollection = defineCollection({
  type: 'data',
  schema: z.object({
    source: z.string(),
    description: z.string(),
    title: z.string(),
    year: z.string(),
    tags: z.array(reference('tags')).default([]),
    displayOnHome: z.boolean()
  })
});

```

This makes it pretty easy to add/remove tags on portfolios like so.

```json
{
  "source": "https://github.com/luke-hays/portfolio-site",
  "description": "Source code for this website.",
  "title": "lukehays.com",
  "year": "2024",
  "tags": ["astro", "nanostores", "tailwindcss"],
  "displayOnHome": true
}
```

The displayOnHome value is also nice because I can easily pick and choose what to render on the front page AND using a css grid, it makes it pretty easy to make a nice layout of portfolio cards.

## Islands

I did not use this feature. Yyou can section out parts of your application to use different frameworks. The thought of shoving a mix of angular, react, vue, svelte, a custom framework, and so on into a massive complex codebase and maintaining it makes me laugh but this features i apparently "the secret to Astro’s fast-by-default performance story". Maybe worth a deeper dive but idk it feels hard enough remembering both the the underlying usage of HTML/CSS/JS and how one other framework builds on those, so adding in more sounds like Chaos. But hell, there's gotta be a use for it.

## Setup

Dumb set up with Cloudflare pages. Theres a bunch of documentation on all different cloud providers if you don't feel like managing this yourself. Its probably pretty simple to set up on server but I felt lazy and for this site I really just wanted to get up and running while only thinking about the frontend.

## Final Thoughts

Its a cool framework. May explore its CMS capabilities in detail later. For now, I've been reinforncing my understanding the core concepts underlying all these frameworks.