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
        publishedDate: z.string(),
        updatedDate: z.string(),
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
const education = defineCollection({
    loader: glob({ pattern: "**/*.mdx", base: "./src/content/education" }),
    schema: z.object({
        institution: z.string(),
        degree: z.string(),
        major: z.string(),
        startDate: z.date(),
        endDate: z.date(),
        image: z.string().optional(),
        relevantSkills: z.string().array(),
    }),
});

export const collections = { work, post, testimonial, education };
