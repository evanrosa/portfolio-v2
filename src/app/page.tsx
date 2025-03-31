import Container from "@/app/_components/container";
import { HeroPost } from "@/app/_components/hero-post";
import { Intro as IntroBlog } from "@/app/_components/intro-blog";
import { MoreStories } from "@/app/_components/more-stories";
import { getAllPosts } from "@/lib/api";
import Intro from "./_components/intro";
import AboutMeSection from "./_components/about";
import ProjectsSection from "./_components/projects";

export default function Index() {
  const allPosts = getAllPosts();

  const heroPost = allPosts[0];

  const morePosts = allPosts.slice(1);

  return (
    <main>
      <Container>
        <Intro />
        <AboutMeSection />
        <ProjectsSection />
        <IntroBlog />
        <HeroPost
          title={heroPost.title}
          coverImage={heroPost.coverImage}
          date={heroPost.date}
          author={heroPost.author}
          slug={heroPost.slug}
          excerpt={heroPost.excerpt}
        />
        {morePosts.length > 0 && <MoreStories posts={morePosts} />}
      </Container>
    </main>
  );
}
