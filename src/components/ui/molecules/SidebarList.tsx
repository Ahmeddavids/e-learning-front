import { Home, Calendar, Video, Compass, BookOpenCheck, Trophy, MessageCircle } from 'lucide-react';

export const sidebarSections = [
    {
        items: [
            { name: 'Home', href: '/dashboard', icon: Home },
            { name: 'Calendar', href: '/dashboard/calendar', icon: Calendar },
        ]
    },
    {
        title: 'LEARN',
        items: [
            { name: 'Live Class', href: '/dashboard/live-class', icon: Video, badge: 'new' },
            { name: 'Learning path', href: '/learning-path', icon: Compass },
            { name: 'Assessment', href: '/assessment', icon: BookOpenCheck },
        ]
    },
    {
        title: 'GROW',
        items: [
            { name: 'Leader board', href: '/leaderboard', icon: Trophy },
            { name: 'Community', href: '/community', icon: MessageCircle },
        ]
    }
];
