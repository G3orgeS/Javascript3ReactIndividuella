import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getOrderById } from '../store/orders/singleOrderSlice'
import OrderGrid from '../components/orders/ordergrid/OrderGrid'
import OrderDetails from '../components/orders/OrderDetail'
import { useParams } from 'react-router-dom'

const UserOrders = () => {
  const { id } = useParams() // Retrieve the order ID from the URL parameters

  const dispatch = useDispatch()

  useEffect(() => {
    // Fetch the order by ID when the component mounts
    dispatch(getOrderById(id))
  }, [])

  const { order } = useSelector(state => state.singleOrder) // Retrieve the order details from the Redux store

  return (
    <>
      {/* Render the order details */}
      <OrderDetails order={order} />
    </>
  )
}

export default UserOrders
