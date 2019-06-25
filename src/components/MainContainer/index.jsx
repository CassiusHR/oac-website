import React, { useEffect } from 'react'
import anime from 'animejs'
import './style.scss'

const MainContainer = () => {
  useEffect(()=>{
    anime.timeline({
      easing:'easeOutExpo',
      duration:600
    })
    .add({
      targets:'.main-container',
      opacity:[0,1],
      translateY:[100,-30],
      delay:800
    })
  },[])
  return(
    <div className="main-wrap">
      <div className="main-container">
        <div className="content-block sep">
          <div className="left-content">
            <h1>Inicio</h1>
            <p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            <button>Sobre nosotros</button>
          </div>
          <div className="right-content">
            
          </div>
        </div>
        <div className="content-block sep">
          <div className="left-content">
            
          </div>
          <div className="right-content">
            <h1>Nuestra Misión</h1>
            <p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          </div>
        </div>
        <div className="content-block">
          <div className="left-content">
          <h1>Nuestra Visión</h1>
          <p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          </div>
          <div className="right-content">
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainContainer