// Import utilities from `astro:content`
import { defineCollection, z } from 'astro:content';

// Define a schema for the blog collection
const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.string(),
    tags: z.array(z.string()),
    featured: z.boolean().default(false)
  })
});

// Export a single `collections` object to register your collection(s)
export const collections = {
  'blog': blogCollection,
};