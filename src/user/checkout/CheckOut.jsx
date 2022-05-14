import classess from "./CheckOut.module.css";
import { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import CartContext from "../../store/cart-context";
import CartItem from "../Cart/CartItem";
import LoginContext from "../../store/LoginContex";
const CheckOut = () => {
  const history = useHistory();
  const cartCtx = useContext(CartContext);
  const loginCtx = useContext(LoginContext);
  const [address, setAddress] = useState();

  const items = cartCtx.items.map((val) => {
    return <CartItem data={val.data} quantity={val.amount} />;
  });
  const placeOrderHandler = (event) => {
    event.preventDefault();
    const userId_ = loginCtx.userId;
    const address_ = address;
    var productId_ = "";
    var quantity_ = "";
    const totalPrice_ = cartCtx.totalAmount;
    const partnerId_ = 1;
    const paymentMethod_ = "cod";
    const orderId_ = new Date().getTime();

    cartCtx.items.map((val) => {
      console.log(val);
      productId_ = productId_ + val.data.id + ",";
      quantity_ = quantity_ + val.amount + ",";
    });
    productId_ = productId_.slice(0, -1);
    quantity_ = quantity_.slice(0, -1);

    // history.push("/user/home");

    fetch("http://comida-node-api.herokuapp.com/api/user/placeOrder", {
      mode: "cors",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        user_id: userId_,
        address: address_,
        product_id: productId_,
        quantity: quantity_,
        total_price: totalPrice_,
        partner_id: partnerId_,
        payment_method: partnerId_,
        order_id: orderId_,
      }),
    })
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        alert("Order Placed . \n Thank You !!");
        cartCtx.clear();
        history.push("/user/home/menu");
      })
      .catch((error) => {
        console.log(error);
        alert("Invalid credential");
      });

    /*   console.log(
      address_ + " -- " + productId_ + " -- " + quantity_ + " -- " + totalPrice_
    );
 */
  };
  const addressChangeHandler = (event) => {
    setAddress(event.target.value);
  };
  const onCheckChange = () => {};
  return (
    <>
      <div className={classess.container}>
        <h1>CheckOut</h1>
        <div className={classess.child_container}>{items}</div>
      </div>
      <div className={classess.detail_container}>
        <div className={classess["form-container"]}>
          <form onSubmit={placeOrderHandler}>
            <input
              className={classess.address}
              onChange={addressChangeHandler}
              type="text"
              required={true}
              placeholder="Address"
            ></input>
            <div>
              <input
                className={classess.check_box}
                type="checkbox"
                id="order_type"
                name="vehicle1"
                value="COD"
                checked="yes"
                onChange={onCheckChange}
              ></input>
              <label className={classess.check_box_label}>COD</label>
            </div>

            <button>Place Order</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default CheckOut;
