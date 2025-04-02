"use client"

import { usePathname } from 'next/navigation'
import Script from 'next/script'
import type { Author } from '@/interfaces/author'

type BlogPostProps = {
    title: string
    description: string
    date: string
    author: Author
    image?: string
}

export function BlogPostStructuredData({ title, description, date, author, image }: BlogPostProps) {
    const pathname = usePathname()
    const url = `https://www.evro.dev${pathname}`

    const structuredData = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": title,
        "description": description,
        "datePublished": date,
        "dateModified": date,
        "url": url,
        "image": image || "https://www.evro.dev/images/og-image.jpg",
        "author": {
            "@type": "Person",
            "name": author.name,
            "url": "https://www.evro.dev"
        },
        "publisher": {
            "@type": "Person",
            "name": "Evan Rosa",
            "url": "https://www.evro.dev",
            "logo": {
                "@type": "ImageObject",
                "url": "https://www.evro.dev/images/logo.png"
            }
        }
    }

    return (
        <Script id="blog-post-structured-data" type="application/ld+json">
            {JSON.stringify(structuredData)}
        </Script>
    )
}

export function PersonStructuredData() {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Evan Rosa",
        "url": "https://www.evro.dev",
        "sameAs": [
            "https://www.linkedin.com/in/evan-rosa/",
            "https://github.com/evanrosa"
        ],
        "jobTitle": "Senior Data Engineer",
        "description": "Data Engineer specializing in building scalable data pipelines and ETL processes using technologies like Kafka, Spark, Flink, SQLMesh, and Airflow.",
        "knowsAbout": [
            "Data Engineering",
            "Apache Kafka",
            "Apache Spark",
            "Apache Flink",
            "SQLMesh",
            "Apache Airflow",
            "ETL Pipelines",
            "Big Data",
            "Data Architecture"
        ],
        "alumniOf": {
            "@type": "Organization",
            "name": "Western New England University" // You can update this with your actual education
        }
    }

    return (
        <Script id="person-structured-data" type="application/ld+json">
            {JSON.stringify(structuredData)}
        </Script>
    )
} 