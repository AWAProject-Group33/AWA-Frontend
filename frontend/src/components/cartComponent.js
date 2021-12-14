import styles from './cartComponent.module.css';
import ModalCartDetail from './modalCartDetail';
import Backdrop from './BackDrop';
import React, {useState} from 'react';

export default function CartComponent(props) 
{
  const [showCartDetail, setShowCartDetail] = useState(false)
  const [showBackDrop, setShowBackDrop] = useState(false);

  function ShowDetails() {
    setShowCartDetail(true);
    setShowBackDrop(true);
  } 

  function CloseModal() {
    setShowCartDetail(false);
  }

  function CancelModal() {
    setShowCartDetail(false);
  }

  console.log("Ignore "+ showBackDrop);
  console.log(props.carts);
  const cart = props.carts.find(cart => cart.consumerId == localStorage.getItem('managerId'));
  if (cart == null) {
      console.log("Not found.");
      return 0;
  }    
  else {
      console.log(cart.shoppingCartId);
  }

  const cartItem = props.cartsItems.find(cartItem => cartItem.shoppingCartId == cart.shoppingCartId);
  if (cart == null) {
    console.log("Not found.");
  }    
  else {
    console.log(cartItem);
  }

  return (
    <div className={styles.Container}>

      {showCartDetail ? <ModalCartDetail cartsItems={props.cartsItems} carts={props.carts} onClick={CancelModal}/> : null }
      {showCartDetail ? <Backdrop onClick={CloseModal}/>: null}
      <h3>SHOPPING CART</h3>
      <div style={{display: 'grid'}}>
      <span>{cartItem.cartItemsId}</span>
      <span>{cartItem.productId}</span>
      <span>{cartItem.shoppingCartId}</span>
      <span>{cartItem.quantity}</span>
      </div>
      <span style={{paddingLeft: "5px"}}>
          <button onClick={ShowDetails}>Details and Payment</button>
      </span>
    </div>
    )
      
}