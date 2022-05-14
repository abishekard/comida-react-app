import NewOrderList from "./CompletedOrderList";
import { useEffect, useState } from "react";
import OrderDetails from "../orderDetail/OrderDetails";

const CompletedOrder = () => {
  const [orderItemList, setOrderItemList] = useState([]);
  const [showOrderDetail, setShowOrderDatail] = useState([]);
  const [order_id, setOrderId] = useState([]);

  useEffect(() => {
    setShowOrderDatail(false);
    fetch(
      `https://comida-node-api.herokuapp.com/api/partner/order/completed/1`,
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
        setOrderItemList(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const orderItemClickHandler = (position) => {
    setOrderId(orderItemList[position].order_id);
    setShowOrderDatail(true);
  };
  const orderDetailCloseHandler = () => {
    setShowOrderDatail(false);
  };

  return (
    <>
      <div>
        {showOrderDetail && (
          <OrderDetails orderId={order_id} onClose={orderDetailCloseHandler} />
        )}
        <NewOrderList
          orderItemList={orderItemList}
          onOrderItemClick={orderItemClickHandler}
        />
      </div>
    </>
  );
};

export default CompletedOrder;
