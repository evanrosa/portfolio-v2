import { MetadataRoute } from 'next'
import { Post } from '@/interfaces/post'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = process.env.VERCEL_URL
        ? `https://${process.env.VERCEL_URL}`
        : 'http://localhost:3000'

    const res = await fetch(`${baseUrl}/api/posts`, {
        cache: 'no-store', // or ISR with revalidate
    })

    const posts = await res.json()
    const blogPosts = posts.map((post: Post) => ({
        url: `https://www.evro.dev/blog/${post.slug}`,
        lastModified: post.date,
        changeFrequency: 'monthly' as const,
        priority: 0.7
    }))

    // Define static pages
    const staticPages = [
        {
            url: 'https://www.evro.dev',
            lastModified: new Date().toISOString(),
            changeFrequency: 'weekly' as const,
            priority: 1
        },
        {
            url: 'https://www.evro.dev/blog',
            lastModified: new Date().toISOString(),
            changeFrequency: 'daily' as const,
            priority: 0.8
        }
    ]

    // Combine static pages and blog posts
    return [...staticPages, ...blogPosts]
} 