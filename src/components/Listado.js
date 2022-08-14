import { Link,Navigate} from 'react-router-dom';

function Listado() {

let token = localStorage.getItem('token');

if (!token) {
   return <Navigate to={'/'}  />
}

  return (
    <>
    <div className='row'>
        <div className='col-3'>
            <div className="card" >
  <img src="..." className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Movie title</h5>
    <p className="card-text">Review movie</p>
    <Link to="/" className="btn btn-primary">Ver detalle</Link>
  </div>
</div>
 </div>
       

    </div>
    </>
  )
}

export default Listado
