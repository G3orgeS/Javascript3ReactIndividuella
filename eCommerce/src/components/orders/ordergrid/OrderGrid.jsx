import React from 'react'
import { Link, NavLink } from 'react-router-dom'
// import '../grid.scss'
import './ordergrid.scss'

const OrderGrid = ({ orders }) => {
    const products = []

    orders.products.forEach(product => {
        products.push(product)
    })
    return (
        <Link key={orders.id} to={`/orderDetail/${orders.userId}`}>
                <div className='orderwrapper'>
                    <div className="textwrap">
                        <h2>Order number: {orders.userId}</h2>
                        <h2>Status: {orders.status}</h2>
                        <h2>Ordern kostar: {orders.totalPrice}</h2>
                        </div>
                        <div className="imgwrapper">
                            {products.map((product) => (
                                <img className='imgstyleorder' src={product.image} alt={product.title} key={product.productId} />
                            ))}
                        </div>
                    </div>
            </Link>
    )
}

export default OrderGrid