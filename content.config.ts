import { defineCollection, z } from '@nuxt/content'

const project = defineCollection({
  type: 'page',
  source: 'projects/*.md',
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    description: z.string(),
    longDescription: z.string(),
    thumbnail: z.string(),
    images: z.array(z.string()).optional(),
    tech: z.array(z.string()),
    category: z.string(),
    liveUrl: z.string().optional(),
    githubUrl: z.string().optional(),
    featured: z.boolean(),
    date: z.string(),
  }),
})

const blog = defineCollection({
  type: 'page',
  source: 'blog/*.md',
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    description: z.string(),
    cover: z.string(),
    tags: z.array(z.string()),
    date: z.string(),
    readTime: z.number(),
    author: z.string(),
  }),
})

export const collections = { projects: project, blog }
