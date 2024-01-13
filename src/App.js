import React from 'react'
import Home from './Components/Home'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import ProductDetails from './Components/ProductDetails'

export default function App() {
  const roots = createBrowserRouter([
    {index:true, element:<Home/>},
    {path:'productDetails/:id', element:<ProductDetails/>}
  ])
  return (
    <RouterProvider router={roots}>
      {/* <Home/> */}
    </RouterProvider>
  )
}
