"use client"
import type { Author } from "@/interfaces/author"
import Link from "next/link"
import Avatar from "./avatar"
import CoverImage from "./cover-image"
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

export function PostPreview({ title, coverImage, date, excerpt, author, slug }: Props) {
  return (
    <div className="relative">
      <div className="rounded-lg">
        <CoverImage slug={slug} title={title} src={coverImage} />
      </div>

      <div className="p-5">
        <h3 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
          <Link href={`/posts/${slug}`} className="transition-colors hover:text-blue-600">
            {title}
          </Link>
        </h3>
        <p className="mb-4 text-sm text-muted-foreground line-clamp-2">{excerpt}</p>
        <div className="flex items-center justify-between">
          <Avatar name={author.name} picture={author.picture} />
          <Button
            asChild
            variant="ghost"
            size="sm"
            className="rounded-full text-blue-600 hover:bg-blue-50 hover:text-blue-700 dark:hover:bg-blue-950"
          >
            <Link href={`/posts/${slug}`}>
              Read
              <ArrowUpRight className="ml-1 h-3 w-3" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

