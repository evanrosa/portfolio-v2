import { MetadataRoute } from 'next'
import { getAllPosts } from '@/lib/api'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    // Get all blog posts
    const posts = getAllPosts()
    const blogPosts = posts.map((post) => ({
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