import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://biodental-dr-fetnaci.com'
  
  if (!process.env.NEXT_PUBLIC_SITE_URL) {
    console.warn('⚠️ NEXT_PUBLIC_SITE_URL is not defined in .env.local')
  }
  
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/'],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}

