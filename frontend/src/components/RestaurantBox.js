import React from 'react';

export default function RestaurantBox(props) {

    return (
        <div>
            <img style={{width: '100px', height: '100px'}}/>
            <h2>{props.name}</h2>
            <p>{props.cuisine}</p>
            <p>{props.star}</p>
            <p>{props.price}</p>
            <p>{props.distance}</p>
            <p>{props.type}</p>
            <button>Add to kart</button>
        </div>
    );
}