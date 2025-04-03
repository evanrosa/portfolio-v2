import { Metadata } from "next";
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

export default async function Post({
  params,
}: {
  params: { slug: string }
}) {
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

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const posts = getAllPosts();
  const post = posts.find((p: PostType) => p.slug === params.slug)

  if (!post) {
    return notFound();
  }

  const url = `https://www.evro.dev/blog/${post.slug}`;

  return {
    title: `${post.title} | Evan Rosa's Data Engineering Blog`,
    description: post.excerpt,
    keywords: [
      'data engineering',
      'ETL pipelines',
      'data infrastructure',
      ...post.title.toLowerCase().split(' '), // Add post title words as keywords
    ],
    authors: [{ name: post.author.name, url: 'https://www.evro.dev' }],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url,
      siteName: 'Evan Rosa\'s Blog',
      locale: 'en_US',
      type: 'article',
      publishedTime: post.date,
      authors: [post.author.name],
      images: [
        {
          url: post.coverImage,
          width: 1200,
          height: 630,
          alt: post.title,
        }
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [post.coverImage],
    },
    alternates: {
      canonical: url
    }
  };
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}
