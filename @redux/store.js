import { configureStore } from '@reduxjs/toolkit'
import joinSlice from './join/join-slice'

export const store = configureStore({
  reducer: {
    join: joinSlice,
  },
})
