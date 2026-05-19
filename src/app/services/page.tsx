import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { serviceMeta, pageContent } from './[slug]/content'

export const metadata: Metadata = {
  title: { absolute: 'Services in Lockport, LA | Lift Kits, Engine Rebuilds, Custom Wheels | Elite Custom Automotive' },
  description:
    'Elite Custom Automotive offers custom lift kits, engine rebuilds, transmission swap service, custom wheels and tires, window tinting, ceramic coating, and full-service auto repair in Lockport, Houma, and Thibodaux, LA.',
  openGraph: {
    title: 'Services | Elite Custom Automotive in Lockport, LA',
    description:
      'Custom lift kits, engine rebuilds, transmission swap service, custom wheels and tires, window tinting, ceramic coating. Serving Lockport, Houma, Thibodaux and all of Lafourche & Terrebonne Parish.',
    url: 'https://elitecustomauto.co/services',
  },
  alternates: { canonical: 'https://elitecustomauto.co/services' },
}

const additionalServices = [
  {
    title: 'Auto Repair & Maintenance',
    description:
      'Oil changes, brakes, diagnostics, tune-ups, and full-service maintenance. Honest pricing, quick turnaround, and the same quality work whether it\'s a $40 oil change or a $4,000 rebuild.',
  },
  {
    title: 'Window Tinting',
    description:
      'Professional automotive window tint with quality films. Heat rejection, UV protection, privacy, and a cleaner look on any vehicle.',
  },
  {
    title: 'Ceramic Coating',
    description:
      'Professional ceramic coating that protects your paint from UV, road grime, water spots, and minor scratches. Lasts years longer than wax.',
  },
]

const schema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Automotive Services – Elite Custom Automotive',
  description: 'Custom automotive services offered by Elite Custom Automotive in Lockport, LA.',
  url: 'https://elitecustomauto.co/services',
  itemListElement: pageContent.map((p, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    item: {
      '@type': 'Service',
      name: `${serviceMeta[p.serviceKey].shortName} in ${p.city}, LA`,
      url: `https://elitecustomauto.co/services/${p.slug}`,
      provider: {
        '@type': 'LocalBusiness',
        name: 'Elite Custom Automotive LLC',
      },
      areaServed: { '@type': 'City', name: p.city },
    },
  })),
}

// Group pages by service
const serviceGroups = (Object.keys(serviceMeta) as Array<keyof typeof serviceMeta>).map((key) => ({
  key,
  meta: serviceMeta[key],
  cities: pageContent.filter((p) => p.serviceKey === key),
}))

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* ── HERO ────────────────────────────────────────────────── */}
      <section className="bg-primary-dark py-24 md:py-28 text-chrome" aria-label="Services hero">
        <div className="container-wide text-center">
          <p className="section-label">What We Do</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display uppercase mt-3 mb-5">
            Our <span className="text-accent">Services</span>
          </h1>
          <p className="text-chrome-dark text-lg max-w-2xl mx-auto leading-relaxed">
            From 2-inch level kits to full ground-up custom builds — here&apos;s everything Elite Custom Automotive
            handles for truck owners and drivers across Lafourche and Terrebonne Parish.
          </p>
        </div>
      </section>

      {/* ── HIGH-TICKET SERVICE GROUPS ──────────────────────────── */}
      {serviceGroups.map((group, i) => (
        <section
          key={group.key}
          className={`section-padding ${i % 2 === 0 ? 'bg-primary' : 'bg-primary-dark'}`}
          aria-labelledby={`group-${group.key}-heading`}
        >
          <div className="container-wide">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div className={i % 2 !== 0 ? 'lg:order-2' : ''}>
                <div className="relative h-72 md:h-96 rounded-sm overflow-hidden border border-primary-light">
                  <Image
                    src={group.meta.heroImage}
                    alt={`${group.meta.fullName} at Elite Custom Automotive in Lockport, LA`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/80 to-transparent" />
                </div>
              </div>

              <div className={i % 2 !== 0 ? 'lg:order-1' : ''}>
                <p className="section-label">{group.meta.shortName}</p>
                <h2 id={`group-${group.key}-heading`} className="text-3xl md:text-4xl text-chrome mt-3 mb-5">
                  {group.meta.fullName}
                </h2>

                <ul className="space-y-2 mb-7">
                  {group.meta.whatsIncluded.slice(0, 5).map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-chrome-dark">
                      <svg className="w-4 h-4 text-accent shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>

                <p className="text-accent font-display uppercase tracking-widest text-xs mb-3">Available In</p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {group.cities.map((p) => (
                    <Link
                      key={p.slug}
                      href={`/services/${p.slug}`}
                      className="group bg-primary-light border border-primary-light hover:border-accent rounded-sm p-4 transition-colors"
                    >
                      <span className="text-chrome font-display uppercase tracking-wider text-sm flex items-center justify-between">
                        {p.city}, LA
                        <svg className="w-4 h-4 text-accent group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* ── ADDITIONAL SERVICES ─────────────────────────────────── */}
      <section className="section-padding bg-primary" aria-labelledby="additional-heading">
        <div className="container-wide">
          <div className="text-center mb-12 max-w-2xl mx-auto">
            <p className="section-label">Also In-Shop</p>
            <h2 id="additional-heading" className="text-4xl text-chrome mt-3">
              Additional <span className="text-accent">Services</span>
            </h2>
            <p className="text-chrome-dark mt-4 leading-relaxed">
              Beyond the custom build work, Elite also handles the day-to-day maintenance and finishing services
              your vehicle needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {additionalServices.map((service) => (
              <article key={service.title} className="bg-primary-light border border-primary-light rounded-sm p-7">
                <h3 className="text-chrome text-xl mb-3">{service.title}</h3>
                <p className="text-chrome-dark text-sm leading-relaxed">{service.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────────── */}
      <section className="bg-primary-dark section-padding text-center" aria-labelledby="services-cta-heading">
        <div className="container-wide">
          <h2 id="services-cta-heading" className="text-4xl md:text-5xl text-chrome mb-5">
            Not Sure What You <span className="text-accent">Need?</span>
          </h2>
          <p className="text-chrome-dark text-lg max-w-xl mx-auto mb-10">
            Call Colin and the Elite team. We&apos;ll walk through your truck, your goals, and your budget —
            and tell you straight what makes sense.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="btn-accent text-base">
              Get a Free Quote
            </Link>
            <a href="tel:+19852581414" className="btn-outline text-base">
              Call (985) 258-1414
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
