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
  title: 'Abroad Visions - Honest MBBS Abroad Advisory for NEET Students',
  verification: {
    google: 'JeO2dAG8Mv-vkzwsqs9zP6d0uZxLhobPs_X23ou8At8',
  },
  description:
    'NMC-approved MBBS abroad guidance for Indian students. Compare 8 countries, calculate real all-inclusive costs (Rs 22-50 lakhs), check NEET eligibility. Recommendations based on real FMGE data - not commission.',
  keywords: [
    'MBBS abroad',
    'MBBS abroad for Indian students',
    'MBBS abroad total cost',
    'MBBS abroad fees in rupees',
    'NMC approved universities abroad',
    'FMGE pass rate university wise',
    'MBBS in Russia fees',
    'MBBS in Kyrgyzstan fees',
    'MBBS in Kazakhstan fees',
    'MBBS in Uzbekistan fees',
    'MBBS in Georgia fees',
    'MBBS in Armenia fees',
    'MBBS in Bangladesh fees',
    'MBBS in Nepal fees',
    'NEET MBBS abroad 2025',
    'free MBBS counselling India',
    'MBBS abroad consultancy India',
    'best country for MBBS abroad Indian students',
  ],
  openGraph: {
    title: 'Abroad Visions - Honest MBBS Abroad Advisory',
    description:
      'Your child can become a doctor. NMC-recognised MBBS abroad - real FMGE data, transparent all-inclusive fees, free counselling for NEET students.',
    type: 'website',
    url: 'https://abroadvisions.com',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Abroad Visions - Honest MBBS Abroad Advisory',
    description: 'NMC-approved MBBS abroad guidance based on real FMGE data. Free counselling for NEET students. Compare 8 countries.',
  },
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://abroadvisions.com' },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '48x48' },
      { url: '/icon.png', sizes: '512x512', type: 'image/png' },
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