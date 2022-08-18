import { Link } from 'react-router-dom';
import Buscador from './Buscador';

function Header() {

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
          </ul>
          <Buscador />
        </div>
      </nav>

    </header>
  )
}

export default Header;
