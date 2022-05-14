import React, { useState } from "react";
import classes from "./SignUp.module.css";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import FirebaseConfig from "../config/FirebaseConfig";
import { initializeApp } from "firebase/app";
import { getDatabase, onValue, ref, set } from "firebase/database";
import { useHistory } from "react-router";

const SignUp = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const signInHandler = (event) => {
    event.preventDefault();
    const FireConfig = initializeApp(FirebaseConfig);
    const db = getDatabase();
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(userCredential.user);
        console.log(userCredential.user.uid);
        storeUserData(name, email, mobile, user.uid);

        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        if (errorCode == "auth/email-already-in-use")
          alert("email already exists");
        if (errorCode == "auth/invalid-email") alert("Invalid Email");
      });
  };

  const storeUserData = (name, userEmail, mobile, uid) => {
    const db = getDatabase();

    var date = new Date();
    var hours = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
    var minutes =
      date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
    var seconds =
      date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
    const time = hours + ":" + minutes + ":" + seconds;
    const userRef = ref(db, "users/" + uid);
    set(userRef, {
      userName: name,
      email: userEmail,
      mob: mobile,
      status: "unpaid",
      image: "",
      token: "",
      date: new Date().toLocaleDateString() + " " + time,
      endDate: new Date().toLocaleDateString() + " " + time,
    });
    alert("account created Please login");
    props.onLoginClick();
  };

  const nameChangeHandler = (event) => {
    setName(event.target.value);
  };

  const emailChangeHandler = (event) => {
    setEmail(event.target.value);
  };

  const mobileChangeHandler = (event) => {
    setMobile(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setPassword(event.target.value);
  };

  return (
    <div className={classes.container}>
      <div className={classes["form-container"]}>
        <h2>SIGN IN</h2>
        <form onSubmit={signInHandler}>
          <input
            onChange={nameChangeHandler}
            type="text"
            required={true}
            placeholder="Name"
          ></input>
          <input
            onChange={emailChangeHandler}
            type="email"
            required={true}
            placeholder="Email"
          ></input>
          <input
            onChange={mobileChangeHandler}
            type="number"
            required={true}
            placeholder="mobile"
          ></input>
          <input
            onChange={passwordChangeHandler}
            type="password"
            required={true}
            placeholder="Password"
          ></input>
          <button>Create Account</button>
        </form>
        <div className={classes["signup-forgot"]}>
          <h5 onClick={props.onLoginClick}>Login</h5>
          <h5 onClick={props.onForgotPassClick}>Forgot Password</h5>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
