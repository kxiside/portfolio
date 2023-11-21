
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Main from '../Main/Main';
import NavBar from '../../components/NavBar/NavBar';

export default function App() {
  return (
    <main className="App">
          <>
            <NavBar className="nav" />
            <Routes>
              <Route path="/" element={<Main />} />
            </Routes>
            
          </>
    </main>
  );
}
