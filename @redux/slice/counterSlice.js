import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

const counterSlice = createSlice({
  name: 'count',
  initialState,
  reducers: {
    add: (state, action) => {
      state.value += 1
    },

    ReAdd: (state, action) => {
      state.value -= 1
    },
  },
})

export const { add, ReAdd } = counterSlice.actions

export default counterSlice.reducer
