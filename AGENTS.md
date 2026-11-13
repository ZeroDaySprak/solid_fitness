# AGENTS.md — persistent rules for Antigravity / any coding agent

## project
Solid Fitness, Purasawalkam (Purasaiwakkam), Chennai. Replaces the existing site solidfitnesspurasawalkam.com. Cinematic scroll-driven 3D marketing site + client portal + admin panel. Next.js 15, TypeScript strict, Tailwind v4, R3F, GSAP + ScrollTrigger, Lenis, Zustand.

## hard rules
- Never invent business facts (phone, prices, timings, address, names, testimonials). Use `src/config/site.config.ts`. Unknown = `TODO` + styled placeholder.
- All UI copy lowercase unless it is a proper noun or legal text. Short. Confident. No "unleash / elevate / world-class / journey".
- One accent colour, token `--accent`, used only on CTAs and key words.
- Motion is slow and heavy: ease `expo.out` / `power3.inOut`, durations 0.9–1.6s. No bounce, no overshoot.
- Everything respects `prefers-reduced-motion`.
- Mobile gets a lighter hero. Never ship the full WebGL fly-through to low-tier GPUs.
- Dispose three.js geometries / materials / textures on unmount.
- No `any`. No unused deps. No console logs in commits.
- Data access only through `src/lib/data/*` repository interfaces so the Python backend can replace mocks later.

## trainer / gym photos
Any trainer or member photos supplied are likely casual phone shots. Present them tastefully:
- crop tight to portrait, remove phone/mirror edge via crop or soft mask
- grade: slightly desaturated, contrasty, warm shadows, film grain
- grayscale → colour on hover, subtle spotlight vignette
- never show a raw casual photo full-bleed
- no trainer is named on the old site: names stay `TODO` until supplied

## brand
Logo: not available from the old site (text wordmark "Solid Fitness" only). Until a logo is supplied in `public/assets/brand/`, use a clean lowercase wordmark. Brand red `#c22d2d` is taken from the existing site.

## definition of done per feature
1. matches `docs/STORYBOARD.md`
2. 60fps on mid laptop
3. keyboard + screen-reader usable
4. screenshot taken in browser agent and checked
5. `pnpm build` clean
