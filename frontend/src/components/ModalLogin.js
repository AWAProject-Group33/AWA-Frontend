//import axios from 'axios';
import  React from 'react';
//import {Link} from "react-router-dom";

const Modal = (props) =>
{

    function CancelButton() {
        props.onCancel();//second method in second
    } 

    function GetValueUser(val) {
        props.funcUser(val.target.value);
    }

    function GetValuePass(val) {
        props.funcPass(val.target.value);
    }


    return (
        <div className="modal">
            <h1>Login</h1>
            <form className="formRegister">
                <label>E-mail: <input type="email" name="Email" placeholder="username@provider.something" 
                onChange={GetValueUser}/></label>
                <label>Password: <input type="password" name="password" onChange={GetValuePass}/></label>

            </form>
                <div >
                    <button className="modal-button" onClick={CancelButton}>Cancel</button>
                    <button className="modal-button-b" onClick={props.onConfirm}>Enter</button>
                </div>
           
        </div>
    );
}

export default Modal;