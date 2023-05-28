import React from 'react'
import '../../assets/style/main.css'
import '../../assets/style/common.css'

const Main = () => {
  return (
    <div className='main'>
      <div className='grid-container'>
        <button className='soup-btn' >SWEET CORN CHEESE SOUP</button>
        <button className='soup-btn' >TOMATO CORN CHEESE SOUP</button>
        <button className='soup-btn bg-dark-blue  text-white' >MINESTRONE SOUP</button>
        <button className='soup-btn bg-dark-blue  text-white' >HOT & SOUR SOUP</button>
        <button className='soup-btn' >VEG SWEET CORN SOUP</button>
        <button className='soup-btn' >CREAM OF VEG SOUP</button>
        <button className='soup-btn' >CREAM OF TOMATO SOUP</button>

      </div>
    </div>

  )
}

export default Main