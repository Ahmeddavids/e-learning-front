import React from 'react';
import SidebarLink from './SidebarLink';
import { NavItem, NavSection } from '@/types/sidebar';

interface SidebarSectionProps {
    section: NavSection;
}

const SidebarSection: React.FC<SidebarSectionProps> = ({ section }) => {
    return (
        <div className="mb-6">
            {section.title && (
                <h3 className="pl-10 px-4 mb-2 text-xs font-semibold uppercase tracking-wider text-gray-400">
                    {section.title}
                </h3>
            )}
            <nav className="space-y-1">
                {section.items.map((item: NavItem) => (
                    <SidebarLink key={item.name} item={item} />
                ))}
            </nav>
        </div>
    );
};

export default SidebarSection;
