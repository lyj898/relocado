import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const hub = z.enum(['leaving', 'arriving', 'hr']);

// One Markdown file per guide. The file name is the URL slug: /{hub path}/{file name}/.
const guides = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/guides' }),
  schema: z.object({
    title: z.string().max(70),
    metaTitle: z.string().max(60),
    description: z.string().min(70).max(155),
    hub,
    alsoIn: z.array(hub).default([]),
    order: z.number().int(),
    updated: z.coerce.date(),
    summary: z.string().max(320),
    // Every guide rests on sources a reader can check. A guide with none does not build.
    sources: z.array(z.object({ label: z.string(), url: z.url() })).min(1),
    faqs: z.array(z.object({ q: z.string(), a: z.string() })).default([]),
  }),
});

export const collections = { guides };
