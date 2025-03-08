"use client"; // Required for client-side animations

import { motion } from 'framer-motion';
import Sidebar from '../components/Layout/Sidebar';
import { Doughnut, Bar, Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  LineElement,
  PointElement,
  Tooltip,
  Legend,
  Title
} from 'chart.js';

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  LineElement,
  PointElement,
  Tooltip,
  Legend,
  Title
);

type User = {
  id: string;
  name: string;
  role: 'admin' | 'manager' | 'operator';
};

const mockUser: User = {
  id: '1',
  name: 'John Doe',
  role: 'admin',
};

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 }
  }
};

const fadeUpVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: 'easeOut' }
  }
};

// Sample data for interactive graphs

// Doughnut Chart (Task Status Distribution)
const doughnutData = {
  labels: ['Completed', 'In Progress', 'Pending'],
  datasets: [
    {
      data: [45, 25, 30],
      backgroundColor: ['#34D399', '#FBBF24', '#9CA3AF'],
      hoverOffset: 6
    }
  ]
};

// Bar Chart (Resource Allocation per Robot)
const barData = {
  labels: ['Robot A', 'Robot B', 'Robot C', 'Robot D'],
  datasets: [
    {
      label: 'Tasks Completed',
      data: [50, 70, 60, 40],
      backgroundColor: ['#3B82F6', '#F97316', '#10B981', '#F59E0B']
    }
  ]
};

// Line Chart (Production Efficiency Over Time)
const lineData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [
    {
      label: 'Efficiency (%)',
      data: [80, 85, 82, 88, 90, 87],
      borderColor: '#3B82F6',
      backgroundColor: 'rgba(59, 130, 246, 0.2)',
      fill: true,
      tension: 0.4
    }
  ]
};

// Sample data for task allocation table
const taskAllocationData = [
  { id: '1', taskName: 'Assembly', assignedRobot: 'Robot A', status: 'Completed', efficiency: '92%' },
  { id: '2', taskName: 'Welding', assignedRobot: 'Robot B', status: 'In Progress', efficiency: '85%' },
  { id: '3', taskName: 'Painting', assignedRobot: 'Robot C', status: 'Pending', efficiency: 'N/A' },
  { id: '4', taskName: 'Inspection', assignedRobot: 'Robot D', status: 'Completed', efficiency: '95%' },
];

export default function TaskOptimization() {
  return (
    <>
      <Sidebar user={mockUser} />
      <main className="flex-1 p-8 overflow-auto bg-gradient-to-b from-gray-50 to-white">
        <motion.div 
          className="space-y-8"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* Page Title */}
          <motion.h1 
            className="text-3xl font-bold text-blue-800"
            variants={fadeUpVariant}
          >
            Task Optimization & Efficient Allocation
          </motion.h1>

          {/* Overview Section */}
          <motion.section variants={fadeUpVariant} className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-2xl font-semibold mb-3">Overview</h2>
            <p className="text-gray-700 leading-relaxed">
              Our AI-driven system streamlines task allocation across a network of robots,
              leveraging predictive analytics and dynamic resource management to minimize downtime
              and maximize production efficiency.
            </p>
          </motion.section>

          {/* Interactive Graphs Section */}
          <motion.section variants={fadeUpVariant} className="bg-white p-6 rounded-lg shadow space-y-6">
            <h2 className="text-2xl font-semibold mb-3">Interactive Performance Metrics</h2>
            {/* Bar Chart */}
            <div>
              <h3 className="text-xl font-medium mb-2">Robot Workload Distribution</h3>
              <Bar data={barData} options={{ responsive: true, plugins: { legend: { position: 'bottom' } } }} />
            </div>
            {/* Line Chart */}
            <div>
              <h3 className="text-xl font-medium mb-2">Production Efficiency Over Time</h3>
              <Line data={lineData} options={{ responsive: true, plugins: { legend: { position: 'bottom' } } }} />
            </div>
          </motion.section>

          {/* Task Allocation Table Section */}
          <motion.section variants={fadeUpVariant} className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-2xl font-semibold mb-3">Task Allocation Details</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Task</th>
                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Assigned Robot</th>
                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Efficiency</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {taskAllocationData.map(task => (
                    <tr key={task.id}>
                      <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">{task.taskName}</td>
                      <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">{task.assignedRobot}</td>
                      <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">{task.status}</td>
                      <td className="px-4 py-2 whitespace-nowrap text-sm font-medium text-gray-900">{task.efficiency}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.section>

        </motion.div>
      </main>
    </>
  );
}
