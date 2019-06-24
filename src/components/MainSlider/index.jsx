import React, { useEffect } from 'react'
import Swiper from 'react-id-swiper';
import { Pagination, Navigation } from 'swiper/dist/js/swiper.esm'
import './style.scss'

const MainSlider = () => {
  const params = {
    modules: [Pagination, Navigation],
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    spaceBetween: 30
  }

  const content = [
    {
      title:'Prueba1',
      desc:'prueba1 prueba1',
      background:'https://cdn.pixabay.com/photo/2017/02/13/21/57/lake-2063957_1280.jpg',
    },
    {
      title:'Prueba2',
      desc:'prueba2 prueba2',
      background:'https://visme.co/blog/wp-content/uploads/2017/07/50-Beautiful-and-Minimalist-Presentation-Backgrounds-03.jpg',
    },
  ]
  const divBg = (src) => ({
    backgroundImage: `url(${src})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover'
  })
  
  return(
    <div className="slider-wrap">
      <Swiper {...params}>
      {content.map((slide,index)=>
            <div key={index} style={divBg(slide.background)}>
              <h1>{slide.title}</h1>
              <p>{slide.desc}</p>
            </div>   
        )}
      </Swiper>
      
    </div>
  )
}
export default MainSlider