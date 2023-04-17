import { HomeScreen } from "./screens/homeScreen";
import { Fragment } from "react";
import { LoginForm } from "./components/login";
import { useSelector } from "react-redux";

function App() {
const loggedIn = useSelector((state)=>state.auth.isAuthenticated);

  return (
    <Fragment>
      {!loggedIn?
      <LoginForm/>:
      <HomeScreen/>
}
    </Fragment>
  );
}

export default App;
