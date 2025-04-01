"use client"

import { motion } from "framer-motion"
import Avatar from "@/app/_components/avatar"
import CoverImage from "@/app/_components/cover-image"
import type { Author } from "@/interfaces/author"
import Link from "next/link"
import DateFormatter from "./date-formatter"
import { ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"

type Props = {
  title: string
  coverImage: string
  date: string
  excerpt: string
  author: Author
  slug: string
}

export function HeroPost({ title, coverImage, date, excerpt, author, slug }: Props) {
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
              <h3 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 dark:text-white md:text-4xl">
                <Link href={`/posts/${slug}`} className="hover:text-blue-600 transition-colors">
                  {title}
                </Link>
              </h3>
            </div>
            <div>
              <p className="mb-6 text-muted-foreground">{excerpt}</p>
              <div className="flex items-center justify-between">
                <Avatar name={author.name} picture={author.picture} />
                <Button asChild className="rounded-full bg-blue-600 px-6 hover:bg-blue-700">
                  <Link href={`/posts/${slug}`}>
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

