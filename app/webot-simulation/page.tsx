"use client"; // Ensures client-side rendering for animations

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import Sidebar from "../components/Layout/Sidebar";

type User = {
  id: string;
  name: string;
  role: "admin" | "manager" | "operator";
};

const mockUser: User = {
  id: "1",
  name: "John Doe",
  role: "admin",
};

// Animation variants
const fadeUpVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const hoverScale = { scale: 1.03 };

export default function WebotSimulationPage() {
  const [simulationStatus, setSimulationStatus] = useState("stopped");
  const videoRef = useRef<HTMLVideoElement>(null);

  // Function to start simulation (play video)
  const startSimulation = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setSimulationStatus("running");
    }
  };

  // Function to stop simulation (pause video)
  const stopSimulation = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      setSimulationStatus("stopped");
    }
  };

  return (
    <>
      <Sidebar user={mockUser} />
      <main className="flex-1 p-8 bg-gray-50">
        <motion.div
          className="max-w-5xl mx-auto space-y-8"
          initial="hidden"
          animate="visible"
          variants={fadeUpVariant}
        >
          {/* Page Title */}
          <motion.h1
            className="text-3xl font-bold text-blue-800 text-center"
            variants={fadeUpVariant}
            whileHover={hoverScale}
          >
            Webots Simulation Video Integration
          </motion.h1>

          {/* Description */}
          <motion.p className="text-gray-700 text-lg text-center" variants={fadeUpVariant}>
            This page demonstrates the integration of Webots simulation into our manufacturing automation system.
            Monitor the live simulation below and use the control panel to start or stop playback.
          </motion.p>

          {/* Embedded Webots Simulation Video */}
          <motion.div
            className="bg-white p-6 rounded-lg shadow-lg max-w-4xl mx-auto"
            variants={fadeUpVariant}
          >
            <h2 className="text-2xl font-semibold mb-4 text-center">Live Simulation Video</h2>
            <p className="text-gray-600 mb-4 text-center">
              The video below represents a real-time Webots simulation.
              Use the controls below to play or pause the simulation.
            </p>
            <div className="overflow-hidden rounded-lg shadow-lg">
              <video
                ref={videoRef}
                className="w-full h-auto max-h-[500px] mx-auto rounded-lg"
                controls
                muted
                loop
              >
                <source src="/WeSI.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </motion.div>

          {/* Control Panel */}
          <motion.div
            className="bg-white p-6 rounded-lg shadow-lg flex flex-col sm:flex-row justify-center items-center sm:space-x-6 max-w-4xl mx-auto"
            variants={fadeUpVariant}
          >
            <button
              className="bg-green-600 text-white px-5 py-2 rounded-lg hover:bg-green-700 transition disabled:opacity-50"
              onClick={startSimulation}
              disabled={simulationStatus === "running"}
            >
              Start Simulation
            </button>
            <button
              className="bg-red-600 text-white px-5 py-2 rounded-lg hover:bg-red-700 transition mt-4 sm:mt-0 disabled:opacity-50"
              onClick={stopSimulation}
              disabled={simulationStatus === "stopped"}
            >
              Stop Simulation
            </button>
            <div className="mt-4 sm:mt-0 text-gray-800 font-semibold">
              Current Status:{" "}
              <span className="font-bold">{simulationStatus}</span>
            </div>
          </motion.div>
        </motion.div>
      </main>
    </>
  );
}
