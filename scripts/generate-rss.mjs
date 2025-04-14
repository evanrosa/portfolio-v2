import fs from 'fs';
import { Feed } from 'feed';
import { getAllPosts } from '../src/lib/api'; // Adjust path if necessary

// --- Configuration ---
const SITE_URL = 'https://www.evro.dev'; // Your site's base URL
const SITE_TITLE = 'The Inner Join Blog By Evan Rosa'; // Your site's title
const SITE_DESCRIPTION = 'Insights on Data Engineering, Architecture, and Startups by Evan Rosa.'; // Your site's description
const AUTHOR_NAME = 'Evan Rosa';
const AUTHOR_EMAIL = 'your-email@example.com'; // Optional: Add your email
const AUTHOR_LINK = 'https://www.evro.dev';
// --- End Configuration ---

async function generateRssFeed() {
  const posts = getAllPosts(); // Fetch all posts

  const feed = new Feed({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    id: SITE_URL,
    link: SITE_URL,
    language: 'en', // Optional, default is en
    image: `${SITE_URL}/logo.png`, // Optional: URL to site logo
    favicon: `${SITE_URL}/favicon.ico`, // Optional: URL to site favicon
    copyright: `All rights reserved ${new Date().getFullYear()}, ${AUTHOR_NAME}`,
    updated: new Date(posts[0]?.date || Date.now()), // Use optional chaining just in case posts array is empty or date is missing
    generator: 'Next.js using feed package', // Optional: Just for info
    feedLinks: {
      rss2: `${SITE_URL}/feed.xml`, // Link to the feed itself
      // json: `${SITE_URL}/feed.json`, // Optional: JSON Feed link
      // atom: `${SITE_URL}/atom.xml` // Optional: Atom Feed link
    },
    author: {
      name: AUTHOR_NAME,
      email: AUTHOR_EMAIL,
      link: AUTHOR_LINK,
    },
  });

  // Add each post to the feed
  posts.forEach((post) => {
    // Add checks for potentially missing properties if your data source isn't guaranteed
    if (!post || !post.slug || !post.title || !post.date || !post.excerpt || !post.author) {
       console.warn(`Skipping post due to missing data: ${post?.slug || 'Unknown'}`);
       return;
    }

    const postUrl = `${SITE_URL}/blog/${post.slug}`;
    // Use optional chaining for coverImage and ensure it's treated as a string
    const coverImageString = String(post.coverImage || '');
    const imageUrl = coverImageString.startsWith('/')
      ? `${SITE_URL}${coverImageString}`
      : coverImageString;

    // You might need to generate a plain text or HTML version of the content
    // For simplicity, we'll use the excerpt here, but ideally, you'd render markdown
    // or provide a full HTML content field.
    // const contentHtml = await markdownToHtml(post.content || ""); // If you want full content

    feed.addItem({
      title: post.title,
      id: postUrl,
      link: postUrl,
      description: post.excerpt, // Use excerpt as description
      // content: contentHtml, // Uncomment if you render full content
      author: [
        {
          name: post.author,
           // Use optional chaining for authorUrl
           link: post.authorUrl || AUTHOR_LINK,
        },
      ],
      date: new Date(post.date),
      image: imageUrl || undefined, // Ensure image is either a string or undefined
      // category: post.tags?.map(tag => ({ name: tag })) // Add tags if available
    });
  });

  // Ensure the public directory exists
  if (!fs.existsSync('./public')) {
    fs.mkdirSync('./public');
  }

  // Write the RSS feed to a file
  fs.writeFileSync('./public/feed.xml', feed.rss2());
  // fs.writeFileSync('./public/atom.xml', feed.atom1()); // Optional: Generate Atom feed
  // fs.writeFileSync('./public/feed.json', feed.json1()); // Optional: Generate JSON feed

  console.log('✅ RSS feed generated successfully at public/feed.xml');
}

generateRssFeed().catch(error => {
  console.error("❌ Error generating RSS feed:", error);
  process.exit(1);
}); 