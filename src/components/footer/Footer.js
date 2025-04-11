import React from 'react'
import './Footer.css'
import Facebook from '../../assets/facebook.png'
import Instagram from '../../assets/insta.png'
import Twitter from '../../assets/twitter.png'
import GooglePlay from '../../assets/Google Play.png'
import AppStore from '../../assets/Play Store.png'

const Footer = () => {
    return (
        <>
            <div className="footer">
                <div className='footer-1'>
                    <h1>Jadoo.</h1>
                    <p>Book your trip in minute, get full Control for much longer.</p>
                </div>
                <div className='footer-2'>
                    <div className='footer-2-1'>
                        <h2>Company</h2>
                    </div>
                    <div className='footer-2-2'>
                        <p>About</p>
                        <p>Careers</p>
                        <p>Mobile</p>
                    </div>

                </div>
                <div className='footer-3'>
                <div className='footer-3-1'>
                        <h2>Contact</h2>
                    </div>
                    <div className='footer-3-2'>
                        <p>Help/FAQ</p>
                        <p>Press</p>
                        <p>Affilates</p>
                    </div>
                </div>
                <div className='footer-4'>
                <div className='footer-4-1'>
                        <h2>More</h2>
                    </div>
                    <div className='footer-4-2'>
                        <p>Airlinefees</p>
                        <p>Airline</p>
                        <p>Low fare tips</p>
                    </div>
                </div>
                <div className='footer-5'>
                <div className='footer-5-1'>
                    <img src={Facebook} alt='' />
                    <img src={Instagram} alt='' />
                    <img src={Twitter} alt='' />
                    </div>
                    <div className='footer-5-2'>
                        <p>Discover our app</p>
                    </div>
                    <div className='footer-5-3'>
                        <img src={GooglePlay} alt='' />
                        <img src={AppStore} alt='' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer