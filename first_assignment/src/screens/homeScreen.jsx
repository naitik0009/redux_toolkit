import { useSelector,useDispatch } from "react-redux";
import { counterActions } from "../context/slices/counter.slice";
import { authActions } from "../context/slices/auth.slice";
export const HomeScreen = () => {
    const counter = useSelector(state => state.counter.counter);
    const show = useSelector( state => state.counter.showCounter );
    
    const dispatch = useDispatch();

    const increament = ()=>{
        dispatch(counterActions.increment(10));
    };
    const decreament = ()=>{
        dispatch(counterActions.decrement());
    }
    const toogleCounter = ()=>{
        dispatch(counterActions.toogleCounter());
    };
    const logout = ()=>{
        dispatch(authActions.logout());
    }
    return (<div>
        <h1>Redux Counter</h1>
        <div>
           {show?<>
            <p>{counter}</p>
            <button onClick={increament}>Increase</button>
            <button onClick={decreament}>Decrease</button>
           </>:""}
            <button onClick={toogleCounter}>Toogle Counter</button>
            <button onClick={logout}>Logout</button>
        </div>
    </div>);
};