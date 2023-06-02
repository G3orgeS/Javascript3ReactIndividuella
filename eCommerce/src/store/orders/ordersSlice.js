import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import ordersService from "./ordersService";

const initialState = {
  orders: [],
  error: null,
  loading: false
}
   
export const getOrders = createAsyncThunk('order-list/getAll', async (_, thunkAPI) => {
  try {
    return await ordersService.getAllAsync('orders') // Call the getAllAsync function from ordersService
  } catch (err) {
    return thunkAPI.rejectWithValue(err.message) // Reject the thunk with the error message
  }
})

export const ordersSlice = createSlice({
  name: 'order-list',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getOrders.pending, (state) => {
        state.loading = true // Set loading to true when the getOrders request is pending
      })
      .addCase(getOrders.fulfilled, (state, action) => {
        state.loading = false // Set loading to false when the getOrders request is fulfilled
        state.error = null // Clear any previous error
        state.orders = action.payload // Set the orders state with the retrieved data
      })
      .addCase(getOrders.rejected, (state, action) => {
        state.loading = false // Set loading to false when the getOrders request is rejected
        state.error = action.payload // Set the error state with the error message
      })
  }
})

export default ordersSlice.reducer
