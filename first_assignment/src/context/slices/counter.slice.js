import {createSlice} from '@reduxjs/toolkit';
const counterSlice = createSlice({
    name:'counter',
    initialState:{ counter : 0, showCounter : true },
    reducers:{
        increment(state,action){
            state.counter = state.counter + action.payload ;
        },
        decrement(state,action){
            state.counter = state.counter - 1;
        },
        toogleCounter(state,action){
            state.showCounter = !state.showCounter;
        },
    },
});
export const counterActions = counterSlice.actions;

export default counterSlice.reducer;