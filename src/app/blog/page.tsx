import { HeroPost } from "@/app/_components/hero-post"
import { MoreStories } from "@/app/_components/more-stories"
import { Intro } from "@/app/_components/intro-blog"
import { getAllPosts } from "@/lib/api"

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
