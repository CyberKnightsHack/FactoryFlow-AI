import { Robot } from '@/app/types';

interface RobotStatusProps {
  robots: Robot[];
}

export default function RobotStatus({ robots }: RobotStatusProps) {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-xl font-semibold mb-4">Robot Status</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {robots.map((robot) => (
          <div
            key={robot.id}
            className="border rounded-lg p-4 flex flex-col space-y-2 transition duration-200 hover:shadow-lg"
          >
            <div className="flex justify-between items-center">
              <h3 className="font-medium">{robot.name}</h3>
              <span
                className={`px-2 py-1 rounded-full text-sm ${
                  robot.status === 'available'
                    ? 'bg-green-100 text-green-800'
                    : robot.status === 'busy'
                    ? 'bg-yellow-100 text-yellow-800'
                    : 'bg-red-100 text-red-800'
                }`}
              >
                {robot.status}
              </span>
            </div>
            <p className="text-sm text-gray-600">
              Efficiency: {robot.efficiency}%
            </p>
            {robot.currentTask && (
              <p className="text-sm text-gray-600">
                Current Task: {robot.currentTask}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
