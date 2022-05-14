import { useState } from "react";

import Header from "../ui/Header";
import ForgotPassword from "./ForgotPassword";
import Login from "./Login";
import SignUp from "./SignUp";

function LoginSignUp() {
  const [loginClick, setLoginClick] = useState(true);
  const [forgotPass, setForgotPass] = useState(false);

  const signInClickHandler = () => {
    setLoginClick(false);
    setForgotPass(false);
  };
  const forgotPassClickHandler = () => {
    setForgotPass(true);
    setLoginClick(false);
  };
  const loginClickHandler = () => {
    setLoginClick(true);
    setForgotPass(false);
  };

  return (
    <div className="App">
      <Header>
        <h2 style={{ marginTop: "8px", color: "white" }}>FOOD DELIVERY</h2>
      </Header>

      {!forgotPass && !loginClick && (
        <SignUp
          onLoginClick={loginClickHandler}
          onForgotPassClick={forgotPassClickHandler}
        />
      )}
      {!forgotPass && loginClick && (
        <Login
          onSignInClick={signInClickHandler}
          onForgotPassClick={forgotPassClickHandler}
        />
      )}
      {forgotPass && <ForgotPassword onSignInClick={signInClickHandler} />}
    </div>
  );
}

export default LoginSignUp;
