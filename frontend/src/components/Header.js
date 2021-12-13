import  React, {useState} from 'react';
import styles from './Header.module.css';
import logo from './LogoHeader.png';
//import login from './login.png';
import Modal from './Modal';
import ModalLogin from './ModalLogin';
import ModalUserOptions from './ModalUserOptions';
import Backdrop from './BackDrop';
import {Link} from "react-router-dom";
import axios from 'axios';
//import {v4 as uuidv4} from "uuid";

export default function Header(props) 
{
    const [showRegisterModal, setShowRegisterModal] = useState(false);
    const [showLoginModal, setShowLoginModal] = useState(false);
    const [showBackDrop, setShowBackDrop] = useState(false);
    const [showLoginUser, setShowLoginUser] = useState(false);
    const [showUserOptionsModal, setShowUserOptionsModal] = useState(false);

    function ConfirmRegisterModal() { //not working - cors problem
        axios.post('http://localhost:8080/api/manager/registernewmanager', {
            firstName: 'Fred',
            lastName: 'Flintstone',
            email: "fred.flint@abadaba.com",
            password: "vilma"
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
        console.log("Register posted");
    }

    /*const [data, setConsumer] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/api/consumer/all')
            .then(result => setConsumer(result.data));
            }, []);
    
    const consumerArray = data.map (item => {
            return {...item, id: uuidv4()};
        })

    const [data2, setManager] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/api/manager/all')
            .then(result => setManager(result.data));
            }, []);
            
    const managerArray = data2.map (item => {
            return {...item, id: uuidv4()};
        })*/

    const arrayUsers = props.managers.concat(props.consumers);
    
    var user;
    var pass;

    function RegisterBtn() {
        setShowRegisterModal(true);
        setShowBackDrop(true);
        console.log("Register clicked");
    }

    

    function LoginBtn() {
        setShowLoginModal(true);
        setShowBackDrop(true);
        console.log("Login clicked");
    }

    function LoggedBtn() {
        setShowUserOptionsModal(true);
    }

    function CloseModal() {
        setShowLoginModal(false);
        setShowRegisterModal(false);
        setShowUserOptionsModal(false);
    }

    function ConfirmModal() {
        const consumer = arrayUsers.find(consumer => consumer.email === user);
        //const managermatch = manager.find(managermatch => managermatch.email === user);
        if (consumer === null) {
            console.log("Not found.");
            return 0;
        }    
        else {
            if (consumer.password === pass) {
                setShowLoginUser(true);
                setShowLoginModal(false);
                localStorage.setItem('name', consumer.firstName);
                localStorage.setItem('id', consumer.id);
                localStorage.setItem('type', consumer.type); 
                console.log(localStorage.getItem('type'));
            }
        }
    }

    function ProfileClick() {
        setShowUserOptionsModal(false);
    }

    function LogOutClick() {
        setShowLoginUser(false);
        setShowUserOptionsModal(false);
    }

    function pull_user(userData){
        user = userData;
      }

      const pull_pass = (passData) => {
        pass = passData;
      }

     
     console.log("Ignore "+ showBackDrop); 
    return(
        <div className={styles.container}>
                <div className={styles.containerA}>
                    <Link to="/"><img className={styles.Logo} src={logo} alt={logo}></img></Link>
                </div>
                <div>
                    <span className={styles.HeaderTitles}><button onClick={RegisterBtn}>Register</button></span>
                    {showLoginUser ? <span className={styles.HeaderTitles}><button onClick={LoggedBtn}>Logged</button></span>
                    : <span className={styles.HeaderTitles}><button onClick={LoginBtn}>Login </button></span>}
                </div>
        {showRegisterModal ? <Modal onCancel={CloseModal} onConfirmRegister={ConfirmRegisterModal}/>: null}
        {showRegisterModal ? <Backdrop onClick={CloseModal}/>: null}
        {showLoginModal && <ModalLogin  funcUser={pull_user} funcPass={pull_pass} onCancel={CloseModal} onConfirm={ConfirmModal}/> /*do the same thing as above*/}
        {showLoginModal && <Backdrop onClick={CloseModal}/>}
        {showUserOptionsModal ? <ModalUserOptions userData={arrayUsers} onProfileClick={ProfileClick} onLogOutClick={LogOutClick}/> : null}
        {showUserOptionsModal ? <Backdrop onClick={CloseModal}/>: null}
        </div>
    )
}