import { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type == "ADD") {
    const updatedItem = state.items.concat(action.item);
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;

    /*   console.log({
      items: updatedItem,
      totalAmount: updatedTotalAmount,
    }); */
    return {
      items: updatedItem,
      totalAmount: updatedTotalAmount,
    };
  } else if (action.type == "REMOVE") {
    var updatedItem = [];
    var totalAmount = 0;
    console.log("action id : " + action.id);
    state.items.map((val) => {
      if (val.id != action.id) {
        updatedItem.push(val);
        totalAmount += val.price;
      }
    });
    state.items = updatedItem;
    state.totalAmount = totalAmount;
    return {
      items: updatedItem,
      totalAmount: totalAmount,
    };
  }
  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemToCartHandler = (item) => {
    dispatchCartAction({
      type: "ADD",
      item: item,
    });
  };

  const removeItemFromCarthandler = (id) => {
    dispatchCartAction({
      type: "REMOVE",
      id: id,
    });
  };
  const clearCarthandler = () => {
    dispatchCartAction({
      type: "CLEAR",
    });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCarthandler,
    clear: clearCarthandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
