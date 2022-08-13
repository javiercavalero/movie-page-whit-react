import axios from 'axios';
import swAlert from '@sweetalert/with-react'
import '../styles/login.css'


function Login() {



const submitHandler = e => {
    e.preventDefault()
    
    const email = e.target.email.value;
    const password = e.target.password.value;
    const regexEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    console.log()

    if(email === '' || password === '' ){
swAlert( <h2> Los campos no pueden estar vacios</h2>)
return;
    }
if (email !== '' && !regexEmail.test(email)) {
  swAlert(<h2>dirección de correo inválida</h2>)
return;
}
if (email !== 'challenge@alkemy.org' || password !== 'react') {
    swAlert(<h2>Credenciales inválidas</h2>)
    return;
}

//luego de pasar todas las validaciones vamos a requerir la información con axios
axios
.post('http://challenge-react.alkemy.org',{email, password})
.then(res =>{
  swAlert(<h2>Ingresaste correctamente</h2>);
  const tokenRecibido = res.data.token
  //Guardamos el token en el localStorage del navegador, localStorage solo almacena strings 
  localStorage.setItem('token', tokenRecibido);
} )
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
