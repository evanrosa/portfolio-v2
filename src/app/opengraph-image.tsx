import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Evan Rosa - Data Engineer'
export const size = {
    width: 1200,
    height: 630,
}

export const contentType = 'image/png'

export default async function Image() {
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
                            fontSize: '60px',
                            fontWeight: 'bold',
                            color: 'white',
                            marginBottom: '20px',
                            textAlign: 'center',
                        }}
                    >
                        Evan Rosa
                    </h1>
                    <h2
                        style={{
                            fontSize: '40px',
                            color: '#3b82f6',
                            marginBottom: '10px',
                            textAlign: 'center',
                        }}
                    >
                        Data Engineer
                    </h2>
                    <p
                        style={{
                            fontSize: '24px',
                            color: '#94a3b8',
                            textAlign: 'center',
                            maxWidth: '800px',
                        }}
                    >
                        Building Scalable Data Pipelines & ETL Solutions
                    </p>
                </div>
            </div>
        ),
        {
            ...size,
        }
    )
} 