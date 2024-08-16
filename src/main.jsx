import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import Home from './Home.jsx';
import './index.css';
import About from './About';
import Cart from './Cart';
import Contact from './Contact';
import ErrorPage from './ErrorPage.jsx';
import SingleProduct from './SingleProduct.jsx';

let Router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/about',
        element: <About />,
      },

      {
        path: '/cart',
        element: <Cart />,
      },

      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/product/:id',
        element: <SingleProduct />,
      },
    ],
    errorElement: <ErrorPage>Page Not Found!</ErrorPage>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={Router} />
);
