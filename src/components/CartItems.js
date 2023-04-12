import React from "react";
import CartItem from "./CartItem";
import "./Cart.css";
import { useSelector } from "react-redux";
const CartItems = () => {
  const cartItems = useSelector((state) => state.cart.items);
 
 
  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      <ul>
        {cartItems.length === 0 ? <h2 style={{textAlign:"center"}}> No item in cart</h2> : 
          cartItems.map((item) => {
            return (
              <li key={item.id}>
                <CartItem
                  id={item.id}
                  price={item.price}
                  quantity={item.quantity}
                  name={item.name}
                  total={item.totalPrice}
                />
              </li> 
          
            );
          }
          
          )
        }
       
        
      </ul>
    </div>
  );
};

export default CartItems;
