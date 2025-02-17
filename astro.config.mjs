import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
    base: "astrofolio/",
    integrations: [react(), mdx()],
    prefetch: {
        prefetchAll: true,
    },
    image: {
        remotePatterns: [{ protocol: "https" }],
    },
});
