import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const work = defineCollection({
	loader: glob({ pattern: "**/*.mdx", base: "./src/content/work" }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		image: z.string(),
        liveSite: z.string().optional(),
        githubRepo: z.string(),
        techStack: z.string().array(),
	}),
});

export const collections = { work };
