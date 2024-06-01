import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Card from './components/Card.jsx';
import Detail from './components/Detail.jsx';
import Thanks from './components/Thanks.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
const router = createBrowserRouter([
  {
    path: "/",
    element: <Card/>,
  },
  {
    path: "/detail",
    element:<Detail/>,
  },
  {
    path: "/thanks",
    element:<Thanks/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
