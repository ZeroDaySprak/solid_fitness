# ASSET PIPELINE — how to get the photoreal look of the reference

The reference visuals are AI-rendered, not code. Code alone cannot match them. The fastest path:

1. Generate **7 keyframes** (one per scene) with an image model (Nano Banana / Imagen / Midjourney).
2. Animate keyframe → keyframe as a continuous camera move with a video model (Veo / Kling / Runway first-last-frame).
3. Export to frames and drop them in the repo.

```bash
# 24fps, 1920 wide, ~180 frames total, webp
ffmpeg -i flythrough.mp4 -vf "fps=24,scale=1920:-2" -frames:v 180 -c:v libwebp -quality 78 public/assets/sequence/frame_%04d.webp
```

Use the **studio's real photos** as style/layout references wherever possible so it reads as *this* gym (get real photos of the Solid Fitness floor, or pull the best from the old site's gallery). Until the real gym is photographed, generated rooms are placeholders and must be labelled as concept renders.

## shared style block (prepend to every prompt)
> photoreal premium commercial gym interior, dark charcoal concrete walls, light oak wood lifting platform, black matte equipment, long linear white LED ceiling strips, soft volumetric haze, warm accent bounce light, wide 24mm lens, cinematic grade, shallow depth of field, no people unless stated, no text, no logos, 16:9, 4k

## keyframes
1. **arrival** — "{style}, eye-level wide shot from the gym entrance looking down the central aisle, polished rubber floor reflections, racks and benches receding to a far mirrored wall, empty space on the far wall for headline"
2. **identity** — "{style}, camera mid-aisle, dumbbell rack on left, plate trees on right, open air in the centre, light streaks on floor"
3. **purpose** — "{style}, camera pitched up toward ceiling, grid of glowing LED strips converging in perspective, steel trusses, dark ceiling"
4. **performance zone** — "{style}, power rack with loaded barbell and oak wooden lifting platform centre-frame, bench in foreground, large windows soft daylight right"
5. **memberships** — "{style}, wide side view of the training floor, cardio row on right, glass partitions, long empty depth for floating cards"
6. **dollhouse** — "dark architectural cutaway of the same gym seen from directly above, isometric-leaning, roofless, walls cut at 30cm, equipment zones clearly laid out, warm edge lighting along baseboards, moody charcoal, premium visualization render, no text"
7. **trainer portraits (x3, for the glass cards)** — "{style}, studio portrait of a fit {man/woman} trainer, 3/4 view, dark background, rim light, neutral confident expression, upper body, no text". **Replace with real trainer photos, properly cropped, as soon as available.**

## video prompts (first/last frame mode)
- "slow continuous dolly forward through the gym, steady, no cuts, slight handheld-free gimbal feel, 8 seconds" for 1→2→3→4→5
- "camera rises and rotates smoothly to a top-down view while walls and ceiling dissolve, 6 seconds" for 5→6

## fallback
No assets yet? Set `hero.mode = "procedural"` in `site.config.ts` and the R3F-built gym renders instead.
