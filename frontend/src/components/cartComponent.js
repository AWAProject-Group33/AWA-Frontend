import styles from './cartComponent.module.css';
import ModalCartDetail from './modalCartDetail';
import Backdrop from './BackDrop';
import React, {useState} from 'react';

export default function CartComponent() 
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
  return (
    <div className={styles.Container}>

      {showCartDetail ? <ModalCartDetail onClick={CancelModal}/> : null }
      {showCartDetail ? <Backdrop onClick={CloseModal}/>: null}
      <h3>SHOPPING CART</h3>
      <spam style={{paddingLeft: "5px"}}>
          <button onClick={ShowDetails}>Details and Payment</button>
      </spam>
    </div>
    )
      
}