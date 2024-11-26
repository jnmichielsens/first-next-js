import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Melange Traiteur - Exceptional Catering Services',
  description:
    'Exceptional catering for extraordinary moments. Professional catering services in Brussels.',
  keywords:
    'Melange, Traiteur, Catering, Services, Brussels, Events, Weddings, Parties, Corporate, Professional, Moments, Ninove',
  authors: { name: 'jnm' },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className='scroll-smooth'>
      <body className={`${inter.className} bg-stone-50 text-gray-900`}>
        <main>
          <Navbar />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
