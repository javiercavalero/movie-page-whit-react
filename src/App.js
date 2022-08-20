import { Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Listado from './components/Listado';
import Header from './components/Header';
import Detalle from './components/Detalle';
import Resultados from './components/Resultados';

import './styles/bootstrap.min.css'
import './styles/header.css';
import './styles/login.css';
import './styles/app.css'


function App() {

  const favMovies = localStorage.getItem('favs');

  let tempMoviesInFavs;

  if (favMovies === null) {
    tempMoviesInFavs = [];
  } else {
    tempMoviesInFavs = JSON.parse(favMovies);
  }

  console.log(tempMoviesInFavs);

  const addOrRemoveFromFavs = e => {

    const btn = e.currentTarget;
    const parent = btn.parentElement;
    const imgURL = parent.querySelector('img').getAttribute('src');
    const title = parent.querySelector('h5').innerText;
    const overview = parent.querySelector('p').innerText;


    const movieData = {
      imgURL, title, overview,
      id: btn.dataset.movieId
    }

    let movieIsInArray = tempMoviesInFavs.find(oneMovie => oneMovie.id === movieData.id);

    if (!movieIsInArray) {
      tempMoviesInFavs.push(movieData);
      localStorage.setItem('favs', JSON.stringify(tempMoviesInFavs));
      console.log('pelicula agregada');
    } else {
      let moviesLeft = tempMoviesInFavs.filter(oneMovie => oneMovie.id !== movieData.id);
      localStorage.setItem('favs', JSON.stringify(moviesLeft));
      console.log('pelicula eliminada');


    }


  }


  return (
    <>
      <Header />
      <div className='container mt-3'>
        <Routes>
          <Route exact path='/' element={<Login />} />
          <Route
            path="/listado"
            element={<Listado addOrRemoveFromFavs={addOrRemoveFromFavs} />}
          />          <Route path='/detalle' element={<Detalle />} />
          <Route path='/resultados' element={<Resultados />} />


        </Routes>
      </div>



    </>
  );
}

export default App;
