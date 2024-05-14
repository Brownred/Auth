import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface userState {
    currentUser: null | object,
    loading: boolean,
    error: boolean,
    errorMessage?: object,
}

const initialState: userState = {
    currentUser: null,
    loading: false,
    error: false,
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        signInStart: (state) => {
            state.loading = true;
        },
        signInSuccess: (state, action: PayloadAction<object>) => {
            state.loading = false;
            state.currentUser = action.payload;
            state.error = false;
        },
        signInFailure: (state, action: PayloadAction<object>) => {
            state.loading = false;
            state.error = true;
            state.errorMessage = action.payload;
        },
    },
})

// Action creators are generated for each case reducer function
export const { signInStart, signInSuccess, signInFailure } = userSlice.actions

export default userSlice.reducer