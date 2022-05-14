import MenuList from "./MenuList";
import { useEffect, useState } from "react";
import OrderDetails from "../orderDetail/OrderDetails";
import { useContext } from "react";
import LoginContext from "../../store/LoginContex";

const NewOrder = () => {
  const loginContext = useContext(LoginContext);
  const [orderItemList, setOrderItemList] = useState([]);
  const [showOrderDetail, setShowOrderDatail] = useState([]);
  const [order_id, setOrderId] = useState([]);

  useEffect(() => {
    setShowOrderDatail(false);
    fetch(
      `https://comida-node-api.herokuapp.com/api/partner/product/show/all`,
      {
        mode: "cors",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          partner_id: 1,
        }),
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

  const onDeleteHandler = (position) => {
    const productId = orderItemList[position].id;
    console.log("delte click - " + productId);

    if (window.confirm("Are you sure !!!") == true) {
      fetch(
        `https://comida-node-api.herokuapp.com/api/partner/product/delete/${productId}`,
        {
          mode: "cors",
          method: "POST",
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
          var newOrderList = [];
          orderItemList.map((val, index) => {
            if (index != position) newOrderList.push(orderItemList[index]);
          });
          setOrderItemList(newOrderList);
          alert("item deleted");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
  return (
    <>
      <div>
        {/*  {showOrderDetail && (
          <OrderDetails orderId={order_id} onClose={orderDetailCloseHandler} />
        )} */}
        <MenuList
          orderItemList={orderItemList}
          onOrderItemClick={orderItemClickHandler}
          onDelete={onDeleteHandler}
        />
      </div>
    </>
  );
};

export default NewOrder;
