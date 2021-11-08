
import './App.css';
import Header from './components/Header';
import Content from './components/Content';
import Bottom from './components/Bottom';
import Modal from './components/Modal';
import ModalLogin from './components/ModalLogin';

function App() {


  return (
    <div className="App">
      <Header />
      <Content />
      <Modal />
      <ModalLogin />
      <Bottom />
    </div>
  );
}

export default App;
