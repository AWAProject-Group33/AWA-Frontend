//import http from "../http-common";
import axios from "axios";
import { useEffect, useState } from "react";

export default function TestComponent() {

    
    
    function ConfirmRegisterModal() { //not working - cors problem
        axios.post('http://localhost:8080/api/manager/all', {
            firstName: 'Fred',
            lastName: 'Flintstone',
            email: "fred.flint@abadaba.com",
            password: "vilma"
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
        axios.get('http://localhost:8080/api/restaurant/all')
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