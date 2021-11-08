import React from 'react';
import styles from './content.module.css';
import logo from './g1009-8.png';
    
export default function Content() 
{
    return(
    <div className={styles.container}>
        <h1>A new player in the game</h1>
        <p><strong>Express food</strong> is a service design to and for food delivery users.
        <p>Our goal is to provide a fair
        profit division among all people envolved in the logistic chain than our competitors,</p> 
        <p>we also aim to give back to 
        comunity throught rewards and advantages for our pricial supporter, our customers.</p></p>
        <img src={logo} className="" alt="logo" />
    </div>
    );
}