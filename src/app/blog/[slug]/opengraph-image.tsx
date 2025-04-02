import { ImageResponse } from 'next/og'
import { getPostBySlug } from '@/lib/api'

export const runtime = 'edge'
export const alt = 'Blog Post'
export const size = {
    width: 1200,
    height: 630,
}

export const contentType = 'image/png'

export default async function Image({ params }: { params: { slug: string } }) {
    const post = getPostBySlug(params.slug)
    if (!post) {
        return new ImageResponse(
            (
                <div
                    style={{
                        background: 'linear-gradient(to bottom right, #1e293b, #0f172a)',
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '40px',
                    }}
                >
                    <h1
                        style={{
                            fontSize: '48px',
                            fontWeight: 'bold',
                            color: 'white',
                            textAlign: 'center',
                        }}
                    >
                        Post not found
                    </h1>
                </div>
            ),
            { ...size }
        )
    }

    return new ImageResponse(
        (
            <div
                style={{
                    background: 'linear-gradient(to bottom right, #1e293b, #0f172a)',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '40px',
                }}
            >
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <h1
                        style={{
                            fontSize: '48px',
                            fontWeight: 'bold',
                            color: 'white',
                            marginBottom: '20px',
                            textAlign: 'center',
                            maxWidth: '900px',
                        }}
                    >
                        {post.title}
                    </h1>
                    <p
                        style={{
                            fontSize: '24px',
                            color: '#94a3b8',
                            textAlign: 'center',
                            maxWidth: '800px',
                            marginBottom: '40px',
                        }}
                    >
                        {post.excerpt}
                    </p>
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px',
                        }}
                    >
                        <p
                            style={{
                                fontSize: '20px',
                                color: '#3b82f6',
                            }}
                        >
                            By Evan Rosa
                        </p>
                        <span
                            style={{
                                fontSize: '20px',
                                color: '#64748b',
                            }}
                        >
                            •
                        </span>
                        <p
                            style={{
                                fontSize: '20px',
                                color: '#64748b',
                            }}
                        >
                            {new Date(post.date).toLocaleDateString('en-US', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric',
                            })}
                        </p>
                    </div>
                </div>
            </div>
        ),
        {
            ...size,
        }
    )
} 