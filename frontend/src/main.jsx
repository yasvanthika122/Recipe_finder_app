import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Home from './pages/home/Home.jsx'
import ErrorPage from './components/ErrorPage.jsx'
import CategoryPage from './pages/category/CategoryPage.jsx'
import Search from './pages/Search.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement:<ErrorPage/>,
    children:[
      {
      path:"/",
      element:<Home/>,
      },
      {
        path:"/categories/:category",
        element:<CategoryPage/>,
        },
        {
          path:"/search",
          element:<Search/>,
          },
  ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
