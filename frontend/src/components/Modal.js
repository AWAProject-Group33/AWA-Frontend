import React, {useState} from 'react';
import FormModal from './formModal';
import FormOwnerModal from './formOwnerModal';

export default function Modal(props) 
{
    localStorage.setItem("newType", "consumer");

    function CancelButton() {
        props.onCancel(); //second method in second function
    } 
        
    function GetValueName(val) {
        props.funcName(val.target.value);
    }
    

    function GetValueSurName(val) {
        props.funcSurName(val.target.value);
    }
    

    function GetValueEmail(val) {
        props.funcEmail(val.target.value);
    }

    function GetValuePassword(val) {
        props.funcPassword(val.target.value);
    }

    function RadioManager(val) {
        localStorage.setItem("newType", "manager");
    }

    function RadioConsumer() {
        localStorage.setItem("newType", "consumer");
    }
    

    return (
        <div className="modal">
            <span>
                <h2 style={{color: "black"}}>REGISTER</h2>
            </span>
            <div>
                <form className="formRegister">
                    <div>
                    <label>Manager<input onChange={RadioManager} type="radio" name="manager" value="manager" />
                    User<input onChange={RadioConsumer} type="radio" name="manager" value="consumer" checked="checked"/></label>
                    </div>
                    <label>Name: <input onChange={GetValueName} type="text" name="name" /></label>
                    <label>Surname: <input onChange={GetValueSurName} type="text" name="surname" /></label>
                    <label>E-mail: <input onChange={GetValueEmail} type="email" name="Email" placeholder="username@provider.something" /></label>

                    <label>Password: <input onChange={GetValuePassword} type="password" name="password" /></label>
                </form> 
            </div>
  )
                <div>
                    <button className="modal-button" onClick={CancelButton}>Cancel</button>
                    <button className="modal-button-b" onClick={props.onConfirmRegister} >Register</button>
                </div>
        </div>
    )
}
