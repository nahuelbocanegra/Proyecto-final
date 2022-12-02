import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios'
import getConfig from '../../utils/getConfig';
import { setLoading } from './isLoading.slice';
import { setPurcheses } from './purcheses.slice';

export const cartSlice = createSlice({
    name: "cart",
    initialState: [],
    reducers: {
        getCart: (state, actions)=>{
            return actions.payload
      }
    }
})

export const { getCart} = cartSlice.actions;
export const thunkcart = () => (dispatch) => {
    dispatch(setLoading(true));
    return axios.get("https://e-commerce-api.academlo.tech/api/v1/cart",getConfig())
        .then((res) => dispatch(getCart(res.data.data.cart.products)))
        .finally(() => dispatch(setLoading(false)));
}
export const thunkpostCart = (addcart) => (dispatch) => {
    dispatch(setLoading(true));
    return axios.post("https://e-commerce-api.academlo.tech/api/v1/cart", addcart,getConfig())
        .then((res) => dispatch(thunkcart()))
        .finally(() => dispatch(setLoading(false)));
}
export const thunkpostPurcheses = () => (dispatch) => {
    dispatch(setLoading(true));
    return axios.post("https://e-commerce-api.academlo.tech/api/v1/purchases",{},getConfig())
        .then(() => dispatch(getCart([])))
        .finally(() => dispatch(setLoading(false)));
}
export default cartSlice.reducer;
