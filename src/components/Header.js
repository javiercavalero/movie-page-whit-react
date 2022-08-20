import { Link } from 'react-router-dom';
import Buscador from './Buscador';

function Header(props) {
  return (
    <header>
      <nav className="navbar bg-dark">
        <div className="container-fluid">
          <ul className="nav">
            <li className="nav-item">
              <Link className="nav-link active" to='/'>Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to='/listado'>Listado</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to='/favoritos'>Favoritos</Link>

            </li>
            <li className="nav-item d-flex align-items-center">
              <span className='text-success '>
                {props.favourites.length > 0 && <> Peliculas en favoritos:{props.favourites.length}</>}
              </span>
            </li>
          </ul>
          <Buscador />
        </div>
      </nav>

    </header>
  )
}

export default Header;
