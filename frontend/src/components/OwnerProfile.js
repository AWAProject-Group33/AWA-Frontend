
import React, {useState, useEffect} from 'react';
import Style from './Header.module.css';
import CreatePlace from './createPlace';
import AddProductToPlace from './addProductToPlace';
import OwnerOrderHistory from './ownerOrderHistory';
import OrderStatusConfirm from './orderStatusConfirm';
import {v4 as uuidv4} from "uuid";
import axios from 'axios';

export default function OwnerProfile(props) {

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


    const [createPlace, setCreatePlace] = useState(false);
    const [addProductToPlace, setAddProductToPlace] = useState(false);
    const [showOrderHistory, setSeeOrderHistory] = useState(false);
    const [showReceiveOrderChange, setSeeReceiveOrderChange] = useState(false);

    function OrderHistory() {
        setSeeOrderHistory(true);
        setSeeReceiveOrderChange(false);
        setAddProductToPlace(false);
        setCreatePlace(false);
    }

    function ReceiveOrderChange() {
        setSeeReceiveOrderChange(true);
        setSeeOrderHistory(false);
        setAddProductToPlace(false);
        setCreatePlace(false);
    }


    function GeneratePlace() {
        setCreatePlace(true);
        setAddProductToPlace(false);
        setSeeReceiveOrderChange(false);
        setSeeOrderHistory(false);
    }
    
    function ProductToPlace() {
        setAddProductToPlace(true);
        setCreatePlace(false);
        setSeeReceiveOrderChange(false);
        setSeeOrderHistory(false);
    }

    const arrayUsers = props.managers.concat(props.consumers);
    //(arrayUsers);
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
            
            <div style={{display: "block", borderRight: "solid black 1px", padding: "20px", width: "230px", paddingTop: "50px"}}>
                <button className={Style.LinkBtn}>Change Owner Profile Information</button>
                <button className={Style.LinkBtn} onClick={GeneratePlace}>Create Place</button>
                <button className={Style.LinkBtn} onClick={ProductToPlace}>Add Products to Place</button>
                <button className={Style.LinkBtn} onClick={OrderHistory}>Order History</button> 
                <button className={Style.LinkBtn} onClick={ReceiveOrderChange}>Receive Order and Change Status</button>
                <button className={Style.LinkBtn}>Owner Profile Settings</button>
            </div>
            <div>
                <h2>Welcome, {consumer.firstName}.</h2>
                {createPlace ? <CreatePlace /> : null}
                {addProductToPlace ? <AddProductToPlace restaurants={props.restaurants}/>: null}
                {showReceiveOrderChange ?  <OrderStatusConfirm /> : null}
                {showOrderHistory ?  <OwnerOrderHistory /> : null}
            </div>
        </div>
    );
}