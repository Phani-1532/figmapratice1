import React from 'react'

import './Section.css'
import Group7 from '../../assets/Group 7.png'
import Group12 from '../../assets/Group 12.png'
import Group11 from '../../assets/Group 11.png'
import Trip from '../../assets/trip.jpg'

const Section3 = () => {
    return (
        <>
            <div className='section3-container'>
                <div className='section3'>
                    <p>Easy and Fast</p>
                    <h1>Book your next trip <br />
                        in 3 easy steps</h1>
                    <div className='actions'>
                        <div className='action'>
                            <img src={Group7} />
                            <div className='action-text'>
                                <h2>Choose Destination</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur 
                                adipiscing elit. Urna, tortor tempus. </p>
                            </div>
                        </div>
                        <div className='action'>
                            <img src={Group12} />
                            <div className='action-text'>
                                <h2>Make Payment</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur 
                                adipiscing elit. Urna, tortor tempus. </p>
                            </div>
                        </div>
                        <div className='action'>
                            <img src={Group11} />
                            <div className='action-text'>
                                <h2>Reach Airport on Selected Date</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur 
                                adipiscing elit. Urna, tortor tempus. </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='section3-image'>
                    <img src={Trip} alt='Section Image' />
                </div>
            </div>
        </>
    )
}

export default Section3