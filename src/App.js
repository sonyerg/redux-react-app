import { Fragment } from "react";
import Counter from "./components/Counter";
import Header from "./components/Header";
import Auth from "./components/Auth";
import UserProfile from "./components/UserProfile";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../src/store/auth";

function App() {
  const isAuth = useSelector((state) => state.auth.isAuthenticanted);
  const dispatch = useDispatch();

  const loginHandler = (event) => {
    event.preventDefault();
    dispatch(authActions.login());
  };

  const logoutHandler = (event) => {
    event.preventDefault();
    dispatch(authActions.logout());
  };

  return (
    <Fragment>
      <Header logoutHandler={logoutHandler} isAuthenticanted={isAuth} />
      {!isAuth && <Auth loginHandler={loginHandler} />}
      {isAuth && <UserProfile />}
      {isAuth && <Counter />}
    </Fragment>
  );
}

export default App;
