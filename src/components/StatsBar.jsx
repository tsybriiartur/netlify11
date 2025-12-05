import React from "react";
import { useTrafficLights } from "../context/TrafficLightsContext";

const StatsBar = ({ direction = "vertical" }) => {
  const { stats, isLoading } = useTrafficLights();

  if (isLoading) {
    return (
      <div className="flex justify-center items-center">
        <span className="loading loading-spinner loading-md"></span>
      </div>
    );
  }

  const dirStats = stats[direction];

  return (
    <div className="card bg-base-100 shadow-md mb-6">
      <div className="card-body items-center text-center">
        <h3 className="card-title text-lg text-base-content">
          Вигляд: <span className="badge badge-primary badge-lg text-primary-content">
            {direction === "horizontal" ? "Горизонтальний" : "Вертикальний"}
          </span>
        </h3>
        
        <div className="mt-4">
          <p className="font-semibold mb-3 text-base-content">Статистика кліків:</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <div className="badge badge-error badge-lg gap-2 text-error-content">
              <span>Червоний</span>
              <span className="badge badge-outline text-base-content">{dirStats?.red ?? 0}</span>
            </div>
            <div className="badge badge-warning badge-lg gap-2 text-warning-content">
              <span>Жовтий</span>
              <span className="badge badge-outline text-base-content">{dirStats?.yellow ?? 0}</span>
            </div>
            <div className="badge badge-success badge-lg gap-2 text-success-content">
              <span>Зелений</span>
              <span className="badge badge-outline text-base-content">{dirStats?.green ?? 0}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsBar;
