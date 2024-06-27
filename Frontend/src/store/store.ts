import { configureStore } from '@reduxjs/toolkit'
import categoryReducer from "../features/HR/Master/Product/productSlice"
import authReducer from "../features/auth/auhtSlice"
import newProdSlice from '../features/HR/Transaction/newProdSlice';
import attendSlice from '../features/HR/Transaction/attendSlice';
import gatepassSlice from '../features/Gatepass/gatepassSlice';
import SocietySlice from "../features/Society/SocietySlice"
export const store = configureStore({
  reducer: {
    attendance: attendSlice,
    newprod: newProdSlice,
    category: categoryReducer,
    auth: authReducer,
    Gatepass:gatepassSlice,
    Society:SocietySlice
    
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch