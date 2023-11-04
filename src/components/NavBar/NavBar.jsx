import { Link } from 'react-router-dom';
import './NavBar.css'

export default function NavBar () {
  return (
    <nav className='nav'>
      <div className='nav-right'>
      <Link to="/About">About</Link>
      &nbsp; | &nbsp;
      <Link to="/Contact">Contact</Link>
      </div>
    </nav>
  );
}