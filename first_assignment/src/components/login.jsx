import { useDispatch } from "react-redux";
import { authActions } from "../context/slices/auth.slice";

export const LoginForm = ()=>{
    const dispatch = useDispatch();
    const loginHandler = (event)=>{
        event.preventDefault();
        dispatch(authActions.login());
    };
    return (
        <div className="form" onSubmit={loginHandler}>
            <form >
                <input type="date" name="" id="" />
                <input type="text" name="" id="" />
                <button type="submit">Login</button>
            </form>
        </div>
    );
};