"use client";
import React from "react";
import TestmonialSlider from "../../components/TestimonialSlider";
import { motion } from "framer-motion";
import { fadeIn } from "../../varaints";

const page = () => {
  return (
    <div className=" flex h-full  text-center py-32 bg-primary/30">
      <div className="container mx-auto flex flex-col justify-center">
        <motion.h2
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="h2"
        >
          What clients <span className="text-accent">say.</span>
        </motion.h2>
        {/* slider */}
        <motion.div
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
        >
          <TestmonialSlider />
        </motion.div>
      </div>
    </div>
  );
};

export default page;
