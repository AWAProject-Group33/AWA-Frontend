
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
        axios.get('/api/restaurant/all')
            .then(result => setRestaurant(result.data));
            console.log(data);
            }, []);

    const restaurantsData = data.map (restaurant => {
      return {...restaurant, id: uuidv4()}
    })
    //console.log(restaurantsData);
  
    const [data2, setConsumer] = useState([]);

    useEffect(() => {
        axios.get('/api/consumer/all')
            .then(result => setConsumer(result.data));
            console.log(data);
            }, []);

    const consumerData = data2.map (consumer => {
      return {...consumer, id: uuidv4(), type: "consumer"}
    })
    //console.log(consumerData);

    const [data3, setManager] = useState([]);

    useEffect(() => {
        axios.get('/api/manager/all')
            .then(result => setManager(result.data));
            console.log(data);
            }, []);

    const managerData = data3.map (manager => {
      return {...manager, id: uuidv4(), type: "manager"}
    })
    //console.log(managerData);


  return (
  <BrowserRouter>
    <div className="App">
      <Header consumers={consumerData} managers={managerData}/>
      {/*searchClicked ?  <SearchView /> : <Content onSearch={SearchClick} />  */ }
        <Routes >
          <Route path="/" element={<Content />} />
          <Route path="/restaurants" element={<SearchView restaurants={restaurantsData}/>} />
          <Route path="/restaurants/:id" element={<PlaceView restaurants={restaurantsData}/>} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/ourteam" element={<OurTeam />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/news" element={<News />} />
          <Route path="/events" element={<Events />} />
          <Route path="/orderconfirmation" element={<OrderConfirmation />} />
          <Route path="/consumer/:id" element={<UserProfile consumers={consumerData} managers={managerData}/>} />
          <Route path="/manager/:id" element={<OwnerProfile consumers={consumerData} managers={managerData}/>} />
          <Route path="/test" element={<TestComponent />} />
        </Routes>
      <Bottom />
    </div>
  </BrowserRouter>
  );
}

export default App;
