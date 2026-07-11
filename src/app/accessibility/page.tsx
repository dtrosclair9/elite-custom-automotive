import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: { absolute: 'Accessibility Statement | Elite Custom Automotive' },
  description:
    'Accessibility statement for Elite Custom Automotive in Lockport, LA. Our commitment to WCAG 2.2 AA and how to report an accessibility barrier.',
  alternates: { canonical: 'https://elitecustomauto.co/accessibility' },
  robots: { index: true, follow: true },
}

export default function AccessibilityPage() {
  return (
    <>
      {/* ── HERO ────────────────────────────────────────────────── */}
      <section className="bg-primary-dark py-20 md:py-24 text-chrome" aria-label="Accessibility hero">
        <div className="container-wide text-center">
          <p className="section-label">Legal</p>
          <h1 className="text-4xl md:text-5xl font-display uppercase mt-3 mb-3">
            Accessibility <span className="text-accent-text">Statement</span>
          </h1>
          <p className="text-chrome-dark text-sm">Last updated: July 11, 2026</p>
        </div>
      </section>

      {/* ── CONTENT ─────────────────────────────────────────────── */}
      <section className="section-padding bg-primary">
        <div className="container-wide max-w-3xl">
          <div>
            <p className="text-chrome-dark leading-relaxed text-lg">
              Elite Custom Automotive LLC is committed to making{' '}
              <strong className="text-chrome">elitecustomauto.co</strong> accessible to everyone, including people
              who use assistive technology such as screen readers, screen magnifiers, and keyboard-only navigation.
              We want every truck owner and driver in Bayou Country to be able to browse our services, view our
              builds, and reach out with ease.
            </p>

            <h2 className="text-chrome text-2xl font-display uppercase tracking-wide mt-10 mb-4">Our Commitment</h2>
            <p className="text-chrome-dark leading-relaxed">
              We aim to conform to the{' '}
              <strong className="text-chrome">Web Content Accessibility Guidelines (WCAG) 2.2, Level AA</strong>,
              published by the World Wide Web Consortium (W3C). These guidelines explain how to make web content
              more accessible for people with a wide range of disabilities, including visual, auditory, physical,
              speech, cognitive, and neurological differences.
            </p>

            <h2 className="text-chrome text-2xl font-display uppercase tracking-wide mt-10 mb-4">What We&apos;ve Done</h2>
            <p className="text-chrome-dark leading-relaxed">Steps we have taken to support accessibility include:</p>
            <ul className="text-chrome-dark space-y-1 list-disc pl-6 mt-2">
              <li>Color contrast that meets the WCAG AA minimum for body and interface text</li>
              <li>A &ldquo;Skip to main content&rdquo; link for keyboard and screen-reader users</li>
              <li>Visible keyboard focus indicators on links, buttons, and form fields</li>
              <li>Labels on every contact form field and descriptive text for images</li>
              <li>Semantic headings and landmark regions for clear document structure</li>
            </ul>

            <h2 className="text-chrome text-2xl font-display uppercase tracking-wide mt-10 mb-4">Ongoing Effort</h2>
            <p className="text-chrome-dark leading-relaxed">
              Accessibility is an ongoing effort, not a one-time fix. We review the site periodically and work to
              address barriers as we find them. If any part of this website is difficult to use, we want to hear
              about it so we can make it right.
            </p>

            <h2 className="text-chrome text-2xl font-display uppercase tracking-wide mt-10 mb-4">Report a Barrier</h2>
            <p className="text-chrome-dark leading-relaxed">
              If you run into an accessibility barrier on this site, or need information in a different format,
              please contact us. Let us know the page, what you were trying to do, and the problem you ran into,
              and we will do our best to help and to fix the issue.
            </p>
            <div className="bg-primary-light border border-primary-light rounded-sm p-6 mt-4 not-prose">
              <p className="text-chrome font-display uppercase tracking-wider mb-2">Elite Custom Automotive LLC</p>
              <p className="text-chrome-dark text-sm">5609 LA-1, Lockport, LA 70374</p>
              <p className="text-chrome-dark text-sm mt-2">
                Phone:{' '}
                <a href="tel:+19852583831" className="text-accent-text hover:text-chrome-light transition-colors">
                  (985) 258-3831
                </a>
              </p>
              <p className="text-chrome-dark text-sm">
                Email:{' '}
                <a
                  href="mailto:elitecustomautollc@gmail.com"
                  className="text-accent-text hover:text-chrome-light transition-colors"
                >
                  elitecustomautollc@gmail.com
                </a>
              </p>
            </div>

            <p className="text-chrome-dark leading-relaxed mt-8 text-sm">
              We aim to respond to accessibility feedback within a reasonable time.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
