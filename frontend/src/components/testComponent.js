import http from "../http-common";
import axios from "axios";
import { useEffect, useState } from "react";

export default function TestComponent() {

    

    const [data, setRestaurant] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/api/restaurant/all')
            .then(result => setRestaurant(result.data));
        console.log(data);
            }, []);
    

   

    return(
        <div>
            <tbody>
                {data.map(item => {
                    return <tr key={item.restaurantId}>
                    <td>{item.restaurantName}</td>
                    <td>{item.restaurantAddress}</td>
                    <td>{item.operatingHours}</td>
                    <td>{item.restaurantType}</td>
                    <td>{item.priceLevel}</td>
                    </tr>
                })}
            </tbody>
            
        </div>
    );

    /*return(
        <div>
            {consumer.Map((data, key) => {
                return (
                    <div key={key}>
                        {data.firstName + 
                        ", " + 
                        data.lastName +
                        ", " + 
                        data.email}
                        </div>
                );
            })}
            
            test1
        </div>
    );*/
}