import React from 'react'
import './Grid.css'
import Mic from '../../assets/image 25.png'
import Satellite from '../../assets/satellite-dish.png'
import Plane from '../../assets/plane.png'

const Grid = () => {
  return (
    <>
      <h1 className='grid-title'>Category</h1>
      <p className='grid-subtitle'>We Offer Best Services</p>
      <div className='grid-container'>
        <div className='grid-item'>
          <img src={Satellite} alt='Marketing Icon' className='grid-icon' />
          <h2 className='grid-item-title'>Calculated Weather</h2>
          <p className='grid-item-description'>Built Wicket longer admire do barton vanity itself do in it.</p>
        </div>
        <div className='grid-item'>
          <img src={Plane} alt='Marketing Icon' className='grid-icon' />
          <h2 className='grid-item-title'>Best Flights</h2>
          <p className='grid-item-description'>Engrossed listening. Park gate sell they west hard for the.</p>
        </div>
        <div className='grid-item'>
          <img src={Mic} alt='Marketing Icon' className='grid-icon' />
          <h2 className='grid-item-title'>Local Events</h2>
          <p className='grid-item-description'>Barton vanity itself do in it. Preferd to men it engrossed listening. </p>
        </div>
        <div className='grid-item'>
          <img src='https://img.icons8.com/ios-filled/50/000000/marketing.png' alt='Marketing Icon' className='grid-icon' />
          <h2 className='grid-item-title'>Customization</h2>
          <p className='grid-item-description'>We deliver outsourced
            aviation services for
            military customers</p>
        </div>
      </div>

    </>
  )
}

export default Grid