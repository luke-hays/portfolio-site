import { atom } from 'nanostores';

import {getCollection} from "astro:content";

const blogPosts = await getCollection('blog')

const sortedPosts = []

blogPosts.forEach(post => {
  const postData ={
    slug: post.slug,
    title: post.data.title,
    publishDate: post.data.publishDate,
    render: post.render
  }
  
  sortedPosts.push(postData)
})

sortedPosts.sort((a, b) => {
  if (a.publishDate < b.publishDate)
    return 1
  if (a.publishDate > b.publishDate)
    return -1
  return 0
})


export const posts = atom(sortedPosts);