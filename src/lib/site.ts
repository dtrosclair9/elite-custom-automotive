// Shared site config. Keep the canonical host in ONE place.
export const BASE_URL = 'https://elitecustomauto.co'

// Shared Open Graph image. NOTE: do NOT add `as const` — Next.js needs a
// mutable object shape here, and pages that export their own `openGraph`
// (title/description/url) do NOT inherit `openGraph.images` from the root
// layout, so every such page must spread `images: [ogImage]` explicitly.
export const ogImage = {
  url: '/images/og-image.jpg',
  width: 1200,
  height: 630,
  alt: 'Elite Custom Automotive — Lift Kits, Engine & Transmission, Custom Wheels in Lockport, LA',
}
