import React from "react";
const LoginContext = React.createContext({
  isLogin: false,
  name: "",
  email: "",
  userId: "",
  mobile: "",
  profileImage: "",
  date: "",
  setLogin: (loggedIn) => {},
  setLogout: () => {},
});

export default LoginContext;
