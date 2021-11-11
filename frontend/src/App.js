
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



function App() {

  /*const [searchClicked, setSearchClicked] = useState(false);

  function SearchClick() {
    setSearchClicked(true);
  }*/

  return (
  <BrowserRouter>
    <div className="App">
      <Header />
      {/*searchClicked ?  <SearchView /> : <Content onSearch={SearchClick} />*/ }
        <Routes >
          <Route path="/" element={<Content />} />
          <Route path="/search" element={<SearchView />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/ourteam" element={<OurTeam />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/news" element={<News />} />
          <Route path="/events" element={<Events />} />
        </Routes>
      <Bottom />
    </div>
  </BrowserRouter>
  );
}

export default App;
