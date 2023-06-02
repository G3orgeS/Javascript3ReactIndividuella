import React, { useState, useEffect } from 'react'
import Details from '../components/products/productDetails/Details'
import useDoc from '../hooks/useDoc'
import Loader from '../components/loader/Loader'
import { useParams } from 'react-router-dom'

function ProductDetails({ products }) {
  const { id } = useParams() // Retrieve the product ID from the URL parameters

  const { data: product, error, loading } = useDoc('products', id) // Fetch the product data using the custom hook useDoc

  if (!product) {
    // Display loader while loading or error message if an error occurs
    return (
      <div className='loaderdivraise'>
        {loading && <Loader />}
        {error && <p>{error}</p>}
      </div>
    )
  }

  return (
    <>
      {/* Render the product details */}
      <Details key={'detailsProductKey'} product={product} />
    </>
  )
}

export default ProductDetails
