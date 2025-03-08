'use client';

import Sidebar from '../components/Layout/Sidebar';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
} from 'recharts';

// Temporary mock data
const mockUser = {
  id: '1',
  name: 'John Doe',
  role: 'admin' as const,
};

const efficiencyData = [
  { name: 'Robot-A1', efficiency: 95 },
  { name: 'Robot-B2', efficiency: 88 },
  { name: 'Robot-C3', efficiency: 92 },
  { name: 'Robot-D4', efficiency: 85 },
];

const taskCompletionData = [
  { day: 'Mon', completed: 45, pending: 10 },
  { day: 'Tue', completed: 52, pending: 8 },
  { day: 'Wed', completed: 48, pending: 12 },
  { day: 'Thu', completed: 55, pending: 5 },
  { day: 'Fri', completed: 50, pending: 7 },
];

export default function Analytics() {
  return (
    <>
      <Sidebar user={mockUser} />
      <main className="flex-1 p-4 sm:p-8 overflow-auto">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold mb-8 text-center sm:text-left">Analytics</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Robot Efficiency Chart */}
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow">
              <h2 className="text-xl font-semibold mb-4">Robot Efficiency</h2>
              <div className="w-full" style={{ height: 300 }}>
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={efficiencyData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="efficiency" fill="#3B82F6" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Task Completion Trends Chart */}
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow">
              <h2 className="text-xl font-semibold mb-4">Task Completion Trends</h2>
              <div className="w-full" style={{ height: 300 }}>
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={taskCompletionData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="day" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="completed" stroke="#10B981" />
                    <Line type="monotone" dataKey="pending" stroke="#EF4444" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Performance Metrics */}
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow lg:col-span-2">
              <h2 className="text-xl font-semibold mb-4">Performance Metrics</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 bg-blue-50 rounded-lg text-center">
                  <h3 className="text-lg font-medium text-blue-700">Average Efficiency</h3>
                  <p className="text-3xl font-bold text-blue-900">90%</p>
                </div>
                <div className="p-4 bg-green-50 rounded-lg text-center">
                  <h3 className="text-lg font-medium text-green-700">Tasks Completed Today</h3>
                  <p className="text-3xl font-bold text-green-900">45</p>
                </div>
                <div className="p-4 bg-yellow-50 rounded-lg text-center">
                  <h3 className="text-lg font-medium text-yellow-700">Active Robots</h3>
                  <p className="text-3xl font-bold text-yellow-900">8/10</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
