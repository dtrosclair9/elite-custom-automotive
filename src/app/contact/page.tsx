import type { Metadata } from 'next'
import ContactForm from '@/components/ContactForm'
import { ogImage } from '@/lib/site'

export const metadata: Metadata = {
  title: { absolute: 'Contact Elite Custom Automotive | Lockport, LA' },
  description:
    'Contact Elite Custom Automotive in Lockport, LA for a free quote on lift kits, engine rebuilds, wheels, and auto repair. Call (985) 258-3831 or message us.',
  openGraph: {
    title: 'Contact Elite Custom Automotive | Lockport, LA',
    description: 'Get a free quote from Elite Custom Automotive. Call (985) 258-3831 or fill out our contact form.',
    url: 'https://elitecustomauto.co/contact',
    images: [ogImage],
  },
  alternates: { canonical: 'https://elitecustomauto.co/contact' },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: 'Contact Elite Custom Automotive',
  url: 'https://elitecustomauto.co/contact',
  description: 'Contact page for Elite Custom Automotive in Lockport, LA. Request a free quote.',
  mainEntity: {
    '@type': 'LocalBusiness',
    name: 'Elite Custom Automotive LLC',
    telephone: '+1-985-258-3831',
    email: 'elitecustomautollc@gmail.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '5609 LA-1',
      addressLocality: 'Lockport',
      addressRegion: 'LA',
      postalCode: '70374',
      addressCountry: 'US',
    },
    sameAs: ['https://www.facebook.com/profile.php?id=61573142575763'],
  },
}

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* ── HERO ────────────────────────────────────────────────── */}
      <section className="bg-primary-dark py-24 md:py-28 text-chrome" aria-label="Contact hero">
        <div className="container-wide text-center">
          <p className="section-label">Get in Touch</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display uppercase mt-3 mb-5">
            Contact <span className="text-accent">Elite</span>
          </h1>
          <p className="text-chrome-dark text-lg max-w-xl mx-auto leading-relaxed">
            Ready to build something? Reach out for a free quote. Colin and the team will get back to you fast.
          </p>
        </div>
      </section>

      {/* ── CONTACT GRID ────────────────────────────────────────── */}
      <section className="section-padding bg-primary" aria-labelledby="contact-form-heading">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl md:text-4xl text-chrome mb-7">
                Reach Out <span className="text-accent">Directly</span>
              </h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-sm bg-accent/15 border border-accent/40 flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-accent font-display uppercase tracking-widest text-xs mb-1">Phone</p>
                    <a href="tel:+19852583831" className="text-chrome hover:text-accent-light transition-colors text-xl font-display tracking-wider">
                      (985) 258-3831
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-sm bg-accent/15 border border-accent/40 flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="min-w-0">
                    <p className="text-accent font-display uppercase tracking-widest text-xs mb-1">Email</p>
                    <a href="mailto:elitecustomautollc@gmail.com" className="text-chrome hover:text-accent-light transition-colors break-all">
                      elitecustomautollc@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-sm bg-accent/15 border border-accent/40 flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-accent font-display uppercase tracking-widest text-xs mb-1">Shop Location</p>
                    <p className="text-chrome">5609 LA-1, Lockport, LA 70374</p>
                    <p className="text-chrome-dark text-sm mt-1">Serving Lafourche &amp; Terrebonne Parish</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-sm bg-accent/15 border border-accent/40 flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-accent font-display uppercase tracking-widest text-xs mb-1">Hours</p>
                    <p className="text-chrome">Monday – Friday</p>
                    <p className="text-chrome">7:30 AM – 5:00 PM</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-sm bg-accent/15 border border-accent/40 flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-accent font-display uppercase tracking-widest text-xs mb-1">Facebook</p>
                    <a
                      href="https://www.facebook.com/profile.php?id=61573142575763"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-chrome hover:text-accent-light transition-colors"
                    >
                      Elite Custom Automotive, LLC
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-10 bg-primary-light border border-primary-light rounded-sm p-6">
                <h3 className="text-chrome font-display uppercase tracking-wider text-base mb-2">Free Quotes</h3>
                <p className="text-chrome-dark text-sm leading-relaxed">
                  Every quote is free and honest. Colin walks through your truck or vehicle, listens to what you want,
                  and gives you a real price with no upsell pressure.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <h2 id="contact-form-heading" className="text-3xl md:text-4xl text-chrome mb-7">
                Send Us a <span className="text-accent">Message</span>
              </h2>
              <div className="bg-primary-light border border-primary-light rounded-sm p-8">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
