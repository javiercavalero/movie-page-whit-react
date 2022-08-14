import { Link } from 'react-router-dom';
import '../styles/header.css';

function Header() {
  return (
    <header>
      <nav>
    <div className="header">
    <ul className="nav justify-content-center bg-dark">
  <li className="nav-item">
    <Link className="nav-link active" aria-current="page" to="/">Home</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link" to="/listado">Listado</Link>
  </li>
</ul>
    </div>
    </nav>
    </header>
  )
}

export default Header;
