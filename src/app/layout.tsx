import { Footer } from "@/app/_components/footer";
import { HOME_OG_IMAGE_URL } from "@/lib/constants";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import cn from "classnames";
import { Toaster } from "@/components/ui/sonner"
import { ClerkProvider } from '@clerk/nextjs';
import { PersonStructuredData } from "./_components/structured-data";
import { GoogleTagManager } from '@next/third-parties/google'

import "./globals.css";
import { Providers } from './providers'
import { SiteHeader } from "./_components/header";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://www.evro.dev'),
  title: {
    default: 'Evan Rosa | Data Enthusiast & Data Engineer Expert',
    template: '%s | Evan Rosa - Data Engineer',
  },
  description: 'Explore data engineering and data insights, tutorials, and guides. Learn Kafka, Spark, Flink, SQLMesh, Airflow, and more to advance your career.',
  keywords: [
    'data engineering',
    'data science',
    'ETL pipelines',
    'Kafka',
    'Apache Flink',
    'Apache Spark',
    'SQLMesh',
    'Airflow',
    'Python',
    'data engineer portfolio',
    'senior data engineer',
    'big data'
  ],
  authors: [{ name: 'Evan Rosa', url: 'https://www.evro.dev' }],
  openGraph: {
    title: 'Evan Rosa | Data Enthusiast & Data Engineer Expert',
    description: 'Insights, guides, and tutorials on data engineering, ETL pipelines, and analytics tools like Kafka, Flink, Spark, and SQLMesh.',
    url: 'https://www.evro.dev',
    siteName: 'evro.dev',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: HOME_OG_IMAGE_URL,
        width: 1200,
        height: 630,
        alt: 'Evan Rosa Data Engineering Portfolio and Blog',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Evan Rosa | Data Engineering Insights',
    description: 'Expert insights and tutorials on data engineering, ETL, Kafka, Flink, Spark, and more.',
    creator: '@DataWithEvRo',
    images: [HOME_OG_IMAGE_URL],
  }
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <GoogleTagManager gtmId="GTM-M8Z3L8M6" />
        <head>
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/favicon/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon/favicon-16x16.png"
          />
          <link rel="manifest" href="/favicon/site.webmanifest" />
          <link
            rel="mask-icon"
            href="/favicon/safari-pinned-tab.svg"
            color="#000000"
          />
          <link rel="shortcut icon" href="/favicon/favicon.ico" />
          <meta name="msapplication-TileColor" content="#000000" />
          <meta
            name="msapplication-config"
            content="/favicon/browserconfig.xml"
          />
          <meta name="theme-color" content="#000" />
          <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
        </head>
        <body
          className={cn(inter.className, "dark:bg-slate-900 dark:text-slate-400")}
          suppressHydrationWarning
        >
          <Providers>
            <PersonStructuredData />
            <SiteHeader />
            <div className="min-h-screen">{children}</div>
            <Footer />
            <Toaster />
          </Providers>
        </body>
      </html>
    </ClerkProvider>
  );
}
