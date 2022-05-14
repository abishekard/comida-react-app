import classes from "./NewOrder.module.css";
import NewOrderItem from "./NewOrderItem";

const NewOrderList = (props) => {
  const orderItemClickHanler = (id) => {
    props.onOrderItemClick(id);
    console.log(id);
  };
  const dispatchOrderHandler = (id) => {
    props.onDispatchClick(id);
  };
  return (
    <div className={classes.container}>
      {props.orderItemList.map((val, idx) => {
        return (
          <NewOrderItem
            data={val}
            key={idx}
            id={idx}
            onOrderItemClick={orderItemClickHanler}
            onDispatchClick={dispatchOrderHandler}
          />
        );
      })}
    </div>
  );
};

export default NewOrderList;
