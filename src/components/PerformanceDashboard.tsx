import React from "react";
import { useMobile } from "../hooks/useMobile";

const PerformanceDashboard: React.FC = () => {
  const isMobile = useMobile();

  return (
    <div
      className={`performance-dashboard grid ${
        isMobile
          ? "grid-cols-1 gap-4 px-3"
          : "grid-cols-2 lg:grid-cols-3 gap-6 px-6"
      }`}
    >
      {/* Example cards */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-4 text-center">
        <h3 className="font-semibold text-gray-700 dark:text-gray-200 mb-2">
          Crop Yield
        </h3>
        <p className="text-2xl font-bold text-green-600">92%</p>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-4 text-center">
        <h3 className="font-semibold text-gray-700 dark:text-gray-200 mb-2">
          Soil Health
        </h3>
        <p className="text-2xl font-bold text-blue-600">78%</p>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-4 text-center">
        <h3 className="font-semibold text-gray-700 dark:text-gray-200 mb-2">
          Pest Resistance
        </h3>
        <p className="text-2xl font-bold text-red-600">65%</p>
      </div>
    </div>
  );
};

export default PerformanceDashboard;
