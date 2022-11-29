import { createSlice } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import axios from 'axios'
import { setLoading } from './isLoading.slice';
export const productsSlice = createSlice({
    name: 'products',
    initialState: [],
    reducers: {
        getProducts: (state,action) => {
            return action.payload
        }
    }
})

export const { getProducts } = productsSlice.actions;

export const getProductsThunck = () => dispatch => {
    dispatch(setLoading(true))
    axios.get("https://e-commerce-api.academlo.tech/api/v1/products")
    .then(res => dispatch(getProducts(res.data.data.products)))
    .finally(() => {
        dispatch(setLoading(false))
    })
}
export const getcategoryProductsthunk = (id) => (dispatch) => {
    dispatch(setLoading(true));
    return axios.get(`https://e-commerce-api.academlo.tech/api/v1/products?category=${id}`)
        .then((res) => dispatch(getProducts(res.data.data.products)))
        .finally(() => dispatch(setLoading(false)));
}
export const inputThunk = (data) => dispatch => {
    dispatch(setLoading(true));
    return axios.get(`https://e-commerce-api.academlo.tech/api/v1/products?query=${data}`)
        .then((res) => dispatch(getProducts(res.data.data.products)))
        .finally(() => dispatch(setLoading(false)));
}
export default productsSlice.reducer;
