import classes from "./ProgressOrder.module.css";
import ProgressOrderItem from "./ProgressOrderItem";

const ProgressOrderList = (props) => {
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
          <ProgressOrderItem
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

export default ProgressOrderList;
