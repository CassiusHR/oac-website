import React, { useEffect } from 'react'
import Swiper from 'react-id-swiper';
import { Pagination, Autoplay } from 'swiper/dist/js/swiper.esm'
import './style.scss'
import anime from 'animejs'


const MainSlider = () => {

  useEffect(()=>{
    anime.timeline({
      easing:'easeOutExpo',
      duration:600,
    })
    .add({
      delay:800,
      targets:'.slider-wrap',
      translateY:[-100,0],
      opacity:[0,1],
      duration:2500
    })
  },[])
  const params = {
    lazy:true,
    modules: [Pagination, Autoplay],
    autoplay: {
      delay: 4500,
      disableOnInteraction: false
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'progressbar',
      clickable: true,
      dynamicBullets: true
    },
    grabCursor: true,
    spaceBetween: 0
  }

  const content = [
    {
      title:'Bienvenidos a OAC',
      desc:'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin profes and 1.10.33',
      background:'http://www.carloshenriquez.net/oac/assets/img/bg1.png'
    },
    {
      title:'Prueba2',
      desc:`There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators`,
      background:'https://visme.co/blog/wp-content/uploads/2017/07/50-Beautiful-and-Minimalist-Presentation-Backgrounds-03.jpg'
    },
    {
      title:'Prueba3',
      desc:'gsadhgsdhsdhwrlh we weg hmwe gmwelgmpweg we',
      background:'https://visme.co/blog/wp-content/uploads/2017/07/50-Beautiful-and-Minimalist-Presentation-Backgrounds-03.jpg'
    }
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