import classes from "./../menu/Menu.module.css";
import CartContext from "../../store/cart-context";
import Input from "./../../ui/Input";
import { useState, useRef, useContext } from "react";

const CartItem = (props) => {
  // console.log(props.data);
  return (
    <div className={classes.order_item_container}>
      <img height="100px" width="100px" src={props.data.item_image} />
      <div className={classes.data_container}>
        <div className={classes.title}> {props.data.item_name}</div>
        <div className={classes.description}>
          <div className={classes.price_and_button_div}>
            <div>Price : {props.data.price}</div>
          </div>
          <p>Quantity : {props.quantity}</p>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
