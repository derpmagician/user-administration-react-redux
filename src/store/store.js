import { configureStore } from "@reduxjs/toolkit"
import {dptosSlice, miSlice} from './miSlice'

export default configureStore({
  reducer: {
    misTrabajadores: miSlice.reducer,
    misDptos: dptosSlice.reducer,

  }
})
