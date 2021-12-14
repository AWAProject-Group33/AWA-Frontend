import {Link} from "react-router-dom";

import img from './Daco.png'

export default function OrderConfirmation() {

    return (
        <div >
            <div>
            <img src={img} alt={""} style={{width: "150px", height: "150px", padding: "40px"}}></img>
            <img src={img} alt={""} style={{width: "150px", height: "150px", padding: "40px"}}></img>
            <img src={img} alt={""} style={{width: "150px", height: "150px", padding: "40px"}}></img>
            <img src={img} alt={""} style={{width: "150px", height: "150px", padding: "40px"}}></img>
        </div>
        <div style={{display: "flex",justifyContent: "space-evenly"}}>
            <span>1</span>
            <span>2</span>
            <span>3</span>
            <span>4</span>
        </div>
            <Link to="/orderconfirmation/end"><button>Order Delivered</button></Link>
        </div>
    );
}