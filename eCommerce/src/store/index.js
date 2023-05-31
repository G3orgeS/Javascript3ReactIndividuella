import { configureStore } from '@reduxjs/toolkit'
import productsSlice from './products/productsSlice'
import ordersSlice from './orders/ordersSlice';
import productsReducer from '../store/products/productsSlice'
import singleProductReducer from '../store/products/singleProductSlice'

export const store = configureStore({
  reducer: {
    products: productsReducer,
    singleProduct: singleProductReducer,
    productList: productsSlice,
    orderList: ordersSlice,
}
})

