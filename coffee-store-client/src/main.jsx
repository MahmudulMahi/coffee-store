import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AddCoffee from './components/AddCoffee.jsx';
import UpdateCoffee from './components/updateCoffee.jsx';
import Signup from './components/Signup.jsx';
import Signin from './components/Signin.jsx';
import AuthProvider from './components/providers/AuthProvider.jsx';
import Users from './components/Users.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    loader:()=> fetch('http://localhost:5000/coffee/')
  },
  {
    path:'addcoffee',
    element:<AddCoffee></AddCoffee>
  },
  {
    path:'updatecoffee/:id',
    element:<UpdateCoffee></UpdateCoffee>,
    loader:({params})=>fetch(`http://localhost:5000/coffee/${params.id}`)
  },
  {
    path:'/signup',
    element:<Signup></Signup>
  },
  {
    path:'/signin',
    element:<Signin></Signin>
  },
  {
    path:'/users',
    element:<Users></Users>,
    loader: ()=> fetch ('http://localhost:5000/user')
  },
  {

  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
