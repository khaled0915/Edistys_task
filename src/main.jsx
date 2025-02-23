import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider } from 'react-router-dom'
import routes from './routes/routes.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <div className='max-w-screen-xl mx-auto '>
   <RouterProvider router={routes} />
   </div>
  </React.StrictMode>,
)
