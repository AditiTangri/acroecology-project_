import React from "react";
import Analytics from "./Analytics";
import PerformanceDashboard from "./PerformanceDashboard";
import { useMobile } from "../hooks/useMobile";

const Dashboard: React.FC = () => {
  const isMobile = useMobile();

  return (
    <div
      className={`dashboard-container ${
        isMobile
          ? "flex flex-col items-center px-4 gap-6"
          : "flex flex-row justify-between px-8 gap-8"
      }`}
    >
      {/* Left Section */}
      <div
        className={`${
          isMobile ? "w-full" : "w-2/3"
        } flex flex-col gap-6`}
      >
        <Analytics />
        <PerformanceDashboard />
      </div>

      {/* Right Section (example: side stats, settings, etc.) */}
      <div
        className={`${
          isMobile ? "w-full" : "w-1/3"
        } bg-white dark:bg-gray-900 rounded-2xl shadow-md p-4`}
      >
        <h2 className="text-lg font-semibold mb-3 text-center md:text-left">
          Quick Stats
        </h2>
        {/* Placeholder for any sidebar widgets */}
        <div className="flex flex-wrap gap-3 justify-center md:justify-start">
          <div className="p-3 bg-green-100 dark:bg-green-800 rounded-xl w-32 text-center">
            Metric A
          </div>
          <div className="p-3 bg-blue-100 dark:bg-blue-800 rounded-xl w-32 text-center">
            Metric B
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
