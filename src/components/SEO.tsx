'use client';

import Head from 'next/head';

interface SEOProps {
  title: string;
  description?: string;
  keywords?: string[];
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  noIndex?: boolean;
}

const SEO = ({
  title,
  description = 'Professional photography and videography services for capturing life\'s precious moments',
  keywords = ['photography', 'videography', 'wedding', 'portrait', 'events'],
  canonicalUrl,
  ogImage = '/og-image.jpg',
  ogType = 'website',
  twitterCard = 'summary_large_image',
  noIndex = false,
}: SEOProps) => {
  const siteName = 'Flash Photo Films';
  const baseUrl = typeof window !== 'undefined' ? window.location.origin : 'https://flashphotofilms.com';
  const fullCanonicalUrl = canonicalUrl || baseUrl;

  return (
    <Head>
      <title>{title} - {siteName}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />
      {noIndex && <meta name="robots" content="noindex" />}
      
      {/* Open Graph */}
      <meta property="og:title" content={`${title} - ${siteName}`} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullCanonicalUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content={siteName} />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={`${title} - ${siteName}`} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={fullCanonicalUrl} />
      
      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default SEO;