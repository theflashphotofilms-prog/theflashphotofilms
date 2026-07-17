// Environment configuration
const config = {
  development: {
    apiUrl: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api',
    analyticsId: process.env.NEXT_PUBLIC_ANALYTICS_ID || '',
    siteUrl: 'http://localhost:3000',
    isProduction: false,
  },
  production: {
    apiUrl: process.env.NEXT_PUBLIC_API_URL || 'https://api.flashphotofilms.com',
    analyticsId: process.env.NEXT_PUBLIC_ANALYTICS_ID || 'G-XXXXXXXXXX',
    siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://flashphotofilms.com',
    isProduction: true,
  },
  staging: {
    apiUrl: process.env.NEXT_PUBLIC_API_URL || 'https://staging.flashphotofilms.com/api',
    analyticsId: process.env.NEXT_PUBLIC_ANALYTICS_ID || 'G-YYYYYYYYYY',
    siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://staging.flashphotofilms.com',
    isProduction: false,
  },
};

// Type for our environment keys
type EnvironmentKey = keyof typeof config;

// Determine the current environment
const getCurrentEnvironment = (): EnvironmentKey => {
  if (process.env.NODE_ENV === 'production') {
    if (typeof window !== 'undefined') {
      // Client-side environment detection
      const hostname = window.location.hostname;
      if (hostname.includes('staging')) return 'staging';
      if (hostname.includes('localhost') || hostname.includes('127.0.0.1')) return 'development';
      return 'production';
    } else {
      // Server-side environment detection
      return process.env.VERCEL_ENV === 'preview' ? 'staging' : 'production';
    }
  }
  return (process.env.NODE_ENV || 'development') as EnvironmentKey;
};

const currentEnv = getCurrentEnvironment();
export default config[currentEnv];

// Export environment-specific values
export const IS_PRODUCTION = config[currentEnv].isProduction;
export const SITE_URL = config[currentEnv].siteUrl;
export const ANALYTICS_ID = config[currentEnv].analyticsId;