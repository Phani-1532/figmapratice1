import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <>
        <header>
            <div className = 'header'>
                <nav className = 'nav-bar'>
                    <div className = 'logo'>
                        <img src = 'https://via.placeholder.com/150' alt = 'Logo' />
                    </div>
                    <ul className = 'nav'>
                        <li className = 'nav-item'>About us</li>
                        <li className = 'nav-item'>Services</li>
                        <li className = 'nav-item'>Use Cases</li>
                        <li className = 'nav-item'>Pricing</li>
                        <li className = 'nav-item'>Blog</li>
                        <li className = 'nav-item'><button className='btn'>Request a quote</button></li>
                        
                    </ul>
                </nav>
            </div>
        </header>
    </>
  )
}

export default Header