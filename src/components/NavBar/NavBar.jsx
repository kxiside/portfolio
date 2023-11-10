import { Link } from 'react-router-dom';
import './NavBar.css'

export default function NavBar () {
  return (
    <nav className='nav'>
      <Link to="/" className='link'>About</Link>
      &nbsp; | &nbsp;
      <Link to="/projects" className='link'>Projects</Link>
      &nbsp; | &nbsp;
      <Link to="/Contact" className='link'>Contact</Link>
    </nav>
  );
}