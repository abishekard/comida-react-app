import NewOrderList from "./NewOrderList";
import { useContext, useEffect, useState } from "react";
import OrderDetails from "../orderDetail/OrderDetails";
import LoginContext from "../../store/LoginContex";

const NewOrder = () => {
  const loginCtx = useContext(LoginContext);
  const [orderItemList, setOrderItemList] = useState([]);
  const [showOrderDetail, setShowOrderDatail] = useState(false);
  const [order_id, setOrderId] = useState([]);

  useEffect(() => {
    fetch(
      `https://comida-node-api.herokuapp.com/api/user/orders/new/${loginCtx.userId}`,
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
  const dispatchClickHandler = (position) => {
    console.log("dispatch click");
    fetch(`https://comida-node-api.herokuapp.com/api/partner/order/dispatch`, {
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
        alert("order dispatched");
      })
      .catch((error) => {
        console.log(error);
      });
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
          onDispatchClick={dispatchClickHandler}
        />
      </div>
    </>
  );
};

export default NewOrder;
