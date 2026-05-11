import type { Metadata } from 'next';
import { Inter, Fira_Code } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TechBackground from '@/components/TechBackground';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });
const firaCode = Fira_Code({ subsets: ['latin'], variable: '--font-mono' });

export const metadata: Metadata = {
  title: 'Code Ascent | Global Software Development Company',
  description: 'Code Ascent is a top-tier software development company delivering custom web apps, mobile apps, ERP solutions, and cloud infrastructure for businesses worldwide. Turn your ideas into powerful digital products.',
  keywords: [
    'software development company',
    'custom software development',
    'mobile app development',
    'web application development',
    'ERP solutions',
    'software house',
    'IT company USA',
    'software company Canada',
    'software development Austria',
    'software house Pakistan',
    'React development',
    'Next.js development',
    'Flutter app development',
    'cloud infrastructure',
    'dedicated development team',
    'enterprise software',
  ],
  authors: [{ name: 'Code Ascent', url: 'https://codeascent.dev' }],
  creator: 'Code Ascent',
  publisher: 'Code Ascent',
  metadataBase: new URL('https://codeascent.dev'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Code Ascent | Professional Software Development Company',
    description: 'We build exceptional digital products. Custom software, mobile apps, web platforms & ERP solutions for businesses worldwide.',
    url: 'https://codeascent.dev',
    siteName: 'Code Ascent',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Code Ascent | Software Development Company',
    description: 'Custom software, mobile apps, web platforms & ERP solutions. Serving clients across the globe.',
    creator: '@codeascent',
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
  verification: {
    google: 'your-google-verification-code',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Code Ascent',
  url: 'https://codeascent.dev',
  logo: 'https://codeascent.dev/logo.png',
  description: 'Professional software development company specializing in custom web apps, mobile apps, ERP solutions, and cloud infrastructure.',
  email: 'hello@codeascent.dev',
  telephone: '+92-341-5630267',
  foundingDate: '2015',
  numberOfEmployees: { '@type': 'QuantitativeValue', value: 50 },
  areaServed: 'Worldwide',
  serviceArea: { '@type': 'GeoCircle', description: 'Worldwide — remote-first delivery to clients across all continents.' },
  sameAs: [
    'https://linkedin.com/company/codeascent',
    'https://github.com/codeascent',
    'https://twitter.com/codeascent',
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Software Development Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Custom Software Development' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Mobile App Development' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Web Application Development' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'ERP Solutions' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Cloud Infrastructure' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Dedicated Development Teams' } },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${firaCode.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <TechBackground />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
