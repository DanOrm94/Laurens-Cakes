# Laurens Cakes

A fast, static marketing site for **Laurens Cakes**, built with [Astro](https://astro.build) and deployed on **Cloudflare Pages**.

Instagram: [@laurenscakess](https://www.instagram.com/laurenscakess/)

## Pages

- `/` — Home (hero, specialties, Instagram call-to-action)
- `/gallery` — Cake gallery (placeholder tiles, ready for real photos)
- `/about` — About the baker
- `/contact` — Enquiry form + contact details

## Develop locally

Requires Node 18+ (tested on Node 24).

```bash
npm install
npm run dev      # http://localhost:4321
```

## Build

```bash
npm run build    # outputs static site to ./dist
npm run preview  # preview the production build locally
```

## Deploy to Cloudflare Pages

### Option A — Git integration (recommended)

1. Push this project to GitHub (repo: `DanOrm94/Laurens-Cakes`).
2. In the Cloudflare dashboard: **Workers & Pages → Create → Pages → Connect to Git**.
3. Select the repository and set:
   - **Framework preset:** Astro
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
4. Deploy. Every push to the default branch auto-deploys.

> If this project lives in a subfolder of the repo, set the **Root directory** to that folder (e.g. `laurens-cakes`) in the Pages build settings.

### Option B — Direct upload with Wrangler

```bash
npm run build
npx wrangler pages deploy dist --project-name=laurens-cakes
```

## Customising

- **Real photos:** drop images into `public/images/` and swap the emoji tiles in
  `src/pages/gallery.astro` / `src/pages/index.astro` for `<img src="/images/your-cake.jpg" alt="..." />`.
- **Contact form:** the form in `src/pages/contact.astro` posts to Formspree. Create a free
  form at [formspree.io](https://formspree.io) and replace `YOUR_FORM_ID`. Update the email too.
- **Domain:** once a custom domain is attached in Cloudflare Pages, update `site` in `astro.config.mjs`.
- **Colours/fonts:** tweak the CSS variables at the top of `src/styles/global.css`.
