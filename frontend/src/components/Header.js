import  React, {useState} from 'react';
import styles from './Header.module.css';
import logo from './LogoHeader.png';
import Modal from './Modal';
import ModalLogin from './ModalLogin';
import Backdrop from './BackDrop';

export default function Header(props) 
{
    const [showRegisterModal, setShowRegisterModal] = useState(false);
    const [showLoginModal, setShowLoginModal] = useState(false);
    const [showBackDrop, setShowBackDrop] = useState(false);

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

    function CloseModal() {
        setShowLoginModal(false);
        setShowRegisterModal(false);
    }

    return(
        <div className={styles.container}>
                <div className={styles.containerA}>
                    <img className={styles.Logo} src={logo} alt={logo}></img>
                </div>
                <div>
                    <span className={styles.HeaderTitles}><button onClick={RegisterBtn}>Register</button></span>
                    <span className={styles.HeaderTitles}><button onClick={LoginBtn}>Login</button></span>
                </div>
        {showRegisterModal ? <Modal />: null}
        {showRegisterModal ? <Backdrop onClick={CloseModal}/>: null}
        {showLoginModal && <ModalLogin /> /*do the same thing as above*/}
        {showLoginModal && <Backdrop onClick={CloseModal}/>}
        </div>
    )
}