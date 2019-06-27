import React, { useEffect } from 'react'
import anime from 'animejs'
import './style.scss'

const Header = ({ HeaderTitle = 'Titulo' }) => {

    useEffect(()=>{
        anime.timeline({
            easing: 'easeOutExpo',
            duration:1000
        })
        .add({
            delay:800,
            targets:'.header-section',
            translateY:[-100,0],
            opacity:[0,1],
            duration:2500
        })
        .add({
            targets:'.header-section-title',
            translateX:[40,0],
            opacity:[0,1],
        },'-=1800')
    },[])

    return(
        <div className="header-section">
            <h1 className="header-section-title">{HeaderTitle}</h1>
        </div>
    )
}

export default Header