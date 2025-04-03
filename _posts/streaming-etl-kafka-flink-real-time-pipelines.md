---
title: "Why Streaming ETL Is the Future — and How to Get Started"
coverImage: "/assets/blog/streaming-is-the-future/cover.png"
date: "2025-04-03"
excerpt: "Streaming ETL is no longer a niche—it's the foundation of real-time, event-driven systems. In this post, I break down when to use streaming pipelines, how Kafka and Flink fit together, and walk through a real-world example."
tags:
  [
    "streaming ETL",
    "Kafka Flink pipeline",
    "real-time data engineering",
    "data pipeline examples",
    "data engineering",
  ]
author: "Evan Rosa"
ogImage:
  url: "/assets/blog/streaming-is-the-future/cover.png"
---

> Data doesn’t like to wait in line. If your pipeline still clocks in at hourly refreshes, you're already behind. Streaming ETL isn’t a buzzword—it’s how modern systems think, move, and respond.

## Why Real-Time Data Matters

Today’s systems run in seconds—not cycles.

When your product relies on fast feedback loops, **batch just can’t keep up**. Businesses now expect:

- Instant dashboards
- Continuous monitoring
- On-the-fly personalization
- Real-time alerts

That’s where **streaming ETL** steps in—processing data _as it arrives_ and delivering insight in motion.

## What Is Streaming ETL?

Streaming ETL is a real-time pipeline that:

1. **Extracts** events continuously from sources like APIs, sensors, or Kafka topics
2. **Transforms** them on the fly—cleaning, enriching, aggregating
3. **Loads** them into a live analytics store or data lakehouse

Instead of waiting for a job to run every hour, streaming pipelines operate in milliseconds. Think of it as ETL without the waiting room.

> In practice: Kafka → Flink → Iceberg → BigQuery or Superset.

## When Streaming Makes Sense

You don’t need to stream everything—but you _do_ need streaming when:

- You monitor **live events** (clicks, transactions, sensors)
- You need **low-latency alerts** (fraud, outages, churn)
- You support **real-time user interfaces** or dashboards
- You’re building **event-driven microservices** or a data mesh

### Common Use Cases

- Real-time churn prediction in SaaS
- Live product recommendations
- Streaming IoT telemetry from devices
- Sports analytics during live events

These are pipelines that don’t blink—and can’t afford to.

## Kafka + Flink: The Dynamic Duo

When it comes to streaming ETL, **Kafka and Flink** are the peanut butter and jelly of the modern stack.

| Component             | Role                                              |
| --------------------- | ------------------------------------------------- |
| **Kafka**             | Ingests and buffers events at scale               |
| **Flink**             | Processes streams in real time with low latency   |
| **Iceberg**           | Stores versioned, schema-evolving tables          |
| **Airflow**           | Orchestrates hybrid pipelines (batch + streaming) |
| **BigQuery/Superset** | Final destinations for analysis and dashboards    |

### Example: Kafka → Flink → Iceberg

Here’s a simplified flow I’ve used in production:

1. **Kafka** captures JSON events from user signups
2. **Flink** job:
   - Parses and validates schema
   - Enriches with metadata
   - Deduplicates by event ID
   - Aggregates by region or channel
3. **Iceberg** stores cleaned and enriched tables
4. **Airflow** schedules downstream rollups into **BigQuery**
5. **Superset** powers near real-time dashboards

> One of my side projects simulated synthetic subscription events. With Flink powering the stream and Superset rendering the dashboards, I had a real-time analytics engine humming locally in under a day.

## Streaming vs Batch: Choose with Intent

| Factor         | Batch                      | Streaming                                  |
| -------------- | -------------------------- | ------------------------------------------ |
| **Latency**    | Minutes to hours           | Seconds to milliseconds                    |
| **Cost**       | Lower at small scale       | Higher infra cost, more scalable           |
| **Complexity** | Easier to test and monitor | Requires state mgmt and fault tolerance    |
| **Use Cases**  | Reporting, warehousing, BI | Alerts, real-time metrics, live interfaces |
| **Tools**      | Airflow, Spark, SQLMesh    | Kafka, Flink, Spark Streaming              |

My rule of thumb? Start with streaming where freshness matters most—then layer in batch for history, rollups, and cost efficiency.

## My Streaming Stack: The Tools I Use

When building streaming-first architectures, these are my go-to tools:

- **Kafka** – for event ingestion and scalable queues
- **Flink** – for rich, low-latency stream processing
- **Iceberg** – for schema evolution and time travel
- **Airflow** – for hybrid orchestration
- **BigQuery** – for SQL-based reporting at scale
- **Superset** – for fast, clean dashboards that refresh in real time

I containerize everything with **Docker**, and I test it all locally before deploying to cloud. Streaming doesn’t need to be scary—but it does need to be thoughtful.

## Batch + Streaming = Hybrid Done Right

Batch and streaming aren’t rivals—they’re teammates.

Most of my real-world pipelines look like this:

1. Ingest **real-time events via Kafka**
2. Process with **Flink**
3. Persist clean and raw data to **Iceberg**
4. Schedule batch rollups with **SQLMesh or Airflow**
5. Serve real-time insights via **BigQuery + Superset**

The result? Systems that can respond in real time _and_ provide historical depth. That’s the kind of flexibility modern teams need.

---

**Let’s Connect**  
Building something streaming-first? Wrestling with real-time complexity? I’d love to learn what you’re working on.

[LinkedIn](https://www.linkedin.com/in/evan-rosa/) | [Portfolio](https://www.evro.dev/)
