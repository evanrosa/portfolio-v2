import cn from "classnames"
import Link from "next/link"
import Image from "next/image"
import { sendGTMEvent } from "@next/third-parties/google"

type Props = {
  title: string
  src: string
  slug?: string
}

const CoverImage = ({ title, src, slug }: Props) => {
  const image = (
    <div className="relative h-[500px] w-full overflow-hidden rounded-lg border border-blue-100 dark:border-blue-900/30">
      <Image
        src={src || "/placeholder.svg"}
        alt={`Cover Image for ${title}`}
        className={cn("object-cover object-top transition-transform duration-500", {
          "group-hover:scale-105": slug,
        })}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />

    </div>
  )

  return (
    <div className="group relative w-full shadow-sm hover:shadow-md transition-shadow duration-200 rounded-lg">
      {slug ? (
        <Link href={`/blog/${slug}`} aria-label={title} className="block" onClick={() => sendGTMEvent({ event: 'button_click_blog_post', value: `cover_image_${slug}` })}>
          {image}
        </Link>
      ) : (
        image
      )}
    </div>
  )
}

export default CoverImage

