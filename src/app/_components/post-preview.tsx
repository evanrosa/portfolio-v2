"use client"
import type { Author } from "@/interfaces/author"
import Link from "next/link"
import CoverImage from "./cover-image"
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
}

export function PostPreview({ title, coverImage, date, excerpt, author, slug }: Props) {
  return (
    <div className="relative">
      <div className="rounded-lg">
        <CoverImage slug={slug} title={title} src={coverImage} />
      </div>

      <div className="p-5">
        <h3 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
          <Link onClick={() => sendGTMEvent({ event: 'button_click_blog_post', value: `title_${slug}` })} href={`/blog/${slug}`} className="transition-colors hover:text-blue-600 dark:hover:text-yellow-500">
            {title}
          </Link>
        </h3>
        <p className="mb-4 text-sm text-muted-foreground line-clamp-2">{excerpt}</p>
        <div className="flex items-center justify-between">
          <Button
            asChild
            variant="ghost"
            size="sm"
            className="rounded-full text-blue-600 hover:bg-blue-50 hover:text-blue-700 dark:text-yellow-500 dark:hover:bg-yellow-500/10 dark:hover:text-yellow-400"
          >
            <Link onClick={() => sendGTMEvent({ event: 'button_click_blog_post', value: `read_more_${slug}` })} href={`/blog/${slug}`}>
              Read
              <ArrowUpRight className="ml-1 h-3 w-3" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

