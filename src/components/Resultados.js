import swAlert from '@sweetalert/with-react';
import { useEffect, useState } from 'react';
import { Link, useNavigate, Navigate} from 'react-router-dom';
import axios from 'axios';


function Resultados(props) {

    let token = sessionStorage.getItem('token');

    let query = new URLSearchParams(window.location.search);
    let keyword = query.get('keyword');

    const navigate = useNavigate();


    const [moviesResults, setMoviesResults] = useState([]);

    useEffect(() => {
        const endPoint = `https://api.themoviedb.org/3/search/movie?api_key=85767dd9b89a27e1fc5162a1145bd542&language=es-ES&page=1&include_adult=false&query=${keyword}`
        axios.get(endPoint).then(res => {
            const moviesArray = res.data.results;

            if (moviesArray.length === 0) {
                swAlert({
                    text: `No se encontraron resultados para: ${keyword}`,
                })
                navigate('/listado');
            }
            setMoviesResults(moviesArray); 
           
        })
            .catch(err => {
                console.log(err);
            })

    }, [setMoviesResults, keyword, navigate ]);

    if(!token) 
    {
        return <Navigate to={'/'} />
    }


    return (
        <>
            <h2>Resultados de: <em>{keyword}</em> </h2>
            <div className='row' >
                {moviesResults.map((oneMovie, idx) => {
                    return (
                        <div className='col-3 my-3' key={idx} >
                            <div className="card" >
                                <img src={`https://image.tmdb.org/t/p/w500/${oneMovie.poster_path}`} className="card-img-top" alt="poster de la pelicula" style={{ height: '316px' }} />
                                <button 
              onClick={props.addOrRemoveFromFavs}
               className='favourite-btn'
               data-movie-id={oneMovie.id} >🖤</button>
                                <div className="card-body">
                                    <h5 className="card-title">{oneMovie.title.substring(0, 20)}...</h5>
                                    <p className="card-text">{oneMovie.overview.substring(0, 50)}...</p>
                                    <Link to={`/detalle?movieID=${oneMovie.id}`} className="btn btn-primary">Ver detalle</Link>
                                </div>
                            </div>
                        </div>
                    )

                })

                }

            </div>

        </>
    )
}

export default Resultados;
