
import React, {useState} from 'react';
import './App.css';
import Header from './components/Header';
import Content from './components/Content';
import Bottom from './components/Bottom';
import SearchView from './components/SearchView';

function App() {

  const [searchClicked, setSearchClicked] = useState(false);

  function SearchClick() {
    setSearchClicked(true);
  }

  return (
    <div className="App">
      <Header />
      {searchClicked ?  <SearchView /> : <Content onSearch={SearchClick} /> }
      <Bottom />
    </div>
  );
}

export default App;
