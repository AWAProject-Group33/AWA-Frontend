import axios from 'axios';

export default function CreatePlace() {

    var Resname;
    var address;
    var ophour;
    var price;
    var type;


    function CreateRestaurant() { 
        axios.post('/api/restaurant/newrestaurant', {
            restaurantName: Resname,
            restaurantAddress: address,
            operatingHours: ophour,
            restaurantType: type,
            priceLevel: price   
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
        console.log("Register posted");
    }

    function GetName(val) {
        Resname = val.target.value;
        console.log(Resname);
    }

    function GetAdress(val) {
        address = val.target.value;
        console.log(address);
    }

    function GetOpHour(val) {
        ophour = val.target.value;
        console.log(ophour);
    }

    function GetPrice(val) {
        price = val.target.value;
        console.log(price);
    }

    
    function GetType(val) {
        type = val.target.value;
        console.log(type);
    }

    

    return (
        <div style={{display: "table-caption", padding: "50px"}}>
            <p>image</p>
            <label>Place Name<input onChange={GetName}type="text"></input></label>
            <label>Address<input onChange={GetAdress}type="text"></input></label>
            <label>Operating Hour<input onChange={GetOpHour}type="text"></input></label>
            <label>Price Average<input onChange={GetPrice} type="text"></input></label>
            <select onChange={GetType}>
                <option value="Buffet">Type</option>
                <option value="Buffet">Buffet</option>
                <option value="Fast Food">Fast Food</option>
                <option value="Fast Casual">Fast Casual</option>
                <option value="Casual Dinning">Casual Dinning</option>
                <option value="Fine Dinning">Fine Dinning</option>
            </select>
            <button onClick={CreateRestaurant}>Create Restaurant</button>
        </div>
    );
}