import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import React from 'react';
import Navbar from './components/nav/Navbar';

import './App.scss';
import Home from './components/Home/Home';
import Apk from './components/Apk/Apk';


function App() {
  return (
    <Router>
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />  // Home ahora es la ruta de inicio
          <Route path="/apk" element={<Apk />} />  // Home ahora es la ruta de inicio

         
          {/* Agrega más rutas según necesites */}
        </Routes>
      </>
    </Router>
  );
}

export default App;
