import React from 'react'
import Carousel from '../carousel/Carousel'

const Apk = () => {
  return (
    <div>
        <Carousel />
        <div>
          <div className="card">
          <h2>Minecraft bedrock</h2>
          <img src="https://images.sftcdn.net/images/t_app-icon-m/p/18daa71a-96d1-11e6-a693-00163ed833e7/1605634425/minecraft-download-minecraft.jpg" alt="" />
          <p>Descripción de la aplicación</p>
          <a className='btn-card' href="https://www.mediafire.com/" target='_blank'>descargar</a>
          </div>
        </div>
    </div>
    
  )
}

export default Apk