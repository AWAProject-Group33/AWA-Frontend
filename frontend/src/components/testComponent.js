//import http from "../http-common";

import axios from "axios";
import { useEffect, useState } from "react";

export default function TestComponent() {

    

    
    function ConfirmRegisterModal() { 
        axios.post('/api/manager/registernewmanager', {
            firstName: 'Herokutest',
            lastName: 'Herokulastname',
            email: "Herokuemail",
            password: "1234"
          })
          .then(function (response) {
            //(response);
          })
          .catch(function (error) {
            //(error);
          });
        //(data);
    }
    
    const [data, setRestaurant] = useState([]);
    
    useEffect(() => {
        axios.get('/api/restaurant/all')
            .then(result => setRestaurant(result.data));
        //(data);

            }, []);
    

   

    return(
        <div>

            Teste
            <div>
                {data.map(item => {
                    return <div style={{display: "flex"}} key={item.restaurantId}>
                    <ul>{item.restaurantName}</ul>
                    <ul>{item.restaurantAddress}</ul>
                    <ul>{item.operatingHours}</ul>
                    <ul>{item.restaurantType}</ul>
                    <ul>{item.priceLevel}</ul>
                    </div>
                })}
            </div>
        <button onClick={ConfirmRegisterModal}>Post</button>

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