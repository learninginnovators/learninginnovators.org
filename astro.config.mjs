import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";

import starlight from "@astrojs/starlight";

import expressiveCode from "astro-expressive-code";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  markdown: {
    drafts: true,
    shikiConfig: {
      theme: "css-variables"
    }
  },
  shikiConfig: {
    wrap: true,
    skipInline: false,
    drafts: true
  },
  site: 'https://learninginnovators.org',
  integrations: [sitemap(), expressiveCode(), mdx(), starlight({
    title: 'OnTrack Documentation',
    components: {
      // Override the default `SocialIcons` component.
      // Header: '@/components/global/Navigation.astro',
      // Footer: '@/components/global/Footer.astro',
    },
  })]
});