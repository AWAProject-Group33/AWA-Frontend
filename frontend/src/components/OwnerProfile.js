
import React, {useState} from 'react';
import Style from './Header.module.css';
import CreatePlace from './createPlace';
import AddProductToPlace from './addProductToPlace';

export default function OwnerProfile() {

    const [createPlace, setCreatePlace] = useState(false);
    const [addProductToPlace, setAddProductToPlace] = useState(false);

    function GeneratePlace() {
        setCreatePlace(true);
        setAddProductToPlace(false);
    }
    
    function ProductToPlace() {
        setAddProductToPlace(true);
        setCreatePlace(false);
    }

    return (
        <div style={{display: "flex",justifyContent: "start"}}>
            
            <div style={{display: "block", borderRight: "solid black 1px", padding: "20px", width: "230px", paddingTop: "50px"}}>
                <button className={Style.LinkBtn}>Change Owner Profile Information</button>
                <button className={Style.LinkBtn} onClick={GeneratePlace}>Create Place</button>
                <button className={Style.LinkBtn} onClick={ProductToPlace}>Add Products to Place</button>
                <button className={Style.LinkBtn}>Order History</button> 
                <button className={Style.LinkBtn}>Receive Order and Change Status</button>
                <button className={Style.LinkBtn}>Owner Profile Settings</button>
            </div>
            <div>
                {createPlace ? <CreatePlace /> : null}
                {addProductToPlace ? <AddProductToPlace />: null}
            </div>
        </div>
    );
}