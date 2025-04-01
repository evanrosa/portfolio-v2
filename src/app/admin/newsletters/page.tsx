'use client';

import { useState } from 'react';
import { Plus, Mail, Users, FileText, Calendar, BarChart } from 'lucide-react';

interface Tab {
    name: string;
    icon: any;
    content: React.ReactNode;
}

export default function NewslettersPage() {
    const [activeTab, setActiveTab] = useState('campaigns');

    const tabs: Tab[] = [
        {
            name: 'Campaigns',
            icon: Mail,
            content: <CampaignsTab />,
        },
        {
            name: 'Templates',
            icon: FileText,
            content: <TemplatesTab />,
        },
        {
            name: 'Subscribers',
            icon: Users,
            content: <SubscribersTab />,
        },
        {
            name: 'Schedule',
            icon: Calendar,
            content: <ScheduleTab />,
        },
        {
            name: 'Analytics',
            icon: BarChart,
            content: <AnalyticsTab />,
        },
    ];

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-gray-900">Newsletter Management</h2>
                <button className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700">
                    <Plus className="w-4 h-4 mr-2" />
                    Create Campaign
                </button>
            </div>

            {/* Tabs */}
            <div className="border-b border-gray-200">
                <nav className="flex space-x-8">
                    {tabs.map((tab) => {
                        const Icon = tab.icon;
                        return (
                            <button
                                key={tab.name}
                                onClick={() => setActiveTab(tab.name.toLowerCase())}
                                className={`inline-flex items-center py-4 px-1 border-b-2 font-medium text-sm ${activeTab === tab.name.toLowerCase()
                                        ? 'border-blue-500 text-blue-600'
                                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                    }`}
                            >
                                <Icon className="w-5 h-5 mr-2" />
                                {tab.name}
                            </button>
                        );
                    })}
                </nav>
            </div>

            {/* Tab Content */}
            <div className="mt-6">
                {tabs.find((tab) => tab.name.toLowerCase() === activeTab)?.content}
            </div>
        </div>
    );
}

function CampaignsTab() {
    return (
        <div className="space-y-4">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {/* Campaign Cards */}
                {[1, 2, 3].map((campaign) => (
                    <div
                        key={campaign}
                        className="p-6 bg-white rounded-lg shadow-sm border border-gray-200"
                    >
                        <h3 className="text-lg font-medium text-gray-900">Campaign {campaign}</h3>
                        <p className="mt-2 text-sm text-gray-500">
                            Status: <span className="text-green-600">Active</span>
                        </p>
                        <div className="mt-4 flex space-x-2">
                            <button className="text-sm text-blue-600 hover:text-blue-700">
                                Edit
                            </button>
                            <button className="text-sm text-red-600 hover:text-red-700">
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

function TemplatesTab() {
    return (
        <div className="space-y-4">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {/* Template Cards */}
                {[1, 2, 3].map((template) => (
                    <div
                        key={template}
                        className="p-6 bg-white rounded-lg shadow-sm border border-gray-200"
                    >
                        <h3 className="text-lg font-medium text-gray-900">Template {template}</h3>
                        <p className="mt-2 text-sm text-gray-500">
                            Last modified: 2 days ago
                        </p>
                        <div className="mt-4 flex space-x-2">
                            <button className="text-sm text-blue-600 hover:text-blue-700">
                                Edit
                            </button>
                            <button className="text-sm text-red-600 hover:text-red-700">
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

function SubscribersTab() {
    return (
        <div className="space-y-4">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200">
                <div className="p-4 border-b border-gray-200">
                    <h3 className="text-lg font-medium text-gray-900">Subscriber List</h3>
                </div>
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Email
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Status
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Subscribed
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {[1, 2, 3].map((subscriber) => (
                                <tr key={subscriber}>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                        subscriber{subscriber}@example.com
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        Active
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        Jan 1, 2024
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        <button className="text-red-600 hover:text-red-700">
                                            Unsubscribe
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

function ScheduleTab() {
    return (
        <div className="space-y-4">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <h3 className="text-lg font-medium text-gray-900">Scheduled Campaigns</h3>
                <div className="mt-4 space-y-4">
                    {[1, 2, 3].map((schedule) => (
                        <div
                            key={schedule}
                            className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                        >
                            <div>
                                <h4 className="text-sm font-medium text-gray-900">
                                    Campaign {schedule}
                                </h4>
                                <p className="text-sm text-gray-500">
                                    Scheduled for: Jan {schedule}, 2024 10:00 AM
                                </p>
                            </div>
                            <div className="flex space-x-2">
                                <button className="text-sm text-blue-600 hover:text-blue-700">
                                    Edit
                                </button>
                                <button className="text-sm text-red-600 hover:text-red-700">
                                    Cancel
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

function AnalyticsTab() {
    return (
        <div className="space-y-4">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {/* Analytics Cards */}
                {[
                    { title: 'Total Subscribers', value: '1,234' },
                    { title: 'Open Rate', value: '45%' },
                    { title: 'Click Rate', value: '12%' },
                    { title: 'Unsubscribe Rate', value: '0.5%' },
                ].map((stat) => (
                    <div
                        key={stat.title}
                        className="p-6 bg-white rounded-lg shadow-sm border border-gray-200"
                    >
                        <h3 className="text-sm font-medium text-gray-500">{stat.title}</h3>
                        <p className="mt-2 text-2xl font-semibold text-gray-900">
                            {stat.value}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
} 