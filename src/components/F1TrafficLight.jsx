import React, { useRef, useEffect } from "react";
import { animate } from "motion";

const F1TrafficLight = ({ state }) => {
  const containerRef = useRef(null);
  const stopRef = useRef(null);
  const startRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    container.style.opacity = 0;
    container.style.transform = "translateY(20px)";
    container.offsetHeight;

    animate(container, { opacity: 1, transform: "translateY(0)" }, { duration: 0.5 });
  }, []);

  const isStop = state === 'stop';
  const isStart = state === 'start';

  return (
    <div className="flex justify-center">
      <div
        ref={containerRef}
        className="
          flex flex-col items-center justify-center
          border-4 border-base-content
          rounded-2xl p-6
          bg-base-300 shadow-2xl
          w-24
        "
      >
        {/* Стоп - червоне світло */}
        <div className="flex flex-col items-center mb-4">
          <div
            ref={stopRef}
            className={`
              w-16 h-16 rounded-full
              border-2 border-base-content
              mb-2
              transition-all duration-300
              ${isStop ? "bg-red-500 ring-4 ring-offset-2 ring-offset-base-300 ring-red-400" : "bg-gray-400"}
            `}
            style={{
              aspectRatio: '1 / 1',
            }}
          />
          <span className={`text-sm font-semibold ${isStop ? "text-red-600" : "text-gray-500"}`}>
            СТОП
          </span>
        </div>

        {/* Старт - зелене світло */}
        <div className="flex flex-col items-center">
          <div
            ref={startRef}
            className={`
              w-16 h-16 rounded-full
              border-2 border-base-content
              mb-2
              transition-all duration-300
              ${isStart ? "bg-green-500 ring-4 ring-offset-2 ring-offset-base-300 ring-green-400" : "bg-gray-400"}
            `}
            style={{
              aspectRatio: '1 / 1',
            }}
          />
          <span className={`text-sm font-semibold ${isStart ? "text-green-600" : "text-gray-500"}`}>
            СТАРТ
          </span>
        </div>
      </div>
    </div>
  );
};

export default F1TrafficLight;

