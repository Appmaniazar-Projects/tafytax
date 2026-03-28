import { Analytics } from '@vercel/analytics/next';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { CalendlyWidget } from '@/components/calendly-widget';
import './globals.css';

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
});

export const metadata: Metadata = {
  title: 'Tafy Tax Consultants | Strategic Tax & Financial Advisory',
  description: 'Helping businesses navigate complex tax regulations, cross-border operations, and financial planning with expert advisory services.',
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
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        <Analytics />
        <CalendlyWidget />
      </body>
    </html>
  )
}
