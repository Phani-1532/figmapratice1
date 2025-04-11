import React from 'react'
import './Grid2.css'
import First from '../../assets/first.png'
import Second from '../../assets/second.jpg'
import Third from '../../assets/third.png'
import Navigation from '../../assets/navigation.png'


const Grid2 = () => {
  return (
    <>
        <h1 className='grid-title'>Top Selling</h1>
          <p className='grid-subtitle'>Top Destinations</p>
          <div className='card-container'>
          
          <div className='card'>
            <div className='card-image'>
            <img src={First} alt='First' />
            </div>
            <div className='card-text'>
            <h3>Rome, Italy</h3>
            <p>$5.42k</p>
            </div>
            <div className='card-days'>
                <img src={Navigation} alt='Navigation' />
                <p>10 Days days</p>
            </div>
          </div>

          <div className='card'>
            <div className='card-image'>
            <img src={Second} alt='First' />
            </div>
            <div className='card-text'>
            <h3>London, UK</h3>
            <p>$4.2k</p>
            </div>
            <div className='card-days'>
            <img src={Navigation} alt='Navigation' />
                <p>12 Days days</p>
            </div>
          </div> <div className='card'>
            <div className='card-image'>
            <img src={Third} alt='First' />
            </div>
            <div className='card-text'>
            <h3>Full Europe</h3>
            <p>$15k</p>
            </div>
            <div className='card-days'>
            <img src={Navigation} alt='Navigation' />
                <p>28 Days days</p>
            </div>
          </div>
          </div>
    </>
  )
}

export default Grid2