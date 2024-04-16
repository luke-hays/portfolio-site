// 1. Import utilities from `astro:content`
import { z, defineCollection, reference } from 'astro:content';

// 2. Define your collection(s)
const blogCollection = defineCollection({ 
  type: 'content',
  schema: z.object({ 
    title: z.string(),
    publishDate: z.string().transform(str => {
      const date = new Date(str);
      return date;
    })
   })
 });

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

// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
  'blog': blogCollection,
  'projects': projectCollection
};