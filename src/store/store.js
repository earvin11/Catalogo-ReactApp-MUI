import { configureStore } from '@reduxjs/toolkit'
import { articleSlice } from './slices/articles'
import { authSlice } from './slices/auth'

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    article: articleSlice.reducer,
  },
})