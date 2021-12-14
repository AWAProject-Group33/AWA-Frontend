import {Link} from 'react-router-dom';
//import Styles from './modalCartDetail.module.css';

export default function FormModal(props) {

  const cart = props.carts.find(cart => cart.consumerId == localStorage.getItem('managerId'));
  if (cart == null) {
      //("Not found.");
  }    
  else {
      //(cart.shoppingCartId);
  }

  const cartItem = props.cartsItems.find(cartItem => cartItem.shoppingCartId == cart.shoppingCartId);
  if (cart == null) {
    //("Not found.");
  }    
  else {
    //(cartItem);
  }

  function CancelButton() {
    props.onCancel(); //second method in second function
  } 
    
  function CardOwnername(val) {
    //(val.target.value);
  }


  function CreditCardOwnername(val) {
    //(val.target.value);
  }


  function OwnerAddress(val) {
    //(val.target.value);
  }


    return (
      <div className="modal">
        <div style={{color: "black"}}>
          <h2>SHOPPING CART CONTENT</h2>
            <div style={{display: "grid"}}>
            <span>{cartItem.cartItemsId}</span>
            <span>{cartItem.productId}</span>
            <span>{cartItem.shoppingCartId}</span>
            <span>{cartItem.quantity}</span>
            </div>
        </div>   
          <p>Total: </p>
            <div>
            <button className="modal-button">Empty Cart</button>
            </div>
          <h2 style={{color: "black"}}>PAYMENT INFORMATION</h2>
          <div>
            
              <form className="formRegister">
                <div>
                  Credit <input type="radio"></input>
                  Debit <input type="radio"></input>
                </div>
                  <label>Card Owner name<input onChange={CardOwnername} type="text" placeholder=""></input></label>
                  <label>Credit Card Number<input onChange={CreditCardOwnername} type="text" placeholder=""></input></label>
                  <label>Adress<input onChange={OwnerAddress} type="text" placeholder=""></input></label>
              </form>
            <button className="modal-button" onClick={props.onClick}>Cancel</button>
            <Link to="/orderconfirmation"><button className="modal-button-b">Make Payment</button></Link>
          </div>
      </div>
    )
      
  }