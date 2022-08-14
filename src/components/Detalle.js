import { Navigate } from "react-router-dom";


function Detalle() {

let token = sessionStorage.getItem('token');

if(!token){
    return <Navigate to={'/'} /> 
}
  return (
    <h2>Soy el componente detalle</h2>
  )
}

export default Detalle
