"use client"
import React from 'react'
import ServiceSlider from '../../components/ServiceSlider'
import Circles from '../../components/Circles'
import Bulb from '../../components/Bulb'
import { fadeIn } from '../../varaints'
import { motion } from 'framer-motion'
const page = () => {
  return (
    <div className='h-full flex items-center py-36 bg-primary/30'>
      <Circles/>
      <div className='container mx-auto'></div>
      <Bulb/>
    </div>
  )
}

export default page
