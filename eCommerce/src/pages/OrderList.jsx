import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import { getAllOrders } from '../store/orders/ordersSlice'
import { getOrders } from '../store/orders/ordersSlice'

const OrderList = () => {

const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getOrders())
  }, [])

  const { orders } = useSelector(state => state.orderList);

console.log(orders)
  
  return (
<>

</>
  )
}

export default OrderList