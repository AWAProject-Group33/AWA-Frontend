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
            <img style={{paddingTop: "10px"}}src={seal} />
        </div>
        <div>
            <h3>NAVIGATE</h3>
                <spam className={styles.navigateContainer}>
                    <lu>
                        <Link to="/aboutus"><p>About Us</p></Link>
                        <Link to="/ourteam"><p>Our Team</p></Link>
                        <Link to="/contactus"><p>Contact</p></Link>
                    </lu>
                    <lu>
                        <Link to="/careers"><p>Careers</p></Link>
                        <Link to="/news"><p>News</p></Link>
                        <Link to="/events"><p>Events</p></Link>
                    </lu>
                </spam>
        </div>
    </div>
    );
}