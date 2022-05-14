import Modal from "../../ui/Modal";
import { useState } from "react";
import { useEffect } from "react";
import OrderDetailItem from "./OrderDetailItem";
import classes from "./OrderDetail.module.css";

const OrderDetails = (props) => {
  const [orderItems, setOrderItems] = useState();
  const [name, setName] = useState([]);
  const [mobile, setMobile] = useState([]);
  const [address, setAddress] = useState([]);
  const [totalPrice, setPrice] = useState([]);

  useEffect(() => {
    setOrderItems(<p>No Items</p>);

    fetch(
      `https://comida-node-api.herokuapp.com/api/partner/order/detail/${props.orderId}`,
      {
        mode: "cors",
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    )
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        console.log(response);
        /*  const cartItems = (
            <ul className={classes.cartItems}>
              {cartCtx.items.map((item) => {
                return <CartItem item={item} />;
              })}
            </ul>
          ); */
        setName(response.data.customer_name);
        setMobile(response.data.customer_mobile);
        setAddress(response.data.delivered_address);
        setPrice(response.data.total_price);
        setOrderItems(
          response.data.data.map((item) => {
            return <OrderDetailItem data={item} />;
          })
        );
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <Modal>
      <div>
        <div className={classes.close_button_div}>
          <button onClick={props.onClose}>Close</button>
        </div>
        <div>
          <span>Name : </span>
          <span>{name}</span>
        </div>
        <div>
          <span>Mobile : </span>
          <span>{mobile}</span>
        </div>
        <div>
          <span>Address : </span>
          <span>{address}</span>
        </div>
        <div>
          <span>Price : </span>
          <span>{totalPrice}</span>
        </div>
        <div>{orderItems}</div>
      </div>
    </Modal>
  );
};

export default OrderDetails;
