import React from 'react';
import { Link } from 'react-router-dom';

const Home = ({ setShowNavbar }) => {
  const handleEntrar = () => {
    setShowNavbar(true);
  };
  

  return (
    <div className='home-container'>
      <button  onClick={handleEntrar}>
        <Link className='ov-btn-slide-right' to="/apk">Entrar</Link>
      </button>
    </div>
  );
};

export default Home;
