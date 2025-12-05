// src/App.jsx

import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header'; 
import { TrafficLightsProvider } from './context/TrafficLightsContext';

function App() {
  return (
    <TrafficLightsProvider>
      <div className="min-h-screen bg-base-200">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <Outlet />
        </main>
      </div>
    </TrafficLightsProvider>
  );
}

export default App;