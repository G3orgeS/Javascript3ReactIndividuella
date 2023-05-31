import { configureStore } from '@reduxjs/toolkit'
import productsSlice from './products/productsSlice'
import ordersSlice from './orders/ordersSlice';

export const store = configureStore({
  reducer: {
    productList: productsSlice,
    orderList: ordersSlice,
}
})