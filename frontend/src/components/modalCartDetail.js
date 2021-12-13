import {Link} from 'react-router-dom';
//import Styles from './modalCartDetail.module.css';

export default function FormModal(props) {
    return (
      <div className="modal">
          <h2>SHOPPING CART CONTENT</h2>
          <p>Total: </p>
            <div>
            <button className="modal-button">Empty Cart</button>
            </div>
          <h2>PAYMENT INFORMATION</h2>
          <div>
            
              <form className="formRegister">
                <div>
                  Credit <input type="radio"></input>
                  Debit <input type="radio"></input>
                </div>
                  <label>Card Owner name<input type="text" placeholder=""></input></label>
                  <label>Credit Card Number<input type="text" placeholder=""></input></label>
                  Use profile adress <input type='checkbox'></input>
                  <label>Adress<input type="text" placeholder=""></input></label>
              </form>
            <button className="modal-button" onClick={props.onClick}>Cancel</button>
            <Link to="/orderconfirmation"><button className="modal-button-b">Make Payment</button></Link>
          </div>
      </div>
    )
      
  }