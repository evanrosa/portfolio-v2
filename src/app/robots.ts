import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: '*',
                allow: [
                    '/',
                    '/blog',
                    '/blog/*',
                ],
                disallow: [
                    '/admin',
                    '/admin/*',
                    '/api/*',
                    '/sign-in',
                    '/sign-up',
                ]
            },
            {
                // Special rules for Google
                userAgent: 'Googlebot',
                allow: '/',
                // Add shorter crawl delay for Google
                crawlDelay: 1
            },
            {
                // Special rules for Bing
                userAgent: 'Bingbot',
                allow: '/',
                crawlDelay: 2
            }
        ],
        sitemap: 'https://www.evro.dev/sitemap.xml',
        host: 'https://www.evro.dev'
    }
} 