import React,{ useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import anime from 'animejs'
import './style.scss'

const Navbar = () => {
  const  [ isOpen, setisOpen ] = useState(false);

  useEffect(()=>{
    anime.timeline({
      easing: 'easeOutExpo',
      duration:300
    })
    .add({
      targets:'nav',
      opacity:[0,1],
      duration:600
    })
    .add({
      targets:'.logo-container',
      translateX:[-100,0],
      opacity:[0,1],
      duration:600
    })
    .add({
      targets:'.nav-link',
      opacity:[0,1],
      translateX:[30,0],
      delay:anime.stagger(100)
    })
  },[])
  const navItems = [
    {
      id:1,
      name: 'Inicio',
      path: '/'
    },
    {
      id:2,
      name: 'Blog',
      path: '/Blog'
    },
    {
      id:3,
      name: 'Quienes somos',
      path: '/quienes-somos'
    },
    {
      id:4,
      name: 'Cartelera',
      path: '/cartelera'
    },
    {
      id:5,
      name: 'Contacto',
      path: '/contacto'
    }
  ]
  const handleClick = ()=>{
    isOpen === true ? setisOpen(false) : setisOpen(true)
  }

  return (
    <div>
      <nav className={isOpen === true ? "main-nav active" : "main-nav"}>
      <div className="logo-container">
      <svg xmlns="http://www.w3.org/2000/svg" id="nav-logo" width="100" viewBox="0 0 7294.9 2736.86" shapeRendering="geometricPrecision" textRendering="geometricPrecision" imageRendering="optimizeQuality" fillRule="evenodd"><path className="str0 fil0" d="M0 2171.74l6.34 402.45s690.83 218.66 1720.74 148.94c1036.24-114.08 1289.76-519.7 1533.77-776.4l1258.07 6.34s776.4 700.33 1654.2 700.33 1121.8-142.6 1121.8-142.6v-402.45s-400.08 216.13-995.84 193.94c-640.13 0-870.67-624.92-870.67-897.45s46.9-873.26 643.3-1033.07c602.74-105.93 1204.2 140.06 1204.2 140.06l-6.34-389.78s-776.4-260.8-1609.82-19.97c-833.43 240.84-868.3 1144.94-868.3 1144.94l-519.7-1166.8-608.44-3.17-510.2 1159.84c29.92-68.03-78.6-1172.5-1352.5-1226.38-37.92-1.6-219.54 3.46-255.7 6.24C405.98 104.3 212.32 877.3 212.32 1328.8c0 465.84 225 798.58 446.82 1020.4 0 0-218.66 28.52-659.14-177.46zm1946.86-1087.48c91.5 64.77 150.83 168.64 150.83 285.76 0 101.53-44.58 193.1-116.08 257.9 107.23-17.8 203.04-45.4 281.8-80.3 122.48-54.27 198.24-121.5 198.24-188.85s-75.76-134.58-198.24-188.85c-87.18-38.62-195.23-68.3-316.55-85.66zm-466.52 553.44c-78.04-65.16-127.35-160.92-127.35-267.68 0-122.32 64.72-230.2 163.23-294.17-149.53 15-282.4 48.23-385.87 94.07-122.5 54.27-198.24 121.5-198.24 188.85 0 67.33 75.76 134.58 198.24 188.85 95.1 42.14 215.07 73.63 349.98 90.08zm216.54-739.75c246.26 0 470.72 44.9 634.53 117.48 76.5 33.9 140.9 74.48 190.16 120.35-78.65-457.12-421.4-801.2-832.3-801.2-416.2 0-762.46 353.05-835.18 819.02 51.1-53.23 122-99.94 208.26-138.15 163.8-72.58 388.26-117.48 634.52-117.48zm813.67 693.75c-47.7 41.8-108.22 78.97-179.14 110.4-163.8 72.58-388.27 117.48-634.53 117.48s-470.72-44.9-634.52-117.48c-80.68-35.75-147.93-78.92-198.1-127.9 90.67 438.02 425.62 763.14 825.02 763.14 394.07 0 725.4-316.48 821.28-745.63zM3868.28 579.35l-434.15 985.54s-11.1 31.7 23.77 31.7l849.68-3.95s51.5 3.17 23.37-47.53c-28.13-50.7-438.1-966.53-438.1-966.53s-11.5-17.43-24.6.78z"/></svg>
      </div>
        <ul className="main-nav__content">
          {navItems.map((item,index)=>
            <NavLink key={index} to={item.path} exact activeClassName="active"><li className="nav-link">{item.name}</li></NavLink>
          )}
        </ul>
      <div className={isOpen === true ? 'mobile-nav-icon-container active':'mobile-nav-icon-container'} onClick={handleClick}>
          <div className={isOpen === true ? 'mobile-nav-hamburger mob-nav-toggle cross':'mobile-nav-hamburger mob-nav-toggle'} id="MobileNavToggle">
              <svg viewBox="0 0 800 600">
                  <path d="M300,220 C300,220 520,220 540,220 C740,220 640,540 520,420 C440,340 300,200 300,200"
                      id="top"></path>
                  <path d="M300,320 L540,320" id="middle"></path>
                  <path d="M300,210 C300,210 520,210 540,210 C740,210 640,530 520,410 C440,330 300,190 300,190"
                      id="bottom" transform="translate(480, 320) scale(1, -1) translate(-480, -318) "></path>
              </svg>
          </div>
      </div>
    </nav>
      <ul className={isOpen === true ? "dropdown-nav active":"dropdown-nav"}>
        {navItems.map((item,index)=>
          <NavLink key={index} to={item.path} exact activeClassName="active" onClick={handleClick}><li className="nav-link">{item.name}</li></NavLink>
        )}
      </ul>
  </div>
  )
}
export default Navbar