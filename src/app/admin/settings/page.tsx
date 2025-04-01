'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import {
    Save,
    Bell,
    Lock,
    Database,
    Mail,
    Globe,
    Shield,
    CreditCard,
    Users,
    Zap
} from 'lucide-react';

// Form schemas
const generalSettingsSchema = z.object({
    companyName: z.string().min(1, 'Company name is required'),
    timeZone: z.string(),
    dateFormat: z.string(),
});

const securitySettingsSchema = z.object({
    currentPassword: z.string().min(8, 'Password must be at least 8 characters'),
    newPassword: z.string().min(8, 'Password must be at least 8 characters'),
    confirmPassword: z.string(),
}).refine((data) => data.newPassword === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
});

type GeneralSettingsForm = z.infer<typeof generalSettingsSchema>;
type SecuritySettingsForm = z.infer<typeof securitySettingsSchema>;

interface SettingSection {
    id: string;
    title: string;
    description: string;
    icon: any;
    content: React.ReactNode;
}

export default function SettingsPage() {
    const [activeSection, setActiveSection] = useState('general');

    // Form hooks
    const generalForm = useForm<GeneralSettingsForm>({
        resolver: zodResolver(generalSettingsSchema),
        defaultValues: {
            companyName: 'EvRo',
            timeZone: 'UTC',
            dateFormat: 'MM/DD/YYYY',
        },
    });

    const securityForm = useForm<SecuritySettingsForm>({
        resolver: zodResolver(securitySettingsSchema),
    });

    const sections: SettingSection[] = [
        {
            id: 'general',
            title: 'General Settings',
            description: 'Basic configuration for your account',
            icon: Globe,
            content: (
                <form onSubmit={generalForm.handleSubmit((data) => console.log(data))} className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Company Name</label>
                        <input
                            type="text"
                            {...generalForm.register('companyName')}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        />
                        {generalForm.formState.errors.companyName && (
                            <p className="mt-1 text-sm text-red-600">
                                {generalForm.formState.errors.companyName.message}
                            </p>
                        )}
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Time Zone</label>
                        <select
                            {...generalForm.register('timeZone')}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        >
                            <option value="UTC">UTC</option>
                            <option value="EST">EST</option>
                            <option value="PST">PST</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Date Format</label>
                        <select
                            {...generalForm.register('dateFormat')}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        >
                            <option value="MM/DD/YYYY">MM/DD/YYYY</option>
                            <option value="DD/MM/YYYY">DD/MM/YYYY</option>
                            <option value="YYYY-MM-DD">YYYY-MM-DD</option>
                        </select>
                    </div>
                </form>
            ),
        },
        {
            id: 'notifications',
            title: 'Notifications',
            description: 'Configure your notification preferences',
            icon: Bell,
            content: (
                <div className="space-y-6">
                    <div className="flex items-center justify-between">
                        <div>
                            <h3 className="text-sm font-medium text-gray-900">Email Notifications</h3>
                            <p className="text-sm text-gray-500">Receive notifications via email</p>
                        </div>
                        <button className="relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-blue-600 transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                            <span className="translate-x-5 pointer-events-none relative inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out">
                                <span className="opacity-0 duration-100 ease-out absolute inset-0 flex h-full w-full items-center justify-center transition-opacity">
                                    <svg className="h-3 w-3 text-blue-600" fill="none" viewBox="0 0 12 12">
                                        <path
                                            d="M3.707 5.293a1 1 0 00-1.414 1.414l1.414-1.414zM5 8l-.707.707a1 1 0 001.414 0L5 8zm4.707-3.293a1 1 0 00-1.414-1.414l1.414 1.414zm-7.414 2l2 2 1.414-1.414-2-2-1.414 1.414zm3.414 2l4-4-1.414-1.414-4 4 1.414 1.414z"
                                            fill="currentColor"
                                        />
                                    </svg>
                                </span>
                                <span className="opacity-100 duration-200 ease-in absolute inset-0 flex h-full w-full items-center justify-center transition-opacity">
                                    <svg className="h-3 w-3 text-blue-600" fill="none" viewBox="0 0 12 12">
                                        <path
                                            d="M3.707 5.293a1 1 0 00-1.414 1.414l1.414-1.414zM5 8l-.707.707a1 1 0 001.414 0L5 8zm4.707-3.293a1 1 0 00-1.414-1.414l1.414 1.414zm-7.414 2l2 2 1.414-1.414-2-2-1.414 1.414zm3.414 2l4-4-1.414-1.414-4 4 1.414 1.414z"
                                            fill="currentColor"
                                        />
                                    </svg>
                                </span>
                            </span>
                        </button>
                    </div>
                    <div className="flex items-center justify-between">
                        <div>
                            <h3 className="text-sm font-medium text-gray-900">Push Notifications</h3>
                            <p className="text-sm text-gray-500">Receive notifications in your browser</p>
                        </div>
                        <button className="relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-gray-200 transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                            <span className="translate-x-0 pointer-events-none relative inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out">
                                <span className="opacity-0 duration-100 ease-out absolute inset-0 flex h-full w-full items-center justify-center transition-opacity">
                                    <svg className="h-3 w-3 text-blue-600" fill="none" viewBox="0 0 12 12">
                                        <path
                                            d="M3.707 5.293a1 1 0 00-1.414 1.414l1.414-1.414zM5 8l-.707.707a1 1 0 001.414 0L5 8zm4.707-3.293a1 1 0 00-1.414-1.414l1.414 1.414zm-7.414 2l2 2 1.414-1.414-2-2-1.414 1.414zm3.414 2l4-4-1.414-1.414-4 4 1.414 1.414z"
                                            fill="currentColor"
                                        />
                                    </svg>
                                </span>
                                <span className="opacity-100 duration-200 ease-in absolute inset-0 flex h-full w-full items-center justify-center transition-opacity">
                                    <svg className="h-3 w-3 text-gray-400" fill="none" viewBox="0 0 12 12">
                                        <path
                                            d="M3.707 5.293a1 1 0 00-1.414 1.414l1.414-1.414zM5 8l-.707.707a1 1 0 001.414 0L5 8zm4.707-3.293a1 1 0 00-1.414-1.414l1.414 1.414zm-7.414 2l2 2 1.414-1.414-2-2-1.414 1.414zm3.414 2l4-4-1.414-1.414-4 4 1.414 1.414z"
                                            fill="currentColor"
                                        />
                                    </svg>
                                </span>
                            </span>
                        </button>
                    </div>
                </div>
            ),
        },
        {
            id: 'security',
            title: 'Security',
            description: 'Manage your security settings',
            icon: Lock,
            content: (
                <form onSubmit={securityForm.handleSubmit((data) => console.log(data))} className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Current Password</label>
                        <input
                            type="password"
                            {...securityForm.register('currentPassword')}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        />
                        {securityForm.formState.errors.currentPassword && (
                            <p className="mt-1 text-sm text-red-600">
                                {securityForm.formState.errors.currentPassword.message}
                            </p>
                        )}
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">New Password</label>
                        <input
                            type="password"
                            {...securityForm.register('newPassword')}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        />
                        {securityForm.formState.errors.newPassword && (
                            <p className="mt-1 text-sm text-red-600">
                                {securityForm.formState.errors.newPassword.message}
                            </p>
                        )}
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Confirm New Password</label>
                        <input
                            type="password"
                            {...securityForm.register('confirmPassword')}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        />
                        {securityForm.formState.errors.confirmPassword && (
                            <p className="mt-1 text-sm text-red-600">
                                {securityForm.formState.errors.confirmPassword.message}
                            </p>
                        )}
                    </div>
                    <div className="flex items-center justify-between">
                        <div>
                            <h3 className="text-sm font-medium text-gray-900">Two-Factor Authentication</h3>
                            <p className="text-sm text-gray-500">Add an extra layer of security to your account</p>
                        </div>
                        <button type="button" className="relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-gray-200 transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                            <span className="translate-x-0 pointer-events-none relative inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out">
                                <span className="opacity-0 duration-100 ease-out absolute inset-0 flex h-full w-full items-center justify-center transition-opacity">
                                    <svg className="h-3 w-3 text-blue-600" fill="none" viewBox="0 0 12 12">
                                        <path
                                            d="M3.707 5.293a1 1 0 00-1.414 1.414l1.414-1.414zM5 8l-.707.707a1 1 0 001.414 0L5 8zm4.707-3.293a1 1 0 00-1.414-1.414l1.414 1.414zm-7.414 2l2 2 1.414-1.414-2-2-1.414 1.414zm3.414 2l4-4-1.414-1.414-4 4 1.414 1.414z"
                                            fill="currentColor"
                                        />
                                    </svg>
                                </span>
                                <span className="opacity-100 duration-200 ease-in absolute inset-0 flex h-full w-full items-center justify-center transition-opacity">
                                    <svg className="h-3 w-3 text-gray-400" fill="none" viewBox="0 0 12 12">
                                        <path
                                            d="M3.707 5.293a1 1 0 00-1.414 1.414l1.414-1.414zM5 8l-.707.707a1 1 0 001.414 0L5 8zm4.707-3.293a1 1 0 00-1.414-1.414l1.414 1.414zm-7.414 2l2 2 1.414-1.414-2-2-1.414 1.414zm3.414 2l4-4-1.414-1.414-4 4 1.414 1.414z"
                                            fill="currentColor"
                                        />
                                    </svg>
                                </span>
                            </span>
                        </button>
                    </div>
                </form>
            ),
        },
        {
            id: 'billing',
            title: 'Billing',
            description: 'Manage your subscription and billing',
            icon: CreditCard,
            content: (
                <div className="space-y-6">
                    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                        <h3 className="text-lg font-medium text-gray-900">Current Plan</h3>
                        <p className="mt-1 text-sm text-gray-500">Professional Plan - $99/month</p>
                        <div className="mt-4">
                            <button className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700">
                                Upgrade Plan
                            </button>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-lg font-medium text-gray-900">Payment Method</h3>
                        <div className="mt-4 flex items-center space-x-4">
                            <div className="flex-shrink-0">
                                <div className="h-12 w-20 bg-gray-100 rounded-md flex items-center justify-center">
                                    <CreditCard className="h-6 w-6 text-gray-400" />
                                </div>
                            </div>
                            <div className="flex-1">
                                <p className="text-sm font-medium text-gray-900">•••• •••• •••• 4242</p>
                                <p className="text-sm text-gray-500">Expires 12/24</p>
                            </div>
                            <button className="text-sm text-blue-600 hover:text-blue-700">
                                Update
                            </button>
                        </div>
                    </div>
                </div>
            ),
        },
    ];

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-gray-900">Settings</h2>
                <button
                    onClick={() => {
                        if (activeSection === 'general') {
                            generalForm.handleSubmit((data) => console.log(data))();
                        } else if (activeSection === 'security') {
                            securityForm.handleSubmit((data) => console.log(data))();
                        }
                    }}
                    className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700"
                >
                    <Save className="w-4 h-4 mr-2" />
                    Save Changes
                </button>
            </div>

            <div className="flex flex-col lg:flex-row gap-6">
                {/* Settings Navigation */}
                <div className="lg:w-64">
                    <nav className="space-y-1">
                        {sections.map((section) => {
                            const Icon = section.icon;
                            return (
                                <button
                                    key={section.id}
                                    onClick={() => setActiveSection(section.id)}
                                    className={`w-full flex items-center px-4 py-2 text-sm font-medium rounded-md ${activeSection === section.id
                                        ? 'bg-blue-50 text-blue-700'
                                        : 'text-gray-700 hover:bg-gray-50'
                                        }`}
                                >
                                    <Icon className="w-5 h-5 mr-3" />
                                    {section.title}
                                </button>
                            );
                        })}
                    </nav>
                </div>

                {/* Settings Content */}
                <div className="flex-1">
                    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                        {sections.map((section) => (
                            <div
                                key={section.id}
                                className={activeSection === section.id ? 'block' : 'hidden'}
                            >
                                <div className="mb-6">
                                    <h3 className="text-lg font-medium text-gray-900">{section.title}</h3>
                                    <p className="mt-1 text-sm text-gray-500">{section.description}</p>
                                </div>
                                {section.content}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
} 