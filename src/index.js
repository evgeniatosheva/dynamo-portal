import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import EmployeesList from './pages/EmployeesList';
import CreateNewPost from './pages/CreateNewPost';
import CreateNewEvent from './pages/CreateNewEvent';
import NotFound from './pages/NotFound';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import GalleriesList from './pages/GalleriesList';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/gallery',
    element: <Gallery />,
  },
  {
    path: '/galleries',
    element: <GalleriesList />,
  },
  {
    path: '/employees',
    element: <EmployeesList />,
  },
  {
    path: '/new-post',
    element: <CreateNewPost />,
  },
  {
    path: '/new-event',
    element: <CreateNewEvent />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <RouterProvider router={router} />
    </LocalizationProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
