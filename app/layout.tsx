import type { Metadata } from 'next'
import { Barlow_Condensed, IBM_Plex_Mono, Crimson_Pro } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const barlowCondensed = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-barlow',
})

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-ibm-mono',
})

const crimsonPro = Crimson_Pro({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-crimson',
})

export const metadata: Metadata = {
  title: 'Brimatco | Precision Gear-Driven Solutions Since 1973',
  description:
    'Custom-engineered gear-driven offset wrenches and precision tooling for aerospace and automotive applications. Uni-body machined housings, in-house heat treating, and lifetime B-Series part re-ordering.',
  keywords: [
    'gear driven offset wrench',
    'custom wrench blades for aerospace',
    'Brimatco',
    'precision tooling',
    'B578',
    'aerospace tools',
  ],
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${barlowCondensed.variable} ${ibmPlexMono.variable} ${crimsonPro.variable} font-sans antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  )
}
