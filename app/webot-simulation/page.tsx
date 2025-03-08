"use client"; // Ensures client-side rendering for animations

import { useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import Sidebar from '../components/Layout/Sidebar';

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

// Animation variants for fade and hover effects
const fadeUpVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const hoverScale = { scale: 1.03 };

export default function WebotSimulationPage() {
  const [simulationStatus, setSimulationStatus] = useState("stopped");
  const [loading, setLoading] = useState(false);
  const BACKEND_URL = "http://localhost:4000"; // Update if necessary

  // Function to call backend endpoint to start simulation
  const startSimulation = async () => {
    setLoading(true);
    try {
      await axios.post(`${BACKEND_URL}/api/webots/start`);
      setSimulationStatus("running");
    } catch (error) {
      console.error("Error starting simulation:", error);
      alert("Failed to start simulation.");
    }
    setLoading(false);
  };

  // Function to call backend endpoint to stop simulation
  const stopSimulation = async () => {
    setLoading(true);
    try {
      await axios.post(`${BACKEND_URL}/api/webots/stop`);
      setSimulationStatus("stopped");
    } catch (error) {
      console.error("Error stopping simulation:", error);
      alert("Failed to stop simulation.");
    }
    setLoading(false);
  };

  return (
    <>
      <Sidebar user={mockUser} />
      <main className="flex-1 p-4 sm:p-8 bg-gray-50">
        <motion.div
          className="space-y-8"
          initial="hidden"
          animate="visible"
          variants={fadeUpVariant}
        >
          {/* Page Title */}
          <motion.h1
            className="text-3xl font-bold text-blue-800"
            variants={fadeUpVariant}
            whileHover={hoverScale}
          >
            Webots Simulation Integration
          </motion.h1>

          {/* Description */}
          <motion.p className="text-gray-700 text-lg" variants={fadeUpVariant}>
            This page demonstrates the integration of Webots simulation into our manufacturing automation system.
            Monitor the live simulation and use the control panel to start or stop simulation processes and interact with the system.
          </motion.p>

          {/* Control Panel */}
          <motion.div
            className="bg-white p-6 rounded-lg shadow flex flex-col sm:flex-row items-center sm:space-x-6"
            variants={fadeUpVariant}
          >
            <button
              className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition disabled:opacity-50"
              onClick={startSimulation}
              disabled={loading || simulationStatus === "running"}
            >
              {loading && simulationStatus !== "running" ? "Starting..." : "Start Simulation"}
            </button>
            <button
              className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition mt-4 sm:mt-0 disabled:opacity-50"
              onClick={stopSimulation}
              disabled={loading || simulationStatus === "stopped"}
            >
              {loading && simulationStatus !== "stopped" ? "Stopping..." : "Stop Simulation"}
            </button>
            <div className="mt-4 sm:mt-0 text-gray-800">
              Current Status: <span className="font-semibold">{simulationStatus}</span>
            </div>
          </motion.div>

          {/* Embedded Webots Simulation */}
          <motion.div
            className="bg-white p-6 rounded-lg shadow"
            variants={fadeUpVariant}
          >
            <h2 className="text-2xl font-semibold mb-4">Live Simulation View</h2>
            <p className="text-gray-600 mb-4">
              The live simulation below shows a real-time view of the Webots simulation environment.
              Ensure your Webots streaming server is running at the specified URL.
            </p>
            <div className="relative w-full overflow-hidden rounded-lg shadow-lg">
              {/* The aspect-video class maintains a 16:9 aspect ratio */}
              <div className="aspect-video">
                <iframe
                  src="http://localhost:1234"
                  className="w-full h-full border"
                  allowFullScreen
                  title="Webots Simulation"
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </main>
    </>
  );
}
