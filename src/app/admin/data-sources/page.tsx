'use client';

import { useState } from 'react';
import {
    Plus,
    Database,
    RefreshCw,
    AlertCircle,
    CheckCircle2,
    MoreVertical,
    ExternalLink
} from 'lucide-react';

interface DataSource {
    id: string;
    name: string;
    type: string;
    status: 'active' | 'error' | 'warning';
    lastSync: string;
    records: number;
}

export default function DataSourcesPage() {
    const [activeTab, setActiveTab] = useState('all');

    const dataSources: DataSource[] = [
        {
            id: '1',
            name: 'Google Analytics 4',
            type: 'Analytics',
            status: 'active',
            lastSync: '2 minutes ago',
            records: 15000,
        },
        {
            id: '2',
            name: 'Stripe Payments',
            type: 'Payment',
            status: 'active',
            lastSync: '5 minutes ago',
            records: 8500,
        },
        {
            id: '3',
            name: 'Salesforce CRM',
            type: 'CRM',
            status: 'warning',
            lastSync: '1 hour ago',
            records: 12000,
        },
        {
            id: '4',
            name: 'MongoDB Database',
            type: 'Database',
            status: 'error',
            lastSync: '2 hours ago',
            records: 25000,
        },
    ];

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-gray-900">Data Sources</h2>
                <button className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700">
                    <Plus className="w-4 h-4 mr-2" />
                    Add Data Source
                </button>
            </div>

            {/* Status Tabs */}
            <div className="border-b border-gray-200">
                <nav className="flex space-x-8">
                    {['all', 'active', 'warning', 'error'].map((tab) => (
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

            {/* Data Sources Grid */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {dataSources.map((source) => (
                    <div
                        key={source.id}
                        className="p-6 bg-white rounded-lg shadow-sm border border-gray-200"
                    >
                        <div className="flex items-start justify-between">
                            <div className="flex items-center space-x-3">
                                <div className="p-2 bg-blue-50 rounded-lg">
                                    <Database className="w-6 h-6 text-blue-600" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-medium text-gray-900">{source.name}</h3>
                                    <p className="text-sm text-gray-500">{source.type}</p>
                                </div>
                            </div>
                            <button className="p-1 text-gray-400 hover:text-gray-500">
                                <MoreVertical className="w-5 h-5" />
                            </button>
                        </div>

                        <div className="mt-4 space-y-3">
                            <div className="flex items-center justify-between">
                                <span className="text-sm text-gray-500">Status</span>
                                <span className={`inline-flex items-center text-sm font-medium ${source.status === 'active' ? 'text-green-600' :
                                        source.status === 'warning' ? 'text-yellow-600' :
                                            'text-red-600'
                                    }`}>
                                    {source.status === 'active' ? (
                                        <CheckCircle2 className="w-4 h-4 mr-1" />
                                    ) : source.status === 'warning' ? (
                                        <AlertCircle className="w-4 h-4 mr-1" />
                                    ) : (
                                        <AlertCircle className="w-4 h-4 mr-1" />
                                    )}
                                    {source.status.charAt(0).toUpperCase() + source.status.slice(1)}
                                </span>
                            </div>

                            <div className="flex items-center justify-between">
                                <span className="text-sm text-gray-500">Last Sync</span>
                                <span className="text-sm font-medium text-gray-900">{source.lastSync}</span>
                            </div>

                            <div className="flex items-center justify-between">
                                <span className="text-sm text-gray-500">Records</span>
                                <span className="text-sm font-medium text-gray-900">{source.records.toLocaleString()}</span>
                            </div>
                        </div>

                        <div className="mt-4 flex space-x-2">
                            <button className="flex-1 inline-flex items-center justify-center px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
                                <RefreshCw className="w-4 h-4 mr-2" />
                                Sync Now
                            </button>
                            <button className="inline-flex items-center justify-center px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
                                <ExternalLink className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
} 