import { useEffect, useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import axios from 'axios';
import swAlert from '@sweetalert/with-react';

function Listado() {

  let token = sessionStorage.getItem('token');

  const [moviesList, setMoviesList] = useState([]);

  useEffect(() => {
    const endPoint = 'https://api.themoviedb.org/3/discover/movie?api_key=85767dd9b89a27e1fc5162a1145bd542&language=es-ES&page=1'
    axios.get(endPoint)
      .then(res => {
        const apiData = res.data.results;
        setMoviesList(apiData);
      })
      .catch(err => {
        swAlert(<h2>Hubo un error al intentar cargar la página, vuelva a intentarlo nuevamente más tarde...</h2>);
      })
  }, [setMoviesList]);

  if (!token) {
    return <Navigate to={'/'} />
  }



  return (

    <div className='row'>
      {moviesList.map((oneMovie, idx) => {
        return (
          <div className='col-3 my-3' key={idx}>
            <div className="card" >
              <img src={`https://image.tmdb.org/t/p/w500/${oneMovie.poster_path}`} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{oneMovie.title.substring(0,20)}...</h5>
                <p className="card-text">{oneMovie.overview.substring(0,50)}...</p>
                <Link to={`/detalle?movieID=${oneMovie.id}`} className="btn btn-primary">Ver detalle</Link>
              </div>
            </div>
          </div>
        )

      })

      }

    </div>

  )
}

export default Listado;


