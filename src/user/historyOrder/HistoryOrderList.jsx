import classes from "./HistoryOrder.module.css";
import HistoryOrderItem from "./HistoryOrderItem";

const HistoryOrderList = (props) => {
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
          <HistoryOrderItem
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

export default HistoryOrderList;
