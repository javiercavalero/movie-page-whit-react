import { Routes, Route } from 'react-router-dom';
import { useEffect, useState} from 'react';
import Login from './components/Login';
import Listado from './components/Listado';
import Header from './components/Header';
import Detalle from './components/Detalle';
import Resultados from './components/Resultados';
import Favoritos from './components/Favoritos';

import './styles/bootstrap.min.css'
import './styles/header.css';
import './styles/login.css';
import './styles/app.css'


function App() {


  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
      const favsInLocal = localStorage.getItem('favs');

      if (favsInLocal !== null) {
          const favsArray = JSON.parse(favsInLocal);
          setFavourites(favsArray);
      }

  }, [])

  const addOrRemoveFromFavs = e => {

    const favMovies = localStorage.getItem('favs');

    let tempMoviesInFavs;

    if (favMovies === null) {
      tempMoviesInFavs = [];
    } else {
      tempMoviesInFavs = JSON.parse(favMovies);
    }
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
      setFavourites(tempMoviesInFavs);
      console.log('pelicula agregada');
    } else {
      let moviesLeft = tempMoviesInFavs.filter(oneMovie => oneMovie.id !== movieData.id);
      localStorage.setItem('favs', JSON.stringify(moviesLeft));
      setFavourites(moviesLeft);
      console.log('pelicula eliminada');


    }


  }


  return (
    <>
      <Header favourites={favourites} />
      <div className='container mt-3'>
        <Routes>
          <Route exact path='/' element={<Login />} />
          <Route path="/listado" element={<Listado addOrRemoveFromFavs={addOrRemoveFromFavs} />} />
          <Route path='/detalle' element={<Detalle />} />
          <Route path='/resultados' element={<Resultados favourites={favourites}  addOrRemoveFromFavs={addOrRemoveFromFavs} />} />
          <Route path='/favoritos' element={<Favoritos favourites={favourites}  addOrRemoveFromFavs={addOrRemoveFromFavs} />} />
        </Routes>
      </div>



    </>
  );
}

export default App;
