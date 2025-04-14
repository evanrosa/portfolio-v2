import fs from 'fs';
import { Feed } from 'feed';
import { getAllPosts } from '../src/lib/api'; // This import will now work
import { Post } from '../src/interfaces/post'; // Import the Post type

// --- Configuration ---
const SITE_URL = 'https://www.evro.dev';
const SITE_TITLE = 'The Inner Join Blog By Evan Rosa';
const SITE_DESCRIPTION = 'Insights on Data Engineering, Architecture, and Startups by Evan Rosa.';
const AUTHOR_NAME = 'Evan Rosa';
const AUTHOR_EMAIL = 'your-email@example.com'; // Optional: Replace or remove if not needed
const AUTHOR_LINK = 'https://www.evro.dev';
// --- End Configuration ---

async function generateRssFeed() {
  // Add back the type annotation
  const posts: Post[] = getAllPosts();

  const feed = new Feed({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    id: SITE_URL,
    link: SITE_URL,
    language: 'en',
    image: `${SITE_URL}/logo.png`,
    favicon: `${SITE_URL}/favicon.ico`,
    copyright: `All rights reserved ${new Date().getFullYear()}, ${AUTHOR_NAME}`,
    updated: new Date(posts[0]?.date || Date.now()),
    generator: 'tsx script using feed package', // Updated generator info
    feedLinks: {
      rss2: `${SITE_URL}/feed.xml`,
    },
    author: {
      name: AUTHOR_NAME,
      // email: AUTHOR_EMAIL, // Keep commented out if not providing email
      link: AUTHOR_LINK,
    },
  });

  posts.forEach((post) => {
    // Add type checking/guarding if necessary, though Post type helps
    if (!post?.slug || !post?.title || !post?.date || !post?.excerpt || !post?.author) {
      console.warn(`[RSS] Skipping post due to missing essential data: ${post?.slug || 'Unknown Slug'}`);
      return; // Skip this post
    }

    const postUrl = `${SITE_URL}/blog/${post.slug}`;
    const coverImageString = String(post.coverImage || ''); // Ensure it's a string
    const imageUrl = coverImageString.startsWith('/')
      ? `${SITE_URL}${coverImageString}`
      : (coverImageString || undefined); // Use undefined if empty string

    feed.addItem({
      title: post.title,
      id: postUrl,
      link: postUrl,
      description: post.excerpt,
      author: [
        {
          name: post.author,
          link: post.authorUrl || AUTHOR_LINK,
        },
      ],
      date: new Date(post.date),
      image: imageUrl,
    });
  });

  const publicDir = './public';
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir);
  }

  fs.writeFileSync(`${publicDir}/feed.xml`, feed.rss2());

  console.log(`✅ RSS feed generated successfully at ${publicDir}/feed.xml`);
}

generateRssFeed().catch(error => {
  console.error("❌ Error generating RSS feed:", error);
  process.exit(1); // Exit with error code
});