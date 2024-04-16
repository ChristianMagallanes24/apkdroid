import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/nav/Navbar';
import Home from './components/Home/Home';
import Apk from './components/Apk/Apk';
import LoadingScreen from './components/Loading/LoadingScreen'; // Asegúrate de importar el componente
import './App.scss';

function App() {
  // Inicializa showNavbar basado en el valor guardado en localStorage, o false si no hay nada guardado
  const [showNavbar, setShowNavbar] = useState(localStorage.getItem('showNavbar') === 'true');
  const [loading, setLoading] = useState(true); // Estado para la pantalla de carga

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // Oculta la pantalla de carga después de 2 segundos
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  // Efecto para actualizar el localStorage cuando showNavbar cambia
  useEffect(() => {
    localStorage.setItem('showNavbar', showNavbar);
  }, [showNavbar]);

  return (
    <Router>
      {loading && <LoadingScreen />}
      <>
        {showNavbar && <Navbar />}
        <Routes>
          <Route path="/" element={<Home setShowNavbar={setShowNavbar} />} />
          <Route path="/apk" element={<Apk />} />
          {/* Agrega más rutas según necesites */}
        </Routes>
      </>
    </Router>
  );
}

export default App;
