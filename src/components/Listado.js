import {useEffect, useState} from 'react';
import { Link,Navigate} from 'react-router-dom';
import axios from 'axios';

function Listado() {

let token = localStorage.getItem('token');

const [moviesList, setMoviesList] = useState([]);

useEffect(() =>{
const endPoint = 'https://api.themoviedb.org/3/discover/movie?api_key=85767dd9b89a27e1fc5162a1145bd542&language=es-ES&page=1'
axios.get(endPoint)
.then(res =>{
  const apiData = res.data.results;
setMoviesList(apiData);
})
},[setMoviesList] );

console.log(moviesList);

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
