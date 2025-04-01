'use client';

import {
    Database,
    Users,
    Workflow,
    Activity,
    ArrowUpRight,
    ArrowDownRight
} from 'lucide-react';

export default function DashboardPage() {
    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-gray-900">Dashboard Overview</h2>
                <div className="flex items-center space-x-4">
                    <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
                        Last 7 days
                    </button>
                    <button className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700">
                        Export Report
                    </button>
                </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {[
                    {
                        title: 'Active Data Sources',
                        value: '12',
                        change: '+2',
                        trend: 'up',
                        icon: Database,
                    },
                    {
                        title: 'Total Users',
                        value: '1,234',
                        change: '+12%',
                        trend: 'up',
                        icon: Users,
                    },
                    {
                        title: 'Running Workflows',
                        value: '8',
                        change: '-1',
                        trend: 'down',
                        icon: Workflow,
                    },
                    {
                        title: 'System Health',
                        value: '98%',
                        change: '+1%',
                        trend: 'up',
                        icon: Activity,
                    },
                ].map((stat) => {
                    const Icon = stat.icon;
                    return (
                        <div
                            key={stat.title}
                            className="p-6 bg-white rounded-lg shadow-sm border border-gray-200"
                        >
                            <div className="flex items-center justify-between">
                                <div className="p-2 bg-blue-50 rounded-lg">
                                    <Icon className="w-6 h-6 text-blue-600" />
                                </div>
                                <span className={`flex items-center text-sm font-medium ${stat.trend === 'up' ? 'text-green-600' : 'text-red-600'
                                    }`}>
                                    {stat.trend === 'up' ? (
                                        <ArrowUpRight className="w-4 h-4 mr-1" />
                                    ) : (
                                        <ArrowDownRight className="w-4 h-4 mr-1" />
                                    )}
                                    {stat.change}
                                </span>
                            </div>
                            <h3 className="mt-4 text-sm font-medium text-gray-500">{stat.title}</h3>
                            <p className="mt-2 text-2xl font-semibold text-gray-900">{stat.value}</p>
                        </div>
                    );
                })}
            </div>

            {/* Recent Activity */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200">
                <div className="p-6 border-b border-gray-200">
                    <h3 className="text-lg font-medium text-gray-900">Recent Activity</h3>
                </div>
                <div className="divide-y divide-gray-200">
                    {[
                        {
                            action: 'New data source connected',
                            user: 'John Doe',
                            time: '2 minutes ago',
                            type: 'success',
                        },
                        {
                            action: 'Workflow completed',
                            user: 'System',
                            time: '15 minutes ago',
                            type: 'info',
                        },
                        {
                            action: 'User permissions updated',
                            user: 'Admin',
                            time: '1 hour ago',
                            type: 'warning',
                        },
                        {
                            action: 'Data transformation failed',
                            user: 'System',
                            time: '2 hours ago',
                            type: 'error',
                        },
                    ].map((activity, index) => (
                        <div key={index} className="p-4">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-3">
                                    <div className={`w-2 h-2 rounded-full ${activity.type === 'success' ? 'bg-green-500' :
                                        activity.type === 'info' ? 'bg-blue-500' :
                                            activity.type === 'warning' ? 'bg-yellow-500' :
                                                'bg-red-500'
                                        }`} />
                                    <div>
                                        <p className="text-sm font-medium text-gray-900">{activity.action}</p>
                                        <p className="text-sm text-gray-500">by {activity.user}</p>
                                    </div>
                                </div>
                                <span className="text-sm text-gray-500">{activity.time}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}