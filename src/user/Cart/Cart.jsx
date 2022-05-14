import Modal from "../../ui/Modal";
import classes from "./Cart.module.css";
import CartContext from "../../store/cart-context";
import { useContext, useState } from "react";
import CartItem from "./CartItem";
const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const totalPrice = cartCtx.totalAmount;
  const cartItems = (
    <ul className={classes.cartItems}>
      {cartCtx.items.map((item) => {
        console.log(item);
        return <CartItem data={item.data} quantity={item.amount} />;
      })}
    </ul>
  );
  return (
    <Modal>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalPrice}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        <button onClick={props.onOrder}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
