import React, { useEffect, useRef } from "react";
import { animate } from "motion";
import Light from "./Light";
import { useTrafficLights } from "../context/TrafficLightsContext";

const TrafficLights = ({ direction = "vertical" }) => {
  const { currentColor, onColorChange } = useTrafficLights();
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    container.style.opacity = 0;
    container.style.transform =
      direction === "horizontal" ? "translateX(-100px)" : "translateY(100px)";
    container.offsetHeight;

    animate(container, { opacity: 1, transform: "translate(0,0)" }, { duration: 0.6 });
  }, [direction]);

  const handleClick = (color) => {
    onColorChange(direction, color);
  };

  return (
    <div className="flex justify-center">
      <div
        ref={containerRef}
        className={`
          flex items-center justify-center
          ${direction === "horizontal" ? "flex-row" : "flex-col"}
          border-4 border-base-content
          rounded-2xl p-4
          bg-base-300 shadow-2xl
          ${direction === "horizontal" ? "w-48" : "w-16"}
        `}
      >
        {["red", "yellow", "green"].map((color) => (
          <div 
            key={color} 
            className={`flex justify-center items-center ${direction === "horizontal" ? "w-auto" : "w-full"}`}
          >
            <Light 
              color={color} 
              active={currentColor[direction] === color} 
              onClick={() => handleClick(color)} 
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrafficLights;
