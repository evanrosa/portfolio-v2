"use client"

import { motion } from "framer-motion"
import type { Post } from "@/interfaces/post"
import { PostPreview } from "./post-preview"

type Props = {
  posts: Post[]
}

export function MoreStories({ posts }: Props) {
  return (
    <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="mb-32">
      <h2 className="mb-12 text-4xl font-bold tracking-tight text-gray-900 dark:text-white md:text-5xl">
        More Stories
      </h2>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12">
        {posts.map((post, index) => (
          <motion.div
            key={post.slug}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <PostPreview
              title={post.title}
              coverImage={post.coverImage}
              date={post.date}
              author={post.author}
              slug={post.slug}
              excerpt={post.excerpt}
            />
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}

