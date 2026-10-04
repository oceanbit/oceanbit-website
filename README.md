# OceanBit website

A static Astro site hosted on Cloudflare Pages, with Google Analytics 4.

## Development

Use the Node.js version in `.node-version` and the pnpm version in `package.json`.

```sh
npm install --global pnpm@12.4.1
pnpm install --frozen-lockfile
pnpm dev
```

## Google Analytics

Set `PUBLIC_GOOGLE_ANALYTICS_ID` to the GA4 web stream measurement ID at **build time**. The production stream is `G-QPR56LYC6D`.

For a local production build, copy `.env.example` to `.env.production` and fill in the ID. Development never loads analytics, and production builds without an ID omit the Google scripts. GA4's Google tag sends page views on each full-page navigation. Enable outbound-click tracking in the stream's Enhanced Measurement settings to replace Plausible's outbound-link tracking.

On Cloudflare Pages, set the ID in **Settings → Variables and Secrets** for the **Production** environment. Leave it unset for **Preview** so preview deployments don't send events to the production stream. Preview builds also run Astro in production mode. Changing the ID requires a rebuild; this is a static site, so runtime bindings in `wrangler.jsonc` cannot configure analytics.

See [Google's tag installation and verification guide](https://developers.google.com/tag-platform/gtagjs/install).

## Cloudflare Pages

Connect `oceanbit/oceanbit-website` through **Workers & Pages → Create application → Pages → Import an existing Git repository**. If prompted, authorize the Cloudflare Workers and Pages GitHub app for this repository.

| Setting                | Value              |
| ---------------------- | ------------------ |
| Project name           | `oceanbit-website` |
| Production branch      | `main`             |
| Framework preset       | Astro              |
| Root directory         | Repository root    |
| Build command          | `pnpm run build`   |
| Build output directory | `dist`             |
| Build system           | v3                 |

Set `PNPM_VERSION=12.4.1` in both Production and Preview build environments. The `.node-version` file pins Node.js to `26.7.0`. Set `PUBLIC_GOOGLE_ANALYTICS_ID=G-QPR56LYC6D` in Production only.

The site uses Astro's static output and needs no Cloudflare adapter or Pages Functions. `wrangler.jsonc` defines the Pages project and output directory. `src/pages/404.astro` generates `dist/404.html`, giving unknown URLs a real 404 response instead of Pages' default SPA fallback.

A Git-integrated project automatically deploys `main` and creates branch previews. Create it through Git integration first; a Direct Upload project cannot later be converted to Git integration.

Before switching hosting, verify the Pages deployment's homepage, `/contact`, static assets, and an unknown URL. Associate `oceanbit.dev` under **Custom domains** in the Pages project, then update its website DNS records to the Pages hostname. Verify HTTPS and Google Analytics Realtime before disconnecting the old Vercel project.

See Cloudflare's [Astro guide](https://developers.cloudflare.com/pages/framework-guides/deploy-an-astro-site/), [build environment documentation](https://developers.cloudflare.com/pages/configuration/build-image/), and [custom domain documentation](https://developers.cloudflare.com/pages/configuration/custom-domains/).

## Commands

| Command              | Action                                                       |
| -------------------- | ------------------------------------------------------------ |
| `pnpm dev`           | Start Astro's development server                             |
| `pnpm build`         | Run Astro checks and build into `dist/`                      |
| `pnpm preview`       | Preview the Astro production build                           |
| `pnpm preview:pages` | Serve the existing build with the local Pages runtime        |
| `pnpm run deploy`    | Build and upload to an existing Pages project using Wrangler |
| `pnpm format`        | Format project files                                         |

For manual uploads, authenticate with `pnpm exec wrangler login` first. `pnpm run deploy` uses the current Git branch: `main` targets Production, while other branches create Preview deployments. For previews, ensure `PUBLIC_GOOGLE_ANALYTICS_ID` is unset in your build environment (including local `.env` files).
