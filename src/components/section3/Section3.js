import React from 'react'

import './Section.css'
import Group7 from '../../assets/Group 7.png'
import Group12 from '../../assets/Group 12.png'
import Group11 from '../../assets/Group 11.png'
import Trip from '../../assets/trip.jpg'
import Mahal from '../../assets/mahal.png'
import Leaf from '../../assets/leaf 1.png'
import Group from '../../assets/Group.png'
import Send from '../../assets/send 2.png'
import Build from '../../assets/build.png'
import Love from '../../assets/love.png'

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
                    <div className='section3-image-text'>
                        <h3>Trip To Greece</h3>
                        <p>14 - 29 June | by Robbin</p>
                    </div>
                    <div className='section3-image-button'>
                        <img src={Leaf} />
                        <img src={Group} />
                        <img src={Send} />
                    </div>
                    <div className='section3-image-content'>
                        <div className='section3-image-price'>
                            <img src={Build} />
                            <h2>24 people going</h2>
                        </div>
                        <div className='section3-image-symbol'>
                            <img src={Love} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Section3