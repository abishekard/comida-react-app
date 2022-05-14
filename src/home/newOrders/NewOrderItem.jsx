import classes from "./NewOrder.module.css";

const NewOrderItem = (props) => {
  const orderItemClickHandler = (event) => {
    props.onOrderItemClick(props.id);
  };
  const queueOrderHandler = (event) => {
    event.stopPropagation();
    props.onQueueClick(props.id);
  };

  return (
    <div
      className={classes.order_item_container}
      onClick={orderItemClickHandler}
    >
      <img height="100px" width="100px" src={props.data.item_image} />
      <div className={classes.data_container}>
        <div className={classes.title}> #{props.data.order_id}</div>
        <div className={classes.description}>
          <div>address : {props.data.delivered_address}</div>
          <div className={classes.price_and_button_div}>
            <div>Price : {props.data.total_price}</div>
            <button onClick={queueOrderHandler}>Queue Order</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewOrderItem;
