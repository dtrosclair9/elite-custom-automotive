'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const serviceMenu = [
  {
    title: 'Lift Kits & Suspension',
    cities: [
      { city: 'Lockport', href: '/services/lift-kits-suspension-lockport-la' },
      { city: 'Houma', href: '/services/lift-kits-suspension-houma-la' },
      { city: 'Thibodaux', href: '/services/lift-kits-suspension-thibodaux-la' },
    ],
  },
  {
    title: 'Engine & Trans Service',
    cities: [
      { city: 'Lockport', href: '/services/engine-rebuild-transmission-service-lockport-la' },
      { city: 'Houma', href: '/services/engine-rebuild-transmission-service-houma-la' },
      { city: 'Thibodaux', href: '/services/engine-rebuild-transmission-service-thibodaux-la' },
    ],
  },
  {
    title: 'Custom Wheels & Tires',
    cities: [
      { city: 'Lockport', href: '/services/custom-wheels-tires-lockport-la' },
      { city: 'Houma', href: '/services/custom-wheels-tires-houma-la' },
      { city: 'Thibodaux', href: '/services/custom-wheels-tires-thibodaux-la' },
    ],
  },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const servicesRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
    setServicesOpen(false)
  }, [pathname])

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (servicesRef.current && !servicesRef.current.contains(e.target as Node)) {
        setServicesOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <header
      className={`bg-primary-dark/95 backdrop-blur-sm sticky top-0 z-50 border-b transition-all duration-300 ${
        scrolled ? 'border-accent/40 shadow-lg shadow-black/40' : 'border-primary-light'
      }`}
    >
      <div className="container-wide">
        <div className="flex items-center justify-between h-20">
          {/* Wordmark */}
          <Link href="/" className="flex items-center shrink-0" aria-label="Elite Custom Automotive – Home">
            <span className="font-display uppercase tracking-widest leading-tight">
              <span className="block text-chrome text-base sm:text-lg">Elite Custom</span>
              <span className="block text-accent text-base sm:text-lg">Automotive</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Main navigation">
            <Link
              href="/"
              className={`text-sm font-display uppercase tracking-wider transition-colors ${
                pathname === '/' ? 'text-accent' : 'text-chrome hover:text-accent'
              }`}
            >
              Home
            </Link>

            {/* Services Dropdown */}
            <div ref={servicesRef} className="relative">
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                onMouseEnter={() => setServicesOpen(true)}
                className={`text-sm font-display uppercase tracking-wider transition-colors flex items-center gap-1 ${
                  pathname.startsWith('/services') ? 'text-accent' : 'text-chrome hover:text-accent'
                }`}
                aria-expanded={servicesOpen}
                aria-haspopup="true"
              >
                Services
                <svg className={`w-3 h-3 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {servicesOpen && (
                <div
                  className="absolute top-full right-0 mt-2 w-[680px] bg-primary-dark border border-accent/30 rounded shadow-2xl p-6"
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <div className="grid grid-cols-3 gap-6">
                    {serviceMenu.map((group) => (
                      <div key={group.title}>
                        <h3 className="text-accent text-xs font-bold uppercase tracking-widest mb-3 pb-2 border-b border-primary-light">
                          {group.title}
                        </h3>
                        <ul className="space-y-2">
                          {group.cities.map((c) => (
                            <li key={c.href}>
                              <Link
                                href={c.href}
                                className="text-chrome hover:text-accent text-sm font-medium transition-colors block py-1"
                              >
                                {c.city}, LA
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                  <div className="mt-5 pt-4 border-t border-primary-light text-center">
                    <Link
                      href="/services"
                      className="text-chrome hover:text-accent text-sm font-display uppercase tracking-wider"
                    >
                      View All Services →
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/about"
              className={`text-sm font-display uppercase tracking-wider transition-colors ${
                pathname === '/about' ? 'text-accent' : 'text-chrome hover:text-accent'
              }`}
            >
              About
            </Link>

            <Link
              href="/contact"
              className={`text-sm font-display uppercase tracking-wider transition-colors ${
                pathname === '/contact' ? 'text-accent' : 'text-chrome hover:text-accent'
              }`}
            >
              Contact
            </Link>

            <a
              href="tel:+19852583831"
              className="btn-accent text-sm !py-2.5 !px-5 flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              (985) 258-3831
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            className="lg:hidden text-chrome p-2 rounded"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
          >
            {menuOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Nav */}
        {menuOpen && (
          <nav id="mobile-nav" className="lg:hidden border-t border-primary-light pb-6 pt-4" aria-label="Mobile navigation">
            <div className="flex flex-col gap-1">
              <Link href="/" className="px-3 py-3 text-sm font-display uppercase tracking-wider text-chrome hover:text-accent">
                Home
              </Link>

              <div className="px-3 py-2">
                <p className="text-accent text-xs font-bold uppercase tracking-widest mb-2">Services</p>
                {serviceMenu.map((group) => (
                  <div key={group.title} className="mb-3">
                    <p className="text-chrome-dark text-xs font-semibold uppercase tracking-wider mb-1.5">
                      {group.title}
                    </p>
                    <div className="pl-2 flex flex-col gap-1">
                      {group.cities.map((c) => (
                        <Link
                          key={c.href}
                          href={c.href}
                          className="text-chrome hover:text-accent text-sm py-1"
                        >
                          → {c.city}, LA
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
                <Link
                  href="/services"
                  className="text-accent hover:text-accent-light text-sm font-display uppercase tracking-wider mt-2 inline-block"
                >
                  View All Services
                </Link>
              </div>

              <Link href="/about" className="px-3 py-3 text-sm font-display uppercase tracking-wider text-chrome hover:text-accent">
                About
              </Link>
              <Link href="/contact" className="px-3 py-3 text-sm font-display uppercase tracking-wider text-chrome hover:text-accent">
                Contact
              </Link>
              <a
                href="tel:+19852583831"
                className="btn-accent text-sm text-center mt-3 mx-3 flex items-center justify-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                (985) 258-3831
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
