import { GoogleAnalytics } from '@next/third-parties/google';
import { Analytics } from '@vercel/analytics/next';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { CalendlyWidget } from '@/components/calendly-widget';
import './globals.css';
import Script from "next/script";

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
});

export const metadata: Metadata = {
  metadataBase: new URL('https://tafytax.com'),
  title: 'Tafy Tax Consultants | Strategic Tax & Financial Advisory',
  description:
    'Professional taxation and financial advisory services for businesses and individuals. Cross-border tax, compliance, and strategic planning.',
  openGraph: {
    title: 'Tafy Tax Consultants',
    description:
      'Professional taxation and financial advisory services for businesses and individuals.',
    url: 'https://tafytax.com',
    siteName: 'Tafy Tax Consultants',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Tafy Tax Consultants',
      },
    ],
    locale: 'en_ZA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tafy Tax Consultants',
    description:
      'Professional taxation and financial advisory services for businesses and individuals.',
    images: ['/og-image.jpg'],
  },
  icons: {
    icon: [
      {
        url: '/images/logo.png',
        type: 'image/png',
      },
    ],
    apple: {
      url: '/images/logo.png',
      sizes: '180x180',
      type: 'image/png',
    },
  },
}

const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/logo.png" sizes="any" />
        <link rel="icon" href="/images/logo.png" sizes="32x32" />
        <link rel="icon" href="/images/logo.png" sizes="16x16" />
        <link rel="apple-touch-icon" href="/images/logo.png" />
        <link rel="shortcut icon" href="/images/logo.png" />
        <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" />
      </head>
              {/* Google Analytics */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=G-TF2P5JLK5K`}
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-TF2P5JLK5K');
          `}
        </Script>
      
      <body suppressHydrationWarning className={`${inter.variable} font-sans antialiased`}>
        {children}
        <Analytics />
        <CalendlyWidget />
        {gaId ? <GoogleAnalytics gaId={gaId} /> : null}
      </body>
    </html>
  )
}
