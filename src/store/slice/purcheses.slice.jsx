import { createSlice } from '@reduxjs/toolkit';
import { setLoading } from './isLoading.slice';
import axios from 'axios';
import getConfig from '../../utils/getConfig';
export const purchesesSlice = createSlice({
    name: 'purcheses',
    initialState: [],
    reducers: {
        setPurcheses: (state, actions)=>{
            return actions.payload
        }
    }
})

export const { setPurcheses } = purchesesSlice.actions;

export const thunkpurcheses = () => (dispatch) => {
    dispatch(setLoading(true));
    return axios.get("https://e-commerce-api.academlo.tech/api/v1/purchases" ,getConfig())
        .then((res) => dispatch(setPurcheses(res.data.data.purchases)))
        .finally(() => dispatch(setLoading(false)));
}
export default purchesesSlice.reducer;
