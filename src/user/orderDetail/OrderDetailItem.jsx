import classes from "./OrderDetail.module.css";

const OrderDetailItem = (props) => {
  return (
    <div className={classes.order_item_container}>
      <img height="50px" width="50px" src={props.data.item_image} />
      <div className={classes.description}>
        <p>{props.data.item_name}</p>
        <p>Quantity : {props.data.quantity}</p>
        <p>Price : {props.data.price}</p>
      </div>
    </div>
  );
};

export default OrderDetailItem;
