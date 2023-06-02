import React, { useState, useEffect } from 'react'
import useDoc from '../hooks/useDoc'
import Loader from '../components/loader/Loader'
import { useParams } from 'react-router-dom'
import Delete from '../components/products/deleteProduct/Delete'

// Define the DeleteProduct component
function DeleteProduct({ products }) {
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

    // Render the Delete component with the product data
    return (
        <Delete key={'detailsProductKey'} product={product} />
    )
}

export default DeleteProduct 
