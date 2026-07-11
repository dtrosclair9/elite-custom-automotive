'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const photos = [
  // Lifted Trucks — finished builds
  { src: '/images/truck-red-chevy-ceramic-shop.jpg', alt: 'Ceramic-coated red Chevrolet Silverado 2500HD Z71 inside the hexagon-lit Elite Custom Automotive shop in Lockport, LA', category: 'Lifted Trucks' },
  { src: '/images/truck-grey-f250-shop.jpg', alt: 'Lifted grey Ford F-250 Super Duty on custom black wheels inside the Elite Custom Automotive hexagon-lit shop in Lockport, LA', category: 'Lifted Trucks' },
  { src: '/images/truck-bronze-f250-fx4.jpg', alt: 'Lifted bronze Ford F-250 Super Duty FX4 with mud-terrain tires built by Elite Custom Automotive in Lockport, LA', category: 'Lifted Trucks' },
  { src: '/images/truck-green-chevy-2500hd.jpg', alt: 'Lifted dark green Chevrolet Silverado 2500HD Z71 on custom black wheels outside the Elite Custom Automotive shop in Lockport, LA', category: 'Lifted Trucks' },
  { src: '/images/truck-grey-silverado-elite.jpg', alt: 'Lifted cement-grey Chevrolet Silverado in front of the Elite Custom Automotive sign in Lockport, LA', category: 'Lifted Trucks' },
  { src: '/images/truck-gmc-denali-elite.jpg', alt: 'Lifted white GMC Sierra Denali HD outside the Elite Custom Automotive building in Lockport, LA', category: 'Lifted Trucks' },
  { src: '/images/truck-black-f250-superduty.jpg', alt: 'Lifted black Ford F-250 Super Duty with custom bumper and mud-terrain tires by Elite Custom Automotive in Lockport, LA', category: 'Lifted Trucks' },
  { src: '/images/truck-bronco-lift.jpg', alt: 'Lifted Ford Bronco on the lift inside the Elite Custom Automotive shop in Lockport, LA', category: 'Lifted Trucks' },
  { src: '/images/truck-white-escalade-shop.jpg', alt: 'White Cadillac Escalade on custom black wheels inside the Elite Custom Automotive hexagon-lit shop in Lockport, LA', category: 'Lifted Trucks' },
  { src: '/images/truck-green-tundra-trd.jpg', alt: 'Lifted dark green Toyota Tundra TRD on black wheels at the Elite Custom Automotive shop in Lockport, LA', category: 'Lifted Trucks' },

  // Lift Kits — install and parts
  { src: '/images/suspension-parts-table.jpg', alt: 'Rough Country, Fox, Vertex, BDS, and Cognito suspension components laid out at Elite Custom Automotive in Lockport, LA', category: 'Lift Kits' },
  { src: '/images/suspension-shocks-fox.jpg', alt: 'BDS, Cognito, Fox, and Rough Country suspension parts on the workbench at Elite Custom Automotive in Lockport, LA', category: 'Lift Kits' },
  { src: '/images/suspension-bds-install.jpg', alt: 'BDS shock absorber and suspension install in progress at Elite Custom Automotive in Lockport, LA', category: 'Lift Kits' },
  { src: '/images/suspension-falcon-install.jpg', alt: 'Falcon shock and ReadyLift suspension install in progress at Elite Custom Automotive in Lockport, LA', category: 'Lift Kits' },

  // Wheels & Tires
  { src: '/images/wheel-black-multispoke.jpg', alt: 'Black multi-spoke aftermarket wheel with Toyo Open Country R/T tire installed at Elite Custom Automotive in Lockport, LA', category: 'Wheels & Tires' },
  { src: '/images/wheel-silver-toyo.jpg', alt: 'Silver and black multi-spoke wheel with Toyo Open Country mud-terrain tire installed at Elite Custom Automotive in Lockport, LA', category: 'Wheels & Tires' },
  { src: '/images/wheel-green-chevy-closeup.jpg', alt: 'Custom black multi-spoke wheel on a lifted Chevrolet 2500HD Z71 by Elite Custom Automotive in Lockport, LA', category: 'Wheels & Tires' },
  { src: '/images/wheel-black-nitto.jpg', alt: 'Custom black multi-spoke wheel mounted on a Nitto mud-terrain tire at Elite Custom Automotive in Lockport, LA', category: 'Wheels & Tires' },

  // Engine Work
  { src: '/images/engine-ls-v8-bay.jpg', alt: 'Chevrolet LS V8 engine bay rebuild work at Elite Custom Automotive in Lockport, LA', category: 'Engine Work' },
  { src: '/images/engine-corvette-z06.jpg', alt: 'Black Chevrolet Corvette Z06 with hood up for performance work at Elite Custom Automotive in Lockport, LA', category: 'Engine Work' },

  // Ceramic Coating (CTR Pro Coat sister business)
  { src: '/images/ceramic-red-chevy-side.jpg', alt: 'Ceramic-coated red Chevrolet 2500HD Z71 with hexagon-lit reflection — CTR Pro Coat ceramic coating in Lockport, LA', category: 'Ceramic Coating' },
  { src: '/images/ceramic-white-f250-ctr-sign.jpg', alt: 'Ceramic-coated white Ford F-250 Super Duty in front of the CTR Pro Coat ceramic coating sign in Lockport, LA', category: 'Ceramic Coating' },
  { src: '/images/ceramic-white-gmc-ctr-sign.jpg', alt: 'Ceramic-coated lifted white GMC Sierra in front of the CTR Pro Coat ceramic coating sign in Lockport, LA', category: 'Ceramic Coating' },
]

const categories = ['All', 'Lifted Trucks', 'Lift Kits', 'Wheels & Tires', 'Engine Work', 'Ceramic Coating']

const gallerySchema = {
  '@context': 'https://schema.org',
  '@type': 'ImageGallery',
  name: 'Elite Custom Automotive Gallery',
  description: 'Recent lift kit, suspension, engine, wheel, and ceramic coating builds from Elite Custom Automotive in Lockport, LA.',
  url: 'https://elitecustomauto.co/gallery',
  image: photos.map((p) => ({
    '@type': 'ImageObject',
    contentUrl: `https://elitecustomauto.co${p.src}`,
    description: p.alt,
  })),
}

export default function GalleryPage() {
  const [active, setActive] = useState('All')
  const filtered = active === 'All' ? photos : photos.filter((p) => p.category === active)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(gallerySchema) }}
      />

      {/* ── HERO ────────────────────────────────────────────────── */}
      <section className="bg-primary-dark py-24 md:py-28 text-chrome" aria-label="Gallery hero">
        <div className="container-wide text-center">
          <p className="section-label">Our Portfolio</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display uppercase mt-3 mb-5">
            Recent <span className="text-accent-text">Builds</span>
          </h1>
          <p className="text-chrome-dark text-lg max-w-2xl mx-auto leading-relaxed">
            Lifted trucks, custom wheels, engine work, suspension installs, and ceramic coating from
            our shop in Lockport. Every photo is real work from real customers.
          </p>
        </div>
      </section>

      {/* ── FILTER + GRID ───────────────────────────────────────── */}
      <section className="section-padding bg-primary" aria-labelledby="gallery-grid-heading">
        <div className="container-wide">
          <div className="flex flex-wrap gap-2 justify-center mb-12" role="group" aria-label="Filter by category">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                aria-pressed={active === cat}
                className={`px-5 py-2 rounded-sm font-display uppercase tracking-wider text-xs transition-colors duration-200 ${
                  active === cat
                    ? 'bg-accent text-white border border-accent'
                    : 'bg-primary-light text-chrome border border-primary-light hover:border-accent'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <h2 id="gallery-grid-heading" className="sr-only">
            Project photos {active !== 'All' ? `– ${active}` : ''}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((photo) => (
              <figure
                key={photo.src}
                className="relative group overflow-hidden rounded-sm border border-primary-light hover:border-accent transition-colors"
              >
                <div className="relative aspect-[4/3]">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/90 via-primary-dark/20 to-transparent" />
                </div>
                <figcaption className="absolute bottom-0 left-0 right-0 px-5 py-4">
                  <span className="inline-block text-accent-text text-xs font-display uppercase tracking-widest">
                    {photo.category}
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="text-center text-chrome-dark py-16">No photos in this category yet.</p>
          )}
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────────── */}
      <section className="bg-primary-dark section-padding text-center" aria-labelledby="gallery-cta-heading">
        <div className="container-wide">
          <h2 id="gallery-cta-heading" className="text-4xl md:text-5xl text-chrome mb-5">
            Want Your Truck in <span className="text-accent-text">Our Gallery?</span>
          </h2>
          <p className="text-chrome-dark text-lg max-w-xl mx-auto mb-10">
            Bring it by, call us, or send a message. Free quotes, honest pricing, quality work.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="btn-accent">
              Get a Free Quote
            </Link>
            <a href="tel:+19852583831" className="btn-outline">
              Call (985) 258-3831
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
