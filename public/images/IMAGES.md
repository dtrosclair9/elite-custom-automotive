# Elite Custom Automotive — Images Needed

Drop all images into this folder. Filenames must match what's referenced in the code.

## Logo & Branding

| Filename | Used in | Notes |
|---|---|---|
| `logo.png` | Header, Footer | The shield logo Colin sent — transparent PNG preferred |

Favicons (auto-wired by Next.js when these files exist in `src/app/`):
- `src/app/icon.png` — 32×32, browser tab favicon
- `src/app/apple-icon.png` — 180×180, iOS home screen

Generate both from the logo:
```bash
sips -s format png -z 32 32 public/images/logo.png --out src/app/icon.png
sips -s format png -z 180 180 public/images/logo.png --out src/app/apple-icon.png
```

## Hero

| Filename | Used in | Notes |
|---|---|---|
| `/videos/hero.mp4` | Homepage hero video bg | The Higgsfield video — drop in `public/videos/` |
| `hero-poster.jpg` | Homepage hero fallback | First frame of video or best lifted truck shot, landscape |
| `og-image.jpg` | Social sharing meta | 1200×630, lifted truck preferred |

## Service Pages (referenced in `src/app/services/[slug]/content.ts`)

| Filename | Used in |
|---|---|
| `service-lift-kits.jpg` | Lift kit landing pages hero |
| `service-engine.jpg` | Engine/trans landing pages hero |
| `service-wheels.jpg` | Custom wheels landing pages hero |

## About + Shop

| Filename | Used in |
|---|---|
| `colin-portrait.jpg` | About page — Colin or shop photo |
| `shop-interior.jpg` | Homepage about snippet |

## Gallery (referenced in `src/app/gallery/page.tsx` and homepage)

| Filename | Category |
|---|---|
| `build-1.jpg` | Lifted Trucks |
| `build-2.jpg` | Wheels & Tires |
| `build-3.jpg` | Lift Kits |
| `build-4.jpg` | Engine Work |
| `build-5.jpg` | Lifted Trucks |
| `build-6.jpg` | Lifted Trucks |
| `build-7.jpg` | Wheels & Tires |
| `build-8.jpg` | Lift Kits |

## Notes

- JPG for photos, PNG for logo
- Resize photos to max 1920px wide before adding (sips command works well)
- Use descriptive filenames — they don't show publicly but keep things organized
- If image dimensions are over 2000px in either direction per global CLAUDE.md, resize with sips before adding
