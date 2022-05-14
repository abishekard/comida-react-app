import classes from "./CompletedOrder.module.css";
import NewOrderItem from "./CompletedOrderItem";

const CompletedOrderList = (props) => {
  const orderItemClickHanler = (id) => {
    props.onOrderItemClick(id);
    console.log(id);
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
          />
        );
      })}
    </div>
  );
};

export default CompletedOrderList;
