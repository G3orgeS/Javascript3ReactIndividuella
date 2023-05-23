import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Home from './pages/Home'
import ProductList from './pages/ProductList'
import ProductDetails from './pages/ProductDetail'
import Login from './pages/Admin/Login'
import EditProduct from './pages/CRUD/EditProduct'
import Order from './pages/Order'
import Admin from './pages/Admin/Admin'
import AddProduct from './pages/CRUD/AddProduct'
import UserOrders from './pages/OrderDetail'
import RootLayout from './layouts/RootLayout'
import DeleteProduct from './pages/CRUD/DeleteProduct'

const App = () => {
  // Login

  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <Home />
        },
        {
          path: 'productlist',
          element: <ProductList />
        },
        {
          path: 'addProduct',
          element: <AddProduct />
        },
        {
          path: 'productList/:id',
          element: <ProductDetails />
        },
        {
          path: 'login',
          element: <Login />
        },
        {
          path: 'editProduct',
          element: <EditProduct />
        },
        {
          path: 'deleteProduct',
          element: <DeleteProduct />
        },
        {
          path: 'orders',
          element: <Order />
        },
        {
          path: 'admin',
          element: <Admin />
        }
      ]
    }
  ])


  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App