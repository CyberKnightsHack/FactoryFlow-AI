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
      <main className="flex-1 flex items-center justify-center p-8 bg-gray-50 h-screen">
        <motion.div
          className="max-w-4xl w-full bg-white p-6 rounded-lg shadow-lg"
          initial="hidden"
          animate="visible"
          variants={fadeUpVariant}
        >
          {/* Page Title */}
          <motion.h1
            className="text-3xl font-bold text-blue-800 text-center mb-4"
            variants={fadeUpVariant}
            whileHover={hoverScale}
          >
            Webots Simulation Video
          </motion.h1>

          {/* Video & Controls in a Single View */}
          <div className="flex flex-col items-center space-y-4">
            {/* Video Player */}
            <div className="w-full max-h-[400px] overflow-hidden rounded-lg shadow-lg">
              <video
                ref={videoRef}
                className="w-full h-auto max-h-[400px] rounded-lg"
                controls
                muted
                loop
              >
                <source src="/WeSI.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>

            {/* Control Panel */}
            <motion.div
              className="flex flex-col sm:flex-row items-center sm:space-x-6 w-full"
              variants={fadeUpVariant}
            >
              <button
                className="bg-green-600 text-white px-5 py-2 rounded-lg hover:bg-green-700 transition disabled:opacity-50 w-full sm:w-auto"
                onClick={startSimulation}
                disabled={simulationStatus === "running"}
              >
                Start Simulation
              </button>
              <button
                className="bg-red-600 text-white px-5 py-2 rounded-lg hover:bg-red-700 transition disabled:opacity-50 mt-4 sm:mt-0 w-full sm:w-auto"
                onClick={stopSimulation}
                disabled={simulationStatus === "stopped"}
              >
                Stop Simulation
              </button>
            </motion.div>

            {/* Status Display */}
            <div className="text-gray-800 font-semibold text-lg text-center mt-2">
              Status:{" "}
              <span className={`font-bold ${simulationStatus === "running" ? "text-green-600" : "text-red-600"}`}>
                {simulationStatus}
              </span>
            </div>
          </div>
        </motion.div>
      </main>
    </>
  );
}
