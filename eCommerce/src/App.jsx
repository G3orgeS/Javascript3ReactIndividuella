import React from 'react'
import { RouterProvider, createBrowserRouter, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from './store/products/productsSlice'
import Loader from './components/loader/Loader'
import RootLayout from './layouts/RootLayout'
import Home from './pages/Home'
import Products from './pages/Products'
import ProductDetails from './pages/ProductDetails'
import Login from './pages/Login'
import Register from './pages/Register'
import AddProduct from './pages/AddProducts'
import EditProduct from './pages/EditProduct'
import DeleteProduct from './pages/DeleteProduct'
// import OrderDetail from './pages/OrderDetail'
import OrderList from './pages/OrderList'
import UserOrders from './pages/OrderDetail'
import { authReady } from './store/auth/authSlice'
import { auth } from './firebase/config'
import { onAuthStateChanged } from 'firebase/auth'
import { ProtectedRoute } from './routes/ProtectedRoute'

const App = () => {

  const { authIsReady } = useSelector(state => state.auth)
  useEffect(() => {
    onAuthStateChanged(auth, (_user) => {
      // console.log(_user)
      let user = null

      if(_user) {
        user = {
          uid: _user.uid,
          email: _user.email
        }
      }

      dispatch(authReady(user))

    })
  }, [])

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getProducts())
  }, [])
  const { products, loading, error } = useSelector(state => state.products)

  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout key={products._id} products={products} />,
      errorElement: <Error />,
      children: [
        {
          index: true,
          element: <>{
            products.length > 0
              ? <Home key={products._id} products={products} />
              : <h2>No products to show</h2>
          }</>
        },
        {
          index: true,
          element: <Home />
        },
        {
          path: 'products',
          element: <ProtectedRoute>{
            products.length > 0
              ? <Products key={products.id} products={products} />
              : <h2>No products to show</h2>
          }</ProtectedRoute>
        },
        {
          path: 'productDetails/:id',
          element: <ProtectedRoute>{
            products.length > 0
              ? <ProductDetails key={products.id} products={products} />
              : <h2>No products to show</h2>
          }</ProtectedRoute>
        },
        {
          path: 'addProduct',
          element: <ProtectedRoute><AddProduct /></ProtectedRoute>,
        },
        {
          path: 'orderlist',
          element: <ProtectedRoute><OrderList /></ProtectedRoute> 
        },
        {
          path: 'orderdetail/:id',
          element: <ProtectedRoute><UserOrders  /></ProtectedRoute>
        },
        {
          path: 'login',
          element: <Login  />
        },
        {
          path: 'register',
          element: <Register />
        },
        {
          path: 'editproduct/:id',
          element: <ProtectedRoute>{
            products.length > 0
              ? <EditProduct />
              : <h2>No products to show</h2>
          }</ProtectedRoute>
        },
        {
          path: 'deleteproduct/:id',
          element: <ProtectedRoute>{
            products.length > 0
              ? <DeleteProduct key={products.id} products={products} />
              : <h2>No products to show</h2>
          }</ProtectedRoute>
        },
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