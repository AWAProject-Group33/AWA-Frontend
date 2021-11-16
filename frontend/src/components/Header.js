import  React, {useState} from 'react';
import styles from './Header.module.css';
import logo from './LogoHeader.png';
import login from './login.png';
import Modal from './Modal';
import ModalLogin from './ModalLogin';
import ModalUserOptions from './ModalUserOptions';
import Backdrop from './BackDrop';
import {Link} from "react-router-dom";

export default function Header(props) 
{
    const [showRegisterModal, setShowRegisterModal] = useState(false);
    const [showLoginModal, setShowLoginModal] = useState(false);
    const [showBackDrop, setShowBackDrop] = useState(false);
    const [showLoginUser, setShowLoginUser] = useState(false);
    const [showUserOptionsModal, setShowUserOptionsModal] = useState(false);

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
        console.log("Confirmed");
        setShowLoginUser(true);
        setShowLoginModal(false);
    }

    function ProfileClick() {
        setShowUserOptionsModal(false);
    }

    function LogOutClick() {
        setShowLoginUser(false);
        setShowUserOptionsModal(false);
    }

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
        {showRegisterModal ? <Modal onCancel={CloseModal} onConfirm={ConfirmModal}/>: null}
        {showRegisterModal ? <Backdrop onClick={CloseModal}/>: null}
        {showLoginModal && <ModalLogin onCancel={CloseModal} onConfirm={ConfirmModal}/> /*do the same thing as above*/}
        {showLoginModal && <Backdrop onClick={CloseModal}/>}
        {showUserOptionsModal ? <ModalUserOptions onProfileClick={ProfileClick} onLogOutClick={LogOutClick}/> : null}
        {showUserOptionsModal ? <Backdrop onClick={CloseModal}/>: null}
        </div>
    )
}