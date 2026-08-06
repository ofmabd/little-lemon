import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/" aria-label="Home">Home</Link>
        </li>

        <li>
          <Link to="/about" aria-label="About">About</Link>
        </li>

        <li>
          <Link to="/menu" aria-label="Menu">Menu</Link>
        </li>

        <li>
          <Link to="/booking" aria-label="Reservations">Reservations</Link>
        </li>

        <li>
          <Link to="/order-online" aria-label="Order Online">Order Online</Link>
        </li>

        <li>
          <Link to="/login" aria-label="Login">Login</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;