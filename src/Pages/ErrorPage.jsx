import React from 'react';
import { useLocation, Link } from 'react-router-dom';

function ErrorPage() {
  const location = useLocation();

  return (
    <div className="max-w-2xl mx-auto">
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body items-center text-center">
          <h2 className="card-title text-4xl mb-4 text-error">Сторінка не знайдена (404)</h2>
          
          <div className="alert alert-warning w-full">
            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            <div>
              <h3 className="font-bold">Шлях не знайдено</h3>
              <div className="text-xs">Шлях: <code className="badge badge-ghost">{location.pathname}</code></div>
            </div>
          </div>
          
          <p className="mt-4">Немає маршруту, який відповідає цьому шляху.</p>

          <div className="card-actions mt-6">
            <Link to="/" className="btn btn-primary">
              Повернутися на головну
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ErrorPage;