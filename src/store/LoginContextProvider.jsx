import { useContext, useReducer } from "react";
import LoginContext from "./LoginContex";

const defaultLoginState = {
  isLogin: false,
  name: "",
  email: "",
  userId: "",
  profileImage: "",
  mobile: "",
  date: "",
};

const loginReducer = (state, action) => {
  if (action.type == "LOGIN") {
    const updatedLoginState = {
      isLogin: true,
      name: action.name,
      email: action.email,
      userId: action.userId,
      mobile: action.mobile,
      profileImage: action.profileImage,
      date: action.date,
    };

    return updatedLoginState;
  } else if (action.type == "LOGOUT") {
    const updatedLoginState = {
      isLogin: false,
      name: "",
      email: "",
      userId: "",
      profileImage: "",
      mobile: "",
      date: "",
    };

    return updatedLoginState;
  }

  return defaultLoginState;
};

const LoginContexProvider = (props) => {
  const [loginState, dispatchLoginAction] = useReducer(
    loginReducer,
    defaultLoginState
  );

  const loginHandler = (data) => {
    dispatchLoginAction({
      type: "LOGIN",
      name: data.name,
      email: data.email,
      userId: data.userId,
      mobile: data.mobile,
      profileImage: data.profileImage,
      date: data.date,
    });
  };
  const logoutHandler = () => {
    dispatchLoginAction({
      type: "LOGOUT",
    });
  };
  const loginContex = {
    isLogin: loginState.isLogin,
    name: loginState.name,
    email: loginState.email,
    userId: loginState.userId,
    profileImage: loginState.profileImage,
    date: loginState.date,
    mobile: loginState.mobile,
    setLogin: loginHandler,
    setLogout: logoutHandler,
  };
  return (
    <LoginContext.Provider value={loginContex}>
      {props.children}
    </LoginContext.Provider>
  );
};

export default LoginContexProvider;
