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
import UserProfile from './pages/UserProfile'
import AddProduct from './pages/AddProducts'
import UserOrders from './pages/UserOrders'


const App = () => {

  // Login
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    const loggedInUser = localStorage.getItem('accessToken')
    if(loggedInUser) {
      setIsLoggedIn(true)
    }
  }, [])


  // ____________________________________________________________________________

  // Sending a dispatch to get the products from FireBase
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getProducts())
  }, [])

  const { products, loading, error } = useSelector(state => state.products)
  // ____________________________________________________________________________


  // Router - sending products to the pages that need them.
  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout key={products._id} products={products} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />,
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
          element: <>{
            products.length > 0
              ? <Products key={products.id} products={products} />
              : <h2>No products to show</h2>
          }</>
        },
        {
          path: 'productDetails/:id',
          element: <>{
            products.length > 0
              ? <ProductDetails key={products.id} products={products} />
              : <h2>No products to show</h2>
          }</>
        },
        {
          path: 'addProduct',
          element: <AddProduct />,
        },

        {
          path: 'login',
          element: <Login setIsLoggedIn={setIsLoggedIn} />
        },
        {
          path: 'userprofile',
          element: <UserProfile />
        },
        {
          path: 'userorders',
          element: <UserOrders />
        },
        {
          path: 'register',
          element: <Register />
        },

        {
          path: 'products',
          element: <Products />

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