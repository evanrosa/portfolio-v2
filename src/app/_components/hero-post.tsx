"use client"

import { motion } from "framer-motion"
import CoverImage from "@/app/_components/cover-image"
import type { Author } from "@/interfaces/author"
import Link from "next/link"
import DateFormatter from "./date-formatter"
import { ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { sendGTMEvent } from "@next/third-parties/google"
type Props = {
  title: string
  coverImage: string
  date: string
  excerpt: string
  author: Author
  slug: string
  headingLevel?: "h2" | "h3"
}

export function HeroPost({ title, coverImage, date, excerpt, author, slug, headingLevel = "h2" }: Props) {
  const Heading = headingLevel

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative mb-20 md:mb-28"
    >
      <div>
        <CoverImage title={title} src={coverImage} slug={slug} />

        <div className="p-6 md:p-8">
          <div className="md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8">
            <div>
              <Heading className="mb-4 text-3xl font-bold tracking-tight text-gray-900 dark:text-white md:text-4xl">
                <Link onClick={() => sendGTMEvent({ event: 'button_click_blog_post', value: `title_${slug}` })} href={`/blog/${slug}`} className="hover:text-blue-600 dark:hover:text-yellow-500 transition-colors">
                  {title}
                </Link>
              </Heading>
            </div>
            <div>
              <p className="mb-6 text-muted-foreground">{excerpt}</p>
              <div className="flex items-center justify-between">
                <Button onClick={() => sendGTMEvent({ event: 'button_click_blog_post', value: `read_more_${slug}` })} asChild className="rounded-full bg-blue-600 px-6 hover:bg-blue-700 dark:bg-yellow-500 dark:hover:bg-yellow-600 dark:text-gray-900">
                  <Link href={`/blog/${slug}`}>
                    Read More
                    <ArrowUpRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

