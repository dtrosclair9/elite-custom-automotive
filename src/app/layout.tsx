import type { Metadata } from 'next'
import { Inter, Oswald } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const oswald = Oswald({
  subsets: ['latin'],
  variable: '--font-oswald',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://elitecustomauto.co'),
  title: {
    default: 'Elite Custom Automotive | Lift Kits & Auto Repair in Lockport, LA',
    template: '%s | Elite Custom Automotive',
  },
  description:
    "Elite Custom Automotive is Lockport, Louisiana's shop for custom lift kits, suspension, engine rebuilds, transmission swap service, custom wheels and tires, and full-service auto repair. Backed by over a decade of finishing experience from sister business CTR Pro Coat.",
  keywords: [
    'lift kits Lockport LA',
    'custom lift kit installation Louisiana',
    'engine rebuild Lockport',
    'transmission service Houma',
    'custom wheels and tires Thibodaux',
    'auto repair Lafourche Parish',
    'BDS lift kit installer Louisiana',
    'Cognito suspension Lockport',
    'Elite Custom Automotive',
  ],
  authors: [{ name: 'Elite Custom Automotive LLC' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://elitecustomauto.co',
    siteName: 'Elite Custom Automotive',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Elite Custom Automotive – Lockport, LA',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  other: {
    'geo.region': 'US-LA',
    'geo.placename': 'Lockport',
    'geo.position': '29.6446;-90.5414',
    ICBM: '29.6446, -90.5414',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${oswald.variable}`}>
      <body className="font-sans antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
