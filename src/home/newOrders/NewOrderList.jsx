import classes from "./NewOrder.module.css";
import NewOrderItem from "./NewOrderItem";

const NewOrderList = (props) => {
  const orderItemClickHanler = (id) => {
    props.onOrderItemClick(id);
    console.log(id);
  };
  const onQueueClickHandler = (id) => {
    props.onQueueClick(id);
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
            onQueueClick={onQueueClickHandler}
          />
        );
      })}
    </div>
  );
};

export default NewOrderList;
