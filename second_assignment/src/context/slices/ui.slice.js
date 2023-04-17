import {createSlice} from '@reduxjs/toolkit';

const toogleCart = createSlice({
    name:"toogle",
    initialState:{toogleCart:false},
    reducers:{
        toogle(state){
            state.toogleCart = !state.toogleCart;
        }
    },
});

export const toogleAction = toogleCart.actions;
export const toogleReducer = toogleCart.reducer;