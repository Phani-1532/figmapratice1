import React from 'react'
import './Section.css'
import Traveller from '../../assets/Traveller 1.png'
import Polygon from '../../assets/Ellipse 8.png'

const Section = () => {
  return (
    <>
      <section className='section'>
        <div className='section-container'>
          <div className='section-content'>
            <h1 className='section-title'>Best Destinations around the world</h1>
            <p className='section-subtitle'>Travel, enjoy <br />
              and live a new <br />
              and full life</p>
            <p className='section-description'>Built Wicket longer admire do barton vanity itself do in it. Preferred to sportsmen it engrossed listening. Park gate sell they west hard for the.</p>
            <button className='btn'>Find out more</button>
          </div>
          <div className='section-image-container'>
          <div className='section-image'>
            <img src={Traveller} alt='Section Image' />
           
          </div>
         
          </div>
         
        </div>
      </section>
    </>
  )
}

export default Section