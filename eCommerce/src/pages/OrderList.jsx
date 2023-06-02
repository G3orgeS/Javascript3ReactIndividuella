import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getOrders } from '../store/orders/ordersSlice'
import OrderGrid from '../components/orders/ordergrid/OrderGrid'
import '../scss/index.scss'

const OrderList = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    // Fetch the orders when the component mounts
    dispatch(getOrders())
  }, [])

  const { orders } = useSelector(state => state.orderList) // Retrieve the orders from the Redux store

  return (
    <>
      <div className='orderList'>
        {
          orders.length > 0
            ? orders.map(orders => <OrderGrid key={orders.id} orders={orders} />)
            : <h2>No orders to show</h2>
        }
      </div>
    </>
  )
}

export default OrderList
