"use client"


// next image
import Image from "next/image"

// components
import ParticlesContainer from "../components/ParticlesContainer";
import ProjectsBtn from "../components/ProjectsBtn";
import Avatar from "../components/Avatar";

// farmer motion
import { motion } from "framer-motion";

// variants

import {fadeIn} from '../varaints'

const page = () => {
  return (
    <div className="bg-primary/60 h-full">
      {/* text */}
      <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10"> 
        <div className="text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto">
          {/* title */}
          <h1 className="h1">Transforming ideas into <br /> <span className="text-accent">Digital Reality</span></h1>
          {/* subtitle */}
          <p className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque laboriosam incidunt modi! Natus nobis hic voluptatum beatae nemo recusandae eaque.</p>
        </div>
      </div>

      {/* image */}
      
    </div>
  )
}

export default page

