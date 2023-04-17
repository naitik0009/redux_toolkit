import { createStore } from "redux";


const counterReducer = (state = { counter: 0,showCounter:true }, action) => {

   if (action.type === 'increament') {
    return {counter : state.counter + action.value,showCounter:state.showCounter};
};
if(action.type === 'decreament'){
    return {counter : state.counter - action.value,showCounter:state.showCounter};
};
if(action.type==='toogle'){
    return {counter : state.counter,showCounter:!state.showCounter};
}
return state;
};

const store = createStore(counterReducer);
