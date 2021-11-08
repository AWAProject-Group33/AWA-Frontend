function Modal() 
{
    function CancelButton() {
        console.log("Cancel");
    } 

    function RegisterButton() {
        console.log("Register");
    }
    return (
        <div className="modal">
            <h1>User Login</h1>
            <form className="formRegister">
                <label>E-mail: <input type="email" name="Email" placeholder="username@provider.something" /></label>
                <label>Password: <input type="password" name="password" /></label>

            </form>
                <div className="modal-button">
                    <button onClick={CancelButton}>Cancel</button>
                    <button onClick={RegisterButton}>Enter</button>
                </div>
           
        </div>
    );
}

export default Modal;