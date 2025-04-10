import React from 'react'
import './Section4.css'
import Avatar from '../../assets/avatar.png'

const Section4 = () => {
  return (
    <>
        <div className='section4'>
            <div className='section4-container-left'>
                <p>TESTIMONIALS</p>
                <h1>What people say <br />
                about Us.</h1>
                <i>...</i>

            </div>
            <div className='section4-container-right'>
                <img src={Avatar} alt=''/>
                <p>“On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”</p>
                <h4>Mike taylor</h4>
                <p>Lahore, Pakistan</p>
            </div>
        </div>
    </>
  )
}

export default Section4