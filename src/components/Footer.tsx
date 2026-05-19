import Link from 'next/link'
import Image from 'next/image'

const liftKitLinks = [
  { href: '/services/lift-kits-suspension-lockport-la', label: 'Lockport' },
  { href: '/services/lift-kits-suspension-houma-la', label: 'Houma' },
  { href: '/services/lift-kits-suspension-thibodaux-la', label: 'Thibodaux' },
]

const engineLinks = [
  { href: '/services/engine-rebuild-transmission-service-lockport-la', label: 'Lockport' },
  { href: '/services/engine-rebuild-transmission-service-houma-la', label: 'Houma' },
  { href: '/services/engine-rebuild-transmission-service-thibodaux-la', label: 'Thibodaux' },
]

const wheelsLinks = [
  { href: '/services/custom-wheels-tires-lockport-la', label: 'Lockport' },
  { href: '/services/custom-wheels-tires-houma-la', label: 'Houma' },
  { href: '/services/custom-wheels-tires-thibodaux-la', label: 'Thibodaux' },
]

export default function Footer() {
  return (
    <footer className="bg-primary-dark text-chrome border-t border-primary-light" role="contentinfo">
      <div className="container-wide py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <Image
                src="/images/logo.png"
                alt="Elite Custom Automotive"
                width={80}
                height={80}
                className="h-20 w-auto"
              />
              <div className="font-display uppercase tracking-widest text-chrome leading-tight">
                Elite Custom
                <br />
                <span className="text-accent">Automotive</span>
              </div>
            </div>
            <p className="text-chrome-dark text-sm leading-relaxed max-w-sm mb-4">
              Lockport&apos;s shop for custom lift kits, suspension, engine rebuilds, transmission swap service,
              custom wheels and tires, and full-service auto repair. Owned by Colin Richard — also the owner of CTR Pro Coat ceramic coating.
            </p>
            <address className="not-italic text-sm space-y-1 text-chrome-dark">
              <p>5609 LA-1, Lockport, LA 70374</p>
              <p>Mon–Fri 7:30am – 5:00pm</p>
            </address>
            <a
              href="https://www.facebook.com/profile.php?id=61573142575763"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-5 text-chrome-dark hover:text-accent transition-colors text-sm font-display uppercase tracking-wider"
              aria-label="Elite Custom Automotive on Facebook"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              Follow on Facebook
            </a>
          </div>

          {/* Lift Kits */}
          <div>
            <h3 className="text-accent font-display uppercase tracking-widest text-xs mb-4">Lift Kits</h3>
            <ul className="space-y-2">
              {liftKitLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-chrome-dark hover:text-accent text-sm transition-colors">
                    {link.label}, LA
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Engine & Trans */}
          <div>
            <h3 className="text-accent font-display uppercase tracking-widest text-xs mb-4">Engine & Trans</h3>
            <ul className="space-y-2">
              {engineLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-chrome-dark hover:text-accent text-sm transition-colors">
                    {link.label}, LA
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Wheels & Tires + Contact */}
          <div>
            <h3 className="text-accent font-display uppercase tracking-widest text-xs mb-4">Wheels & Tires</h3>
            <ul className="space-y-2 mb-6">
              {wheelsLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-chrome-dark hover:text-accent text-sm transition-colors">
                    {link.label}, LA
                  </Link>
                </li>
              ))}
            </ul>

            <h3 className="text-accent font-display uppercase tracking-widest text-xs mb-3">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="tel:+19852581414" className="text-chrome-dark hover:text-accent transition-colors flex items-center gap-2">
                  <svg className="w-4 h-4 text-accent shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  (985) 258-1414
                </a>
              </li>
              <li>
                <a href="mailto:elitecustomautollc@gmail.com" className="text-chrome-dark hover:text-accent transition-colors flex items-start gap-2 break-all">
                  <svg className="w-4 h-4 text-accent shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="text-xs">elitecustomautollc@gmail.com</span>
                </a>
              </li>
              <li>
                <Link href="/gallery" className="text-chrome-dark hover:text-accent text-sm transition-colors">
                  View Our Builds
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-chrome-dark hover:text-accent text-sm transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-light mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-chrome-dark">
          <p>&copy; {new Date().getFullYear()} Elite Custom Automotive LLC. All rights reserved.</p>
          <p>Lockport, Louisiana | Lafourche & Terrebonne Parish</p>
        </div>
      </div>
    </footer>
  )
}
