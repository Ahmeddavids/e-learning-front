'use client';

import React, { useState, ReactNode } from 'react';
import {
    Menu,
    Bell,
    User
} from 'lucide-react';

import Sidebar from '@/components/ui/organisms/sidebar';
import { sidebarSections } from '@/components/ui/molecules/SidebarList';

interface DashboardLayoutProps {
    children: ReactNode;
    title?: string;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({
    children,
}) => {
    const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
    const [notificationsCount] = useState(3);

    return (
        <div className="flex h-screen bg-gray-50">
            <Sidebar
                sections={sidebarSections}
                logo={{ src: '/logo.png', alt: 'The Curve by kora' }}
                isOpen={sidebarOpen}
                onClose={() => setSidebarOpen(false)}
            />

            <div className="flex-1 flex flex-col overflow-hidden">
                <header className="bg-white border-b border-gray-200 p-2">
                    <div className="px-2 sm:px-2 lg:px-2 py-2 flex items-center justify-between">
                        <div className="flex items-center">
                            <button
                                type="button"
                                className="text-gray-500 hover:text-gray-600 lg:hidden mr-4 focus:outline-none"
                                onClick={() => setSidebarOpen(true)}
                            >
                                <span className="sr-only">Open sidebar</span>
                                <Menu className="h-6 w-6" />
                            </button>
                        </div>

                        <div className="flex items-center space-x-4 mr-4">
                            <div className="relative">
                                <button className="p-1 rounded-full text-gray-500 hover:bg-gray-100 focus:outline-none">
                                    <span className="sr-only">View notifications</span>
                                    <Bell className="h-6 w-6" />
                                    {notificationsCount > 0 && (
                                        <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-orange-400 ring-2 ring-white" />
                                    )}
                                </button>
                            </div>

                            <div className="relative">
                                <button className="flex items-center space-x-2 focus:outline-none">
                                    <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center">
                                        <User className="h-5 w-5 text-gray-500" />
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                </header>

                <main className="flex-1 overflow-auto bg-gray-50">
                    <div className="py-6 px-4 sm:px-6 lg:px-8">
                        {children}
                    </div>
                </main>
            </div>
        </div>
    );
};

export default DashboardLayout;
