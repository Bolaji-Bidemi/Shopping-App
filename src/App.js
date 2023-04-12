import React from "react";
import "./App.css";
import Auth from "./components/Auth";
import Layout from "./components/Layout";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import Notification from "./components/Notification";
import { useDispatch } from "react-redux";
import { fetchData, sendCartData } from "./store/cart-actions";


let isFirstRender = true
function App() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn)
  const notification = useSelector(state=> state.ui.notification)
  const cart = useSelector((state) => state.cart) 
  const dispatch = useDispatch();
  
  
 // const cartItems = useSelector((state) => state.cart.items);

 useEffect(()=> {
  dispatch(fetchData())
 },[dispatch])
 useEffect(()=>{
  if(isFirstRender){
    isFirstRender = false;
    return
  }
   if(cart.changed){
    dispatch(sendCartData(cart))
   }

  
  //send state as sending request
  // dispatch(uiActions.showNotification({
  //   open: true,
  //   message: 'Sending Request loading...',
  //   type: 'warning'
  // }));
  // const sendRequest = async() => {
  //   const res = await fetch('https://redux-store-7bc0a-default-rtdb.firebaseio.com/cartItems.json',{
  //     method:'PUT',
  //     body:JSON.stringify(cart)
  //   })
  //   const data = await res.json()
    //Sent state as request is successfull
  //   dispatch(uiActions.showNotification({
  //     open: true,
  //     message: 'Sent Request to Datatbase was successful',
  //     type: 'success'
  //   }));
  // }
  // sendRequest().catch((err)=>{
  //   dispatch(uiActions.showNotification({
  //     open: true,
  //     message: 'Sending Request failed',
  //     type: 'error'
  //   }));
  // })
  
 },[cart, dispatch])
  
  return (
    <div className="App">
     {notification && <Notification type={notification.type} message={notification.message} />}
      {!isLoggedIn && <Auth />}
      {isLoggedIn && <Layout /> }
    </div>
   
  );
}

export default App;
