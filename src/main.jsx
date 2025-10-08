import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Layout from './Components/Layout.jsx';
import Allapp from './Components/Allapp.jsx';
import Home from './Components/Home.jsx';
import Details from './Pages/Details.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    Component:Layout,
    children:[
      {
        path: '/',
        Component: Home,
        loader: () => fetch('/data1.json'),
      },
      {
         path:'/apps',
        Component:Allapp,
        loader:()=>fetch('/data2.json')
      },
      {
        path:'/details/:id',
        Component:Details,
        loader:()=>fetch('/data2.json')
      },
      
    ]
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />,
  </StrictMode>,
)
