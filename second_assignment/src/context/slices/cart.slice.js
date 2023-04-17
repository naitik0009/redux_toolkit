import {createSlice} from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name:"cart",
    initialState:{items:[],totalQuantity:0},
    reducers:{
        replaceCart(state,action){
            state.totalQuantity = action.payload.totalQuantity;
            state.items = action.payload.items;
        },
        addCartItems(state,action){
            const newItem = action.payload;
            const existingItems = state.items?.find(item=>item.id===newItem.id);
            
            if(!existingItems){
                state.items?.push({
                    id:newItem.id,
                    name:newItem.title,
                    price:newItem.price,
                    quantity:1,
                    totalPrice:newItem.price,
                });
                state.totalQuantity++;
            }  else{
                existingItems.quantity = existingItems.quantity + 1;
                existingItems.totalPrice = existingItems.price * existingItems.quantity;
                state.totalQuantity++;

            }
        },
        removeItemFromCart(state,action){
            const {id} = action.payload;
            const existingItems = state.items.find(item=>item.id===id);
            if(existingItems.quantity === 1){
                //let's remove the current item with quantity 1 and keep all the existing items :
                state.items = state.items.filter( item => item.id !== id );
                state.totalQuantity !== 0 ? state.totalQuantity--: state.totalQuantity = 0 ;
            }
            else{
                existingItems.quantity--;
                existingItems.totalPrice = existingItems.price * existingItems.quantity;
                state.totalQuantity--;
            }
        },

    },
});

export const cartActions = cartSlice.actions;
export const cartSliceReducer = cartSlice.reducer;