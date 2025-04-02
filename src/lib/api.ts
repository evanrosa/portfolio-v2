import { Post } from "@/interfaces/post";
import { promises as fs } from "fs";
import matter from "gray-matter";
import { join } from "path";

const postsDirectory = join(process.cwd(), "_posts");

export async function getPostSlugs() {
  try {
    return await fs.readdir(postsDirectory);
  } catch (error) {
    console.error('Error reading posts directory:', error);
    return [];
  }
}

export async function getPostBySlug(slug: string) {
  try {
    const realSlug = slug.replace(/\.md$/, "");
    const fullPath = join(postsDirectory, `${realSlug}.md`);
    const fileContents = await fs.readFile(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    return { ...data, slug: realSlug, content } as Post;
  } catch (error) {
    console.error(`Error reading post ${slug}:`, error);
    return null;
  }
}

export async function getAllPosts(): Promise<Post[]> {
  try {
    const slugs = await getPostSlugs();
    const posts = await Promise.all(
      slugs.map((slug) => getPostBySlug(slug))
    );
    // Filter out any null posts and sort by date
    return posts
      .filter((post): post is Post => post !== null)
      .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  } catch (error) {
    console.error('Error getting all posts:', error);
    return [];
  }
}
