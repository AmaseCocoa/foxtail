// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import remarkLinkCard from 'remark-link-card-plus';

import mdx from '@astrojs/mdx';

import tailwindcss from '@tailwindcss/vite';

import partytown from "@astrojs/partytown";

import expressiveCode from "astro-expressive-code";

import sitemap from "@astrojs/sitemap";

import playformCompress from "@playform/compress";

import compressor from "astro-compressor";

// https://astro.build/config
export default defineConfig({
  site: 'https://amase.cc',
  integrations: [expressiveCode(), react(), mdx(), partytown(), sitemap({
    filter: (page) => page !== 'https://amase.cc/search/',
  }), playformCompress(), compressor()],

  vite: {
    plugins: [tailwindcss()]
  },
  markdown: {
    rehypePlugins: [
      "rehype-slug",
      ["rehype-toc", { headings: ["h2", "h3"] }],
    ],
  },
});