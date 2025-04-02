"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import TechStack from "./tech-stack"
import { sendGTMEvent } from "@next/third-parties/google"

export default function ExpertiseTabs() {
    return (
        <Tabs defaultValue="data-processing" className="max-w-4xl mx-auto">
            <div className="mb-8 flex justify-center">
                <div className="w-full max-w-[90vw] overflow-hidden rounded-lg bg-blue-50 dark:bg-gray-800/50">
                    <div className="overflow-x-auto scrollbar-hide">
                        <TabsList className="inline-flex min-w-full justify-center bg-blue-50 dark:bg-gray-800/50">
                            <TabsTrigger
                                onClick={() => sendGTMEvent({ event: 'tab_click_consultation', value: 'data_processing' })}
                                value="data-processing"
                                className="whitespace-nowrap px-4 py-2 data-[state=active]:bg-white data-[state=active]:text-blue-600 dark:data-[state=active]:bg-gray-900 dark:data-[state=active]:text-yellow-500"
                            >
                                Data Processing
                            </TabsTrigger>
                            <TabsTrigger
                                onClick={() => sendGTMEvent({ event: 'tab_click_consultation', value: 'orchestration' })}
                                value="orchestration"
                                className="whitespace-nowrap px-4 py-2 data-[state=active]:bg-white data-[state=active]:text-blue-600 dark:data-[state=active]:bg-gray-900 dark:data-[state=active]:text-yellow-500"
                            >
                                Orchestration
                            </TabsTrigger>
                            <TabsTrigger
                                onClick={() => sendGTMEvent({ event: 'tab_click_consultation', value: 'visualization' })}
                                value="visualization"
                                className="whitespace-nowrap px-4 py-2 data-[state=active]:bg-white data-[state=active]:text-blue-600 dark:data-[state=active]:bg-gray-900 dark:data-[state=active]:text-yellow-500"
                            >
                                Visualization
                            </TabsTrigger>
                        </TabsList>
                    </div>
                </div>
            </div>

            <TabsContent value="data-processing" className="mt-6">
                <TechStack
                    title="Data Processing Technologies"
                    description="Expert in batch and stream processing frameworks"
                    technologies={[
                        { name: "Apache Spark", description: "Large-scale data processing and analytics" },
                        { name: "Apache Kafka", description: "Real-time data streaming and event processing" },
                        { name: "Apache Flink", description: "Stateful computations over data streams" },
                        { name: "Python", description: "Data manipulation, analysis, and ML pipelines" },
                        { name: "SQL", description: "Data querying, transformation, and analysis" },
                        { name: "Apache Iceberg", description: "High-performance table format for huge analytic datasets" },
                        { name: "Nessie", description: "Git-like experience for your data lake" },
                    ]}
                />
            </TabsContent>

            <TabsContent value="orchestration" className="mt-6">
                <TechStack
                    title="Workflow Orchestration"
                    description="Tools for reliable pipeline scheduling and monitoring"
                    technologies={[
                        { name: "Apache Airflow", description: "Programmatically author, schedule and monitor workflows" },
                        { name: "SQLMesh", description: "Collaborative, version-controlled SQL data transformation framework" },
                        { name: "dbt", description: "Transform data in your warehouse using SQL-based analytics engineering" },
                    ]}
                />
            </TabsContent>

            <TabsContent value="visualization" className="mt-6">
                <TechStack
                    title="Data Visualization & MarTech"
                    description="Tools for data visualization and marketing technology"
                    technologies={[
                        { name: "Apache Superset", description: "Modern data exploration and visualization platform" },
                        { name: "Looker", description: "Business intelligence and big data analytics platform" },
                        { name: "Google Analytics", description: "Web analytics service for tracking website traffic" },
                        { name: "Google Tag Manager", description: "Tag management system for marketing and analytics tags" },
                    ]}
                />
            </TabsContent>
        </Tabs>
    )
} 