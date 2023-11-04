
import { Routes, Route } from 'react-router-dom';
import './App.css';
import ContactPage from '../Contact/ContactPage';
import AboutPage from '../About/AboutPage';
import NavBar from '../../components/NavBar/NavBar';

export default function App() {
  return (
    <main className="App">
          <>
            <NavBar />
            <Routes>
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/about" element={<AboutPage />} />
            </Routes>
          </>
    </main>
  );
}
