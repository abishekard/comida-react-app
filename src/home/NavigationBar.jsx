import { Link, NavLink } from "react-router-dom";
import classes from "./Home.module.css";

const NavigationBar = () => {
  return (
    <header className={classes.nav_container}>
      {/*  <NavLink
        to="/home"
        activeStyle={{
          fontWeight: "bold",
          color: "white",
        }}
      >
        <h5>Home</h5>
      </NavLink> */}
      <NavLink
        activeStyle={{
          fontWeight: "bold",
          color: "white",
        }}
        to="/admin/home/newOrder"
      >
        <h5>New Orders</h5>
      </NavLink>
      <NavLink
        activeStyle={{
          fontWeight: "bold",
          color: "white",
        }}
        to="/admin/home/progressOrder"
      >
        <h5>Progress Order</h5>
      </NavLink>
      <NavLink
        activeStyle={{
          fontWeight: "bold",
          color: "white",
        }}
        to="/admin/home/completedOrder"
      >
        <h5>Completed Orders</h5>
      </NavLink>
      <NavLink
        activeStyle={{
          fontWeight: "bold",
          color: "white",
        }}
        to="/admin/home/menu"
      >
        <h5>Menu</h5>
      </NavLink>
      <NavLink
        activeStyle={{
          fontWeight: "bold",
          color: "white",
        }}
        to="/admin/home/addMenu"
      >
        <h5>Add menu</h5>
      </NavLink>
      <NavLink
        activeStyle={{
          fontWeight: "bold",
          color: "white",
        }}
        to="/admin/home/profile"
      >
        <h5>Profile</h5>
      </NavLink>
    </header>
  );
};

export default NavigationBar;
