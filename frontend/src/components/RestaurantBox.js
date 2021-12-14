import styles from './SearchView.module.css';
import React from 'react';
//import {Link} from "react-router-dom";


export default function RestaurantBox(props) {


    return (      
            <div className={styles.restaurantBox}>
                <img alt="restImage" style={{width: '100px', height: '100px', paddingTop: "20px"}}/>
                <h2>{props.name}</h2>
                <p>{props.cuisine}</p>
                <p>{props.star}</p>
                <p>{props.price}</p>
                <p>{props.distance}</p>
                <p>{props.method}</p>
                <p>{props.type}</p>
            </div>   
    );
}