import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getOrders } from '../store/orders/ordersSlice'
import OrderGrid from '../components/products/productGrid/largeGrid/OrderGrid'


const UserOrders = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getOrders())
  }, [])
  const { orders } = useSelector(state => state.orderList);

  return (
<>
   
</>
    )
}

export default UserOrders