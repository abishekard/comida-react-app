import classes from "./Menu.module.css";

const MenuItem = (props) => {
  const orderItemClickHandler = (event) => {
    props.onOrderItemClick(props.id);
  };
  const onDeleteHandler = (event) => {
    event.stopPropagation();
    props.onDelete(props.id);
  };
  return (
    <div
      className={classes.order_item_container}
      onClick={orderItemClickHandler}
    >
      <img height="100px" width="100px" src={props.data.item_image} />
      <div className={classes.data_container}>
        <div className={classes.title}> {props.data.item_name}</div>
        <div className={classes.description}>
          <div className={classes.price_and_button_div}>
            <div>Price : {props.data.price}</div>
            <button onClick={onDeleteHandler}>delete</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
