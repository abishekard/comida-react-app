import React, { useContext } from "react";
import { Redirect, Route } from "react-router";
import NavigationBar from "./NavigationBar";
import LoginContext from "../store/LoginContex";
import NewOrder from "./newOrders/NewOrder";
import ProfileHome from "../home/profile/ProfileHome";
import ProgressOrder from "./progressOrders/ProgressOrder";
import CompletedOrder from "./completedOrders/CompletedOrder";
import Menu from "./menu/Menu";
import AddMenu from "./addMenu/AddMenu";

const Home = () => {
  const loginContext = useContext(LoginContext);
  console.log(loginContext.isLogin);

  return (
    <>
      <NavigationBar />
      {!loginContext.isLogin && <Redirect to="/admin/login_signin" />}
      {loginContext.isLogin && <Redirect to="/admin/home/newOrder" />}
      <Route path="/admin/home/profile">
        <ProfileHome />
      </Route>

      <Route path="/admin/home/newOrder">
        <NewOrder />
      </Route>

      <Route path="/admin/home/progressOrder">
        <ProgressOrder />
      </Route>
      <Route path="/admin/home/completedOrder">
        <CompletedOrder />
      </Route>
      <Route path="/admin/home/menu">
        <Menu />
      </Route>
      <Route path="/admin/home/addMenu">
        <AddMenu />
      </Route>
    </>
  );
};

export default Home;
