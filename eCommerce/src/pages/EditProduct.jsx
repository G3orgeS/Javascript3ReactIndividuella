import React, { useState, useEffect } from 'react'
import Details from '../components/products/productDetails/Details'
import useDoc from '../hooks/useDoc'
import Loader from '../components/loader/Loader'
import { useParams } from 'react-router-dom'
import Edit from '../components/products/editProduct/Edit'

function EditProduct({ products }) {

  const { id } = useParams()

  const { data: product, error, loading } = useDoc('products', id)
  if (!product) return (
    <div className='loaderdivraise'>
      {loading && <Loader />}
      {error && <p>{error}</p>}
    </div>
  )

  return (
    <>
    <Edit key={'detailsProductKey'} product={product} />
    </>
  )
}

export default EditProduct