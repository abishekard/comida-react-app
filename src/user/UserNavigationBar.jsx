import { Link, NavLink } from "react-router-dom";
import classes from "./UserHome.module.css";
import HeaderCartButton from "./Cart/HeaderCartButton";

const UserNavigationBar = (props) => {
  const cartClickHandler = () => {
    console.log("cartClick");
    props.onCartClick();
  };
  return (
    <header className={classes.nav_container}>
      <NavLink
        activeStyle={{
          fontWeight: "bold",
          color: "white",
        }}
        to="/user/home/menu"
      >
        <h5>Home</h5>
      </NavLink>
      <NavLink
        activeStyle={{
          fontWeight: "bold",
          color: "white",
        }}
        to="/user/home/new-order"
      >
        <h5>New-Order</h5>
      </NavLink>
      <NavLink
        activeStyle={{
          fontWeight: "bold",
          color: "white",
        }}
        to="/user/home/history-order"
      >
        <h5>Order-History</h5>
      </NavLink>

      <NavLink
        activeStyle={{
          fontWeight: "bold",
          color: "white",
        }}
        to="/user/home/profile"
      >
        <h5>Profile</h5>
      </NavLink>
      <HeaderCartButton onClick={cartClickHandler} />
    </header>
  );
};

export default UserNavigationBar;
