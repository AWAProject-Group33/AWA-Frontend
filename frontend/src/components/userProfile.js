import React, {useState, useEffect} from 'react';
import ClientOrderHistory from './clientOrderHistory';
import OrderStatusConfirm from './orderStatusConfirm';
import Style from './Header.module.css'
import {v4 as uuidv4} from "uuid";
import axios from 'axios';

export default function UserProfile(props) {

    const [showOrderHistory, setSeeOrderHistory] = useState(false);
    const [showOrderStatusConfirm, setSeeOrderStatusConfirm] = useState(false);

    /*const [data, setOrder] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/api/orderhistory')
            .then(result => setOrder(result.data));
            //(data);
            }, []);

    const OrderData = data.map (order => {
      return {...order, id: uuidv4()}
    })*/

    //(OrderData);

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
            //("Not found.");
            return 0;
        }    
        else {
            //(consumer);
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