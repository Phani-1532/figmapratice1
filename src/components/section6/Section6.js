import React from 'react'
import './Section6.css'
import BlueSend from '../../assets/bluesend.png'

const Section6 = () => {
  return (
    <>

      <div className="section6">
        <div className="section6-container">
          <h1>Subscribe to get information, latest news and other
            interesting offers about Jadoo</h1>
          <img src={BlueSend} alt="Bluesend" />
          <div className='input'>
            <input type="text" placeholder="Your email" />
            <button type="submit">Subscribe</button>
          </div>
        </div>

      </div>

    </>
  )
}

export default Section6
