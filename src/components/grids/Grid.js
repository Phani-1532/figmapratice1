import React from 'react'
import './Grid.css'

const Grid = () => {
  return (
    <>
        <h1 className='grid-title'>Category</h1>
        <p className='grid-subtitle'>We Offer Best Services</p>
        <div className='grid-container'>
            <div className='grid-item'>Search Engine Optimization</div>
            <div className='grid-item'>Pay-Per-Click</div>
            <div className='grid-item'>Social Media Marketing</div>
            <div className='grid-item'>Email Marketing</div>
            <div className='grid-item'>Content Creation</div>
            <div className='grid-item'>Analytics and Tracking</div>
        </div>
    </>
  )
}

export default Grid