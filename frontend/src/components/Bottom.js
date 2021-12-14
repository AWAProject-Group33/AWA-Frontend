import React from 'react';
import styles from './bottom.module.css';
import seal from './seal.png'
import {Link} from "react-router-dom";
    
export default function Content() 
{
    return(
    <div className={styles.container}>
        <div>
            <h3>Stay Connected</h3>
            <input type="text" placeholder="Subscribe your e-mail"></input>
        </div>
        <div>
            <h3>CERTIFIED</h3>
            <img alt="Certification" style={{paddingTop: "10px"}}src={seal} />
        </div>
        <div>
            <h3 style={{marginLeft: "40px", marginBottom: "0px"}}>NAVIGATE</h3>
                <span className={styles.navigateContainer}>
                    <ul style={{marginTop: "0px"}}>
                        <Link to="/aboutus"><p>About Us</p></Link>
                        <Link to="/ourteam"><p>Our Team</p></Link>
                        <Link to="/contactus"><p>Contact</p></Link>
                    </ul>
                    <ul style={{marginTop: "0px", marginBottom: "0px"}}>
                        <Link to="/careers"><p>Careers</p></Link>
                        <Link to="/news"><p>News</p></Link>
                        <Link to="/events"><p>Events</p></Link>
                    </ul>
                </span>
        </div>
    </div>
    );
}