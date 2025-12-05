
import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

import App from './App'; 
import Home from './Pages/Home'; 
import ErrorPage from './Pages/ErrorPage'; 
import VerticalTrafficLight from './Pages/VerticalTrafficLight';
import HorizontalTrafficLight from './Pages/HorizontalTrafficLight';
import F1TrafficLightPage from './Pages/F1TrafficLightPage';
import ProtectedRoute from './components/ProtectedRoute';

import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />, 
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'vertical',
        element: (
          <ProtectedRoute>
            <VerticalTrafficLight />
          </ProtectedRoute>
        ),
      },
      {
        path: 'horizontal',
        element: (
          <ProtectedRoute>
            <HorizontalTrafficLight />
          </ProtectedRoute>
        ),
      },
      {
        path: 'f1-traffic-light',
        element: (
          <ProtectedRoute>
            <F1TrafficLightPage />
          </ProtectedRoute>
        ),
      },

    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);