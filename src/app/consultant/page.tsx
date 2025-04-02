import type { Metadata } from "next"
import { Badge } from "@/components/ui/badge"
import { Database, GitMerge, LineChart, Workflow, Zap, Shield } from "lucide-react"
import ConsultingHero from "../_components/consulting-hero"
import ServiceCard from "../_components/service-card"
import ConsultingApproach from "../_components/consulting-approach"
import ContactCTA from "../_components/consulting-cta"
import ExpertiseTabs from "../_components/expertise-tabs"

export const metadata: Metadata = {
    title: "Data Engineering Consulting Services",
    description: "Expert consulting services in data pipelines, data architecture, and marketing technology solutions.",
}

export default function ConsultingPage() {
    return (
        <div className="relative w-full overflow-hidden bg-gradient-to-b from-white to-blue-50 px-4 py-12 sm:px-6 lg:px-8 dark:from-slate-900/80 dark:to-slate-900/80 dark:backdrop-blur-md">
            {/* Background elements */}
            <div className="absolute inset-0 -z-10">
                <svg
                    className="absolute right-0 top-1/4 h-40 w-40 sm:h-64 sm:w-64 rotate-90 text-blue-500/5"
                    viewBox="0 0 200 200"
                >
                    <path
                        fill="currentColor"
                        d="M30.5,-51.2C39.2,-46.9,45.7,-37.7,51.1,-27.9C56.6,-18.1,61.1,-7.5,58.6,1.4C56.1,10.4,46.6,17.7,39.6,26.2C32.5,34.7,27.9,44.3,20.7,49.8C13.5,55.3,3.8,56.8,-3.9,52.5C-11.7,48.2,-17.4,38.1,-22.5,30.7C-27.6,23.3,-32.1,18.5,-39.2,11.5C-46.3,4.4,-56,-4.8,-58.8,-16.1C-61.5,-27.4,-57.2,-40.7,-48.2,-45.8C-39.2,-50.8,-25.5,-47.5,-14.2,-46.1C-3,-44.7,5.9,-45.2,14.5,-46.1C23,-47,31.1,-48.4,30.5,-51.2Z"
                        transform="translate(100 100)"
                    />
                </svg>
                <svg className="absolute left-0 top-3/4 h-40 w-40 sm:h-64 sm:w-64 text-cyan-500/5" viewBox="0 0 200 200">
                    <path
                        fill="currentColor"
                        d="M54.9,-76.7C71.4,-69.7,85.4,-54.7,92.1,-37.4C98.9,-20.1,98.4,-0.3,93.1,17.3C87.8,34.8,77.8,50.3,64.4,61.4C50.9,72.5,34.1,79.3,16.8,80.9C-0.5,82.5,-18.3,78.9,-33.8,71.2C-49.3,63.4,-62.5,51.5,-73.8,36.3C-85.1,21.1,-94.6,2.7,-90.3,-12.7C-86.1,-28.1,-68.2,-40.6,-52.2,-47.7C-36.1,-54.9,-22,-56.7,-7.7,-62.5C6.7,-68.4,21.3,-78.2,38.5,-83.7C55.7,-89.1,75.6,-90.1,54.9,-76.7Z"
                        transform="translate(100 100)"
                    />
                </svg>
            </div>

            <div className="mx-auto max-w-7xl">
                <ConsultingHero />

                <section id="services" className="py-16">
                    <div className="mx-auto mb-12 max-w-2xl text-center">
                        <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                            Specialized <span className="text-blue-600 dark:text-yellow-500">Consulting Services</span>
                        </h2>
                        <div className="mb-4 h-1 w-20 mx-auto bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-yellow-500 dark:to-yellow-400"></div>
                        <p className="text-base sm:text-lg text-muted-foreground">
                            Leveraging years of experience to deliver tailored data solutions that drive business value
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <ServiceCard
                            icon={<Workflow className="h-10 w-10" />}
                            title="Data Pipeline Architecture"
                            description="Design and implementation of robust batch and streaming data pipelines that scale with your business needs."
                            detailedContent={
                                <div className="space-y-4">
                                    <p>
                                        Modern businesses require data pipelines that are reliable, scalable, and maintainable. I specialize
                                        in designing and implementing data pipelines that meet your specific business requirements.
                                    </p>

                                    <h4 className="text-lg font-semibold mt-4">Key Capabilities:</h4>
                                    <ul className="list-disc pl-5 space-y-2">
                                        <li>End-to-end pipeline design and implementation</li>
                                        <li>Batch and real-time streaming architectures</li>
                                        <li>Data quality validation and monitoring</li>
                                        <li>Scalable and fault-tolerant systems</li>
                                        <li>Cloud-native and on-premise solutions</li>
                                        <li>CI/CD integration for data pipelines</li>
                                    </ul>

                                    <h4 className="text-lg font-semibold mt-4">Technologies:</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {[
                                            "Apache Airflow",
                                            "Apache Spark",
                                            "Apache Kafka",
                                            "Apache Flink",
                                            "dbt",
                                            "SQLMesh",
                                            "Python",
                                            "SQL",
                                        ].map((tech, i) => (
                                            <Badge
                                                key={i}
                                                className="bg-blue-50 text-blue-700 hover:bg-blue-100 dark:bg-blue-900/30 dark:text-blue-300 dark:hover:bg-blue-900/50"
                                            >
                                                {tech}
                                            </Badge>
                                        ))}
                                    </div>

                                    <h4 className="text-lg font-semibold mt-4">Approach:</h4>
                                    <p>
                                        I follow a collaborative approach to understand your business requirements, data sources, and
                                        analytics needs. Based on this understanding, I design a pipeline architecture that is optimized for
                                        your specific use case, considering factors like data volume, velocity, variety, and veracity.
                                    </p>
                                </div>
                            }
                        />

                        <ServiceCard
                            icon={<Database className="h-10 w-10" />}
                            title="Data Warehouse Optimization"
                            description="Optimize your data warehouse for performance, cost, and reliability using modern data engineering practices."
                            detailedContent={
                                <div className="space-y-4">
                                    <p>
                                        A well-optimized data warehouse is crucial for efficient analytics and reporting. I help
                                        organizations optimize their data warehouses for performance, cost, and reliability.
                                    </p>

                                    <h4 className="text-lg font-semibold mt-4">Key Capabilities:</h4>
                                    <ul className="list-disc pl-5 space-y-2">
                                        <li>Schema design and optimization</li>
                                        <li>Query performance tuning</li>
                                        <li>Cost optimization strategies</li>
                                        <li>Data modeling (dimensional, data vault)</li>
                                        <li>Incremental loading patterns</li>
                                        <li>Partitioning and clustering strategies</li>
                                        <li>Materialized views and aggregations</li>
                                    </ul>

                                    <h4 className="text-lg font-semibold mt-4">Technologies:</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {["Snowflake", "BigQuery", "Redshift", "Databricks", "dbt", "SQL"].map((tech, i) => (
                                            <Badge
                                                key={i}
                                                className="bg-blue-50 text-blue-700 hover:bg-blue-100 dark:bg-blue-900/30 dark:text-blue-300 dark:hover:bg-blue-900/50"
                                            >
                                                {tech}
                                            </Badge>
                                        ))}
                                    </div>

                                    <h4 className="text-lg font-semibold mt-4">Approach:</h4>
                                    <p>
                                        I begin with a comprehensive assessment of your current data warehouse, identifying bottlenecks and
                                        areas for improvement. Based on this assessment, I develop and implement optimization strategies
                                        that balance performance, cost, and maintainability.
                                    </p>
                                </div>
                            }
                        />

                        <ServiceCard
                            icon={<GitMerge className="h-10 w-10" />}
                            title="Data Integration Solutions"
                            description="Seamlessly integrate disparate data sources to create a unified view of your business data."
                            detailedContent={
                                <div className="space-y-4">
                                    <p>
                                        Modern organizations have data scattered across various systems and platforms. I help integrate
                                        these disparate data sources to create a unified view of your business data.
                                    </p>

                                    <h4 className="text-lg font-semibold mt-4">Key Capabilities:</h4>
                                    <ul className="list-disc pl-5 space-y-2">
                                        <li>API integration and development</li>
                                        <li>ETL/ELT process design</li>
                                        <li>Real-time data synchronization</li>
                                        <li>Master data management</li>
                                        <li>Data standardization and cleansing</li>
                                        <li>Change data capture (CDC) implementation</li>
                                    </ul>

                                    <h4 className="text-lg font-semibold mt-4">Technologies:</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {["Airbyte", "Fivetran", "Apache NiFi", "Kafka Connect", "REST/GraphQL APIs", "Python"].map(
                                            (tech, i) => (
                                                <Badge
                                                    key={i}
                                                    className="bg-blue-50 text-blue-700 hover:bg-blue-100 dark:bg-blue-900/30 dark:text-blue-300 dark:hover:bg-blue-900/50"
                                                >
                                                    {tech}
                                                </Badge>
                                            ),
                                        )}
                                    </div>

                                    <h4 className="text-lg font-semibold mt-4">Approach:</h4>
                                    <p>
                                        I work with your team to identify all relevant data sources and understand their structure, volume,
                                        and update frequency. Based on this information, I design and implement integration solutions that
                                        ensure data consistency, timeliness, and quality across your organization.
                                    </p>
                                </div>
                            }
                        />

                        <ServiceCard
                            icon={<Zap className="h-10 w-10" />}
                            title="Real-time Analytics"
                            description="Implement streaming analytics solutions that provide real-time insights for time-sensitive business decisions."
                            detailedContent={
                                <div className="space-y-4">
                                    <p>
                                        In today's fast-paced business environment, real-time insights can provide a significant competitive
                                        advantage. I help organizations implement streaming analytics solutions that enable timely
                                        decision-making.
                                    </p>

                                    <h4 className="text-lg font-semibold mt-4">Key Capabilities:</h4>
                                    <ul className="list-disc pl-5 space-y-2">
                                        <li>Event streaming architecture design</li>
                                        <li>Real-time data processing</li>
                                        <li>Stream analytics and complex event processing</li>
                                        <li>Real-time dashboards and visualizations</li>
                                        <li>Anomaly detection and alerting</li>
                                        <li>Time-series analysis</li>
                                    </ul>

                                    <h4 className="text-lg font-semibold mt-4">Technologies:</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {[
                                            "Apache Kafka",
                                            "Apache Flink",
                                            "Spark Streaming",
                                            "ksqlDB",
                                            "Materialize",
                                            "Druid",
                                            "Grafana",
                                        ].map((tech, i) => (
                                            <Badge
                                                key={i}
                                                className="bg-blue-50 text-blue-700 hover:bg-blue-100 dark:bg-blue-900/30 dark:text-blue-300 dark:hover:bg-blue-900/50"
                                            >
                                                {tech}
                                            </Badge>
                                        ))}
                                    </div>

                                    <h4 className="text-lg font-semibold mt-4">Approach:</h4>
                                    <p>
                                        I work with your team to identify use cases that would benefit from real-time analytics. Based on
                                        these use cases, I design and implement streaming solutions that capture, process, and visualize
                                        data in real-time, enabling your team to make data-driven decisions without delay.
                                    </p>
                                </div>
                            }
                        />

                        <ServiceCard
                            icon={<LineChart className="h-10 w-10" />}
                            title="MarTech Implementation"
                            description="Expert implementation of marketing technology solutions including Google Analytics and Google Tag Manager."
                            detailedContent={
                                <div className="space-y-4">
                                    <p>
                                        Effective marketing requires robust tracking and analytics. I help organizations implement and
                                        optimize marketing technology solutions to track customer behavior and measure campaign performance.
                                    </p>

                                    <h4 className="text-lg font-semibold mt-4">Key Capabilities:</h4>
                                    <ul className="list-disc pl-5 space-y-2">
                                        <li>Web and mobile app tracking implementation</li>
                                        <li>Campaign tracking and attribution</li>
                                        <li>Conversion tracking and funnel analysis</li>
                                        <li>A/B testing and experimentation</li>
                                        <li>Customer journey mapping</li>
                                        <li>Marketing data integration</li>
                                    </ul>

                                    <h4 className="text-lg font-semibold mt-4">Technologies:</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {["Google Analytics 4", "Google Tag Manager", "Segment", "Mixpanel", "Amplitude", "Optimizely"].map(
                                            (tech, i) => (
                                                <Badge
                                                    key={i}
                                                    className="bg-blue-50 text-blue-700 hover:bg-blue-100 dark:bg-blue-900/30 dark:text-blue-300 dark:hover:bg-blue-900/50"
                                                >
                                                    {tech}
                                                </Badge>
                                            ),
                                        )}
                                    </div>

                                    <h4 className="text-lg font-semibold mt-4">Approach:</h4>
                                    <p>
                                        I work with your marketing team to understand your tracking requirements and KPIs. Based on this
                                        understanding, I design and implement a tracking solution that captures all relevant user
                                        interactions and marketing touchpoints, enabling you to measure and optimize your marketing efforts.
                                    </p>
                                </div>
                            }
                        />

                        <ServiceCard
                            icon={<Shield className="h-10 w-10" />}
                            title="Data Governance & Quality"
                            description="Establish robust data governance frameworks and quality control processes to ensure data reliability."
                            detailedContent={
                                <div className="space-y-4">
                                    <p>
                                        Data governance and quality are foundational to any data-driven organization. I help establish
                                        frameworks and processes that ensure data reliability, compliance, and accessibility.
                                    </p>

                                    <h4 className="text-lg font-semibold mt-4">Key Capabilities:</h4>
                                    <ul className="list-disc pl-5 space-y-2">
                                        <li>Data governance framework design</li>
                                        <li>Data quality monitoring and remediation</li>
                                        <li>Metadata management</li>
                                        <li>Data lineage tracking</li>
                                        <li>Data access control and security</li>
                                        <li>Regulatory compliance (GDPR, CCPA, etc.)</li>
                                    </ul>

                                    <h4 className="text-lg font-semibold mt-4">Technologies:</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {["Great Expectations", "dbt Tests", "Apache Atlas", "Collibra", "Alation", "DataHub"].map(
                                            (tech, i) => (
                                                <Badge
                                                    key={i}
                                                    className="bg-blue-50 text-blue-700 hover:bg-blue-100 dark:bg-blue-900/30 dark:text-blue-300 dark:hover:bg-blue-900/50"
                                                >
                                                    {tech}
                                                </Badge>
                                            ),
                                        )}
                                    </div>

                                    <h4 className="text-lg font-semibold mt-4">Approach:</h4>
                                    <p>
                                        I work with stakeholders across your organization to understand data usage patterns, compliance
                                        requirements, and quality expectations. Based on this understanding, I design and implement
                                        governance frameworks and quality control processes that ensure your data is reliable, secure, and
                                        accessible to those who need it.
                                    </p>
                                </div>
                            }
                        />
                    </div>
                </section>

                <section id="expertise" className="py-16 bg-blue-50/50 -mx-4 px-4 dark:bg-slate-900/80 dark:backdrop-blur-md">
                    <div className="mx-auto mb-12 max-w-2xl text-center">
                        <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                            Technical <span className="text-blue-600 dark:text-yellow-500">Expertise</span>
                        </h2>
                        <div className="mb-4 h-1 w-20 mx-auto bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-yellow-500 dark:to-yellow-400"></div>
                        <p className="text-base sm:text-lg text-muted-foreground">
                            Proficiency in cutting-edge data engineering technologies and frameworks
                        </p>
                    </div>

                    <ExpertiseTabs />
                </section>

                <ConsultingApproach />

                <ContactCTA />
            </div>
        </div>
    )
}

