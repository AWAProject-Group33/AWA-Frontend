import React, {useState, useEffect} from 'react';
import axios from 'axios';

export default function addProductToPlace(props) {

    const restaurant = props.restaurants.find(restaurant => restaurant.managerId === localStorage.getItem('managerId'));
        if (restaurant == null) {
            console.log("Not found.");
            return 0;
        }    
        else {
            console.log(restaurant);
        }

    return (
    <div>
        
        <div style={{display: "table-caption", padding: "50px"}}>
            <select>
                <option value="Restaurant">{restaurant.restaurantName}</option>
            </select>
            <p>image</p>
            
            <label>Product Name<input type="text"></input></label>
            <label>Price<input type="number"></input></label>
            <label>Description<input type="text"></input></label>
            <button>Add Product</button>
        </div>
    </div>
    );
}