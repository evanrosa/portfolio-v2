// app/api/load-posts/route.ts
export const runtime = 'nodejs'

import { getAllPosts } from '@/lib/api'
import { NextResponse } from 'next/server'

export async function GET() {
    const posts = getAllPosts()
    return NextResponse.json(posts)
}
