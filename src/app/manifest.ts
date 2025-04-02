import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'Evan Rosa | Data Engineer Portfolio & Blog',
        short_name: 'EvRo.Dev',
        description: 'Data Engineering insights, tutorials, and guides on Kafka, Spark, Flink, SQLMesh, and more by Evan Rosa.',
        start_url: '/',
        display: 'standalone',
        background_color: '#1e293b', // slate-900 for dark mode
        theme_color: '#2563eb', // blue-600
        icons: [
            {
                src: '/favicon/favicon-16x16.png',
                sizes: '16x16',
                type: 'image/png'
            },
            {
                src: '/favicon/favicon-32x32.png',
                sizes: '32x32',
                type: 'image/png'
            },
            {
                src: '/favicon/apple-touch-icon.png',
                sizes: '180x180',
                type: 'image/png'
            },
            {
                src: '/favicon/android-chrome-192x192.png',
                sizes: '192x192',
                type: 'image/png'
            },
            {
                src: '/favicon/android-chrome-512x512.png',
                sizes: '512x512',
                type: 'image/png'
            }
        ],
        categories: ['technology', 'data engineering', 'programming', 'blog'],
        orientation: 'any',
        screenshots: [
            {
                src: '/screenshots/desktop.png',
                sizes: '1920x1080',
                type: 'image/png',
                form_factor: 'wide'
            },
            {
                src: '/screenshots/mobile.png',
                sizes: '1080x1920',
                type: 'image/png',
                form_factor: 'narrow'
            }
        ],
        prefer_related_applications: false
    }
} 