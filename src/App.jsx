// src/App.jsx

import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header'; 
import { TrafficLightsProvider } from './context/TrafficLightsContext';
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <AuthProvider>
      <TrafficLightsProvider>
        <div className="min-h-screen bg-base-200">
          <Header />
          <main className="container mx-auto px-4 py-8">
            <Outlet />
          </main>
        </div>
      </TrafficLightsProvider>
    </AuthProvider>
  );
}

export default App;