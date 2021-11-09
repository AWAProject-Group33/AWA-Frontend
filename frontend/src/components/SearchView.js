import React from 'react';
import styles from './SearchView.module.css';
import RestaurantBox from './RestaurantBox';
    
export default function SearchView() 
{
    return(
    <div>
        <div>
        <input  type="text" placeholder="Type an address, a place or a will."/>
        </div>
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
            <option selected value="type">Type</option>
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
        <div className={styles.SearchButtons}>
            <button>Promotion</button>
            <button>Free Delivery</button>
            <hr />
        <div className={styles.restaurantBoxes}>
            <span className={styles.box}>
                <RestaurantBox name="Luigi" cuisine="Italian" star="1/5" price="$" distance="Less than 1 KM" type="Delivery"/>
            </span>
            <span className={styles.box}>
                <RestaurantBox name="Luigi" cuisine="Italian" star="1/5" price="$" distance="Less than 1 KM" type="Delivery"/>
            </span>
            <span className={styles.box}>
                <RestaurantBox name="Luigi" cuisine="Italian" star="1/5" price="$" distance="Less than 1 KM" type="Delivery"/>
            </span>
            <span className={styles.box}>
                <RestaurantBox name="Luigi" cuisine="Italian" star="1/5" price="$" distance="Less than 1 KM" type="Delivery"/>
            </span>
            <span className={styles.box}>
                <RestaurantBox name="Luigi" cuisine="Italian" star="1/5" price="$" distance="Less than 1 KM" type="Delivery"/>
            </span>
        </div>
        </div>
    </div>
    );
}