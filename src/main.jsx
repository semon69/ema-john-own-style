import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Shop from './components/Shop/Shop';
import Home from './components/Layout/Home';
import Order from './components/Order/Order';
import Inventory from './components/Inventory/Inventory';
import Login from './components/Login/Login';
import cartProdutsLoader from './Loader/cartProductLoader';
import Checkout from './components/Checkout/Checkout';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children:[
      {
        path:"/",
        element: <Shop></Shop>
      },
      {
        path:"/order",
        element: <Order></Order>,
        loader: cartProdutsLoader
      },
      {
        path: "/inventory",
        element: <Inventory></Inventory>
      },
      {
        path:"/login",
        element:<Login></Login>
      },
      {
        path:"/checkout",
        element: <Checkout></Checkout>
      }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
