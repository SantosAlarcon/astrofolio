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

const post = defineCollection({
    loader: glob({ pattern: "**/*.mdx", base: "./src/content/blog" }),
    schema: z.object({
        title: z.string(),
        description: z.string(),
        cover: z.string(),
        publishedDate: z.date(),
        updatedDate: z.date(),
        tags: z.string().array()
    }),
});

const testimonial = defineCollection({
    loader: glob({ pattern: "**/*.mdx", base: "./src/content/testimonials" }),
    schema: z.object({
        name: z.string(),
        title: z.string(),
        image: z.string()
    }),
});

export const collections = { work, post, testimonial };
