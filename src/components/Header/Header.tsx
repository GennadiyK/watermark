import React from 'react'
import logo from '../../assets/WATERMSRK.png'
import './header.css'


export const Header = () => {
    return (
        <header className='header'>
            <img src={logo} alt="Watermark" height="120px" className='header-img'/>
        </header>
    )
}