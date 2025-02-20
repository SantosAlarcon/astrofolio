import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import mdx from "@astrojs/mdx";
import markdownIntegration from "@astropub/md";

// https://astro.build/config
export default defineConfig({
    base: "astrofolio/",
    integrations: [react(), mdx(), markdownIntegration()],
    prefetch: {
        prefetchAll: true,
    },
    image: {
        remotePatterns: [{ protocol: "https" }],
    },
    markdown: {
        remarkPlugins: [],
        rehypePlugins: []
    },
});
