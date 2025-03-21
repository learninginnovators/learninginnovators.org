import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";

import starlight from "@astrojs/starlight";

import expressiveCode from "astro-expressive-code";
import starlightLinksValidator from "starlight-links-validator";

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
    title: 'Learning Innovators',
    plugins: [
      starlightLinksValidator({
        errorOnRelativeLinks: true,
      }),
    ],
    components: {
      // Override the default `SocialIcons` component.
      // Header: '@/components/global/Navigation.astro',
      // Footer: '@/components/global/Footer.astro',
    },
    sidebar: [
      {
        label: "OnTrack",
        items: [
          {
            label: "Introduction",
            link: "docs/ontrack/00-intro",
          },
          {
            label: "Unit Administration",
            collapsed: true,
            autogenerate: {
              directory:
                "docs/ontrack/unit-admin",
              collapsed: true,
            },
          },
        ],
      },
    ],
  })]
});