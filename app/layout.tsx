import type { Metadata } from 'next';
import { Inter, Fira_Code } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TechBackground from '@/components/TechBackground';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });
const firaCode = Fira_Code({ subsets: ['latin'], variable: '--font-mono' });

export const metadata: Metadata = {
  title: 'Code Ascent | Digital Experiences',
  description: 'We build exceptional digital experiences. From mobile apps to enterprise ERP solutions, we transform ideas into reality.',
  openGraph: {
    title: 'Code Ascent | Digital Experiences',
    description: 'We build exceptional digital experiences. From mobile apps to enterprise ERP solutions, we transform ideas into reality.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${firaCode.variable}`}>
      <body>
        <TechBackground />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
