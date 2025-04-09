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
                    '/consultant',
                    '/consultant/*',
                ],
                disallow: [
                    '/admin',
                    '/admin/*',
                    '/api/*',
                    '/sign-in',
                    '/sign-up',
                    'https://clerk.evro.dev/*',
                ]
            },
            {
                userAgent: 'Googlebot',
                allow: '/',
                disallow: ['https://clerk.evro.dev/*'],
                crawlDelay: 1
            },
            {
                userAgent: 'Bingbot',
                allow: '/',
                disallow: ['https://clerk.evro.dev/*'],
                crawlDelay: 2
            }
        ],
        sitemap: 'https://www.evro.dev/sitemap.xml',
        host: 'https://www.evro.dev'
    }
}