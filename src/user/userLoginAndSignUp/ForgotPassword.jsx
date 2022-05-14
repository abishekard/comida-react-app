import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { useState } from "react";
import classes from "./ForgotPassword.module.css";

const ForgotPassword = (props) => {
  const [email, setEmail] = useState("");
  const forgotPasswordHandler = (event) => {
    event.preventDefault();
    const auth = getAuth();
    sendPasswordResetEmail(auth, email)
      .then(() => {
        alert("Password reset link has been sent to your mail");
        props.onSignInClick();
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(error.code);
        if (errorCode == "auth/user-not-found") alert("Acount Does not exists");
        // ..
      });
  };

  const emailChangeHandler = (event) => {
    setEmail(event.target.value);
  };

  return (
    <div className={classes.container}>
      <div className={classes["form-container"]}>
        <h2>Forgot Password</h2>
        <form onSubmit={forgotPasswordHandler}>
          <input
            onChange={emailChangeHandler}
            type="email"
            required={true}
            placeholder="Email"
          ></input>

          <button>Reset Password</button>
        </form>
        <div className={classes["signup-forgot"]}>
          <h5 onClick={props.onSignInClick}>Create Account</h5>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
