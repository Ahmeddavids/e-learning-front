import React from 'react';
import Image from 'next/image';
import { NavSection } from '@/types/sidebar';
import SidebarSection from '../molecules/SidebarSection';


interface SidebarProps {
    sections: NavSection[];
    logo: {
        src: string;
        alt: string;
    };
    isOpen?: boolean;
    onClose?: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({
    sections,
    logo,
    isOpen = true,
    onClose,
}) => {
    const handleOverlayClick = () => {
        if (onClose) onClose();
    };

    return (
        <>
            {isOpen && (
                <div
                    className="fixed inset-0 bg-gray-600 opacity-50 z-20 lg:hidden"
                    onClick={handleOverlayClick}
                    aria-hidden="true"
                />
            )}

            <div
                className={`fixed top-0 left-0 h-full w-64 bg-white border-r z-30 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'
                    } lg:translate-x-0 lg:static lg:z-auto`}
            >
                <div className="h-full flex flex-col overflow-y-auto">
                    <div className="flex items-center justify-center h-[120px] px-6">
                        <Image
                            src={logo.src}
                            alt={logo.alt}
                            width={120}
                            height={100}
                            className="object-contain"
                        />
                    </div>

                    <div className="flex-1 py-4">
                        {sections.map((section, index) => (
                            <SidebarSection key={section.title || `section-${index}`} section={section} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Sidebar;
