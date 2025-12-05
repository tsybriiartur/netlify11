import React from 'react';
import TrafficLights from '../components/TrafficLights';
import F1TrafficLight from '../components/F1TrafficLight';
import { useTrafficLights } from '../context/TrafficLightsContext';

function F1TrafficLightPage() {
  const { f1State, isF1ButtonDisabled, toggleF1State, currentColor } = useTrafficLights();

  const getTrafficLightStatus = () => {
    const vertical = currentColor.vertical;
    const horizontal = currentColor.horizontal;
    
    if (vertical === 'green' || horizontal === 'green') {
      return { text: 'Зелений', colorClass: 'text-green-600', icon: '🟢' };
    } else if (vertical === 'yellow' || horizontal === 'yellow') {
      return { text: 'Жовтий', colorClass: 'text-yellow-600', icon: '🟡' };
    } else {
      return { text: 'Червоний', colorClass: 'text-red-600', icon: '🔴' };
    }
  };

  const status = getTrafficLightStatus();

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <h2 className="text-4xl font-bold text-center mb-8">Світлофор Формули-1</h2>

      {/* Автомобільні світлофори */}
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <h3 className="card-title text-2xl mb-4">Автомобільні світлофори</h3>
          
          <div className="flex flex-col md:flex-row gap-8 justify-center items-center mb-4">
            <div className="flex flex-col items-center">
              <p className="text-sm font-semibold mb-2">Вертикальний</p>
              <TrafficLights direction="vertical" />
            </div>
            <div className="flex flex-col items-center">
              <p className="text-sm font-semibold mb-2">Горизонтальний</p>
              <TrafficLights direction="horizontal" />
            </div>
          </div>

          <div className="alert alert-info mt-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current shrink-0 w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <div>
              <p className="font-semibold">Поточний стан: <span className={status.colorClass}>{status.icon} {status.text}</span></p>
            </div>
          </div>
        </div>
      </div>

      {/* F1 Світлофор */}
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <h3 className="card-title text-2xl mb-4">Світлофор Формули-1</h3>
          
          <div className="flex justify-center mb-6">
            <F1TrafficLight state={f1State} />
          </div>

          <div className="flex flex-col items-center gap-4">
            <button
              onClick={toggleF1State}
              disabled={isF1ButtonDisabled}
              className={`
                btn btn-lg
                ${f1State === 'stop' ? 'btn-success' : 'btn-error'}
                ${isF1ButtonDisabled ? 'btn-disabled opacity-50' : ''}
              `}
            >
              {f1State === 'stop' ? '▶️ Старт' : '⏹️ Стоп'}
            </button>

            {isF1ButtonDisabled && (
              <div className="alert alert-warning max-w-md">
                <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                <span>Не можна змінювати, коли авто-світлофор зелений</span>
              </div>
            )}

            <div className="text-sm text-base-content/70 text-center max-w-md">
              <p>Світлофор автоматично змінює стан кожні 10 секунд.</p>
              <p>Ви також можете змінити стан вручну, коли авто-світлофор не зелений.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default F1TrafficLightPage;

