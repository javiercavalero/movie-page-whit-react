import axios from 'axios';
import { useEffect, useState } from 'react';
import { Navigate } from "react-router-dom";

function Detalle() {

    let token = sessionStorage.getItem('token');

    let query = new URLSearchParams(window.location.search);
    let movieID = query.get('movieID');

    const [movie, setMovie] = useState(null);

    useEffect(() => {
        const endPoint = `https://api.themoviedb.org/3/movie/${movieID}?api_key=85767dd9b89a27e1fc5162a1145bd542&language=es-ES`
        axios.get(endPoint).then(res => {
                const movieData = res.data;
                setMovie(movieData);
            })
            .catch(err => {
                console.log(err);
            })
    }, [movieID])


    if (!token) {
        return <Navigate to={'/'} />
    }

    return (
        <>
        {!movie && <p>Cargando...</p>}
            {movie && <>
            <h5>Título:{movie.title}</h5>
                <div className='row'>
                    <div className='col-4'>
                    <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} className="img-fluid" alt="movie poster" />
                    </div>
                    <div className='col-8'>
                        <h5>Fecha de estreno:{movie.release_date}</h5>
                        <h5>Reseña:</h5>
                        <p>{movie.overview}</p>
                        <h5>Rating:{movie.vote_average}</h5>
                        <h5>Géneros:</h5>
                        <ul>
                        {movie.genres.map(oneGenre => <li key={oneGenre.id}>{oneGenre.name}</li> )}

                        </ul>
                    </div>
                </div>
                
            </>
            }
            
        </>
         )
        }

    export default Detalle
