import React, { useState, useEffect } from 'react'
import Details from '../components/products/productDetails/Details'
import useDoc from '../hooks/useDoc'
import Loader from '../components/loader/Loader'
import { useParams } from 'react-router-dom'
import Delete from '../components/products/deleteProduct/Delete'

function DeleteProduct({ products }) {

  const { id } = useParams()

  const { data: product, error, loading } = useDoc('products', id)
  if (!product) return (
    <div className='loaderdivraise'>
      {loading && <Loader />}
      {error && <p>{error}</p>}
    </div>
  )
  let matches = []
  const category = product.category

  // Searching the products array categories to find search word
  const productSerachFunction = () => {
    products.forEach(product => {
      if (product.category.includes(category)) {
        return matches.push(product)
      }
    });
  }
  productSerachFunction()

  return (
    <>
    <Delete key={'detailsProductKey'} product={product} />
      {/* <Details key={'detailsProductKey'} product={product} /> */}
    </>
  )
}

export default DeleteProduct