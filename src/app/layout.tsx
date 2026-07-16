import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { LocalBusinessSchema } from '@/components/StructuredData';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://flashphotofilms.com'),
  title: {
    default: 'Flash Photo Films - Professional Photography & Videography',
    template: '%s | Flash Photo Films',
  },
  description: 'Professional photography and videography services for capturing life\'s precious moments',
  keywords: ['photography', 'videography', 'wedding', 'portrait', 'events', 'professional'],
  authors: [{ name: 'Flash Photo Films' }],
  creator: 'Flash Photo Films',
  publisher: 'Flash Photo Films',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://flashphotofilms.com',
    title: 'Flash Photo Films - Professional Photography & Videography',
    description: 'Professional photography and videography services for capturing life\'s precious moments',
    siteName: 'Flash Photo Films',
    images: [
      {
        url: '/opengraph-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Flash Photo Films - Professional Photography & Videography',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Flash Photo Films - Professional Photography & Videography',
    description: 'Professional photography and videography services for capturing life\'s precious moments',
    images: ['/opengraph-image.jpg'],
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
    google: 'your-google-site-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Preconnect to Google Fonts for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        
        {/* Preload critical resources */}
        <link rel="preload" href="/api/placeholder/1200/630" as="image" />
        
        {/* Analytics script - replace with your analytics provider */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-XXXXXXXXXX');
            `,
          }}
        />
      </head>
      <body className={inter.className}>
        <LocalBusinessSchema />
        <Navbar />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}