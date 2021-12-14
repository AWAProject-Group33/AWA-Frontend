export default function FormModal() {
  return (
    <div>
        <form className="formRegister">
                <label>Name: <input type="text" name="name" /></label>
                <label>Surname: <input type="text" name="surname" /></label>
                <label>E-mail: <input type="email" name="Email" placeholder="username@provider.something" /></label>
                <label>Retype E-mail: <input type="text" name="ReEmail" placeholder="username@provider.something"/></label>
                <label>Password: <input type="password" name="password" /></label>
                <label>Retype Password: <input type="password" name="Repassword" /></label>
        </form>
        
    </div>
  )
    
}

