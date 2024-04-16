import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import myLogo from '../../assets/logo.webp';
import './Navbar.css';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">
        <img className='logo-img' src={myLogo} alt="a" />
      </div>
      <ul className={`nav-links ${open ? 'active' : ''}`}>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/apk">Aplicaciones</Link></li>
        
      </ul>
      <div className="burger" onClick={() => setOpen(!open)}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  );
};

export default Navbar;
