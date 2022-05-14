import NewOrderList from "./NewOrderList";
import { useEffect, useState } from "react";
import OrderDetails from "../orderDetail/OrderDetails";

const NewOrder = () => {
  const [orderItemList, setOrderItemList] = useState([]);
  const [showOrderDetail, setShowOrderDatail] = useState([]);
  const [order_id, setOrderId] = useState([]);

  useEffect(() => {
    setShowOrderDatail(false);
    fetch(`https://comida-node-api.herokuapp.com/api/partner/order/new/1`, {
      mode: "cors",
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Content-Type": "application/x-www-form-urlencoded",
      },
    })
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

  const queueClickHandler = (position) => {
    console.log("dispatch click");
    fetch(`https://comida-node-api.herokuapp.com/api/partner/order/queue`, {
      mode: "cors",
      method: "POST",
      body: new URLSearchParams({
        order_id: orderItemList[position].order_id,
      }),
      headers: {
        "Content-Type": "application/json",
        "Content-Type": "application/x-www-form-urlencoded",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        console.log(response);
        var newOrderList = [];
        orderItemList.map((val, index) => {
          if (index != position) newOrderList.push(orderItemList[index]);
        });
        setOrderItemList(newOrderList);
        alert("order queued");
      })
      .catch((error) => {
        console.log(error);
      });
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
          onQueueClick={queueClickHandler}
        />
      </div>
    </>
  );
};

export default NewOrder;
