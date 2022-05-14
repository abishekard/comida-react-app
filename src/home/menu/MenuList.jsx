import classes from "./Menu.module.css";
import MenuItem from "./MenuItem";

const MenuList = (props) => {
  const orderItemClickHanler = (id) => {
    props.onOrderItemClick(id);
    console.log(id);
  };

  const onDeleteHandler = (id) => {
    props.onDelete(id);
  };

  return (
    <div className={classes.container}>
      {props.orderItemList.map((val, idx) => {
        return (
          <MenuItem
            data={val}
            key={idx}
            id={idx}
            onOrderItemClick={orderItemClickHanler}
            onDelete={onDeleteHandler}
          />
        );
      })}
    </div>
  );
};

export default MenuList;
