import type { Metadata } from 'next'
import { Geist } from 'next/font/google'
import { Fraunces } from 'next/font/google'
import './globals.css'
import { GoogleTagManager } from '@next/third-parties/google'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const fraunces = Fraunces({
  variable: '--font-display',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'Abroad Visions — Honest MBBS Abroad Advisory for NEET Students',
  description:
    'NMC-approved MBBS abroad guidance for Indian students and parents. Compare 7 countries, calculate total costs, check NEET eligibility, and get free counselling. Recommendations based on real FMGE data — not commission.',
  keywords: [
    'MBBS abroad',
    'MBBS abroad for Indian students',
    'NEET MBBS abroad',
    'NMC approved universities abroad',
    'FMGE pass rate',
    'MBBS Russia',
    'MBBS Georgia',
    'MBBS Uzbekistan',
    'MBBS Kyrgyzstan',
    'MBBS Nepal',
    'free MBBS counselling India',
    'MBBS abroad consultancy',
  ],
  openGraph: {
    title: 'Abroad Visions — Honest MBBS Abroad Advisory',
    description:
      'Your child can become a doctor. NMC-recognised MBBS abroad — real FMGE data, transparent fees, free counselling.',
    type: 'website',
    url: 'https://abroadvisions.com',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Abroad Visions — Honest MBBS Abroad Advisory',
    description: 'NMC-approved MBBS abroad guidance based on real FMGE data. Free counselling for NEET students.',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://abroadvisions.com',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${fraunces.variable} bg-background`}
    >
      <body className="font-sans antialiased">
               <GoogleTagManager gtmId="GTM-N3RGS23Z" />
         {children}
      </body>
    </html>
  )
}
