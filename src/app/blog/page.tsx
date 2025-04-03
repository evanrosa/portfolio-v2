import { HeroPost } from "@/app/_components/hero-post"
import { MoreStories } from "@/app/_components/more-stories"
import { Intro } from "@/app/_components/intro-blog"
import { getAllPosts } from "@/lib/api"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: 'The Inner Join Blog | Insights on ETL, Kafka, Spark & More',
    description: 'Explore in-depth articles about data engineering, ETL pipelines, real-time processing, and best practices using Kafka, Spark, Flink, SQLMesh, and more.',
    keywords: [
        'The Inner Join Blog',
        'data engineering blog',
        'ETL tutorials',
        'Kafka guides',
        'Apache Spark',
        'Apache Flink',
        'SQLMesh',
        'data pipeline architecture',
        'real-time processing',
        'big data engineering',
        'data infrastructure'
    ],
    openGraph: {
        title: 'The Inner Join Blog | Evan Rosa',
        description: 'In-depth articles about data engineering, ETL pipelines, and real-time processing.',
        url: 'https://www.evro.dev/blog',
        siteName: 'Evan Rosa\'s Blog',
        locale: 'en_US',
        type: 'website',
    },
    alternates: {
        canonical: 'https://www.evro.dev/blog'
    }
}

export default async function BlogPage() {
    const posts = getAllPosts()
    const heroPost = posts[0]
    const morePosts = posts.slice(1)

    return (
        <div className="min-h-screen bg-background dark:bg-slate-900 pt-25">
            <Intro headingLevel="h1" />

            <div className="container mx-auto max-w-6xl px-4 dark:text-slate-100">
                {heroPost && (
                    <HeroPost
                        title={heroPost.title}
                        coverImage={heroPost.coverImage}
                        date={heroPost.date}
                        author={heroPost.author}
                        slug={heroPost.slug}
                        excerpt={heroPost.excerpt}
                        headingLevel="h2"
                    />
                )}

                {morePosts.length > 0 && <MoreStories posts={morePosts} headingLevel="h2" />}
            </div>
        </div>
    )
}
