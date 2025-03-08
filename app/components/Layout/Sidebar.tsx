import Link from 'next/link';
import {
  HomeIcon,
  ChartBarIcon,
  WrenchScrewdriverIcon,
  UserGroupIcon,
  Cog6ToothIcon,
  BriefcaseIcon,
  CpuChipIcon,
  AdjustmentsHorizontalIcon,
} from '@heroicons/react/24/outline';
import { User } from '@/app/types';

interface SidebarProps {
  user: User;
}

export default function Sidebar({ user }: SidebarProps) {
  const navigation = [
    { name: 'Dashboard', href: '/', icon: HomeIcon },
    { name: 'Analytics', href: '/analytics', icon: ChartBarIcon },
    { name: 'Maintenance', href: '/maintenance', icon: WrenchScrewdriverIcon },
    { name: 'Industry Overview', href: '/industry-overview', icon: BriefcaseIcon },
    { name: 'Webot Simulation Integration', href: '/webot-simulation', icon: CpuChipIcon },
    { name: 'Task Optimization', href: '/task-optimization', icon: AdjustmentsHorizontalIcon },
    ...(user.role === 'admin'
      ? [{ name: 'Team Management', href: '/team', icon: UserGroupIcon }]
      : []),
    { name: 'Settings', href: '/settings', icon: Cog6ToothIcon },
  ];

  return (
    <div className="flex flex-col h-full bg-gray-900 text-white w-64">
      <div className="p-4">
        <div className="flex items-center space-x-2">
          <img src="/logo.webp" alt="BMW Logo" className="h-8 w-8" />
          <span className="text-xl font-bold">Car Manufacturing</span>
        </div>
      </div>
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {navigation.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className="flex items-center space-x-3 px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors"
              >
                <item.icon className="h-5 w-5" />
                <span>{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="p-4 border-t border-gray-800">
        <div className="flex items-center space-x-3">
          <div className="h-8 w-8 rounded-full bg-gray-700 flex items-center justify-center">
            {user.name.charAt(0)}
          </div>
          <div>
            <p className="font-medium">{user.name}</p>
            <p className="text-sm text-gray-400 capitalize">{user.role}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
