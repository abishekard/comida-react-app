import classes from "./Menu.module.css";
import MenuItem from "./MenuItem";

const MenuList = (props) => {
  const orderItemClickHanler = (id) => {
    props.onOrderItemClick(id);
    console.log(id);
  };

  /* const onRemoveHandler = (id) => {
    props.orderItemList[id].quantity = 0;
  };
  const onAddHandler = (id,val) => {
    props.orderItemList[id].quantity = val;
  };
  const onQuantityChangeHandler = (id, val) => {
    props.orderItemList[id].quantity = val;
  }; */

  return (
    <div className={classes.container}>
      {props.orderItemList.map((val, idx) => {
        val.quantity = 0;
        return (
          <MenuItem
            data={val}
            key={idx}
            id={idx}
            /*  onAdd={onAddHandler}
            onRemove={onRemoveHandler}
            onQuantityChange={onQuantityChangeHandler} */
          />
        );
      })}
    </div>
  );
};

export default MenuList;
