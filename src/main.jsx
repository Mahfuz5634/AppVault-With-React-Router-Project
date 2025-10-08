import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Layout from './Components/Layout.jsx';
import Homedata from './Pages/Homedata.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    Component:Layout,
    children:[
      {
         path:'/',
        Component:Homedata,
        loader:()=>fetch('/data1.json')
      },
    ]
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />,
  </StrictMode>,
)
