import { Metadata, ResolvingMetadata } from "next";
import { notFound } from "next/navigation";
import { CMS_NAME } from "@/lib/constants";
import markdownToHtml from "@/lib/markdownToHtml";
import { Container } from "@/app/_components/container";
import { PostBody } from "@/app/_components/post-body";
import { PostHeader } from "@/app/_components/post-header";
import { SiteHeader } from "@/app/_components/header";
import { BlogPostStructuredData } from "@/app/_components/structured-data";
import { Post as PostType } from "@/interfaces/post";
import { getAllPosts } from "@/lib/api";

export default async function Post(props: Params) {
  const params = await props.params;
  const posts = getAllPosts();
  const post = posts.find((p: PostType) => p.slug === params.slug)

  if (!post) {
    return notFound();
  }

  const content = await markdownToHtml(post.content || "");

  return (
    <main className="py-12 px-4 sm:px-6 lg:px-8">
      <SiteHeader />
      <Container>
        <BlogPostStructuredData
          title={post.title}
          description={post.excerpt}
          date={post.date}
          author={post.author}
          image={post.coverImage}
        />
        <article className="max-w-3xl mx-auto mb-32">
          <PostHeader
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
          />
          <PostBody content={content} />
        </article>
      </Container>
    </main>
  );
}

type Params = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata(
  { params }: Params,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const posts = getAllPosts();
  const post = posts.find(async (p: PostType) => p.slug === (await params).slug);

  if (!post) {
    return notFound();
  }

  const title = `${post.title} | The Inner Join Blog By Evan Rosa`;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    datePublished: post.date,
    author: {
      '@type': 'Person',
      name: post.author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'The Inner Join Blog - Evan Rosa',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.evro.dev/logo.png'
      }
    },
    description: post.excerpt,
    image: post.coverImage,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://www.evro.dev/blog/${post.slug}`
    }
  };

  return {
    title,
    description: post.excerpt,
    openGraph: {
      title,
      images: [post.ogImage.url],
    },
    other: {
      'application/ld+json': JSON.stringify(jsonLd),
    },
  };
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}
