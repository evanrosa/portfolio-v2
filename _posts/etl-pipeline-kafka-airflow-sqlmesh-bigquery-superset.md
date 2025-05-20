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

Kafka is a **distributed message broker**, a system that collects data and makes it available to other systems in a reliable way. In this pipeline, Kafka simulates incoming events that would typically come from a website, mobile app, or service.

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

## Airflow: Running SQLMesh Automatically

Apache Airflow is the orchestration engine that runs and schedules your SQLMesh jobs. While the earlier example showed manual BashOperator usage, SQLMesh provides native Airflow integration that simplifies everything.

### Built-in SQLMesh Airflow Integration

SQLMesh can automatically generate DAGs and handle:

- plan / apply cycles for each environment
- Custom scheduling per model using cron or @daily/@hourly syntax
- Email alerts
- Downstream DAG triggering

This is ideal for teams using SQLMesh in production.

### Features Used:

- **Model-aware scheduling:** Each model's schedule can be defined in the YAML or SQL config.
- **Environment isolation:** DAGs are scoped to specific environments (dev, prod, etc.).
- **Retries, email notifications, downstream triggers:** all supported via configuration.
- **Backfill support:** Leverage time-based partitions directly.

### DAG Overview:

1. Add the sqlmesh_airflow package to your Airflow environment:

```python
pip install tobiko-cloud-scheduler-facade[airflow]
```

2. Next you will need to connect Airflow to Tobiko Cloud [SQLMesh Airflow Integration](https://sqlmesh.readthedocs.io/en/stable/cloud/features/scheduler/airflow/#why-a-custom-approach)

3. Use the sqlmesh airflow to create a DAG:

```python
# folder: dags/
# file name: tobiko_cloud_airflow_integration.py

# Import SQLMeshEnterpriseAirflow operator
from tobikodata.scheduler_facades.airflow import SQLMeshEnterpriseAirflow

# Create SQLMeshEnterpriseAirflow instance with connection ID
tobiko_cloud = SQLMeshEnterpriseAirflow(conn_id="tobiko_cloud")

# Create DAG for `prod` environment from SQLMeshEnterpriseAirflow instance
first_task, last_task, dag = tobiko_cloud.create_cadence_dag(environment="prod")

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
demo/
├── airflow/               # DAGs and config for Airflow
├── kafka/                 # Docker configs for Kafka
├── sqlmesh/               # SQL models, tests, audits
├── secrets/               # Google service account JSON
├── simulate_producer.py   # Kafka producer script
├── docker-compose.yml     # Container orchestration
```

---

## Setup & Commands for Building the Pipeline

If you're starting from scratch, follow these steps:

#### Install Prerequisites

- Install Docker Desktop for your operating system: https://www.docker.com/products/docker-desktop
- Install Python (3.9+) from https://www.python.org/downloads/
- Install pip if it's not included with your Python installation
- It's recommended that you use a virtual environment (eg venv)

Once these are ready, continue with the steps below to configure each component.

### Kafka Setup

Kafka relies on Zookeeper (unless you're using Kafka V.4) to maintain configuration and leader election in the cluster, so both services must be started together. Kafka receives and buffers real-time data sent from producers, our simulated event script in this case.

Here's an example docker-compose.yml snippet to spin up Kafka and Zookeeper locally using the Bitnami images:

```bash
services:
  zookeeper:
    image: wurstmeister/zookeeper:latest
    ports:
      - "2181:2181"

  kafka:
    image: wurstmeister/kafka:latest
    ports:
      - "9092:9092"
    expose:
      - "9093"
    environment:
      KAFKA_ADVERTISED_LISTENERS: PLAINTEXT://kafka:9093
      KAFKA_LISTENERS: PLAINTEXT://0.0.0.0:9093
      KAFKA_INTER_BROKER_LISTENER_NAME: PLAINTEXT
      KAFKA_ZOOKEEPER_CONNECT: zookeeper:2181
    volumes:
      - /var/run/docker.sock:/var/run/docker.sock

  kafka_producer:
    build:
      context: .
      dockerfile: docker/kafka/producer/Dockerfile
    container_name: kafka_producer
    environment:
      - KAFKA_BOOTSTRAP_SERVERS=kafka:9093
    volumes:
      - ./kafka/scripts:/kafka/scripts
    depends_on:
      - kafka
    env_file:
      - .env
    command: python /kafka/scripts/producer.py

  kafka_consumer:
    build:
      context: .
      dockerfile: docker/kafka/consumer/Dockerfile
    container_name: kafka_consumer
    environment:
      - KAFKA_BOOTSTRAP_SERVERS=kafka:9093
      - BIGQUERY_PROJECT=${BQ_ID}
      - BIGQUERY_DATASET=${BIGQUERY_DATASET}
      - GOOGLE_APPLICATION_CREDENTIALS=/app/creds/pipe_demo_bq.json
    volumes:
      - ./kafka/scripts:/app/kafka/scripts
      - ./creds/pipe_demo_bq.json:/app/creds/pipe_demo_bq.json
    env_file:
      - .env
    command: python /app/kafka/scripts/consumer.py
    depends_on:
      - kafka
      - postgres
```

1.  Install Docker Desktop (if not already installed).
2.  Start Kafka and Zookeeper using Docker Compose:

```bash
docker-compose up -d kafka zookeeper
```

3. Run producers to generate data. This can be the example of simulate_producer.py or actual data.

```bash
python simulate_producer.py
```

### SQLMesh Setup

```bash
  sqlmesh:
    build:
      context: .
      dockerfile: docker/sql_mesh/Dockerfile
    container_name: sqlmesh
    volumes:
      - ./sql_mesh:/app
      - ./creds/pipe_demo_bq.json:/app/pipe_demo_bq.json
    env_file:
      - .env
    environment:
      - GOOGLE_APPLICATION_CREDENTIALS=/app/pipe_demo_bq.json
    depends_on:
      - postgres
    ports:
      - "8000:8000"
```

```bash
pip install sqlmesh
sqlmesh init [SQL_DIALECT]
sqlmesh plan --environment dev
sqlmesh apply --environment dev
sqlmesh backfill --start '2024-04-01' --end '2024-04-30'
```

### Airflow Setup

1. Start Airflow via Docker Compose:

```bash
  airflow:
    image: apache/airflow:2.7.0
    volumes:
      - ./sqlmesh:/sqlmesh
      - ./dags:/opt/airflow/dags
    environment:
      - SQLMESH__PATH=/sqlmesh
      - AIRFLOW__CORE__DAGS_FOLDER=/opt/airflow/dags

```

```bash
docker-compose up -d airflow webserver scheduler
```

2. Access the UI at http://localhost:8080 and enable your DAG.
3. Manually trigger a DAG run (or wait for the schedule to trigger it).

### BigQuery Setup

1. Create a Google Cloud project, BigQuery dataset, and service account with editor permissions.
2. Download the service account key JSON.
3. Mount the key into the SQLMesh container: /secrets/bigquery.json
4. Configure the gateway in sqlmesh.yaml:

```bash
  bigquery_init:
    build:
      context: .
      dockerfile: docker/kafka/producer/Dockerfile
    container_name: bigquery_init
    env_file:
      - .env
    environment:
      - BIGQUERY_PROJECT=${BQ_ID}
      - BIGQUERY_DATASET=${BIGQUERY_DATASET}
      - GOOGLE_APPLICATION_CREDENTIALS=/app/creds/pipe_demo_bq.json
    volumes:
      - ./creds/pipe_demo_bq.json:/app/creds/pipe_demo_bq.json
      - ./kafka/scripts/create_tables.py:/app/kafka/scripts/create_tables.py
    command: python /app/kafka/scripts/create_tables.py
    # This container will run once and then exit.
    depends_on:
      - kafka
```

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

1. Start Superset:

```bash
  superset:
    build:
      context: .
      dockerfile: docker/superset/Dockerfile
    container_name: superset
    restart: always
    depends_on:
      - postgres
    environment:
      - POSTGRES_USER=${POSTGRES_USER}
      - POSTGRES_PASSWORD=${POSTGRES_PASSWORD}
      - POSTGRES_DB_SUPERSET=${POSTGRES_DB}
      - SUPERSET=${SUPERSET}
      - SUPERSET_CONFIG_PATH=/etc/superset/superset_config.py
    volumes:
      - ./superset/superset_config.py:/etc/superset/superset_config.py
    ports:
      - "8088:8088"
    command: >
      /bin/sh -c "
      superset db upgrade &&
      superset fab create-admin --username admin --firstname Superset --lastname Admin --email admin@superset.com --password admin &&
      superset init &&
      superset run -p 8088 --host 0.0.0.0 --with-threads --reload --debugger"
```

```bash
docker-compose up -d superset
docker exec -it superset superset fab create-admin
```

You'll be prompted to enter a username, password, and email for your Superset admin account.

2. Login: Visit http://localhost:8088 in your browser and log in with the credentials you just set.
3. Connect to BigQuery:
   - Go to Settings > Database Connections
   - Click + Database
   - Choose BigQuery as the engine
   - Enter your SQLAlchemy URI in the format
   - Upload your service account JSON file or provide its path
   - Test the connection and save

Once connected, you can build charts from daily_active_users or any model published to BigQuery.

---

## Why This Pipeline Works Well

- **Kafka** decouples ingestion from transformation
- **SQLMesh** enables versioned, testable, backfillable SQL logic
- **Airflow** gives visibility and orchestration
- **BigQuery** scales and serves cleanly
- **Superset** makes insights accessible

---

## Final Thoughts

This stack is ideal for teams who want reproducible pipelines, visibility into data lineage, and reliable infrastructure, all while using open and cloud-native tools.

Explore the repo → [demo GitHub](https://github.com/evanrosa/pipe_demo)  
Need help building your version? [Let’s talk](https://www.evro.dev/consultant)
