
import { Routes, Route } from 'react-router-dom';
import './App.css';
import ContactPage from '../Contact/ContactPage';
import AboutPage from '../About/AboutPage';
import HomePage from '../Home/HomePage'
import NavBar from '../../components/NavBar/NavBar';
import ParticlesComponent from '../../components/Particles/Particles';

export default function App() {
  return (
    <main className="App">
          <>
            <NavBar  />
            <Routes>
              <Route path="/" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/projects" element={<HomePage />} />
            </Routes>
            <ParticlesComponent />
          </>
    </main>
  );
}
