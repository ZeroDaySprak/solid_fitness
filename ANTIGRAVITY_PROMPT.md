# MASTER PROMPT — paste this whole file into Antigravity (Planning mode, Gemini 3 Pro / Claude)

---

## ROLE

You are a principal creative technologist who has shipped Awwwards-winning WebGL sites. You are building a **scroll-driven, cinematic 3D website for a real gym: Solid Fitness, Purasawalkam (Purasaiwakkam), Chennai — an existing gym whose current site (solidfitnesspurasawalkam.com) is being fully replaced**. This is a production build that goes to GitHub and Vercel. Not a mockup, not a template, not a "basic portfolio".

Read `AGENTS.md`, `docs/STORYBOARD.md`, `docs/ASSET_PROMPTS.md`, `src/config/site.config.ts` and `public/assets/README.md` before writing any code. They are the source of truth. If this prompt and those files disagree, the files win.

## THE REFERENCE (match this "same to same")

The reference is a ~10s screen recording of a laptop showing a gym site called "APEX ONE / PURPOSE". Its defining traits:

1. **The website IS a 3D gym.** Fullscreen photoreal gym interior. Scrolling does not scroll a page, it **flies the camera through the gym**: down the main floor, past racks and benches, under glowing LED ceiling strips, over a wooden lifting platform.
2. **Giant 3D-feeling headline type floats inside the space**, reads as if mounted on the ceiling and walls, gets passed/overtaken by the camera as you move. Words: "your gym deserves more." → "solid fitness" → "train with purpose." → "performance zone".
3. **Frosted-glass UI cards hover in the scene.** A "performance zone" card with a filled pill CTA (explore) and an outlined ghost pill. Then three tilted glass membership cards side by side (CORE / PRO / ELITE), each with a trainer portrait, 2 lines of copy, and a pill CTA ("start your free trial"). Cards parallax at different depths and tilt toward the cursor.
4. **Dramatic camera pivot at the end:** the walkthrough resolves into a **top-down / isometric "dollhouse" cutaway of the whole gym floor plan**, dark and moody, with the big line "train beyond limits." and a CTA "start free trial", arrows left/right, and a thumbnail strip of the zones at the bottom.
5. **Chrome:** slim transparent navbar (logo left, 5 links, login, search icon, filled pill CTA far right), pagination dots bottom-centre (one per scene), small circular floating action button bottom-right (whatsapp / chat).
6. **Palette:** near-black charcoal, warm concrete, light oak wood, glowing white LED linear lights, soft warm bloom. One accent used ONLY on CTAs and key words.
7. **Motion:** slow, heavy, expensive. Long eases, inertia, depth-of-field blur on near/far planes, subtle film grain, volumetric light glow. Nothing bouncy, nothing snappy.

Recreate all seven. Do not substitute a generic hero + card grid.

## NON-NEGOTIABLE STACK

- Next.js 15 (App Router) + TypeScript (strict) + Tailwind CSS v4
- three + @react-three/fiber + @react-three/drei + @react-three/postprocessing
- GSAP + ScrollTrigger, Lenis (smooth scroll, synced to GSAP ticker)
- Zustand for scene state (active scene index, cursor, quality tier)
- Fonts via `next/font`: a heavy grotesk for display (e.g. "Anton" or "Archivo Black" or "Big Shoulders Display"), "Inter" or "Geist" for UI. Lowercase headlines.
- Deploy target: Vercel. No server dependencies in phase 1.

## THE HERO ENGINE (the hard part — build it exactly like this)

One pinned fullscreen `<canvas>` for the whole home page. Total scroll length ≈ 700vh. A single master GSAP timeline bound to Lenis scroll progress (0 → 1) drives everything. Do **not** use CSS scroll-snap.

Build the hero with **two interchangeable render modes** behind one `HeroWorld` interface, switched by `siteConfig.hero.mode`:

**Mode A — `"sequence"` (photoreal, preferred, matches the reference)**
- Load a pre-rendered image sequence from `public/assets/sequence/` (`frame_0001.webp` … `frame_0180.webp`, 1920×1080, ~60–90 KB each).
- Draw to a canvas, scrubbed by scroll progress with eased interpolation (lerp 0.08) so it never jumps. Preload in priority order (first 12 frames immediately, rest idle in chunks) with a progress loader.
- On top of the sequence, render R3F layers: floating 3D text meshes (troika-three-text or drei `Text3D`) with real depth, glass panels (`MeshTransmissionMaterial`), light-streak particles, dust. Parallax the overlay vs. the sequence by 2–4% so it feels volumetric.

**Mode B — `"procedural"` (fallback, used when no sequence exists, and on low-end devices)**
- Build a stylised gym entirely in R3F from primitives and instancing: oak-wood lifting platform, rubber floor, 4 power racks, benches, dumbbell rack with instanced dumbbells, plate trees, cable stations, treadmills row, concrete columns, mirrored wall, glass partitions, ceiling grid with emissive LED strips.
- Camera rides a `CatmullRomCurve3` keyed to scroll; `lookAt` also rides a curve. Add depth of field, bloom, vignette, subtle chromatic aberration, film grain, volumetric light cones.
- Final beat: camera lifts and rotates to a top-down orthographic-ish view; walls and ceiling fade out (opacity + clipping) revealing the floor-plan dollhouse.

Default `mode` to `"sequence"` if `public/assets/sequence/frame_0001.webp` exists, else `"procedural"`. Both must look premium. Never ship a broken state.

## SCENE MAP (scroll beats, details in docs/STORYBOARD.md)

| # | scroll | scene | on-screen |
|---|--------|-------|-----------|
| 0 | loader | boot | logo mark draws in, progress counter, curtain lift |
| 1 | 0–14% | arrival | "your gym deserves more." giant type on far wall, camera starts wide at the door |
| 2 | 14–30% | identity | "solid fitness" type floats mid-air, camera passes through it |
| 3 | 30–46% | purpose | "train with purpose." mounted on ceiling grid, camera tilts up to LED strips |
| 4 | 46–60% | performance zone | racks + platform, glass card with copy + `explore` + ghost `see equipment` |
| 5 | 60–78% | memberships | 3 tilted glass cards (core / pro / elite), cursor tilt, hover lifts and lights up the tier |
| 6 | 78–100% | dollhouse | pivot to top-down floor plan, "train beyond limits.", `start free trial`, zone thumbnail strip + arrows |

Dots bottom-centre reflect and control scenes (click = smooth scroll to that beat).

## BELOW THE HERO (normal scroll, same visual language, still dark and cinematic)

1. **trainers** — trainers shown tastefully (see AGENTS.md rules on photos: grayscale-to-colour reveal on hover, cropped portrait, no mirror-selfie vibe, subtle spotlight + grain). Name, speciality, years.
2. **transformations** — horizontal pinned scrub gallery, before/after slider, image-expansion on scroll.
3. **fuel (supplements)** — product grid with 3D tilt cards, add-to-enquiry (no payments in phase 1), WhatsApp deep-link.
4. **membership** — plans table with the same glass language, monthly / quarterly / yearly toggle.
5. **find us** — Purasawalkam location, map embed (lazy), opening hours, parking note, big click-to-call + whatsapp.
6. **footer** — oversized wordmark, socials, hours. Huge lowercase `solid fitness` that reveals on scroll.

## PHASE 2 (build the UI now with mock data, wire backend later)

- `/portal` client portal: login screen, dashboard with membership status, current plan, days left, bill balance / amount due, payment history, attendance heatmap, trainer assigned.
- `/admin` admin panel: members table (search, filter, status chips), add/edit member drawer, billing overview, dues list, supplement stock, trainer roster, simple KPIs. Dark, dense, premium. Same design tokens as the public site.
- Put all data access behind `src/lib/data/*.ts` repository interfaces returning typed mock data, so the Python/FastAPI automation backend can replace them later without touching UI.

## INTERACTION DETAILS THAT SELL IT

- Custom cursor: small dot + lagging ring, morphs to "drag" / "explore" / "open" labels over interactive things, hidden on touch.
- Magnetic buttons (8–12px pull), pill CTAs with a light-sweep on hover.
- Glass cards: backdrop-blur, 1px inner border gradient, noise overlay, specular highlight that follows the cursor.
- Text reveal: line masks, translateY 110% → 0, stagger 0.06, ease `expo.out`, duration ≥ 1.1s.
- Scene transitions: cross-dissolve + 2–3px focus pull, never a hard cut.
- Subtle camera sway tied to cursor (±1.2°), damped.
- Audio: none by default. Optional tiny mute-toggled ambient loop is OK if it is off by default.

## PERFORMANCE, QUALITY, A11Y (hard requirements)

- 60fps on a mid laptop; adaptive quality tier (detect GPU via `detect-gpu`, drop postprocessing, DPR cap 1.5 → 1.0).
- Mobile: do not ship the full WebGL fly-through. Use a lighter vertical version: sequence at 960×540 or a looping muted video + the same glass cards stacked, still scroll-driven.
- `prefers-reduced-motion`: replace the fly-through with a static, elegantly composed stack of the key frames + fade-ins.
- Lighthouse: Performance ≥ 85 desktop, Accessibility ≥ 95, SEO ≥ 95. Real semantic HTML underneath the canvas (h1, nav, sections), keyboard focus rings, alt text, aria-labels on dots/arrows, metadata, OG image, JSON-LD `HealthClub` schema.
- No layout shift. Lazy-load everything below the hero. Dispose Three resources properly.

## DESIGN TOKENS

```
--bg:        #0a0a0b
--surface:   #121214
--glass:     rgba(255,255,255,0.06)
--line:      rgba(255,255,255,0.12)
--text:      #f4f2ee
--muted:     #9a978f
--accent:    #c22d2d   /* solid fitness brand red, taken from their current site. reference used champagne gold #e8c98a — keep this a single token */
--wood:      #c9a36a
```
Radius 999px on pills, 20–28px on glass cards. Display type huge (clamp 56px → 200px), tight tracking, lowercase.

## CONTENT

This is a **redesign of an existing live site**. Keep its real information architecture and content, upgraded: Home, About Us (our story), Services (muscle gain programs, weight loss programs, cross fit, strength training, cardio vascular training), Updates, Gallery, Subscription Plans, Contact, plus newsletter signup and a book/enquire flow. Each service gets its own scene or card inside the 3D experience, not a boring list. Gym mission line from the old site: "we at solid fitness are dedicated to helping our members achieve their fitness goals." — rewrite in lowercase confident voice, same meaning.

All real data lives in `src/config/site.config.ts`. Use it everywhere. **Real values are already filled in config (address, phone, whatsapp, email, services). Never invent phone numbers, prices, addresses, timings, trainer names or testimonials.** Where a value is `TODO`, render a clearly styled placeholder and list every TODO in a final report. Copy tone: confident, short, lowercase, no corporate filler.

## OUTPUT REQUIRED

1. Full working Next.js project in this repo, `pnpm dev` runs clean, `pnpm build` passes with zero type errors.
2. `README.md` updated with setup, scripts, how to swap hero modes, how to add the image sequence, deploy-to-Vercel steps.
3. Conventional commits, small and logical. Branch `main` is deployable at every commit.
4. A `docs/QA.md` checklist you actually ran: Chrome, Safari, Firefox, iPhone Safari, Android Chrome, reduced-motion, slow-3G, 4x CPU throttle.
5. Record a short walkthrough (browser agent) of scenes 1 → 6 and attach it as an Antigravity artifact.

## WORKFLOW

1. Plan first. Show me the architecture, file tree and the scroll timeline spec. Wait for no approval — proceed after posting the plan.
2. Build in this order: tokens + layout + Lenis/GSAP bridge → loader → hero Mode B (so something is always visible) → hero Mode A (sequence) → glass cards + scenes → dollhouse pivot → below-hero sections → portal → admin → polish → perf pass → QA.
3. After each stage, run the app in the browser agent, screenshot, compare against the STORYBOARD, fix what's off. Do not move on while it looks "fine". It must look **expensive**.
4. End with a punch list: what's done, what's TODO (assets, real content), what to do next.

## DEFINITION OF DONE

A stranger watches a 10-second screen recording of the site and says "that's the video" — same fly-through, floating type, glass membership cards, dollhouse finish — but it's Solid Fitness, in Purasawalkam, and it actually works.
