import React, { useEffect } from 'react'
import anime from 'animejs'
import './style.scss'

const Container = () =>{

  useEffect(()=>{
    anime.timeline({
      easing:'easeOutExpo',
      duration:600
    })
    .add({
      targets:'.blog-container',
      opacity:[0,1],
      translateY:[100,-30],
      delay:800
    })
  },[])

  return(
    <div className="main-wrap">
      <div className="main-container blog-container">
        hola
      </div>
    </div>
  )
}

export default Container