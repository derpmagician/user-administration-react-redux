import { configureStore, combineReducers } from "@reduxjs/toolkit"
import {dptosSlice, miSlice} from './miSlice'
import storage from 'redux-persist/lib/storage'; // importa el almacenamiento local
import { persistReducer, persistStore } from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage,
}

// export default configureStore({
//   reducer: {
//     misTrabajadores: miSlice.reducer,
//     misDptos: dptosSlice.reducer,

//   }
// })

const rootReducer = combineReducers({
  misTrabajadores: miSlice.reducer,
  misDptos: dptosSlice.reducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer) // crea un reducer persistido

const store = configureStore({
  reducer: persistedReducer, // usa el reducer persistido en lugar de rootReducer
})

export const persistor = persistStore(store) // crea un persistor con el store

export default store;


