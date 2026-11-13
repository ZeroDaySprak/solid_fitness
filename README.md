# solid fitness

Next.js foundation for the Solid Fitness public website, member portal, and staff area. Business details live in one config file and page data is accessed through repository interfaces so a future Python API can replace the mock implementation.

## run locally

```bash
pnpm install
pnpm dev
```

Open `http://localhost:3000`. Build for production with `pnpm build`, then serve the output with `pnpm start`.

## project structure

```text
src/
  app/                 App Router pages and shared styles
    admin/             staff area placeholder
    portal/            member area placeholder
  config/              business facts and brand configuration
  lib/data/            repository interfaces and mock implementation
public/assets/         brand, gym, trainer, supplement, and sequence assets
docs/                  storyboard and visual asset pipeline
```

## before launch

- Replace every `TODO` in `src/config/site.config.ts` with owner-confirmed details.
- Add approved brand and gym photography under `public/assets/`.
- Implement secure authentication and backend repositories before enabling portal or admin data.
- Follow `docs/STORYBOARD.md` for the cinematic hero and section design.

## stack

Next.js 15 · TypeScript strict · Tailwind CSS v4 · React 19
