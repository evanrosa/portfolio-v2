import Container from "@/app/_components/container";
import { HeroPost } from "@/app/_components/hero-post";
import { Intro as IntroBlog } from "@/app/_components/intro-blog";
import { MoreStories } from "@/app/_components/more-stories";
import { getAllPosts } from "@/lib/api";
import Intro from "./_components/intro";
import AboutMeSection from "./_components/about";
import ProjectsSection from "./_components/projects";
import { PortfolioContactSection } from "./_components/contact-section";

export default function Index() {
  const allPosts = getAllPosts();
  const recentPosts = allPosts.slice(0, 3);
  const heroPost = recentPosts[0];
  const morePosts = recentPosts.slice(1);

  return (
    <main>
      <Container>
        <Intro />
        <AboutMeSection />
        <ProjectsSection />
        <div id="blog">
          <IntroBlog />
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
        <PortfolioContactSection />
      </Container>
    </main>
  );
}
