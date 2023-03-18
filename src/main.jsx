import React from 'react'
import ReactDOM from 'react-dom/client'
import { Home } from './pages/Home'
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import ErrorPage from './pages/ErrorPage';
import { GlobalStyle } from './globalStyle';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle />
    <RouterProvider router={router} />
  </React.StrictMode>,
)
