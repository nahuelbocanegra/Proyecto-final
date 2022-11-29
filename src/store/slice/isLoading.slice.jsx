import { createSlice } from '@reduxjs/toolkit';

export const isloadingSlice = createSlice({
    name: 'isLoading',
    initialState:  false,
    reducers: {
        setLoading: (state,actions) => {
            return actions.payload
        }
    }
})

export const { setLoading} = isloadingSlice.actions;

export default isloadingSlice.reducer;
