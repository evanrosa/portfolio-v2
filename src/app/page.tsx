// app/page.tsx (or app/index.tsx if that's your entrypoint)
import Container from "@/app/_components/container";
import { HeroPost } from "@/app/_components/hero-post";
import { Intro as IntroBlog } from "@/app/_components/intro-blog";
import { MoreStories } from "@/app/_components/more-stories";
import Intro from "./_components/intro";
import AboutMeSection from "./_components/about";
import ProjectsSection from "./_components/projects";
import { PortfolioContactSection } from "./_components/contact-section";

export default async function Index() {
  const baseUrl = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : 'http://localhost:3000'

  const res = await fetch(`${baseUrl}/api/posts`, {
    next: { revalidate: 60 }, // ISR (optional)
  })

  const allPosts = await res.json()
  const recentPosts = allPosts.slice(0, 3)
  const heroPost = recentPosts[0]
  const morePosts = recentPosts.slice(1)

  return (
    <main>
      <Container>
        <Intro />
        <AboutMeSection />
        <ProjectsSection />
        <div id="blog">
          <IntroBlog headingLevel="h2" />
          {heroPost && (
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.coverImage}
              date={heroPost.date}
              author={heroPost.author}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
              headingLevel="h3"
            />
          )}
          {morePosts.length > 0 && (
            <MoreStories posts={morePosts} headingLevel="h3" />
          )}
        </div>
        <PortfolioContactSection />
      </Container>
    </main>
  )
}
