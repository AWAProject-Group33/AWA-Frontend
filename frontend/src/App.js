
import React, {useState} from 'react';
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
import UserSettings from './components/userSettings';
import OwnerProfile from './components/OwnerProfile';
import {v4 as uuidv4} from "uuid";
import restaurantData from './data.json'



function App() {

  const contacts = restaurantData.map (contact => {
    return {...contact, id: uuidv4()}}
)

  /*const [searchClicked, setSearchClicked] = useState(false);

  function SearchClick() {
    setSearchClicked(true);
  }*/


  return (
  <BrowserRouter>
    <div className="App">
      <Header />
      
      {/*searchClicked ?  <SearchView /> : <Content onSearch={SearchClick} />  */ }
        <Routes >
          <Route path="/" element={<Content />} />
          <Route path="/restaurants" element={<SearchView contacts={contacts}/>}/>
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/ourteam" element={<OurTeam />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/news" element={<News />} />
          <Route path="/events" element={<Events />} />
          <Route path="/restaurants/:id" element={<PlaceView contacts={contacts}/>} />
          <Route path="/orderconfirmation" element={<OrderConfirmation />} />
          <Route path="/myprofile" element={<UserProfile />} />
          <Route path="/ownerprofile" element={<OwnerProfile />} />
        </Routes>
      <Bottom />
    </div>
  </BrowserRouter>
  );
}

export default App;
