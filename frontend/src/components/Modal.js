import React, {useState} from 'react';
import FormModal from './formModal';
import FormOwnerModal from './formOwnerModal';

export default function Modal(props) 
{
    const [showUserRegisterForm, setShowUserRegisterForm] = useState(false);
    const [showOwnerRegisterForm, setShowOwnerRegisterForm] = useState(false);

    function CancelButton() {
        props.onCancel(); //second method in second function
    } 
        
    function ShowUserRegisterForm() {
        setShowUserRegisterForm(true);
        setShowOwnerRegisterForm(false);
    }

    function ShowOwnerRegisterForm() {
        setShowOwnerRegisterForm(true);
        setShowUserRegisterForm(false);
    }
    return (
        <div className="modal">
            <span>
            <button className="modal-button" onClick={ShowUserRegisterForm}>User Registration</button>
            </span>
            <span>
            <button className="modal-button" onClick={ShowOwnerRegisterForm}>Owner Registration</button>
            </span>
            {showUserRegisterForm ? <FormModal /> : null}
            {showOwnerRegisterForm ? <FormOwnerModal /> : null}
                <div>
                    <button className="modal-button" onClick={CancelButton}>Cancel</button>
                    <button className="modal-button-b" onClick={props.onConfirmRegister} >Register</button>
                </div>
        </div>
    )
}
