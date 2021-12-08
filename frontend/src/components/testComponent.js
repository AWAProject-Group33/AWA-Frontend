import http from "../http-common";
import axios from "axios";
import { useEffect, useState } from "react";

export default function TestComponent() {

    

    const [repo, setRepo] = useState([]);

    const getRepo = () => {
        axios.get('http://localhost:8080/api/consumer/all')
            .then((response) => {
                console.log(response);
                const myRepo = response.data;
                setRepo(myRepo);

            });
    };

    useEffect(() => getRepo(), []);

    return(
        <div>
            {repo.Map((data, key) => {
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
    );
}