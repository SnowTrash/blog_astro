import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import solidJs from "@astrojs/solid-js";
import tailwind from "@astrojs/tailwind";
import { SITE_URL } from "./src/consts.ts";

// para agregar el uso de vercel
import vercel from '@astrojs/vercel/serverless';

 
// https://astro.build/config
export default defineConfig({
  site: SITE_URL,
  output: 'server',
  adapter: vercel(),
  integrations: [
    mdx(),
    sitemap(),
    
    solidJs({
      include: "**.tsx",
    }),
    tailwind(),
  ],
});
