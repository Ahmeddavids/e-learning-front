import { NavItem } from '@/types/sidebar';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';


interface SidebarLinkProps {
    item: NavItem;
}

const SidebarLink: React.FC<SidebarLinkProps> = ({ item }) => {
    const pathname = usePathname();
    const isActive = item.active || pathname === item.href;
    const Icon = item.icon;

    return (
        <Link
            href={item.href}
            className={`flex items-center pl-8 px-4 py-3 text-sm font-medium rounded-lg transition-colors ${isActive
                ? 'bg-orange-100 text-gray-900'
                : 'text-gray-700 hover:bg-gray-100'
                }`}
        >
            <span className={`${isActive ? 'bg-orange-100 flex items-center mb-1 w-[90%] p-2 rounded-[8px]' : 'flex items-center mb-1 w-[90%] p-2 rounded-[8px]'}`}>
                <Icon className={`h-5 w-5 mr-3 ${isActive ? 'text-gray-600' : 'text-gray-500'}`} />
                <p className={`${isActive ? 'text-gray-600' : 'font-light text-sm'}`}>{item.name}</p>

                {item.badge && (
                    <span className="ml-1 mb-1 h-2 w-2 rounded-full bg-orange-400" aria-hidden="true" />
                )}
            </span>

        </Link>
    );
};

export default SidebarLink;
