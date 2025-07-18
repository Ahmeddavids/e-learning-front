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
<<<<<<< HEAD
            { name: 'Learning path', href: '/learning-path', icon: Compass },
            { name: 'Assessment', href: '/assessment', icon: BookOpenCheck },
=======
            { name: 'Learning path', href: '/dashboard/learning-path', icon: Compass },
            { name: 'Assessment', href: '/dashboard/assessment', icon: BookOpenCheck },
>>>>>>> b8e82230a4a0194a0c9cb4ac45b029b755fb2ebf
        ]
    },
    {
        title: 'GROW',
        items: [
            { name: 'Leader board', href: '/dashboard/leaderboard', icon: Trophy },
            { name: 'Community', href: '/dashboard/community', icon: MessageCircle },
        ]
    }
];
