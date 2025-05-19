---
title: "Building a Real ETL Pipeline with Kafka, Airflow, SQLMesh, BigQuery, and Superset — Step by Step"
coverImage: "/assets/blog/batch-sqlMesh-kafka-bq-superset/cover.png"
date: "2025-05-19"
modifiedDate: "2025-05-19"
excerpt: "This detailed tutorial shows you how to build a full batch ETL pipeline using Kafka, Airflow, SQLMesh, BigQuery, and Superset. Learn how to set it up, how the tools work, and why this stack gives you scalable, testable data workflows."
tags:
  [
    "data engineering",
    "ETL pipeline",
    "Kafka",
    "Airflow",
    "SQLMesh",
    "BigQuery",
    "Superset",
  ]
author: "Evan Rosa"
authorUrl: "https://www.evro.dev"
ogImage:
  url: "/assets/blog/batch-sqlMesh-kafka-bq-superset/cover.png"
---

> Want to learn how a real data pipeline works, not just the theory? This guide walks you through every part of a real ETL system, from ingesting events with Kafka to building dashboards in Superset.

A production-ready ETL (Extract, Transform, Load) pipeline is more than just code that runs once. It’s a reliable system for collecting, processing, and sharing data. In this tutorial, you’ll learn how I built a working pipeline using tools that many real companies use today:

- **Kafka** for collecting and buffering incoming events
- **Airflow** to schedule and manage when and how things run
- **SQLMesh** for writing SQL transformations that are easy to test, update, and track
- **BigQuery** as the storage and query engine
- **Superset** for building charts and dashboards on top of the cleaned data

Each tool plays a role, and together they create a strong, flexible foundation for data engineering.

---

## How the Tools Work Together: End-to-End Data Flow

This pipeline follows a clear and modular batch ETL flow. Here’s how the data travels:

1. **Kafka** receives and buffers raw events from producers. In our case, the `simulate_producer.py` script generates synthetic `page_view` events and sends them to the `events` topic in Kafka.
2. **Airflow** orchestrates the SQLMesh workflow by scheduling the `plan` and `apply` steps at defined intervals. It ensures that transformations run in the correct order and retries jobs if needed.
3. **SQLMesh** reads the latest data from Kafka or from an intermediate staging layer and applies transformation logic. It creates derived models such as `pageviews`, `sessions`, and `daily_active_users`. The logic is versioned, testable, and incrementally updated based on time partitions.
4. **BigQuery** acts as the persistent storage layer. SQLMesh writes output tables to the `analytics` dataset in BigQuery. These tables are partitioned and query-optimized.
5. **Superset** connects to BigQuery and provides dashboards and visualizations. Users can explore the transformed data without touching the ETL logic.

Each part of this system is isolated, but together they create a seamless flow:

- Kafka buffers
- SQLMesh transforms
- Airflow triggers
- BigQuery stores
- Superset serves

This architecture is easy to extend, monitor, and debug.

---

## Kafka: Capturing Events in Real Time

Kafka is a **distributed message broker**—a system that collects data and makes it available to other systems in a reliable way. In this pipeline, Kafka simulates incoming events that would typically come from a website, mobile app, or service.

### Key Kafka Features Used:

- **Topics**: Named data channels for storing events (in our case, a topic called `events`)
- **Producers**: Send data to a topic (we simulate this with a Python script)
- **Retention**: Keeps messages for a set time so they can be replayed for backfill or debugging
- **Decoupling**: Allows systems that send data (producers) to operate separately from systems that read data (consumers)

### How I Set It Up:

- Used Docker Compose to launch Bitnami Kafka and Zookeeper containers
- Enabled topic auto-creation and internal networking for easy setup

**Producer Details:**
The `simulate_producer.py` script sends a new event every second:

```json
{
  "user_id": "abc-123",
  "event": "page_view",
  "timestamp": "2025-04-25T17:43:00Z"
}
```

This is meant to mimic front-end tracking systems like Segment or Snowplow.

You can inspect the topic with a CLI like `kcat` to see raw messages and verify ingestion.

---

## SQLMesh: Transforming Data with Control

SQLMesh is a transformation framework that gives you full control over how, when, and where your SQL logic runs. It brings **modern development workflows** to analytics.

### Key Features Used:

- **Declarative SQL Models**
- **Environments** (dev, staging, prod)
- **Incremental Execution** via `is_incremental()`
- **Audits** to detect data quality issues
- **Tests** for validating logic correctness
- **Lineage** for tracing dependencies
- **Time Ranges** for backfilling historical data

### Example Model:

```sql
-- models/daily_active_users.sql
SELECT
  user_id,
  COUNT(*) AS events,
  DATE(timestamp) AS day
FROM ref('pageviews')
{% if is_incremental() %}
WHERE timestamp >= '{{ start_date }}'
{% endif %}
GROUP BY user_id, day
```

### Environment Promotion:

```bash
sqlmesh plan --environment dev
sqlmesh apply --environment dev
```

### Audits Example:

```sql
-- audits/no_null_users.sql
SELECT COUNT(*) FROM {{ this }} WHERE user_id IS NULL
```

### Tests Example:

```python
@model_test("daily_active_users")
def test_non_negative_counts(df):
    assert df["events"].min() >= 0
```

---

## Airflow: Running Tasks Automatically

Airflow is a job scheduler and orchestration tool. It uses DAGs (Directed Acyclic Graphs) to define the order of operations.

### Features Used:

- **BashOperator** to run `sqlmesh plan` and `sqlmesh apply`
- **Retry logic**
- **Scheduling** (`@hourly`, `@daily`, etc.)
- **Task Dependencies**
- **UI for monitoring**

### DAG Overview:

```python
plan = BashOperator(
  task_id='sqlmesh_plan',
  bash_command='sqlmesh plan --environment prod',
  retries=3,
  dag=dag
)

apply = BashOperator(
  task_id='sqlmesh_apply',
  bash_command='sqlmesh apply --environment prod',
  retries=3,
  dag=dag
)

plan >> apply
```

---

## BigQuery: Cloud-Scale Storage and Querying

BigQuery is Google Cloud’s serverless data warehouse.

### Why It’s a Great Fit:

- **Serverless infrastructure**
- **Automatic scaling**
- **Time partitioning**
- **Seamless SQLMesh integration via service account**

### How It’s Used:

- SQLMesh writes directly into `analytics.pageviews`, `analytics.daily_active_users`, etc.
- Tables are optimized for dashboard performance
- BigQuery supports direct querying from Superset

---

## Superset: Dashboards and Analytics

Superset is a modern BI platform that connects to BigQuery and allows analysts to explore data without writing code.

### Features Used:

- **SQL editor**
- **Chart builder**
- **Dashboards**
- **Drag-and-drop filtering**

### What I Built:

- Line chart of daily active users
- Session activity per user
- Pie chart of event types

Superset authenticates using a Google service account and SQLAlchemy connector.

---

## Project Structure

```text
pipe_demo/
├── airflow/               # DAGs and config for Airflow
├── kafka/                 # Docker configs for Kafka
├── sqlmesh/               # SQL models, tests, audits
├── secrets/               # Google service account JSON
├── simulate_producer.py   # Kafka producer script
├── docker-compose.yml     # Container orchestration
```

---

## Setup & Commands for Building the Pipeline

### Kafka Setup

```bash
docker-compose up -d kafka zookeeper
python simulate_producer.py
kcat -b localhost:9092 -t events -C -o beginning
```

### SQLMesh Setup

```bash
pip install sqlmesh[gcp]
sqlmesh init
sqlmesh plan --environment dev
sqlmesh apply --environment dev
sqlmesh backfill --start '2024-04-01' --end '2024-04-30'
```

### Airflow Setup

```bash
docker-compose up -d airflow webserver scheduler
# then visit http://localhost:8080 to trigger DAGs
```

### BigQuery Setup

```yaml
gateways:
  prod:
    connection:
      type: bigquery
      project: your-project-id
      dataset: analytics
      key_path: /secrets/bigquery.json
```

### Superset Setup

```bash
docker-compose up -d superset
docker exec -it superset superset fab create-admin
```

---

## Why This Pipeline Works Well

- **Kafka** decouples ingestion from transformation
- **SQLMesh** enables versioned, testable, backfillable SQL logic
- **Airflow** gives visibility and orchestration
- **BigQuery** scales and serves cleanly
- **Superset** makes insights accessible

---

## Final Thoughts

This stack is ideal for teams who want reproducible pipelines, visibility into data lineage, and reliable infrastructure—all while using open and cloud-native tools.

Explore the repo → [pipe_demo GitHub](https://github.com/evanrosa/pipe_demo)  
Need help building your version? [Let’s talk](https://www.evro.dev/consultant)
