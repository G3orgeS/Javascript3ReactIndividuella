import { useState, useEffect } from 'react'
import './hero.scss'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/Ai'
import { Link } from 'react-router-dom'
import React from 'react'
import img1 from '../../img/img1.png'

const Hero = () => {
  return (
    <div className='placeimg'>
      <img className='imgsizecenter' src={img1} alt="" />
    </div>
  )
}

export default Hero