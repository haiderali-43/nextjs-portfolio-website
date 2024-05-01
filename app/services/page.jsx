"use client"
import React from "react";
import ServiceSlider from "../../components/ServiceSlider";
import Circles from "../../components/Circles";
import Bulb from "../../components/Bulb";
import { fadeIn } from "../../varaints";
import { motion } from "framer-motion";
const page = () => {
  return (
    <div className="h-full flex items-center py-36 bg-primary/30">
      <Circles />
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-x-8">
          {/* text */}
          <div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0">
            <motion.h2
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h2 xl:mt-8"
            >
              My services <span className="text-accent">.</span>
            </motion.h2>
            <motion.p
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="mb-4 max-w-[400px] mx-auto lg:mx-0"
            >
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam
              animi error impedit quasi dicta recusandae hic obcaecati velit
              temporibus earum!
            </motion.p>
          </div>
          {/* slider */}
          <motion.div
            variants={fadeIn("down", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="w-full xl:max-w-[65%]"
          >
            <ServiceSlider />
          </motion.div>
        </div>
      </div>
      <Bulb />
    </div>
  );
};

export default page;
