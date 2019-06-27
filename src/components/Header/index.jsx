import React from 'react'
import './style.scss'

const Header = ({ HeaderTitle = 'Titulo' }) => {
    return(
        <div className="header-section">
            <h1>{HeaderTitle}</h1>
        </div>
    )
}

export default Header