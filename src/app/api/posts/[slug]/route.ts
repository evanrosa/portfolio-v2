// app/api/posts/[slug]/route.ts
export const runtime = 'nodejs'

import { getPostBySlug } from '@/lib/api'
import { NextResponse, type NextRequest } from 'next/server'

type Props = {
    params: {
        slug: string
    }
}

export async function GET(
    request: NextRequest,
    props: Props
) {
    const { slug } = props.params
    const post = getPostBySlug(slug)

    if (!post) {
        return NextResponse.json({ error: 'Not found' }, { status: 404 })
    }

    return NextResponse.json(post)
}
