import React, { useEffect } from 'react'
import LargeGrid from '../components/products/productGrid/largeGrid/LargeGrid'
import { useDispatch } from 'react-redux'
import { getProducts } from '../store/products/productsSlice'

function Products({ products }) {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getProducts())
  }, [])

  return (
    <>
      {
        products.length > 0
        ? <LargeGrid key={products._id} products={products} />
        : <h2>No products to show</h2>
      }
    </>
  )
}

export default Products