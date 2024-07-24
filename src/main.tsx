import React from 'react'
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App.tsx'
import './index.css'
import Root from './routes/root.tsx';
import ErrorPage from './error-page.tsx';
import About from './pages/about.tsx';
import Services from './pages/services.tsx';
import Projects from './pages/projects.tsx';
import Contacts from './pages/contacts.tsx';
import Pricing from './pages/pricing.tsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "services",
        element: <Services />,
      },
      {
        path: "about-us",
        element: <About />,
      },

      {
        path: "contact-us",
        element: <Contacts />,
      },

      {
        path: "projects",
        element: <Projects />,
      },
      {
        path: "pricing",
        element: <Pricing />,
      },
      // {
      //   path: "projects/:name",
      //   element: <ProjectDetails />,
      // },

    ],
  },

]);
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
