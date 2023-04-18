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
import SignUp from './components/Sign up/SignUp';
import AuthProvider from './providers/AuthProvider';
import PrivateRoute from './routes/PrivateRoute';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/",
        element: <Shop></Shop>
      },
      {
        path: "/order",
        element: <Order></Order>,
        loader: cartProdutsLoader
      },
      {
        path: "/inventory",
        element: <Inventory></Inventory>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "signup",
        element: <SignUp></SignUp>
      },
      {
        path: "/checkout",
        element: <PrivateRoute><Checkout></Checkout></PrivateRoute>
      }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
