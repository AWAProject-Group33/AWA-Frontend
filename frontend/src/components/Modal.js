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
            <spam>
            <button className="modal-button" onClick={ShowUserRegisterForm}>User Registration</button>
            </spam>
            <spam>
            <button className="modal-button" onClick={ShowOwnerRegisterForm}>Owner Registration</button>
            </spam>
            {showUserRegisterForm ? <FormModal /> : null}
            {showOwnerRegisterForm ? <FormOwnerModal /> : null}
                <div>
                    <button className="modal-button" onClick={CancelButton}>Cancel</button>
                    <button className="modal-button-b" onClick={props.onConfirm} >Register</button>
                </div>
        </div>
    )
}
