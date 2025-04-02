import Container from "@/app/_components/container";
import { HeroPost } from "@/app/_components/hero-post";
import { Intro as IntroBlog } from "@/app/_components/intro-blog";
import { MoreStories } from "@/app/_components/more-stories";
import Intro from "./_components/intro";
import AboutMeSection from "./_components/about";
import ProjectsSection from "./_components/projects";
import { PortfolioContactSection } from "./_components/contact-section";
import { getAllPosts } from "@/lib/api";

export default async function Index() {
  const allPosts = getAllPosts()
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
