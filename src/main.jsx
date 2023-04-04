import React from 'react'
import ReactDOM from 'react-dom/client'
import { Index } from './pages/Index'
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import ErrorPage from './pages/ErrorPage';
import { getSomeProjects } from './getSomeProjects';
import { getAllProjects } from './getAllProjects';
import { AllProjects } from './pages/AllProjects';
import { GlobalStyle } from './globalStyle.js';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
    errorElement: <ErrorPage />,
    loader: getSomeProjects
  },
  {
    path: "/projects",
    element: <AllProjects />,
    errorElement: <ErrorPage />,
    loader: getAllProjects
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle />
    <RouterProvider router={router} />
  </React.StrictMode>,
)
