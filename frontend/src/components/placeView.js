import MenuComponent from './menuComponent';
import CartComponent from './cartComponent';
import { useParams } from 'react-router-dom';

export default function PlaceView(props) {
    const result = useParams();

    const restaurant = props.restaurants.find(restaurant => restaurant.id === result.id);
    if (restaurant == null) {
        return 0;
    }

    

    return (
      <div>
          <div style={{display: 'flex', padding: '10px', paddingLeft: "40px", paddingTop: "40px"}}>
                <img alt="placeImg" src={""} style={{width: "100px", height: "100px"}}></img>
                <h1 style={{paddingLeft: "40px"}}>{restaurant.restaurantName}</h1>     
          </div>
          <div style={{display: 'flex', justifyContent: "space-around"}}>
                <div style={{padding: '20px', width: '70%'}}>
                    <MenuComponent foodType="Beverages" product="coke" price="$3,00"/>
                    <MenuComponent foodType="Starters" product="Risotto" price="$8,00"/> 
                    <MenuComponent foodType="Pasta" product="Pizza" price="$11,00"/> 
                    <MenuComponent product="Lasagna" price="$15,00"/> 
                    <MenuComponent product="Caneloni" price="$10,00"/>
                    <MenuComponent foodType="Deserts" product="Tiramissú" price="$9,00"/>       
                </div>
                <div style={{padding: '20px', width: '29%', paddingTop: "83px"}}>
                    <CartComponent cartItems={props.cartsItems} carts={props.carts}/> 
                </div>
            </div>
      </div>
    )
      
  }