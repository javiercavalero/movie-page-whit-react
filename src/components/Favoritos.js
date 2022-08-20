import {Link, Navigate} from 'react-router-dom';

function Favoritos(props) {
    let token = sessionStorage.getItem('token');
    if(!token) 
    {
        return <Navigate to={'/'} />
    }
    return (<>
                <h2>Favoritos</h2>
                <div className='row' >
                { !props.favourites.length && <h2 className='col-12 text-danger'>No hay películas agregadas</h2>}

      {props.favourites.map((oneMovie, idx) => {
        return (
          <div className='col-3 my-3' key={idx} >
            <div className="card" >
              <img src={oneMovie.imgURL} className="card-img-top" alt="poster de la pelicula" style={{height:'316px' }} />
               <button 
              onClick={props.addOrRemoveFromFavs}
               className='favourite-btn'
               data-movie-id={oneMovie.id} >🖤</button>
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
                    </>
    )
}

export default Favoritos
