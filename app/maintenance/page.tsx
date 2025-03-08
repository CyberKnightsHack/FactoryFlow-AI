import Sidebar from '../components/Layout/Sidebar';

// Temporary mock data
const mockUser = {
  id: '1',
  name: 'John Doe',
  role: 'admin' as const,
};

const maintenanceSchedule = [
  {
    id: '1',
    robotName: 'Robot-A1',
    lastMaintenance: '2023-09-01',
    nextMaintenance: '2023-10-01',
    status: 'scheduled',
    type: 'Routine Check',
  },
  {
    id: '2',
    robotName: 'Robot-B2',
    lastMaintenance: '2023-08-15',
    nextMaintenance: '2023-09-15',
    status: 'overdue',
    type: 'Full Service',
  },
];

export default function Maintenance() {
  return (
    <>
      <Sidebar user={mockUser} />
      <main className="flex-1 p-8 overflow-auto">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">Maintenance</h1>

          <div className="grid gap-8">
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-semibold mb-4">Maintenance Schedule</h2>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead>
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Robot
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Last Maintenance
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Next Due
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Status
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Type
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {maintenanceSchedule.map((schedule) => (
                      <tr key={schedule.id}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {schedule.robotName}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {schedule.lastMaintenance}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {schedule.nextMaintenance}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          <span
                            className={`px-2 py-1 rounded-full text-xs ${
                              schedule.status === 'scheduled'
                                ? 'bg-green-100 text-green-800'
                                : 'bg-red-100 text-red-800'
                            }`}
                          >
                            {schedule.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {schedule.type}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          <button className="text-indigo-600 hover:text-indigo-900">
                            Schedule
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="text-lg font-medium mb-2">Maintenance Metrics</h3>
                <dl className="space-y-2">
                  <div className="flex justify-between">
                    <dt className="text-gray-600">Scheduled</dt>
                    <dd className="font-medium">5</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-gray-600">Completed</dt>
                    <dd className="font-medium">12</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-gray-600">Overdue</dt>
                    <dd className="font-medium text-red-600">1</dd>
                  </div>
                </dl>
              </div>

              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="text-lg font-medium mb-2">Parts Inventory</h3>
                <dl className="space-y-2">
                  <div className="flex justify-between">
                    <dt className="text-gray-600">Servo Motors</dt>
                    <dd className="font-medium">24</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-gray-600">Sensors</dt>
                    <dd className="font-medium">56</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-gray-600">Control Units</dt>
                    <dd className="font-medium">18</dd>
                  </div>
                </dl>
              </div>

              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="text-lg font-medium mb-2">Quick Actions</h3>
                <div className="space-y-2">
                  <button className="w-full px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700">
                    Schedule Maintenance
                  </button>
                  <button className="w-full px-4 py-2 bg-white border border-gray-300 rounded text-gray-700 hover:bg-gray-50">
                    Order Parts
                  </button>
                  <button className="w-full px-4 py-2 bg-white border border-gray-300 rounded text-gray-700 hover:bg-gray-50">
                    Generate Report
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}