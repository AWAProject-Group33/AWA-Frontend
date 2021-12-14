import React from 'react';
import styles from './content.module.css';
import logo from './g1009-8.png';
import {Link} from "react-router-dom";
    
export default function Content(props) 
{

    function BarValue(val) {
        props.funcBarvalue(val.target.value);
        //(val.target.value);
    }

    return(
    <div className={styles.container} >
        <div className={styles.searchContainer} style={{ 
        backgroundImage: `url("")` 
      }}>
            <h1>Want a fast-food? Search for nearby restaurants!</h1>
            <h1>Already know what you want? Use the quick search!</h1>
            <div className={styles.field}>    
                <input  onChange={BarValue} type="text" placeholder="Type an address, a place or a will."/>
                <Link to="/restaurants"><button type="button" className={styles.fieldButton}>Search</button></Link>
            </div>
        </div>
        <div className={styles.AboutUsContainer}>
            <h1>A new player in the game</h1>
            <div>
                <p><strong>Express food</strong> is a service design to and for food delivery users.
                <p>Our goal is to provide a fair
                profit division among all people envolved in the logistic chain than our competitors,</p> 
                <p>we also aim to give back to 
                comunity throught rewards and advantages for our main supporters, our customers.</p></p>
            </div>
        </div>
        <img src={logo} className="" alt="logo"  width="400" height="500"/>
    </div>
    );
}