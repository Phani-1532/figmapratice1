import React from 'react'
import './Section.css'

const Section = () => {
  return (
    <>
        <section className = 'section'>
            <div className='section-container'>
            <div className = 'section-content'>
                <h1 className = 'section-title'>Section Title</h1>
                <p className = 'section-description'>This is a description of the section.</p>
                <button className = 'btn'>Book a Consultation</button>
            </div>
            <div className = 'section-image'>
                <img src = 'https://via.placeholder.com/300' alt = 'Section Image' />
            </div>
            </div>
        </section>
    </>
  )
}

export default Section