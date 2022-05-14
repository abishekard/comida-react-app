import { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./home/Home";
import LoginSignUp from "./loginAndSignUp/LoginSignUp";
import LoginContexProvider from "./store/LoginContextProvider";
import CartProvider from "./store/CartProvider";
import UserHome from "./user/UserHome";
import UserLoginSignUp from "./user/userLoginAndSignUp/UserLoginSignUp";

function App() {
  return (
    <LoginContexProvider>
      <CartProvider>
        <Router>
          <Switch>
            <Route path="/admin/login_signin">
              <LoginSignUp />
            </Route>
            <Route path="/admin">
              <Home />
            </Route>
            <Route path="/user/login_signin">
              <UserLoginSignUp />
            </Route>
            <Route path="/">
              <UserHome />
            </Route>
          </Switch>
        </Router>
      </CartProvider>
    </LoginContexProvider>
  );
}

export default App;
