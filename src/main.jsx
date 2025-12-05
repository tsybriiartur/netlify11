
import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

import App from './App'; 
import Home from './pages/Home'; 
import ErrorPage from './pages/ErrorPage'; 
import VerticalTrafficLight from './pages/VerticalTrafficLight';
import HorizontalTrafficLight from './pages/HorizontalTrafficLight';

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
        element: <VerticalTrafficLight />,
      },
      {
        path: 'horizontal',
        element: <HorizontalTrafficLight />,
      },

    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);