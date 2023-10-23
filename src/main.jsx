import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Mybrowser } from './Componenets/Mainpage/Router/Router.jsx'
import { RouterProvider, } from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='max-w-screen-xl mx-auto'>
      <RouterProvider router={Mybrowser} />
    </div>
  </React.StrictMode>,
)
