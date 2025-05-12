---
title: "Getting Started with SQLMesh: Versioned, Incremental Data Transformations Made Simple"
coverImage: "/assets/blog/getting-started-sqlmesh/cover.png"
date: "2025-05-12"
modifiedDate: "2025-05-12"
excerpt: "SQLMesh brings version control, incremental builds, and environment isolation to your SQL pipelines. Here's how it works—and how to get started."
tags:
  [
    "SQLMesh",
    "data engineering",
    "ETL",
    "data pipelines",
    "incremental models",
    "analytics engineering",
  ]
author: "Evan Rosa"
authorUrl: "https://www.evro.dev"
ogImage:
  url: "/assets/blog/getting-started-sqlmesh/cover.png"
---

> SQLMesh isn't just another SQL framework. It's a rethink of how we build, deploy, and evolve data pipelines, without breaking things.

If you've ever dealt with brittle DAGs, painful backfills, or unexpected schema changes in production, SQLMesh might be the tool you've been waiting for.

In this guide, I’ll walk you through:

- What SQLMesh is
- Why it matters
- Key concepts that make it powerful
- How to implement it
- When to use it (and when not to)

---

## What is SQLMesh?

SQLMesh is an open-source framework for building SQL pipelines with:

- **Version control** (models as code)
- **Incremental execution** (smart reprocessing)
- **Environment isolation** (dev, staging, prod)
- **Schema evolution** tracking

It helps you iterate fast, test safely, and deploy with confidence—without reinventing your pipeline every time your logic changes.

---

## Why Use SQLMesh?

Most pipelines break because of one of these:

- Manual dependency management
- No isolation between dev and prod
- Inefficient full refreshes
- Lack of change awareness

SQLMesh solves this by:

- Tracking dependencies automatically
- Supporting Git-based environments
- Letting you reprocess **only what changed**
- Integrating with modern orchestration (Airflow, Dagster, etc.)

Think of it as **dbt meets Git**, with real CI/CD principles.

---

## Key Concepts

### 1. **Models as Files**

Every model is a `.sql` file + optional Python metadata.

```sql
-- models/orders.sql
SELECT * FROM raw.orders WHERE order_date >= '2023-01-01'
```

### 2. **Environment Support**

Develop locally without impacting production:

```bash
sqlmesh plan --environment dev
sqlmesh apply
```

### 3. **Incremental Execution**

SQLMesh knows what needs to be rebuilt:

- It checks for logic changes
- It analyzes dependencies
- It only runs what’s affected

### 4. **Versioned Planning**

Before applying changes, SQLMesh shows you the full plan:

- Models added, changed, removed
- Rows to be reprocessed
- Upstream impacts

```bash
sqlmesh plan --start '2024-01-01' --end '2024-01-15'
```

### 5. **Time-Aware Backfills**

You can backfill incrementally:

```bash
sqlmesh backfill --start '2024-04-01' --end '2024-04-30'
```

---

## Getting Started with SQLMesh

### ✅ Step 1: Install

```bash
pip install sqlmesh
```

### ✅ Step 2: Scaffold a Project

```bash
sqlmesh init
```

This will create:

- `models/` - where your SQL models live
- `sqlmesh.yaml` - main config for model paths, connections, default dialect, and environments
- `tests/` - where you can define model tests (e.g., row count or column checks)

Example `sqlmesh.yaml`:

```yaml
model_defaults:
  dialect: snowflake
  start: 2024-01-01

gateways:
  prod:
    connection:
      type: snowflake
      account: my-account.region
      user: my-user
      password: ${SNOWFLAKE_PASSWORD}
```

### ✅ Step 3: Define a Model

Create a file in `models/`:

```sql
-- models/daily_users.sql
SELECT
  user_id,
  COUNT(*) as login_count,
  DATE_TRUNC('day', login_time) as login_day
FROM raw.user_logins
GROUP BY user_id, login_day
```

### ✅ Step 4: Plan & Apply

```bash
sqlmesh plan --environment dev
sqlmesh apply
```

This builds the model in your staging schema.

### ✅ Step 5: Promote to Prod

Once validated, switch to prod:

```bash
sqlmesh plan --environment prod
sqlmesh apply
```

---

## How SQLMesh Fits Into Your Workflow

SQLMesh supports modern CI/CD and orchestration patterns:

- Develop and test changes in a feature branch using `dev` or `staging` environments
- Integrate `sqlmesh plan` and `sqlmesh apply` into GitHub Actions or GitLab CI
- Schedule regular runs via Airflow, Dagster, or cron
- Use `backfill` commands to rerun specific time windows

This enables versioned, testable, and repeatable data deployments across teams.

---

## When to Use SQLMesh

**✅ Use SQLMesh if you:**

- Want safer deploys with environments
- Need dependency tracking across models
- Prefer Git-based, testable pipelines
- Are building production-grade data systems

**🚫 Don’t use SQLMesh if you:**

- Only run a few ad-hoc queries
- Don’t use Git or CI/CD for data
- Need only light transformation logic (just a BI tool)

---

## Final Thoughts

SQLMesh brings the discipline of software engineering to your SQL models:

- Version control
- Dependency awareness
- Incremental execution
- Dev → staging → prod promotion

It’s not just about writing SQL, it’s about managing change safely.

If you're building serious pipelines and want fewer surprises in production, it's worth adding SQLMesh to your stack.

---

🔧 Want help implementing SQLMesh in your workflow? [Let’s connect](https://www.evro.dev/consultant)
