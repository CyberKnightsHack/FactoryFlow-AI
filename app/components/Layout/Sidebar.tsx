import Link from 'next/link';
import { useState } from 'react';
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
  const [isOpen, setIsOpen] = useState(false);

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
    <>
      {/* Mobile Header */}
      <div className="md:hidden flex items-center justify-between bg-gray-900 text-white p-4">
        <div className="flex items-center space-x-2">
          <img src="/logo.webp" alt="BMW Logo" className="h-8 w-8" />
          <span className="text-xl font-bold">Car Manufacturing</span>
        </div>
        <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`md:hidden fixed top-0 left-0 h-full w-64 bg-gray-900 text-white transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out z-50`}
      >
        <div className="p-4">
          <div className="flex items-center space-x-2">
            <img src="/logo.webp" alt="BMW Logo" className="h-8 w-8" />
            <span className="text-xl font-bold">Car Manufacturing</span>
          </div>
        </div>
        <nav className="p-4">
          <ul className="space-y-2">
            {navigation.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="flex items-center space-x-3 px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors"
                  onClick={() => setIsOpen(false)}
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

      {/* Desktop Sidebar */}
      <div className="hidden md:flex md:flex-col md:h-full md:bg-gray-900 md:text-white md:w-64">
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
    </>
  );
}
