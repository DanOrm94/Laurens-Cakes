import { defineConfig } from 'astro/config';

// Static output deploys cleanly to Cloudflare Pages.
// Set `site` to your production domain once it's live for correct canonical URLs/sitemaps.
export default defineConfig({
  site: 'https://laurens-cakes.pages.dev',
  output: 'static',
});
