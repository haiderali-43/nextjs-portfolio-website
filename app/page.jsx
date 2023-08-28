"use client";

// next image
import Image from "next/image";

// components
import ParticlesContainer from "../components/ParticlesContainer";
import ProjectsBtn from "../components/ProjectsBtn";
import Avatar from "../components/Avatar";
import TextAnimation from "../components/TextAnimation";

// farmer motion
import { motion } from "framer-motion";

// variants

import { fadeIn } from "../varaints";

const page = () => {
  return (
    <div className="bg-primary/60 h-full">
      {/* text */}
      <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
        <div className="text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto">
          {/* title */}
          <motion.h1
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h1"
          >
            I will do <br />{" "}
            <span className="text-accent text-2xl">
              <TextAnimation />
            </span>
          </motion.h1>
          {/* subtitle */}
          <motion.p
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16"
          >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque
            laboriosam incidunt modi! Natus nobis hic voluptatum beatae nemo
            recusandae eaque.
          </motion.p>
          {/* btn */}
          <div className="flex justify-center xl:hidden relative ">
            <ProjectsBtn />
          </div>
          <motion.div
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden xl:flex"
          >
            <ProjectsBtn />
          </motion.div>
        </div>
      </div>

      {/* image */}
      <div className="w-[1200px] h-full absolute bottom-0 right-0">
        {/* bg img */}
        <div className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-8"></div>
        {/* Particles */}
        <ParticlesContainer />
        {/* Avatar */}
        <motion.div
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          animate="show"
          exit="hidden"
          transition={{ duration: 1, ease: "easeInOut" }}
          className="w-full h-full max-w-[600px] max-h-[500px] absolute -bottom-32 lg:bottom-0 lg:right-[6%]"
        >
          <Avatar />
        </motion.div>
      </div>
    </div>
  );
};

export default page;
