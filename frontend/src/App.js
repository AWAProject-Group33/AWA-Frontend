
import React, {useState, useEffect} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Content from './components/Content';
import Bottom from './components/Bottom';
import SearchView from './components/SearchView';
import AboutUs from './components/AboutUs';
import Careers from './components/Careers';
import OurTeam from './components/OurTeam';
import ContactUs from './components/Contact';
import News from './components/News';
import Events from './components/Events';
import PlaceView from './components/placeView';
import OrderConfirmation from './components/orderConfirmation'
import UserProfile from './components/userProfile';
//import UserSettings from './components/userSettings';
import OwnerProfile from './components/OwnerProfile';
import {v4 as uuidv4} from "uuid";
import axios from 'axios';
import TestComponent from './components/testComponent';

//import restaurantData from './data.json'



function App(props) {

  const [data, setRestaurant] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/api/restaurant/all')
            .then(result => setRestaurant(result.data));
            //(data);
            }, []);

    const restaurantsData = data.map (restaurant => {
      return {...restaurant, id: uuidv4()}
    })
    ////(restaurantsData);
  
    const [data2, setConsumer] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/api/consumer/all')
            .then(result => setConsumer(result.data));
            //(data);
            }, []);

    const consumerData = data2.map (consumer => {
      return {...consumer, idU: uuidv4(), type: "consumer"}
    })
    ////(consumerData);

    const [data3, setManager] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/api/manager/all')
            .then(result => setManager(result.data));
            //(data);
            }, []);

    const managerData = data3.map (manager => {
      return {...manager, idU: uuidv4(), type: "manager"}
    })
    ////(managerData);

    const [data4, setCart] = useState([]);

    useEffect(() => {
      axios.get('http://localhost:8080/api/shoppingcart/all')
          .then(result => setCart(result.data));
          //(data);
          }, []);

  const cartData = data4.map (manager => {
    return {...manager, idU: uuidv4()}
  })
  ////(cartData);

  const [data5, setCartItems] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/api/cartitems/all')
        .then(result => setCartItems(result.data));
        //(data);
        }, []);

const cartItemsData = data5.map (items => {
  return {...items}
})
////(cartItemsData);


var BarValue = "";


const pull_BarValue = (BarValueData) => {
  BarValue = BarValueData;
  //(BarValue);
  return BarValue;
}

//(pull_BarValue);

localStorage.removeItem('id');
localStorage.removeItem('managerId');
localStorage.removeItem('name');
localStorage.removeItem('type');


  return (
  <BrowserRouter>
    <div className="App">
      <Header cartsItems={cartItemsData} carts={cartData} consumers={consumerData} managers={managerData}/>
      
      {/*searchClicked ?  <SearchView /> : <Content onSearch={SearchClick} />  */ }
        <Routes >
          <Route path="/" element={<Content funcBarvalue={pull_BarValue}/>} />
          <Route path="/restaurants" element={<SearchView Value={BarValue} restaurants={restaurantsData}/>} />
          <Route path="/restaurants/:id" element={<PlaceView cartsItems={cartItemsData} carts={cartData} restaurants={restaurantsData}/>} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/ourteam" element={<OurTeam />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/news" element={<News />} />
          <Route path="/events" element={<Events />} />
          <Route path="/orderconfirmation" element={<OrderConfirmation />} />
          <Route path="/consumer/:id" element={<UserProfile restaurants={restaurantsData} consumers={consumerData} managers={managerData}/>} />
          <Route path="/manager/:id" element={<OwnerProfile restaurants={restaurantsData} consumers={consumerData} managers={managerData}/>} />
          <Route path="/test" element={<TestComponent />} />
        </Routes>
      <Bottom />
    </div>
  </BrowserRouter>
  );
}

export default App;
