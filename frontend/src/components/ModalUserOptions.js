import {Link} from "react-router-dom";
import ModalShoppingCart from './modalCartDetail';
import React, {useState} from 'react';
function ModalUserOptions(props) 
{
    const [showCartDetail, setShowCartDetail] = useState(false);

    function ShowCart() {
        setShowCartDetail(true);
    }

    function HideCart() {
        setShowCartDetail(false);
    }
    

    return (
        <div className="modalb">
            <h4>{localStorage.getItem('name')}</h4>
            <hr></hr>
            <button onClick={props.onProfileClick} style={{border: "none"}}><Link to={localStorage.getItem('type') + "/" + localStorage.getItem('id')}>My Profile</Link></button>
            <hr></hr>
            <button onClick={ShowCart} style={{border: "none"}}>Shopping Cart</button>
            <hr></hr>
            <button onClick={props.onLogOutClick} style={{border: "none"}}><Link to="/">LogOut</Link></button>
            {showCartDetail ? <ModalShoppingCart onClick={HideCart}/> : null}
        </div>
    );
}

export default ModalUserOptions;