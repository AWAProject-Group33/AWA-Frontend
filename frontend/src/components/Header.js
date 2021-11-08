import React from 'react';
import styles from './Header.module.css';
import logo from './LogoHeader.png';

export default function Header() 
{
    function RegisterBtn() {
        console.log("Register clicked");
    }

    function LoginBtn() {
        console.log("Login clicked");
    }

    return(
        <div className={styles.container}>
                <div className={styles.containerA}>
                    <img className={styles.Logo} src={logo} alt={logo}></img>
                </div>
                <div>
                    <span className={styles.HeaderTitles}><button onClick={RegisterBtn}>Register</button></span>
                    <span className={styles.HeaderTitles}><button onClick={LoginBtn}>Login</button></span>
                </div>
        </div>
    )
}