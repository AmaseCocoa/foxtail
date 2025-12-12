// @ts-check
import { defineConfig } from 'astro/config';

import rehypeExternalLinks from 'rehype-external-links';

import mdx from '@astrojs/mdx';

import tailwindcss from '@tailwindcss/vite';

import partytown from "@astrojs/partytown";

import expressiveCode from "astro-expressive-code";

import sitemap from "@astrojs/sitemap";

import playformCompress from "@playform/compress";

import compressor from "astro-compressor";

import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  site: 'https://amase.cc',
  integrations: [expressiveCode(), mdx(), partytown(), sitemap({
    filter: (page) => page !== 'https://amase.cc/search/',
  }), playformCompress(), compressor(), icon()],
  cacheDir: './cache',
  vite: {
    plugins: [tailwindcss()]
  },
  markdown: {
    rehypePlugins: [
      [rehypeExternalLinks, {target: '_blank', rel: ['noopener', 'noreferrer']}]
    ],
  },
});