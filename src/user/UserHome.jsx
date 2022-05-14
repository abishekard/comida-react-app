import React, { useContext, useState } from "react";
import { Redirect, Route } from "react-router";
import UserNavigationBar from "./UserNavigationBar";
import LoginContext from "../store/LoginContex";
import Menu from "./menu/Menu";
import Cart from "./Cart/Cart";
import { useHistory } from "react-router-dom";

import ProfileHome from "./profile/ProfileHome";
import CheckOut from "./checkout/CheckOut";
import NewOrder from "./NewOrders/NewOrder";
import HistoryOrder from "./historyOrder/historyOrder";

const UserHome = () => {
  const [cartShown, setCartShown] = useState(false);
  const [placeOrder, setPlaceOrder] = useState();

  const hideCartHandler = () => {
    setCartShown(false);
  };
  const loginContext = useContext(LoginContext);
  //console.log(loginContext.isLogin);
  const onCartClickHandler = () => {
    setCartShown(true);
    setPlaceOrder(false);
  };
  const onOrderHandler = () => {
    setCartShown(false);
    setPlaceOrder(true);
    console.log(placeOrder);
  };

  return (
    <>
      <UserNavigationBar onCartClick={onCartClickHandler} />
      {!loginContext.isLogin && <Redirect to="/user/login_signin" />}
      {/*  {loginContext.isLogin && <Redirect to="/user/home/profile" />} */}
      {placeOrder && <Redirect to="/user/home/checkout" />}
      {cartShown && <Cart onClose={hideCartHandler} onOrder={onOrderHandler} />}

      <Route path="/user/home/menu">
        <Menu />
      </Route>
      <Route path="/user/home/new-order">
        <NewOrder />
      </Route>
      <Route path="/user/home/history-order">
        <HistoryOrder />
      </Route>
      <Route path="/user/home/profile">
        <ProfileHome />
      </Route>
      <Route path="/user/home/checkout">
        <CheckOut />
      </Route>

      {/*   

      <Route path="/home/progressOrder">
        <ProgressOrder />
      </Route>
      <Route path="/home/completedOrder">
        <CompletedOrder />
      </Route>
      <Route path="/home/menu">
        <Menu />
      </Route>
      <Route path="/home/addMenu">
        <AddMenu />
      </Route> */}
    </>
  );
};

export default UserHome;
