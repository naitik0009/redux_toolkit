import {configureStore} from '@reduxjs/toolkit';
import { cartSliceReducer } from './slices/cart.slice';
import { toogleReducer } from './slices/ui.slice';
export const store = configureStore({
    reducer:{
        cart:cartSliceReducer,
        toogle:toogleReducer,
    },
});