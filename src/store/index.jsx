import { configureStore } from '@reduxjs/toolkit'
import productsSlice from './slice/products.slice'
import isLoadingSlice from './slice/isLoading.slice'
import purchesesSlice from './slice/purcheses.slice'
export default configureStore({
    reducer: {
        productsSlice,
        isLoadingSlice,
        purchesesSlice,
    }
})
