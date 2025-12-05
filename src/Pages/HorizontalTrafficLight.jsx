import React from 'react';
import TrafficLights from '../components/TrafficLights';
import StatsBar from '../components/StatsBar';

function HorizontalTrafficLight() {
  return (
    <div className="max-w-3xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-8">Світлофор</h2>
      <StatsBar direction="horizontal" />

      <TrafficLights direction="horizontal" />
    </div>
  );
}

export default HorizontalTrafficLight;