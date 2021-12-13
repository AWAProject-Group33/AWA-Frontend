import React from 'react';
import styles from './SearchView.module.css';
import RestaurantBox from './RestaurantBox';
//import axios from "axios";
//import { useEffect, useState } from "react";
import {Link} from "react-router-dom";

    
export default function SearchView(props) {

    return(
    <div>
            <div>
            <input  type="text" placeholder="Type an address, a place or a will."/>
            </div>
    <div className={styles.container}>     
        <div className={styles.searchOptions}>
            
            <select>
                <option selected value="cuisine">Cuisine</option>
                <option value="italian">Italian</option>
                <option value="mediterranean">Mediterranean</option>
                <option value="chinese">Chinese</option>
                <option value="japanese">Japanese</option>
            </select>
            <select>
                <option selected value="1star">Avaliation</option>
                <option value="2star">1/5</option>
                <option value="3star">2/5</option>
                <option value="4star">3/5</option>
                <option value="5star">4/5</option>
                <option value="5star">5/5</option>
            </select>
            <select>
                <option selected value="distance">Distance</option>
                <option value="1km">less than 1 KM</option>
                <option value="5km">less than 5 KM</option>
                <option value="10km">less than 10 KM</option>
                <option value="other">more than 10 KM</option>
            </select>
            <select>
                <option selected value="method">Withdraw Method</option>
                <option value="delivary">Delivery</option>
                <option value="takeaway">Take Away</option>
            </select>
            <select>
                <option selected value="priceuisine">Price</option>
                <option value="cheap">$</option>
                <option value="abitmore">$$</option>
                <option value="average">$$$</option>
                <option value="expensive">$$$$</option>
            </select>
            <select>
                <option selected value="type">Type</option>
                <option value="buffet">Buffet</option>
                <option value="fastfood">Fast Food</option>
                <option value="fastcasual">Fast Casual</option>
                <option value="casual">Casual Dinning</option>
                <option value="fine">Fine Dinning</option>
            </select>
            <span className={styles.SearchButtons}>
                <button>Promotion</button>
                <button>Free Delivery</button>
            </span>
        </div>
        <div className={styles.restaurantBoxes}>
            { /*props.contacts.map(contact => <Link to={contact.id} className={styles.box}>
                <RestaurantBox name={contact.name} cuisine={contact.cuisine} star={contact.star} price={contact.price} distance={contact.distance} method={contact.method} type={contact.type}/>
            </Link>)*/
            props.restaurants.map(item => {
                return (
                <Link to={item.id} className={styles.box}>
                    <RestaurantBox restaurants={props.restaurants} name={item.restaurantName} cuisine={item.operatingHours} star={item.restaurantId} 
                    distance={item.restaurantAddress} price={item.priceLevel}  type={item.restaurantType}/>
                </Link>
                )
                
                
            })
            }
        </div>
    </div>
    </div>
    );
}