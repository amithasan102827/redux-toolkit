import { configureStore } from '@reduxjs/toolkit'

import counterReducer from './counter/counterSlice';
import userDetailSlice from './counter/userDetailSlice';
import userSlice from './counter/userSlice';





export const store = configureStore({
  reducer: {
    counter: counterReducer,
    users: userSlice,
    userDetails: userDetailSlice
     
  },
})

export default store;