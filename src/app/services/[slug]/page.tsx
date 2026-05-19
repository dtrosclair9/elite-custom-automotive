import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { pageContent, serviceMeta, cityMeta, getServicePage } from './content'

export function generateStaticParams() {
  return pageContent.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const data = getServicePage(slug)
  if (!data) return {}

  const url = `https://elitecustomauto.co/services/${data.slug}`

  return {
    title: { absolute: data.metaTitle },
    description: data.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      title: data.metaTitle,
      description: data.metaDescription,
      url,
      type: 'website',
    },
  }
}

export default async function ServiceCityPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const data = getServicePage(slug)
  if (!data) notFound()

  const service = serviceMeta[data.serviceKey]
  const cityInfo = cityMeta[data.city]
  const url = `https://elitecustomauto.co/services/${data.slug}`

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `${service.shortName} in ${data.city}, LA`,
    description: data.metaDescription,
    url,
    serviceType: service.fullName,
    provider: {
      '@type': 'LocalBusiness',
      '@id': 'https://elitecustomauto.co/#business',
      name: 'Elite Custom Automotive LLC',
      telephone: '+1-985-258-1414',
      email: 'elitecustomautollc@gmail.com',
      url: 'https://elitecustomauto.co',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '5609 LA-1',
        addressLocality: 'Lockport',
        addressRegion: 'LA',
        postalCode: '70374',
        addressCountry: 'US',
      },
    },
    areaServed: [
      { '@type': 'City', name: data.city, address: { '@type': 'PostalAddress', addressRegion: 'LA' } },
      { '@type': 'AdministrativeArea', name: data.parish },
    ],
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      areaServed: { '@type': 'City', name: data.city },
    },
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: data.faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://elitecustomauto.co' },
      { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://elitecustomauto.co/services' },
      { '@type': 'ListItem', position: 3, name: `${service.shortName} in ${data.city}, LA`, item: url },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* ── HERO ────────────────────────────────────────────────── */}
      <section className="relative bg-primary-dark py-24 md:py-32 overflow-hidden" aria-label="Page hero">
        <Image
          src={service.heroImage}
          alt={`${service.fullName} for ${data.city}, ${data.parish} drivers at Elite Custom Automotive in Lockport, LA`}
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark via-primary-dark/80 to-primary-dark/30" />
        <div className="relative container-wide">
          <p className="section-label mb-4 flex items-center gap-2">
            <span className="inline-block w-8 h-px bg-accent" />
            {data.city}, Louisiana • {data.parish}
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display text-chrome uppercase leading-[0.95] max-w-4xl">
            {service.shortName} <br />
            <span className="text-accent">in {data.city}, LA</span>
          </h1>
          <p className="mt-7 text-lg md:text-xl text-chrome-dark max-w-3xl leading-relaxed">
            {data.cityIntro}
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="/contact" className="btn-accent text-base">
              Get a Free Quote
            </Link>
            <a href="tel:+19852581414" className="btn-outline text-base">
              Call (985) 258-1414
            </a>
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ───────────────────────────────────────── */}
      <section className="section-padding bg-primary" aria-labelledby="why-heading">
        <div className="container-wide">
          <div className="text-center mb-14 max-w-3xl mx-auto">
            <p className="section-label">Why Elite</p>
            <h2 id="why-heading" className="text-4xl md:text-5xl text-chrome mt-3">
              Why {data.city} Truck Owners <span className="text-accent">Choose Elite</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {service.whyChoose.map((reason, i) => (
              <article key={reason.title} className="bg-primary-light border border-primary-light hover:border-accent/50 rounded-sm p-8 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-10 h-10 rounded-sm bg-accent/10 border border-accent/30 flex items-center justify-center text-accent font-display text-lg">
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <div>
                    <h3 className="text-chrome text-xl mb-2">{reason.title}</h3>
                    <p className="text-chrome-dark text-sm leading-relaxed">{reason.body}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── LOCAL CONTEXT — UNIQUE PER-CITY COPY ───────────────── */}
      <section className="section-padding bg-primary-dark" aria-labelledby="local-heading">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto">
            <p className="section-label">For {data.city} Drivers</p>
            <h2 id="local-heading" className="text-3xl md:text-4xl text-chrome mt-3 mb-8 leading-tight">
              Why {data.city} Drivers Choose Elite for <span className="text-accent">{service.shortName}</span>
            </h2>
            <p className="text-chrome-dark text-base md:text-lg leading-relaxed whitespace-pre-line">
              {data.localContext}
            </p>
          </div>
        </div>
      </section>

      {/* ── WHAT'S INCLUDED ─────────────────────────────────────── */}
      <section className="section-padding bg-primary-dark" aria-labelledby="included-heading">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1">
              <p className="section-label">What We Do</p>
              <h2 id="included-heading" className="text-4xl md:text-5xl text-chrome mt-3 mb-6">
                {service.shortName} <span className="text-accent">Services</span>
              </h2>
              <p className="text-chrome-dark leading-relaxed mb-8">
                Every {service.shortName.toLowerCase()} job at Elite Custom Automotive is built to last
                and quoted honestly upfront. Here&apos;s what we handle in-shop:
              </p>
              <Link href="/contact" className="btn-accent">
                Request a Quote
              </Link>
            </div>

            <div className="lg:col-span-2">
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.whatsIncluded.map((item) => (
                  <li key={item} className="flex items-start gap-3 bg-primary border border-primary-light rounded-sm p-4">
                    <svg className="w-5 h-5 text-accent shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-chrome text-sm leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICE AREA CALLOUT ────────────────────────────────── */}
      <section className="section-padding bg-primary" aria-labelledby="area-heading">
        <div className="container-wide">
          <div className="bg-gradient-to-br from-primary-light to-primary border border-accent/20 rounded-sm p-10 md:p-14">
            <div className="text-center mb-8">
              <p className="section-label">Service Area</p>
              <h2 id="area-heading" className="text-3xl md:text-4xl text-chrome mt-3">
                Serving {data.city} <span className="text-accent">& Surrounding Areas</span>
              </h2>
              <p className="text-chrome-dark mt-4 max-w-2xl mx-auto leading-relaxed">
                {cityInfo.drivingNote}
              </p>
            </div>

            <div className="flex flex-wrap gap-2 justify-center text-xs font-display uppercase tracking-wider">
              {cityInfo.nearbyCities.map((city) => (
                <span key={city} className="bg-primary-dark border border-primary-light text-chrome px-3 py-1.5 rounded-sm">
                  {city}, LA
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ — UNIQUE PER-CITY Q&As + FAQPage SCHEMA ────────── */}
      <section className="section-padding bg-primary-dark" aria-labelledby="faq-heading">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto">
            <p className="section-label text-center">Common Questions</p>
            <h2 id="faq-heading" className="text-3xl md:text-4xl text-chrome mt-3 mb-10 text-center leading-tight">
              {data.city} <span className="text-accent">FAQs</span>
            </h2>
            <div className="space-y-4">
              {data.faqs.map((faq) => (
                <details
                  key={faq.q}
                  className="group bg-primary border border-primary-light rounded-sm overflow-hidden open:border-accent/50 transition-colors"
                >
                  <summary className="cursor-pointer list-none flex items-start justify-between gap-4 p-6 hover:bg-primary-light/30">
                    <h3 className="text-chrome font-display uppercase tracking-wider text-sm md:text-base leading-snug">
                      {faq.q}
                    </h3>
                    <svg
                      className="w-5 h-5 text-accent shrink-0 mt-0.5 transition-transform group-open:rotate-180"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <p className="px-6 pb-6 text-chrome-dark text-sm md:text-base leading-relaxed">
                    {faq.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── RELATED SERVICES ────────────────────────────────────── */}
      <section className="section-padding bg-primary-dark" aria-labelledby="related-heading">
        <div className="container-wide">
          <div className="text-center mb-10">
            <p className="section-label">Also See</p>
            <h2 id="related-heading" className="text-3xl md:text-4xl text-chrome mt-3">
              More Services in <span className="text-accent">{data.city}</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-3xl mx-auto">
            {service.relatedServices.map((rel) => {
              // Swap the city in the related links to match current city
              const cityHref = rel.href.replace('-lockport-la', `-${data.city.toLowerCase()}-la`)
              return (
                <Link
                  key={rel.label}
                  href={cityHref}
                  className="group bg-primary border border-primary-light hover:border-accent rounded-sm p-6 flex items-center justify-between transition-colors"
                >
                  <span className="text-chrome font-display uppercase tracking-wider text-sm">
                    {rel.label} <span className="text-chrome-dark">in {data.city}</span>
                  </span>
                  <svg className="w-5 h-5 text-accent group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────────── */}
      <section className="relative bg-primary section-padding overflow-hidden" aria-labelledby="cta-heading">
        <div className="absolute inset-0 bg-gradient-to-r from-accent-dark/20 to-transparent" />
        <div className="relative container-wide text-center">
          <h2 id="cta-heading" className="text-4xl md:text-5xl text-chrome mb-5">
            Ready for {service.shortName} <span className="text-accent">in {data.city}?</span>
          </h2>
          <p className="text-chrome-dark text-lg max-w-xl mx-auto mb-10">
            Call Colin and the Elite team for a free quote. Honest pricing, quality work, no pressure.
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
