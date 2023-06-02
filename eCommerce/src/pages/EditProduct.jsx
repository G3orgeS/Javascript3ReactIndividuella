import React, { useState, useEffect } from 'react'
import Details from '../components/products/productDetails/Details'
import useDoc from '../hooks/useDoc'
import Loader from '../components/loader/Loader'
import { useParams } from 'react-router-dom'
import Edit from '../components/products/editProduct/Edit'

function EditProduct() {
  const { id } = useParams() // Retrieve the id from the URL parameters

  // Fetch product data using the useDoc custom hook
  const { data: product, error, loading } = useDoc('products', id)

  // If the product data is not available yet, render a loader or error message
  if (!product) return (
    <div className='loaderdivraise'>
      {loading && <Loader />}
      {error && <p>{error}</p>}
    </div>
  )

  // Render the Edit component with the product data
  return (
    <>
      <Edit product={product} />
    </>
  )
}

export default EditProduct
