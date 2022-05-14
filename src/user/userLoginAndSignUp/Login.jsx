import React, { useContext, useState } from "react";
import LoginContext from "../../store/LoginContex";
import classes from "./Login.module.css";

import { useHistory } from "react-router-dom";

const Login = (props) => {
  const history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginContext = useContext(LoginContext);
  const loginHandler = (event) => {
    event.preventDefault();

    console.log(email + "  " + password);
    fetch("http://comida-node-api.herokuapp.com/api/user/login", {
      mode: "cors",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        email: email,
        password: password,
      }),
    })
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        console.log(response);
        loginContext.setLogin({
          name: response.data.name,
          email: response.data.email,
          mobile: response.data.mob,
          profileImage: response.data.profile_image,
          userId: response.data.id,
          date: response.data.created_at,
        });

        history.push("/user/home/menu");
      })
      .catch((error) => {
        console.log(error);
        alert("Invalid credential");
      });
    //alert("hello");
  };

  const emailChangeListener = (event) => {
    setEmail(event.target.value);
  };

  const passwordChangeListener = (event) => {
    setPassword(event.target.value);
  };

  return (
    <div className={classes.container}>
      <div className={classes["form-container"]}>
        <h2>USER LOGIN</h2>
        <form onSubmit={loginHandler}>
          <input
            onChange={emailChangeListener}
            type="email"
            required={true}
            placeholder="Email"
          ></input>
          <input
            onChange={passwordChangeListener}
            type="password"
            required={true}
            placeholder="Password"
          ></input>
          <button>Login</button>
        </form>
        <div className={classes["signup-forgot"]}>
          <h5 onClick={props.onSignInClick}>Create Account</h5>
          <h5 onClick={props.onForgotPassClick}>Forgot Password</h5>
        </div>
      </div>
    </div>
  );
};

export default Login;
