import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import ordersService from "./ordersService";

const initialState = {
  orders: [],
  error: null,
  loading: false
}
   
export const getOrders = createAsyncThunk('order-list/getAll', async (_, thunkAPI) => {
  try {
    return await ordersService.getAllAsync('orders')
  } catch (err) {
    return thunkAPI.rejectWithValue(err.message)
  }
})

export const ordersSlice = createSlice({
  name: 'order-list',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      .addCase(getOrders.pending, (state) => {
        state.loading = true
      })
      .addCase(getOrders.fulfilled, (state, action) => {
        state.loading = false
        state.error = null
        state.orders = action.payload
      })
      .addCase(getOrders.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })
  }
})

export default ordersSlice.reducer