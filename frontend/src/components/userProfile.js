
import Style from './Header.module.css'

export default function UserProfile() {

    return (
        <div style={{display: "flex",justifyContent: "start"}}>
            
            <div style={{display: "block", borderRight: "solid black 1px", padding: "20px", width: "230px", paddingTop: "50px"}}>
                <button className={Style.LinkBtn}>Change User Information</button>
                <button className={Style.LinkBtn}>See Order History</button>
                <button className={Style.LinkBtn}>See Order Status and Confirm</button>
                <button className={Style.LinkBtn}>Change Profile Settings</button>
            </div>
            <div>
                Info
            </div>
        </div>
    );
}