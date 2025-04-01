import { ReactNode } from 'react';
import Link from 'next/link';
import {
    LayoutDashboard,
    Mail,
    Settings,
    Users,
    Database,
    Workflow
} from 'lucide-react';
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";

interface AdminLayoutProps {
    children: ReactNode;
}

const navigation = [
    { name: 'Dashboard', href: '/admin', icon: LayoutDashboard },
    { name: 'Newsletters', href: '/admin/newsletters', icon: Mail },
    { name: 'Data Sources', href: '/admin/data-sources', icon: Database },
    { name: 'Workflows', href: '/admin/workflows', icon: Workflow },
    { name: 'Users', href: '/admin/users', icon: Users },
    { name: 'Settings', href: '/admin/settings', icon: Settings },
];

export default function AdminLayout({ children }: AdminLayoutProps) {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Sidebar */}
            <div className="fixed inset-y-0 left-0 z-50 w-64 bg-white border-r border-gray-200">
                <div className="flex flex-col h-full">
                    <div className="flex items-center h-16 px-4 border-b border-gray-200">
                        <Link href="/admin" className="text-xl font-bold text-gray-900">
                            EvRo - Admin
                        </Link>
                    </div>
                    <nav className="flex-1 px-2 py-4 space-y-1">
                        {navigation.map((item) => {
                            const Icon = item.icon;
                            return (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 rounded-md hover:bg-gray-100 hover:text-gray-900"
                                >
                                    <Icon className="w-5 h-5 mr-3" />
                                    {item.name}
                                </Link>
                            );
                        })}
                    </nav>
                </div>
            </div>

            {/* Main content */}
            <div className="pl-64">
                <header className="sticky top-0 z-40 h-16 bg-white border-b border-gray-200">
                    <div className="flex items-center justify-between h-full px-4">
                        <h1 className="text-lg font-semibold text-gray-900">Admin Dashboard</h1>

                    </div>
                </header>
                <main className="p-6">
                    {children}
                </main>
            </div>
        </div>
    );
}
