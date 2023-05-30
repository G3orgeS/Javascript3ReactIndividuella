import React, { useState, useEffect } from 'react'
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

    return (
        <>
            <Delete key={'detailsProductKey'} product={product} />
        </>
    )
}

export default DeleteProduct