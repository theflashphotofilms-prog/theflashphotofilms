'use client';

import { useEffect } from 'react';

interface StructuredDataType {
  '@context': string;
  '@type': string;
  [key: string]: any;
}

const StructuredData = ({ data }: { data: StructuredDataType }) => {
  useEffect(() => {
    // Ensure script is only added on client side
  }, []);

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
};

export default StructuredData;

// Example usage for local business schema
export const LocalBusinessSchema = () => {
  const localBusinessData = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Flash Photo Films',
    image: 'https://flashphotofilms.com/logo.png',
    '@id': 'https://flashphotofilms.com',
    url: 'https://flashphotofilms.com',
    telephone: '+1-123-456-7890',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '123 Main Street',
      addressLocality: 'San Francisco',
      addressRegion: 'CA',
      postalCode: '94105',
      addressCountry: 'US'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 37.7749,
      longitude: -122.4194
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '18:00'
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '10:00',
        closes: '16:00'
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Sunday',
        opens: 'Closed'
      }
    ],
    areaServed: [
      {
        '@type': 'City',
        name: 'San Francisco'
      },
      {
        '@type': 'City',
        name: 'Oakland'
      },
      {
        '@type': 'City',
        name: 'Berkeley'
      }
    ],
    priceRange: '$$$',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '120'
    }
  };

  return <StructuredData data={localBusinessData} />;
};