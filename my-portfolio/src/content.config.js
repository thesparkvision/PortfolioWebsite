import { defineCollection } from 'astro:content'
import { glob } from 'astro/loaders'
import { z } from 'astro/zod'

const blog = defineCollection({
  loader: glob({ base: './src/content/blog', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishedAt: z.coerce.date(),
    slug: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
    readTimeInMinutes: z.number().int().positive().optional(),
    originalSource: z
      .object({
        label: z.string(),
        url: z.string().url(),
      })
      .optional(),
  }),
})

export const collections = { blog }
