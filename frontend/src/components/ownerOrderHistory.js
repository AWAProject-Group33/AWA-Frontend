import React, {useState, useEffect} from 'react';
import axios from 'axios';

export default function OrderHistory() {

    /*const [data, setOrderHistory] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/api/restaurant/all')
            .then(result => setOrderHistory(result.data));
            console.log(data);
            }, []);*/

    return(
        <div>
           Owner Order History
        </div>
    );
}