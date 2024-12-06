import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css'

import App from './App.tsx'
import AuctionDashboard from './pages/AuctionDashboard.tsx';
import Push from './pages/Push.tsx';

const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      children: [
        {
            index: true,
            element: <AuctionDashboard />
        },
        {
            path: '/push',
            element: <Push />
          },
      ]
    }
]);

const rootElement = document.getElementById('root');
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(<RouterProvider router={router} />);
}
