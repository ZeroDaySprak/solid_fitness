# assets to drop in here

```
public/assets/
├── brand/
│   ├── logo.png            # solid fitness logo (old site had none readable)
│   └── logo.svg            # optional vector
├── trainers/
│   ├── trainer-1.jpg       # if any
│   └── trainer-2.jpg
├── sequence/
│   ├── frame_0001.webp     # photoreal fly-through, see docs/ASSET_PROMPTS.md
│   └── ...frame_0180.webp
├── gym/                    # real photos of the gym (any angle), used as references + gallery
├── supplements/            # product shots
└── og.jpg                  # 1200x630 social image
```

no `sequence/` yet? set `hero.mode = "procedural"` in `src/config/site.config.ts`.
