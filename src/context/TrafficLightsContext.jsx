import { createContext, useContext, useState, useEffect } from 'react';

const TrafficLightsContext = createContext();

export const useTrafficLights = () => {
  const context = useContext(TrafficLightsContext);
  if (!context) throw new Error('useTrafficLights must be used within TrafficLightsProvider');
  return context;
};

const API_URL = "https://script.google.com/macros/s/AKfycbyfF3CXiBhxfJqws3l4lkkjSSMQY2okBojUaowuoP4n71HXgWGdXFU8TFv7NhHAk6ge/exec";

export const TrafficLightsProvider = ({ children }) => {
  const [currentColor, setCurrentColor] = useState({ vertical: 'red', horizontal: 'red' });
  const [stats, setStats] = useState({
    vertical: { red: 0, yellow: 0, green: 0 },
    horizontal: { red: 0, yellow: 0, green: 0 }
  });
  const [isLoading, setIsLoading] = useState(true);

  // ---------------- FETCH STORE ----------------
  const fetchData = async () => {
    try {
      const res = await fetch(`${API_URL}?action=getLights`);
      const data = await res.json();

      setCurrentColor(data.lights);
      setStats(data.stats);
    } catch (e) {
      console.error("Fetch error:", e);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // ---------------- SET COLOR ----------------
  const handleColorChange = async (direction, color) => {
    try {
      const res = await fetch(
        `${API_URL}?action=setLight&direction=${direction}&color=${color}`
      );

      const data = await res.json();

      if (data.success) {
        setCurrentColor(data.store.lights);
        setStats(data.store.stats);
      } else {
        console.error("Error:", data.error);
      }

    } catch (e) {
      console.error("SetLight error:", e);
    }
  };

  return (
    <TrafficLightsContext.Provider value={{
      currentColor,
      stats,
      isLoading,
      onColorChange: handleColorChange
    }}>
      {children}
    </TrafficLightsContext.Provider>
  );
};
