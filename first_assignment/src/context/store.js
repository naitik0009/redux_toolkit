import {configureStore} from '@reduxjs/toolkit';//it's more powerfull than create reducers
import counterSliceReducer  from './slices/counter.slice';
import authSliceReducer from './slices/auth.slice';

const store = configureStore({
    //noe both the reducers will be merged together:
        reducer:{
            counter:counterSliceReducer,
            auth : authSliceReducer,
        },
    
    });
    
    export default store;


//we can only pass one reducer with this method
// const store = createStore(counterSlice.reducer);


//for single slice
// const store = configureStore({
//     reducer:counter:counterSlice.reducer,
//     
// });


