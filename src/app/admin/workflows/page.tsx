'use client';

import { useState } from 'react';
import {
    Plus,
    Play,
    Pause,
    RefreshCw,
    AlertCircle,
    CheckCircle2,
    MoreVertical,
    Clock,
    Activity
} from 'lucide-react';

interface Workflow {
    id: string;
    name: string;
    description: string;
    status: 'running' | 'paused' | 'completed' | 'error';
    lastRun: string;
    nextRun: string;
    steps: number;
}

export default function WorkflowsPage() {
    const [activeTab, setActiveTab] = useState('all');

    const workflows: Workflow[] = [
        {
            id: '1',
            name: 'Daily Analytics Pipeline',
            description: 'Processes and transforms analytics data from multiple sources',
            status: 'running',
            lastRun: '2 minutes ago',
            nextRun: 'In 23 hours',
            steps: 8,
        },
        {
            id: '2',
            name: 'Customer Data Sync',
            description: 'Synchronizes customer data between CRM and database',
            status: 'paused',
            lastRun: '1 hour ago',
            nextRun: 'Not scheduled',
            steps: 5,
        },
        {
            id: '3',
            name: 'Revenue Report',
            description: 'Generates daily revenue reports from payment data',
            status: 'completed',
            lastRun: '3 hours ago',
            nextRun: 'Tomorrow at 00:00',
            steps: 6,
        },
        {
            id: '4',
            name: 'Data Quality Check',
            description: 'Validates and cleanses incoming data',
            status: 'error',
            lastRun: '5 hours ago',
            nextRun: 'In 1 hour',
            steps: 4,
        },
    ];

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-gray-900">Workflows</h2>
                <button className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700">
                    <Plus className="w-4 h-4 mr-2" />
                    Create Workflow
                </button>
            </div>

            {/* Status Tabs */}
            <div className="border-b border-gray-200">
                <nav className="flex space-x-8">
                    {['all', 'running', 'paused', 'completed', 'error'].map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`py-4 px-1 border-b-2 font-medium text-sm capitalize ${activeTab === tab
                                ? 'border-blue-500 text-blue-600'
                                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                }`}
                        >
                            {tab}
                        </button>
                    ))}
                </nav>
            </div>

            {/* Workflows Grid */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {workflows.map((workflow) => (
                    <div
                        key={workflow.id}
                        className="p-6 bg-white rounded-lg shadow-sm border border-gray-200"
                    >
                        <div className="flex items-start justify-between">
                            <div className="flex items-center space-x-3">
                                <div className="p-2 bg-blue-50 rounded-lg">
                                    <Activity className="w-6 h-6 text-blue-600" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-medium text-gray-900">{workflow.name}</h3>
                                    <p className="text-sm text-gray-500">{workflow.description}</p>
                                </div>
                            </div>
                            <button className="p-1 text-gray-400 hover:text-gray-500">
                                <MoreVertical className="w-5 h-5" />
                            </button>
                        </div>

                        <div className="mt-4 space-y-3">
                            <div className="flex items-center justify-between">
                                <span className="text-sm text-gray-500">Status</span>
                                <span className={`inline-flex items-center text-sm font-medium ${workflow.status === 'running' ? 'text-green-600' :
                                    workflow.status === 'paused' ? 'text-yellow-600' :
                                        workflow.status === 'completed' ? 'text-blue-600' :
                                            'text-red-600'
                                    }`}>
                                    {workflow.status === 'running' ? (
                                        <Play className="w-4 h-4 mr-1" />
                                    ) : workflow.status === 'paused' ? (
                                        <Pause className="w-4 h-4 mr-1" />
                                    ) : workflow.status === 'completed' ? (
                                        <CheckCircle2 className="w-4 h-4 mr-1" />
                                    ) : (
                                        <AlertCircle className="w-4 h-4 mr-1" />
                                    )}
                                    {workflow.status.charAt(0).toUpperCase() + workflow.status.slice(1)}
                                </span>
                            </div>

                            <div className="flex items-center justify-between">
                                <span className="text-sm text-gray-500">Last Run</span>
                                <span className="text-sm font-medium text-gray-900">{workflow.lastRun}</span>
                            </div>

                            <div className="flex items-center justify-between">
                                <span className="text-sm text-gray-500">Next Run</span>
                                <span className="text-sm font-medium text-gray-900">{workflow.nextRun}</span>
                            </div>

                            <div className="flex items-center justify-between">
                                <span className="text-sm text-gray-500">Steps</span>
                                <span className="text-sm font-medium text-gray-900">{workflow.steps}</span>
                            </div>
                        </div>

                        <div className="mt-4 flex space-x-2">
                            {workflow.status === 'running' ? (
                                <button className="flex-1 inline-flex items-center justify-center px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
                                    <Pause className="w-4 h-4 mr-2" />
                                    Pause
                                </button>
                            ) : workflow.status === 'paused' ? (
                                <button className="flex-1 inline-flex items-center justify-center px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
                                    <Play className="w-4 h-4 mr-2" />
                                    Resume
                                </button>
                            ) : (
                                <button className="flex-1 inline-flex items-center justify-center px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
                                    <Play className="w-4 h-4 mr-2" />
                                    Run Now
                                </button>
                            )}
                            <button className="inline-flex items-center justify-center px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
                                <RefreshCw className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
} 