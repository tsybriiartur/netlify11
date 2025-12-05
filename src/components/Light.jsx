import React, { useRef, useState } from "react";
import { animate } from "motion";

const Light = ({ color, active, onClick }) => {
  const ref = useRef(null);
  const [blinking, setBlinking] = useState(false);

  const handleClick = () => {
    if (!blinking) {
      setBlinking(true);
      const element = ref.current;
      animate(
        element,
        { filter: ["brightness(1)", "brightness(1.5)", "brightness(0.3)", "brightness(1)"] },
        { duration: 0.6 }
      ).finished.then(() => setBlinking(false));
    }
    onClick();
  };

  const colorClasses = {
    red: "bg-red-500",
    yellow: "bg-yellow-500",
    green: "bg-green-500",
  };

  return (
    <div
      ref={ref}
      onClick={handleClick}
      className={`
        w-10 h-10 rounded-full m-2
        border-2 border-base-content
        ${colorClasses[color]}
        ${active ? "ring-4 ring-offset-2 ring-offset-base-300 ring-primary" : ""}
        cursor-pointer transition-all duration-300
        hover:scale-110
        ${blinking ? "brightness-150" : "brightness-100"}
        flex-shrink-0
      `}
      style={{
        aspectRatio: '1 / 1',
        minWidth: '2.5rem',
        minHeight: '2.5rem'
      }}
    />
  );
};

export default Light;
