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
        axios.post('/api/'+localStorage.getItem('newType')+"/"+'registernew'+localStorage.getItem('newType'), {
            firstName: name,
            lastName: surname,
            email: email,
            password: password
          })
          .then(function (response) {
            //(response);
          })
          .catch(function (error) {
            //(error);
          });
          window.location.reload(true);
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
    var name;
    var surname;
    var email;
    var password;

    function RegisterBtn() {
        setShowRegisterModal(true);
        setShowBackDrop(true);
        //("Register clicked");
    }

    

    function LoginBtn() {
        setShowLoginModal(true);
        setShowBackDrop(true);
        //("Login clicked");
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
        const consumer = arrayUsers.find(consumer => consumer.email == user);
        //(arrayUsers);
        if (consumer == null) {
            //(consumer);
            return 0;
        }    
        else {
            if (consumer.password == pass) {
                setShowLoginUser(true);
                setShowLoginModal(false);
                localStorage.setItem('name', consumer.firstName);
                localStorage.setItem('id', consumer.idU);
                localStorage.setItem('managerId', consumer.id);
                localStorage.setItem('type', consumer.type);
            }
        }
    }

    function ProfileClick() {
        setShowUserOptionsModal(false);
    }

    function LogOutClick() {
        setShowLoginUser(false);
        setShowUserOptionsModal(false);
        localStorage.removeItem('id');
        localStorage.removeItem('name');
        localStorage.removeItem('type');
        localStorage.removeItem('managerId');
        localStorage.removeItem('newType');
    }

    function pull_user(userData){
        user = userData;
      }

      const pull_pass = (passData) => {
        pass = passData;
      }

      const pull_name = (nameData) => {
          name = nameData;
      }

      const pull_SurName = (surNameData) => {
          surname = surNameData;
      }

      const pull_Email = (emailData) => {
          email = emailData;
      }

      const pull_Password = (passwordData) => {
          password = passwordData;
      }

     
     //("Ignore "+ showBackDrop); 
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
        {showRegisterModal ? <Modal funcName={pull_name} funcSurName={pull_SurName} funcEmail={pull_Email} funcPassword={pull_Password} onCancel={CloseModal} onConfirmRegister={ConfirmRegisterModal}/>: null}
        {showRegisterModal ? <Backdrop onClick={CloseModal}/>: null}
        {showLoginModal && <ModalLogin  funcUser={pull_user} funcPass={pull_pass} onCancel={CloseModal} onConfirm={ConfirmModal}/> /*do the same thing as above*/}
        {showLoginModal && <Backdrop onClick={CloseModal}/>}
        {showUserOptionsModal ? <ModalUserOptions cartsItems={props.cartsItems} carts={props.carts} userData={arrayUsers} onProfileClick={ProfileClick} onLogOutClick={LogOutClick}/> : null}
        {showUserOptionsModal ? <Backdrop onClick={CloseModal}/>: null}
        </div>
    )
}