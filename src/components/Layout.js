import React from "react";
import Header from "./Header";
import Products from "./Products";
import "./Layout.css";
import CartItems from "./CartItems";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../store/cart-slice";

const Layout = () => {
  const dispatch = useDispatch()
  const showCart = useSelector((state) => state.cart.showCart);
  const items = useSelector((state) => state.cart.items);
  console.log("statei",items)
  let total = 0;
  
  // if(items.length > 0){
  items.forEach((item) => {
    total += item.totalPrice;
  });
  // }
 
  //  const total = items.reduce((total, item) => {
  //   return total + item.totalPrice;
  // }, 0);
  
  const handleClear = () => {
    dispatch(cartActions.clearCart())
  }
  

  return (
    <React.Fragment>
      <div className="layout">
        <Header />
        <Products />
       {showCart && <CartItems /> }
        <div className="total-price">
          <h3>Total: ${total}</h3>
          <button className="orderBtn">Place Order</button>
          <button className="closeBtn" onClick={handleClear}>Clear Cart</button>
        </div>{" "}
      </div>
    </React.Fragment>
  );
};

export default Layout;
