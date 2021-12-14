import React, {useState} from 'react';
import ClientOrderHistory from './clientOrderHistory';
import OrderStatusConfirm from './orderStatusConfirm';
import Style from './Header.module.css'

export default function UserProfile(props) {

    const [showOrderHistory, setSeeOrderHistory] = useState(false);
    const [showOrderStatusConfirm, setSeeOrderStatusConfirm] = useState(false);

    function seeOrderHistory() {
        setSeeOrderHistory(true);
        setSeeOrderStatusConfirm(false);
    }

    function seeOrderStatus() {
        setSeeOrderStatusConfirm(true);
        setSeeOrderHistory(false);
    }

    const arrayUsers = props.managers.concat(props.consumers);
    const consumer = arrayUsers.find(consumer => consumer.idU === localStorage.getItem('id'));
        if (consumer == null) {
            console.log("Not found.");
            return 0;
        }    
        else {
            console.log(consumer);
        }
    return (
        <div style={{display: "flex",justifyContent: "start"}}>
            
            <div style={{display: "block", borderRight: "solid black 1px", padding: "20px", width: "230px", paddingTop: "80px"}}>
                <button className={Style.LinkBtn}>Change User Information</button>
                <button onClick={seeOrderHistory} className={Style.LinkBtn}>See Order History</button>
                <button onClick={seeOrderStatus} className={Style.LinkBtn}>See Order Status and Confirm</button>
                <button className={Style.LinkBtn}>Change Profile Settings</button>
                {showOrderHistory ?  <div><h3>Order History</h3></div> : null}
            </div>
            <div style={{display: "flow-root",justifyContent: "start", paddingTop: "20px", paddingLeft: "40px"}}>
                <h2>Welcome, {consumer.firstName}.</h2>
                {showOrderStatusConfirm ?  <OrderStatusConfirm /> : null}
                {showOrderHistory ?  <ClientOrderHistory /> : null}
            </div>
        </div>
    );
}