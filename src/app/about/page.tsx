import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: { absolute: 'About Elite Custom Automotive | Meet Colin Richard' },
  description:
    'Elite Custom Automotive is owned and operated by Colin Richard in Lockport, Louisiana. Custom lift kits, engine rebuilds, and full-service auto repair for Lafourche and Terrebonne Parish — backed by a decade of finishing experience from sister business CTR Pro Coat.',
  openGraph: {
    title: 'About Elite Custom Automotive | Lockport, LA',
    description:
      'Meet Colin Richard, owner of Elite Custom Automotive in Lockport, LA — and owner of CTR Pro Coat ceramic coating. Over a decade of custom shop experience in Lafourche and Terrebonne Parish.',
    url: 'https://elitecustomauto.co/about',
  },
  alternates: { canonical: 'https://elitecustomauto.co/about' },
}

const values = [
  {
    title: 'Honest Diagnostics',
    description:
      'We tell you what your truck actually needs — not what makes us the most money. Sometimes that\'s a $200 fix instead of a $4,000 rebuild. Customers come back because of that.',
  },
  {
    title: 'Brand-Name Parts, No Shortcuts',
    description:
      'We use the brands we\'d put on our own trucks: BDS, Cognito, Fox, King, Fuel, Toyo, Nitto. No off-brand suspension components, no reused gaskets, no cutting corners.',
  },
  {
    title: 'Family-Oriented Service',
    description:
      'Colin and the Elite team treat every customer like a neighbor — because down here, most of them are. From small fixes to ground-up builds, the same crew handles your truck start to finish.',
  },
]

const schema = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  name: 'About Elite Custom Automotive',
  url: 'https://elitecustomauto.co/about',
  description: 'Learn about Elite Custom Automotive and its founder, Colin Richard — a Lockport, LA native who also owns CTR Pro Coat ceramic coating, serving Lafourche and Terrebonne Parish for over a decade.',
  mainEntity: {
    '@type': 'LocalBusiness',
    name: 'Elite Custom Automotive LLC',
    founder: {
      '@type': 'Person',
      name: 'Colin Richard',
      jobTitle: 'Owner',
    },
    url: 'https://elitecustomauto.co',
    telephone: '+1-985-258-1414',
    foundingDate: '2025-01',
  },
}

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* ── HERO ────────────────────────────────────────────────── */}
      <section className="bg-primary-dark py-24 md:py-28 text-chrome" aria-label="About hero">
        <div className="container-wide text-center">
          <p className="section-label">Our Story</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display uppercase mt-3 mb-5">
            About <span className="text-accent">Elite</span>
          </h1>
          <p className="text-chrome-dark text-lg max-w-2xl mx-auto leading-relaxed">
            A locally owned custom shop built on hard work, honest diagnostics, and a real passion for
            building lifted trucks and bringing engines back to life.
          </p>
        </div>
      </section>

      {/* ── ABOUT OWNER ─────────────────────────────────────────── */}
      <section className="section-padding bg-primary" aria-labelledby="owner-heading">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div className="relative h-96 lg:h-[540px] rounded-sm overflow-hidden border border-primary-light">
              <Image
                src="/images/colin-family.jpg"
                alt="Colin Richard with his wife and two children — owner of Elite Custom Automotive in Lockport, Louisiana"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/85 via-primary-dark/10 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-accent font-display uppercase tracking-widest text-xs">Lockport, LA</p>
                <p className="text-chrome font-display uppercase tracking-wider text-2xl">Colin Richard, Owner</p>
                <p className="text-chrome-dark text-sm mt-1">Husband, father of two, and lifelong gearhead.</p>
              </div>
            </div>

            <div>
              <p className="section-label">Meet the Owner</p>
              <h2 id="owner-heading" className="text-4xl md:text-5xl text-chrome mt-3 mb-7">
                Colin Richard
              </h2>

              <div className="space-y-4 text-chrome-dark leading-relaxed">
                <p>
                  Colin Richard opened <strong className="text-chrome">Elite Custom Automotive</strong> in January 2025
                  — but the work in this bay isn&apos;t new. For over a decade, Colin has owned
                  <strong className="text-chrome"> CTR Pro Coat</strong>, the ceramic coating and detail business that
                  serves Lafourche and Terrebonne Parish from this same Lockport shop.
                </p>
                <p>
                  Elite is the expansion: the same standards and the same crew, now handling the full picture —
                  2-inch leveling kits on daily drivers, full engine rebuilds on project trucks, wheel and tire fitment,
                  transmission swap service, and the day-to-day repair work that keeps drivers on the road. Colin is a certified
                  installer for BDS, Cognito, and Superlift suspension.
                </p>
                <p>
                  Every job at Elite starts the same way: a real diagnostic, an honest quote, and clear communication
                  about what the work involves. The reviews say it best — customers leave with their truck fixed right
                  and their money respected.
                </p>
              </div>

              <div className="mt-9 flex flex-wrap gap-4">
                <Link href="/contact" className="btn-accent">
                  Work With Colin
                </Link>
                <a
                  href="https://www.facebook.com/profile.php?id=61573142575763"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-chrome border-2 border-chrome hover:bg-chrome hover:text-primary font-display uppercase tracking-wider px-7 py-3.5 rounded-sm transition-colors duration-200"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                  Follow on Facebook
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── DREAM / WHY IT STARTED ──────────────────────────────── */}
      <section className="bg-primary-dark py-20 md:py-24" aria-labelledby="dream-heading">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 relative aspect-[3/4] rounded-sm overflow-hidden border border-primary-light">
              <Image
                src="/images/dream-sign.jpg"
                alt="Colin Richard's young son holding an 'It All Starts With A Dream' Lamborghini print at the Elite Custom Automotive shop"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 42vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/40 to-transparent pointer-events-none" />
            </div>

            <div className="lg:col-span-7">
              <p className="section-label">Why It Started</p>
              <h2 id="dream-heading" className="text-4xl md:text-5xl text-chrome font-display uppercase mt-3 mb-7 leading-tight">
                It All Starts<br />
                <span className="text-accent">With a Dream</span>
              </h2>
              <div className="space-y-4 text-chrome-dark leading-relaxed">
                <p>
                  Elite isn&apos;t just a shop — it&apos;s a family business built on the same passion Colin&apos;s
                  been chasing since he was a kid. The same passion he&apos;s now passing down to his own.
                </p>
                <p>
                  Every lift kit, every rebuild, every custom build that rolls out of the Lockport bay starts
                  the same way it always has: someone shows up with a dream for their truck, and the Elite team
                  makes it real.
                </p>
                <p className="text-chrome font-display uppercase tracking-wider text-lg pt-2">
                  That&apos;s the work. That&apos;s the why.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── VALUES ──────────────────────────────────────────────── */}
      <section className="section-padding bg-primary-dark" aria-labelledby="values-heading">
        <div className="container-wide">
          <div className="text-center mb-14 max-w-2xl mx-auto">
            <p className="section-label">How We Work</p>
            <h2 id="values-heading" className="text-4xl md:text-5xl text-chrome mt-3">
              Our Core <span className="text-accent">Values</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((value, i) => (
              <article key={value.title} className="bg-primary border border-primary-light rounded-sm p-8">
                <p className="text-accent font-display uppercase tracking-widest text-xs mb-3">
                  {String(i + 1).padStart(2, '0')}
                </p>
                <h3 className="text-chrome text-xl mb-3">{value.title}</h3>
                <p className="text-chrome-dark text-sm leading-relaxed">{value.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICE AREA ────────────────────────────────────────── */}
      <section className="section-padding bg-primary" aria-labelledby="service-area-heading">
        <div className="container-wide text-center">
          <p className="section-label">Where We Work</p>
          <h2 id="service-area-heading" className="text-4xl md:text-5xl text-chrome mt-3 mb-6">
            Serving <span className="text-accent">Bayou Country</span>
          </h2>
          <p className="text-chrome-dark max-w-2xl mx-auto mb-10 leading-relaxed">
            Elite Custom Automotive is based at <strong className="text-chrome">5609 LA-1, Lockport, LA</strong> and
            serves truck owners and drivers throughout Lafourche and Terrebonne Parish.
          </p>
          <div className="flex flex-wrap gap-3 justify-center text-sm font-display uppercase tracking-wider">
            {['Lockport', 'Houma', 'Thibodaux', 'Raceland', 'Larose', 'Galliano', 'Cut Off', 'Mathews', 'Bourg', 'Schriever', 'Chauvin'].map((city) => (
              <span key={city} className="bg-primary-light border border-primary-light text-chrome px-4 py-2 rounded-sm">
                {city}, LA
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────────── */}
      <section className="bg-primary-dark section-padding text-center" aria-labelledby="about-cta-heading">
        <div className="container-wide">
          <h2 id="about-cta-heading" className="text-4xl md:text-5xl text-chrome mb-5">
            Let&apos;s Build <span className="text-accent">Something</span>
          </h2>
          <p className="text-chrome-dark text-lg max-w-xl mx-auto mb-10">
            Whether it&apos;s a leveling kit, a full custom build, or a major engine rebuild — Colin and the team
            are ready to talk it through.
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
