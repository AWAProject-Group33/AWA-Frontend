function Modal(props) 
{
    
    function CancelButton() {
        props.onCancel();//second method in second
    } 

    return (
        <div className="modal">
            <h1>Login</h1>
            <form className="formRegister">
                <label>E-mail: <input type="email" name="Email" placeholder="username@provider.something" /></label>
                <label>Password: <input type="password" name="password" /></label>

            </form>
                <div >
                    <button className="modal-button" onClick={CancelButton}>Cancel</button>
                    <button className="modal-button-b" onClick={props.onConfirm}>Enter</button>
                </div>
           
        </div>
    );
}

export default Modal;