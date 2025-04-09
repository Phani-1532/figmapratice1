import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <>
        <header>
            <div className = 'header'>
                <nav className = 'nav-bar'>
                    <div className = 'logo'>
                        <h1>Jadoo</h1>
                    </div>
                    <ul className = 'nav'>
                        <li className = 'nav-item'>Destinations</li>
                        <li className = 'nav-item'>Hotels</li>
                        <li className = 'nav-item'>Flights</li>
                        <li className = 'nav-item'>Bookings</li>
                        <li className = 'nav-item'>Login</li>
                        <li className = 'nav-item'><button className='btn'>Sign up</button></li>
                       
                        
                        <select id='language' className='lang'>
                            <option value="en">EN</option>
                            <option value="fr">FR</option>
                            <option value="es">ES</option>
                            <option value="de">DE</option>
                        </select>
                       
                        
                    </ul>
                </nav>
            </div>
        </header>
    </>
  )
}

export default Header