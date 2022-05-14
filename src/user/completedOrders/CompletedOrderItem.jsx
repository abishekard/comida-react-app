import classes from "./CompletedOrder.module.css";

const CompletedOrderItem = (props) => {
  const orderItemClickHandler = (event) => {
    props.onOrderItemClick(props.id);
  };

  return (
    <div
      className={classes.order_item_container}
      onClick={orderItemClickHandler}
    >
      <img height="100px" width="100px" src={props.data.item_image} />
      <div>
        <div className={classes.title}> #{props.data.order_id}</div>
        <div className={classes.description}>
          <div>address : {props.data.delivered_address}</div>
          <div className={classes.price_and_button_div}>
            <div>Price : {props.data.total_price}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompletedOrderItem;
