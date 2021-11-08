export default function FormModal() {
  return (
    <div>
        <form className="formRegister">
                <label>Name: <input type="text" name="name" /></label>
                <label>Adress: <input type="text" name="adress" /></label>
                <label>Telephone: <input type="tel" name="code" placeholder="0XX-XXXXXXX" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required/></label>
                <label>E-mail: <input type="email" name="Email" placeholder="username@provider.something" /></label>
                <label>Retype E-mail: <input type="text" name="ReEmail" placeholder="username@provider.something"/></label>
                <label>Password: <input type="password" name="password" /></label>
                <label>Retype Password: <input type="password" name="Repassword" /></label>
        </form> 
    </div>
  )
    
}

