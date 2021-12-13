
import React, {useState} from 'react';
import Style from './Header.module.css';
import CreatePlace from './createPlace';
import AddProductToPlace from './addProductToPlace';
import OwnerOrderHistory from './ownerOrderHistory';
import OrderStatusConfirm from './orderStatusConfirm';

export default function OwnerProfile(props) {

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
    const consumer = arrayUsers.find(consumer => consumer.id === localStorage.getItem('id'));
        if (consumer == null) {
            console.log("Not found.");
            return 0;
        }    
        else {
            console.log(consumer);
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
                {addProductToPlace ? <AddProductToPlace />: null}
                {showReceiveOrderChange ?  <OrderStatusConfirm /> : null}
                {showOrderHistory ?  <OwnerOrderHistory /> : null}
            </div>
        </div>
    );
}