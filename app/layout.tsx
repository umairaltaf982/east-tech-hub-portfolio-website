import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import localFont from 'next/font/local';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import Reveal from '@/components/Reveal';
import { site } from '@/lib/site';
import './globals.css';

/* Manrope is self-hosted (SIL Open Font License 1.1) so builds never depend on
   reaching Google Fonts. Variable file covers weights 200-800. */
const manrope = localFont({
  src: [{ path: './fonts/Manrope-Variable.woff2', weight: '200 800', style: 'normal' }],
  variable: '--font-manrope',
  display: 'swap',
  fallback: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: 'East Tech Hub — Software, marketing, truck dispatch & operations',
    template: '%s | East Tech Hub',
  },
  description:
    'Software development in Python, Django, React, Next.js, Node, Laravel, Flutter and React Native, plus Meta and Google Ads, SEO and Shopify, 24/7 US truck dispatching, freight factoring introductions, UK taxi dispatch and Amazon e-commerce operations. Run from Lahore for clients in six countries.',
  keywords: [
    'software development company Lahore', 'custom software development', 'web application development',
    'mobile app development', 'Django development', 'Python development', 'React development',
    'Next.js development', 'Node.js development', 'Laravel development', 'React Native app development',
    'Flutter app development', 'API development', 'local SEO', 'Meta ads management', 'Google Ads management',
    'truck dispatch services', 'truck dispatching company', 'owner operator dispatch', 'load board dispatching',
    'freight rate negotiation', 'freight factoring', 'taxi dispatch outsourcing', 'remote dispatch UK',
    'Meta Ads agency', 'Facebook Ads management', 'Shopify development', 'Shopify store setup',
    'Amazon PPC management', 'Cordic', 'Autocab', 'Cab9',
  ],
  openGraph: {
    type: 'website',
    siteName: site.name,
    url: site.url,
    title: 'East Tech Hub — operations partner for transport, freight and commerce',
    description:
      'We build web, mobile and custom software, and run the dispatch and e-commerce desks behind businesses in the UK, US, Canada, Ireland and the Gulf.',
    images: [{ url: '/images/hero-team.jpg', width: 1500, height: 1001, alt: 'The East Tech Hub operations floor' }],
  },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: site.name,
    url: site.url,
    logo: `${site.url}/images/logo-dark.png`,
    email: site.email,
    telephone: site.phone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: site.address.line1,
      addressLocality: 'Lahore',
      addressRegion: 'Punjab',
      addressCountry: 'PK',
    },
    areaServed: site.countries,
    sameAs: [site.socials.facebook, site.socials.instagram, site.socials.linkedin],
  };

  return (
    <html lang="en" className={manrope.variable}>
      {/* suppressHydrationWarning covers ONLY <body>'s own attributes. Browser
          extensions (ColorZilla, Grammarly, dark-mode tools) inject attributes
          here before React hydrates, which is not a bug in this app. Mismatches
          inside the page are still reported normally. */}
      <body suppressHydrationWarning>
        <a className="skip" href="#main">Skip to content</a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <WhatsAppButton />
        <Reveal />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
