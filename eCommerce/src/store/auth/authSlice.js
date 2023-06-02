import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import authService from "./authService"

const initialState = {
    user: null, // Initial user state
    loading: false, // Loading state
    error: null, // Error state
    authIsReady: false // Flag to indicate if authentication is ready
}

// Async thunk to register a user
export const registerUser = createAsyncThunk('auth/register', async (formData, thunkAPI) => {
    try {
        return await authService.signup(formData.email, formData.password)
    } catch (err) {
        return thunkAPI.rejectWithValue(err.message)
    }
})

// Async thunk to log in a user
export const loginUser = createAsyncThunk('auth/login', async (formData, thunkAPI) => {
    try {
        return await authService.login(formData.email, formData.password)
    } catch (err) {
        return thunkAPI.rejectWithValue(err.message)
    }
})

// Async thunk to log out a user
export const logoutUser = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
    try {
        return await authService.logout()
    } catch (err) {
        return thunkAPI.rejectWithValue(err.message)
    }
})

// Create the auth slice
export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setError: (state, action) => {
            state.error = action.payload
        },
        authReady: (state, action) => {
            state.user = action.payload
            state.authIsReady = true
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(registerUser.pending, state => {
                state.loading = true // Set loading state to true when registering user
            })
            .addCase(registerUser.fulfilled, (state, action) => {
                state.user = action.payload // Set the user state with the registered user
                state.loading = false // Set loading state to false
                state.error = null // Reset error state
            })
            .addCase(registerUser.rejected, (state, action) => {
                state.loading = false // Set loading state to false
                state.error = action.payload // Set the error state with the rejected value
            })
            .addCase(loginUser.pending, state => {
                state.loading = true // Set loading state to true when logging in user
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.user = action.payload // Set the user state with the logged-in user
                state.loading = false // Set loading state to false
                state.error = null // Reset error state
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.loading = false // Set loading state to false
                state.error = action.payload // Set the error state with the rejected value
            })
            .addCase(logoutUser.fulfilled, state => {
                state.user = null // Set the user state to null when logging out
            })
    }
})

export const { setError, authReady } = authSlice.actions

export default authSlice.reducer
