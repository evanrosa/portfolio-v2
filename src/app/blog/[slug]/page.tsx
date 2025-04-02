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

export default async function Post(props: Params) {
  const params = await props.params;
  const baseUrl = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : 'http://localhost:3000'

  const res = await fetch(`${baseUrl}/api/posts`, {
    next: { revalidate: 60 } // ISR, optional
  })

  if (!res.ok) throw new Error('Failed to fetch posts')

  const posts = await res.json()
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

export async function generateMetadata(props: Params): Promise<Metadata> {
  const params = await props.params;
  const baseUrl = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : 'http://localhost:3000'

  const res = await fetch(`${baseUrl}/api/posts`, {
    next: { revalidate: 60 } // ISR, optional
  })

  if (!res.ok) throw new Error('Failed to fetch posts')

  const posts = await res.json()
  const post = posts.find((p: PostType) => p.slug === params.slug)

  if (!post) {
    return notFound();
  }

  const title = `${post.title} | Next.js Blog Example with ${CMS_NAME}`;

  return {
    title,
    openGraph: {
      title,
      images: [post.ogImage.url],
    },
  };
}

export async function generateStaticParams() {
  const baseUrl = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : 'http://localhost:3000'

  const res = await fetch(`${baseUrl}/api/posts`, {
    next: { revalidate: 60 } // ISR, optional
  })

  if (!res.ok) throw new Error('Failed to fetch posts')

  const posts = await res.json()

  return posts.map((post: PostType) => ({
    slug: post.slug,
  }));
}
