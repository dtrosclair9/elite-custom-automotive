import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: { absolute: 'Privacy Policy | Elite Custom Automotive' },
  description:
    'Privacy policy for Elite Custom Automotive in Lockport, LA. How we collect, use, and protect information submitted through our website.',
  alternates: { canonical: 'https://elitecustomauto.co/privacy' },
  robots: { index: true, follow: true },
}

export default function PrivacyPage() {
  return (
    <>
      {/* ── HERO ────────────────────────────────────────────────── */}
      <section className="bg-primary-dark py-20 md:py-24 text-chrome" aria-label="Privacy hero">
        <div className="container-wide text-center">
          <p className="section-label">Legal</p>
          <h1 className="text-4xl md:text-5xl font-display uppercase mt-3 mb-3">
            Privacy <span className="text-accent">Policy</span>
          </h1>
          <p className="text-chrome-dark text-sm">Last updated: May 18, 2026</p>
        </div>
      </section>

      {/* ── CONTENT ─────────────────────────────────────────────── */}
      <section className="section-padding bg-primary">
        <div className="container-wide max-w-3xl">
          <div>

            <p className="text-chrome-dark leading-relaxed text-lg">
              Elite Custom Automotive LLC (&ldquo;Elite,&rdquo; &ldquo;we,&rdquo; &ldquo;us&rdquo;) respects your privacy. This policy explains what
              information we collect through <strong className="text-chrome">elitecustomauto.co</strong>, how we use it, and the
              third-party services involved.
            </p>

            <h2 className="text-chrome text-2xl font-display uppercase tracking-wide mt-10 mb-4">Information We Collect</h2>
            <p className="text-chrome-dark leading-relaxed">When you contact us through the website, we collect:</p>
            <ul className="text-chrome-dark space-y-1 list-disc pl-6 mt-2">
              <li>Your name</li>
              <li>Phone number (optional)</li>
              <li>Email address</li>
              <li>Service you&apos;re interested in</li>
              <li>The message you send us</li>
            </ul>
            <p className="text-chrome-dark leading-relaxed mt-4">
              We also automatically collect basic technical information that your browser shares — such as IP address,
              browser type, and pages visited — to keep the site running and diagnose issues.
            </p>

            <h2 className="text-chrome text-2xl font-display uppercase tracking-wide mt-10 mb-4">How We Use Your Information</h2>
            <p className="text-chrome-dark leading-relaxed">We use the information you submit to:</p>
            <ul className="text-chrome-dark space-y-1 list-disc pl-6 mt-2">
              <li>Respond to your inquiry and follow up about your vehicle or build</li>
              <li>Provide quotes and schedule service appointments</li>
              <li>Communicate updates about ongoing work</li>
            </ul>
            <p className="text-chrome-dark leading-relaxed mt-4">
              <strong className="text-chrome">We do not sell, rent, or share your personal information with third parties for marketing purposes.</strong>
            </p>

            <h2 className="text-chrome text-2xl font-display uppercase tracking-wide mt-10 mb-4">Third-Party Services</h2>
            <p className="text-chrome-dark leading-relaxed">This website uses the following third-party services:</p>
            <ul className="text-chrome-dark space-y-2 list-disc pl-6 mt-2">
              <li>
                <strong className="text-chrome">Formspree</strong> — processes contact form submissions and forwards them to our business email.
              </li>
              <li>
                <strong className="text-chrome">Vercel</strong> — hosts the website. Vercel collects standard server-level technical data.
              </li>
              <li>
                <strong className="text-chrome">Google Fonts</strong> — serves typography used on the site. Google may log basic request data.
              </li>
              <li>
                <strong className="text-chrome">Facebook</strong> — embedded links to our Facebook page. Facebook may track activity per its own policies.
              </li>
            </ul>

            <h2 className="text-chrome text-2xl font-display uppercase tracking-wide mt-10 mb-4">Cookies &amp; Tracking</h2>
            <p className="text-chrome-dark leading-relaxed">
              This website does not use marketing or advertising cookies. Some basic cookies may be used by the
              third-party services listed above to keep the site functional.
            </p>

            <h2 className="text-chrome text-2xl font-display uppercase tracking-wide mt-10 mb-4">Data Retention</h2>
            <p className="text-chrome-dark leading-relaxed">
              We retain contact form submissions only as long as needed to provide service and follow up on your inquiry.
              You can request deletion of your information at any time by emailing us.
            </p>

            <h2 className="text-chrome text-2xl font-display uppercase tracking-wide mt-10 mb-4">Your Rights</h2>
            <p className="text-chrome-dark leading-relaxed">
              You can request a copy of the information we have about you, ask us to correct it, or ask us to delete it.
              Contact us using the information below.
            </p>

            <h2 className="text-chrome text-2xl font-display uppercase tracking-wide mt-10 mb-4">Contact</h2>
            <p className="text-chrome-dark leading-relaxed">For privacy questions, reach us at:</p>
            <div className="bg-primary-light border border-primary-light rounded-sm p-6 mt-4 not-prose">
              <p className="text-chrome font-display uppercase tracking-wider mb-2">Elite Custom Automotive LLC</p>
              <p className="text-chrome-dark text-sm">5609 LA-1, Lockport, LA 70374</p>
              <p className="text-chrome-dark text-sm mt-2">
                Phone: <a href="tel:+19852581414" className="text-accent hover:text-accent-light">(985) 258-1414</a>
              </p>
              <p className="text-chrome-dark text-sm">
                Email: <a href="mailto:elitecustomautollc@gmail.com" className="text-accent hover:text-accent-light">elitecustomautollc@gmail.com</a>
              </p>
            </div>

            <h2 className="text-chrome text-2xl font-display uppercase tracking-wide mt-10 mb-4">Changes to This Policy</h2>
            <p className="text-chrome-dark leading-relaxed">
              We may update this policy from time to time. Changes will be reflected by an updated &ldquo;Last updated&rdquo;
              date at the top of this page.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
