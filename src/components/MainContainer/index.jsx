import React, { useEffect } from 'react'
import anime from 'animejs'
import './style.scss'
import firstImg from '../../assets/img/oac3.svg'
import overlay from '../../assets/img/pic-overlay.svg'
import bg1 from '../../assets/img/index-img2.png'
import bg2 from '../../assets/img/index-img3.png'

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
    .add({
      targets:'.first-image',
      opacity:[0,1],
      translateX: [200,60],
      duration: 2500
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
            <img className="first-image" src={firstImg} alt=""/>
          </div>
        </div>
        <div className="content-block sep">
          <div className="left-content">
            <div className="background-block left" style={{ backgroundImage: `url(${bg1})` }}>
              <img className="background-block__overlay" src={overlay} alt=""/>
            </div>
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
            <div className="background-block right" style={{ backgroundImage: `url(${bg2})` }}>
              <img className="background-block__overlay" src={overlay} alt=""/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainContainer