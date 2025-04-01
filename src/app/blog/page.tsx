import { getAllPosts } from "@/lib/api"
import { HeroPost } from "@/app/_components/hero-post"
import { MoreStories } from "@/app/_components/more-stories"
import { Intro } from "@/app/_components/intro-blog"

export default async function BlogPage() {
    const posts = await getAllPosts()
    const heroPost = posts[0]
    const morePosts = posts.slice(1)

    return (
        <div className="min-h-screen bg-background pt-25">
            <Intro />

            <div className="container mx-auto max-w-6xl px-4">
                {heroPost && (
                    <HeroPost
                        title={heroPost.title}
                        coverImage={heroPost.coverImage}
                        date={heroPost.date}
                        author={heroPost.author}
                        slug={heroPost.slug}
                        excerpt={heroPost.excerpt}
                    />
                )}

                {morePosts.length > 0 && <MoreStories posts={morePosts} />}
            </div>
        </div>
    )
}
