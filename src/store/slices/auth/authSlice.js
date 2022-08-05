import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        status: 'checking',
        uid: null,
        userName: null
    },
    reducers: {
        login: (state, action) => {
            
        },
        logout: (state, action) => {

        },
        checkinCredentials: (state) => {

        }
    }
});


// Action creators are generated for each case reducer function
export const { login, logout, checkinCredentials } = authSlice.actions;