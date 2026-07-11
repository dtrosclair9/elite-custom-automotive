import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ogImage } from '@/lib/site'

export const metadata: Metadata = {
  title: { absolute: 'Elite Custom Automotive | Lift Kits & Auto Repair in Lockport, LA' },
  description:
    'Lockport, LA shop for custom lift kits, engine rebuilds, transmission swaps, and custom wheels and tires. Honest work from owner Colin Richard. Call now.',
  openGraph: {
    title: 'Elite Custom Automotive | Lift Kits & Auto Repair in Lockport, LA',
    description:
      "Custom lift kits, engine rebuilds, transmission swap service, custom wheels and tires. Serving Lockport, Houma, Thibodaux and all of Lafourche & Terrebonne Parish. Call (985) 258-3831.",
    url: 'https://elitecustomauto.co',
    images: [ogImage],
  },
  alternates: { canonical: 'https://elitecustomauto.co' },
}

const featuredServices = [
  {
    title: 'Lift Kits & Suspension',
    tagline: 'BDS, Cognito, Superlift & more',
    description:
      'Custom suspension lifts from 2" leveling kits to 8"+ big-lift builds. Certified installer for BDS, Cognito, and Superlift — and we install other top suspension brands on Ford, Chevy, GMC, RAM and Jeep.',
    href: '/services/lift-kits-suspension-lockport-la',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12V7a2 2 0 012-2h10a2 2 0 012 2v5M3 12h18M5 17h2m10 0h2M7 21h10" />
      </svg>
    ),
  },
  {
    title: 'Engine Rebuilds & Transmission Service',
    tagline: 'Engine swaps, full rebuilds, transmission swaps',
    description:
      'Complete engine builds, engine swaps, performance upgrades, and full transmission swap installs. No internal transmission rebuilds — we replace the whole unit when needed for cleaner pricing and longer reliability.',
    href: '/services/engine-rebuild-transmission-service-lockport-la',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: 'Custom Wheels & Tires',
    tagline: 'Forged wheels, mud terrains, fitment',
    description:
      'Aftermarket wheels and tires sized right for your build. We mount, balance, and dial in the perfect stance on lifted trucks, daily drivers, and show builds.',
    href: '/services/custom-wheels-tires-lockport-la',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <circle cx="12" cy="12" r="9" strokeWidth={1.5} />
        <circle cx="12" cy="12" r="3" strokeWidth={1.5} />
        <path strokeLinecap="round" strokeWidth={1.5} d="M12 3v6M12 15v6M3 12h6M15 12h6M5.6 5.6l4.2 4.2M14.2 14.2l4.2 4.2M5.6 18.4l4.2-4.2M14.2 9.8l4.2-4.2" />
      </svg>
    ),
  },
]

const reviews = [
  {
    name: 'Holden Landry',
    rating: 5,
    date: '2 months ago',
    body: 'Colin & his team are top notch service. Brought both of my vehicles in for some PM work. They diagnosed them both and work that could be done in the future that fits my budget. Super pumped our area has this level of service & business. Highly recommend these guys for anything automotive.',
    service: 'Diagnostics • Brakes • Oil change',
  },
  {
    name: 'Brutus Van Hammer',
    rating: 5,
    date: '2 months ago',
    body: 'Service done right. Very knowledgeable staff, genuine, honest, and family oriented. They have my business. From small to big; they can handle it all.',
    service: 'Transmission',
  },
  {
    name: 'Adam Plaisance',
    rating: 5,
    date: '3 weeks ago',
    body: 'Called them on a Friday, they took my truck on short notice and had me fixed up and back on the road by Saturday afternoon. Highly recommend them.',
    service: 'Brakes',
  },
  {
    name: 'Jacob Foret',
    rating: 5,
    date: '1 month ago',
    body: 'The team at Elite always gets me fix up quick fast and in a hurry!!! Thank yall',
    service: 'Repair',
  },
]

const galleryPreviews = [
  { src: '/images/build-1.jpg', alt: 'Lifted Ford F-250 Super Duty custom build by Elite Custom Automotive in Lockport, LA' },
  { src: '/images/build-2.jpg', alt: 'Custom forged wheels and mud-terrain tires installed by Elite Custom Automotive in Lockport, LA' },
  { src: '/images/build-3.jpg', alt: 'BDS suspension lift kit installation at Elite Custom Automotive in Lockport, Louisiana' },
  { src: '/images/build-4.jpg', alt: 'Engine rebuild work performed at Elite Custom Automotive in Lockport, Louisiana' },
]

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['LocalBusiness', 'AutoRepair'],
      '@id': 'https://elitecustomauto.co/#business',
      name: 'Elite Custom Automotive LLC',
      description:
        "Lockport, Louisiana's shop for custom lift kits, suspension upgrades, engine rebuilds, transmission swap service, custom wheels and tires, and full-service auto repair. Owned by Colin Richard, also the owner of CTR Pro Coat ceramic coating.",
      url: 'https://elitecustomauto.co',
      telephone: '+1-985-258-3831',
      email: 'elitecustomautollc@gmail.com',
      image: 'https://elitecustomauto.co/images/logo.png',
      priceRange: '$$',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '5609 LA-1',
        addressLocality: 'Lockport',
        addressRegion: 'LA',
        postalCode: '70374',
        addressCountry: 'US',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 29.6446,
        longitude: -90.5414,
      },
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          opens: '07:30',
          closes: '17:00',
        },
      ],
      areaServed: [
        { '@type': 'AdministrativeArea', name: 'Lafourche Parish' },
        { '@type': 'AdministrativeArea', name: 'Terrebonne Parish' },
        { '@type': 'City', name: 'Lockport' },
        { '@type': 'City', name: 'Houma' },
        { '@type': 'City', name: 'Thibodaux' },
        { '@type': 'City', name: 'Raceland' },
        { '@type': 'City', name: 'Larose' },
      ],
      sameAs: ['https://www.facebook.com/profile.php?id=61573142575763'],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Automotive Services',
        itemListElement: [
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Custom Lift Kits & Suspension' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Engine Rebuilds & Transmission Service' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Custom Wheels & Tires' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Auto Repair & Maintenance' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Window Tinting' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Ceramic Coating' } },
        ],
      },
    },
    {
      '@type': 'WebSite',
      '@id': 'https://elitecustomauto.co/#website',
      url: 'https://elitecustomauto.co',
      name: 'Elite Custom Automotive',
      publisher: { '@id': 'https://elitecustomauto.co/#business' },
    },
  ],
}

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* ── HERO ────────────────────────────────────────────────── */}
      <section className="relative min-h-[92vh] flex items-end overflow-hidden bg-primary-dark" aria-label="Hero">
        {/* Video background — falls back to poster image if video missing */}
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/images/hero-poster.jpg"
          className="absolute inset-0 w-full h-full object-cover object-[center_65%] [filter:contrast(1.08)_saturate(1.12)_brightness(1.04)]"
          aria-hidden="true"
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>

        {/* Left-anchored fade for text legibility — keeps right two-thirds clean */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(6,8,11,0.95)_0%,rgba(6,8,11,0.82)_35%,rgba(6,8,11,0.45)_55%,transparent_75%)]" />
        {/* Bottom anchor — short fade behind the CTA stack only */}
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-[linear-gradient(to_top,rgba(6,8,11,0.75)_0%,transparent_100%)]" />
        {/* Electric-blue rim glow on the right edge — reinforces the studio lighting */}
        <div className="absolute inset-y-0 right-0 w-1/3 bg-[linear-gradient(to_left,rgba(36,86,199,0.18)_0%,transparent_70%)] mix-blend-screen pointer-events-none" />

        {/* Content — bottom-left for cinematic composition */}
        <div className="relative z-10 container-wide pb-20 md:pb-28 pt-32">
          <div className="max-w-3xl">
            <p className="section-label mb-5 flex items-center gap-2">
              <span className="inline-block w-8 h-px bg-accent" />
              Lockport, Louisiana • Family Owned
            </p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display text-chrome uppercase leading-[0.95] tracking-tight">
              Custom Lift Kits<br />
              <span className="text-accent">& Truck Builds</span><br />
              <span className="text-chrome-light">in Lockport, LA</span>
            </h1>
            <p className="mt-7 text-lg md:text-xl text-chrome-dark max-w-2xl leading-relaxed font-light">
              Custom suspension installs, engine rebuilds, transmission swap service, custom wheels and tires.
              Backed by over a decade of custom shop experience from sister business CTR Pro Coat.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/contact" className="btn-accent text-base">
                Get a Free Quote
              </Link>
              <a href="tel:+19852583831" className="btn-outline text-base">
                Call (985) 258-3831
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── TRUST BAR ───────────────────────────────────────────── */}
      <div className="bg-accent" role="region" aria-label="Company highlights">
        <div className="container-wide py-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-accent-light/30 text-white text-center">
            <div className="py-3 sm:py-0 px-4">
              <p className="font-display uppercase tracking-widest text-xl">12+ Years</p>
              <p className="text-sm font-medium text-white/80">Lockport Family-Owned</p>
            </div>
            <div className="py-3 sm:py-0 px-4">
              <p className="font-display uppercase tracking-widest text-xl">BDS · Cognito & More</p>
              <p className="text-sm font-medium text-white/80">Certified Lift Installer · All Brands Welcome</p>
            </div>
            <div className="py-3 sm:py-0 px-4">
              <p className="font-display uppercase tracking-widest text-xl">5.0 ★ Rated</p>
              <p className="text-sm font-medium text-white/80">Google Reviews</p>
            </div>
          </div>
        </div>
      </div>

      {/* ── SERVICES ────────────────────────────────────────────── */}
      <section className="section-padding bg-primary" aria-labelledby="services-heading">
        <div className="container-wide">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <p className="section-label">What We Build</p>
            <h2 id="services-heading" className="text-4xl md:text-5xl text-chrome mt-3 mb-5">
              What We Specialize In
            </h2>
            <p className="text-chrome-dark text-lg leading-relaxed">
              From mild to wild — Elite Custom Automotive specializes in the three things that turn a truck
              from stock to standout. Click any service to see what we offer in your city.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredServices.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="group bg-primary-light border border-primary-light hover:border-accent rounded-sm p-8 transition-all duration-200 block"
              >
                <div className="text-accent mb-5 group-hover:scale-110 transition-transform duration-200">
                  {service.icon}
                </div>
                <h3 className="text-chrome text-2xl mb-1">{service.title}</h3>
                <p className="text-accent text-xs font-semibold uppercase tracking-widest mb-4">{service.tagline}</p>
                <p className="text-chrome-dark text-sm leading-relaxed mb-6">{service.description}</p>
                <span className="text-accent font-display uppercase tracking-wider text-sm group-hover:text-accent-light transition-colors inline-flex items-center gap-2">
                  Learn More
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>

          <div className="text-center mt-14">
            <Link href="/services" className="btn-chrome">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* ── FEATURED BUILDS ─────────────────────────────────────── */}
      <section className="section-padding bg-primary-dark" aria-labelledby="builds-heading">
        <div className="container-wide">
          <div className="text-center mb-12">
            <p className="section-label">Recent Builds</p>
            <h2 id="builds-heading" className="text-4xl md:text-5xl text-chrome mt-3">
              From Our Shop
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {galleryPreviews.map((photo) => (
              <div key={photo.src} className="relative aspect-square overflow-hidden rounded-sm group border border-primary-light hover:border-accent transition-colors">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/gallery" className="btn-outline">
              View Full Gallery
            </Link>
          </div>
        </div>
      </section>

      {/* ── ABOUT SNIPPET ───────────────────────────────────────── */}
      <section className="section-padding bg-primary" aria-labelledby="about-snippet-heading">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div className="relative h-80 lg:h-[500px] rounded-sm overflow-hidden border border-primary-light">
              <Image
                src="/images/shop-interior.jpg"
                alt="Lifted Ford F-250 Super Duty inside the hexagon-lit Elite Custom Automotive shop in Lockport, Louisiana — owned by Colin Richard"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-accent font-display uppercase tracking-widest text-xs">Lockport, LA</p>
                <p className="text-chrome font-display uppercase tracking-wider text-2xl">Colin Richard, Owner</p>
              </div>
            </div>

            <div>
              <p className="section-label">About Elite</p>
              <h2 id="about-snippet-heading" className="text-4xl md:text-5xl text-chrome mt-3 mb-6">
                Built by Locals,<br />
                <span className="text-accent">Trusted by Truck Owners</span>
              </h2>
              <p className="text-chrome-dark leading-relaxed mb-4">
                <strong className="text-chrome">Colin Richard</strong> opened Elite Custom Automotive in January 2025,
                but he&apos;s been working in this same Lockport bay for over a decade. His sister business,
                <strong className="text-chrome"> CTR Pro Coat</strong>, has been Lafourche Parish&apos;s ceramic coating
                specialist for more than ten years.
              </p>
              <p className="text-chrome-dark leading-relaxed mb-8">
                Elite is the expansion: lift kits, engine rebuilds, transmission swap service, custom wheels, and full-service
                auto repair — built on top of a decade of detail and finishing work. Every job comes with the same
                promise: no pressure, just honest work.
              </p>
              <Link href="/about" className="btn-accent">
                Our Story
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── REVIEWS ─────────────────────────────────────────────── */}
      <section className="section-padding bg-primary-dark" aria-labelledby="reviews-heading">
        <div className="container-wide">
          <div className="text-center mb-14">
            <p className="section-label">5.0 ★ on Google</p>
            <h2 id="reviews-heading" className="text-4xl md:text-5xl text-chrome mt-3">
              What Our Customers Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {reviews.map((r) => (
              <article key={r.name} className="bg-primary border border-primary-light rounded-sm p-7">
                <div className="flex items-center gap-1 mb-4" aria-label={`${r.rating} star rating`}>
                  {Array.from({ length: r.rating }).map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.539 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-chrome leading-relaxed mb-5 font-light italic">&ldquo;{r.body}&rdquo;</p>
                <div className="border-t border-primary-light pt-4">
                  <p className="text-chrome font-display uppercase tracking-wider text-sm">{r.name}</p>
                  <p className="text-chrome-dark text-xs mt-1">{r.service} • {r.date}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICE AREA ────────────────────────────────────────── */}
      <section className="section-padding bg-primary" aria-labelledby="service-area-heading">
        <div className="container-wide text-center">
          <p className="section-label">Service Area</p>
          <h2 id="service-area-heading" className="text-4xl md:text-5xl text-chrome mt-3 mb-6">
            Serving All of Bayou Country
          </h2>
          <p className="text-chrome-dark max-w-2xl mx-auto mb-10 leading-relaxed">
            Based in Lockport at 5609 LA-1, Elite Custom Automotive serves truck owners and drivers across
            Lafourche and Terrebonne Parish.
          </p>
          <div className="flex flex-wrap gap-3 justify-center text-sm font-display uppercase tracking-wider">
            {['Lockport', 'Houma', 'Thibodaux', 'Raceland', 'Larose', 'Galliano', 'Cut Off', 'Mathews', 'Bourg'].map((city) => (
              <span key={city} className="bg-primary-light border border-primary-light text-chrome px-4 py-2 rounded-sm">
                {city}, LA
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ──────────────────────────────────────────── */}
      <section className="relative bg-primary-dark section-padding overflow-hidden" aria-labelledby="cta-heading">
        <div className="absolute inset-0 bg-gradient-to-r from-accent-dark/30 to-transparent" />
        <div className="relative container-wide text-center">
          <h2 id="cta-heading" className="text-4xl md:text-5xl text-chrome mb-5">
            Ready to <span className="text-accent">Build Something?</span>
          </h2>
          <p className="text-chrome-dark text-lg max-w-xl mx-auto mb-10">
            Whether it&apos;s a 2&quot; leveling kit or a full ground-up custom build, the Elite team has you covered.
            Get in touch for a free, no-pressure quote.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="btn-accent text-base">
              Request a Free Quote
            </Link>
            <a href="tel:+19852583831" className="btn-outline text-base">
              Call (985) 258-3831
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
