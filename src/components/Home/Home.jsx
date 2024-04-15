import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='home-container'>

 <button className='btn'><Link className='btn' to="/apk">Aplicaciones</Link></button>

    </div>
  );
};

export default Home;
