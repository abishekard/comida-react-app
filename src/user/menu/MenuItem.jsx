import classes from "./Menu.module.css";
import CartContext from "../../store/cart-context";
import Input from "./../../ui/Input";
import { useState, useRef, useContext } from "react";

const MenuItem = (props) => {
  const quantityInputRef = useRef();
  const [addRemove, setAddVal] = useState(true);

  const cartCtx = useContext(CartContext);

  const onRemoveHandler = (event) => {
    event.stopPropagation();
    cartCtx.removeItem(props.id);
    setAddVal(true);
  };
  const onAddHandler = (event) => {
    event.stopPropagation();
    cartCtx.addItem({
      id: props.id,
      data: props.data,
      amount: quantityInputRef.current.value,
      price: props.data.price,
    });

    setAddVal(false);
  };

  return (
    <div className={classes.order_item_container}>
      <img height="100px" width="100px" src={props.data.item_image} />
      <div className={classes.data_container}>
        <div className={classes.title}> {props.data.item_name}</div>
        <div className={classes.description}>
          <div className={classes.price_and_button_div}>
            <div>Price : {props.data.price}</div>
            {addRemove && <button onClick={onAddHandler}>Add to Cart</button>}
            {!addRemove && <button onClick={onRemoveHandler}>Remove</button>}
          </div>
          {/*   {!addRemove && <p>Quantity : {quantityInputRef.current.value}</p>} */}
          {
            <Input
              ref={quantityInputRef}
              label="Quantity"
              input={{
                id: "quantity",
                type: "number",
                min: "1",
                max: "5",
                step: "1",
                display: "none",
                defaultValue: "1",
              }}
            />
          }
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
