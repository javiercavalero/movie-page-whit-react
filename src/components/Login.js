import '../styles/login.css'

function Login() {

const submitHandler = e => {
    e.preventDefault()
    
    const email = e.target.email.value;
    const password = e.target.password.value;
    const regexEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    console.log()

    if(email === '' || password === '' ){
console.log('los campos no pueden estar vacios')
return;
    }
if (email !== '' && !regexEmail.test(email)) {
console.log('dirección de correo inválida')
return;
}
if (email !== 'challenge@alkemy.org' || password !== 'react') {
    console.log('Credenciales inválidas')
    return;
}
console.log('Ingresaste correctamente')
}

  return (
    <div className="login-box">
  <h2>Ingresar</h2>
  <form onSubmit={ submitHandler }>
    <div className="user-box">
      <input type="text" name="email" id='email' autoComplete='true' required />
      <label htmlFor='email'>Email</label>
    </div>
    <div className="user-box">
      <input type="password" name="password" id='password' autoComplete='true' required />
      <label htmlFor='password'>Contraseña</label>
    </div>
    <button type="submit" >
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      Envíar
    </button>
  </form>
</div>
  )
}

export default Login
