import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import ordersService from "./ordersService"

const initialState = {
  order: null,
  error: null,
  loading: false
}

export const getOrderById = createAsyncThunk('singleOrder/getById', async (id, thunkAPI) => {
  try {
    return await ordersService.getByIdAsync(id) // Call the getByIdAsync function from ordersService
  } catch (err) {
    console.log(err.message) // Log the error message to the console
    return thunkAPI.rejectWithValue(err.message) // Reject the thunk with the error message
  }
})

export const singleOrderSlice = createSlice({
  name: 'singleOrder',
  initialState,
  reducers: {
    clearOrder: (state) => {
      state.order = null // Clear the order state
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getOrderById.pending, (state) => {
        state.loading = true // Set loading to true when the getOrderById request is pending
      })
      .addCase(getOrderById.fulfilled, (state, action) => {
        state.loading = false // Set loading to false when the getOrderById request is fulfilled
        state.order = action.payload // Set the order state with the retrieved data
        state.error = null // Clear any previous error
      })
      .addCase(getOrderById.rejected, (state, action) => {
        state.loading = false // Set loading to false when the getOrderById request is rejected
        state.order = null // Clear the order state
        state.error = action.payload // Set the error state with the error message
      })
  }
})

export const { clearOrder } = singleOrderSlice.actions

export default singleOrderSlice.reducer
