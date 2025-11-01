"use client";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <section className="h-screen flex items-center justify-center text-center px 8">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl px-1 sm:text-3xl md:text-6xl font-bold ">
          Hi, I{"'"}m Alfinur Fitra Wijaya.R
        </h1>
        <TypeAnimation
          sequence={[
            "Machine Learning Engineer",
            1500,
            "Software Engineer",
            1500,
          ]}
          wrapper="h1"
          speed={50}
          className="text-3xl font-bold sm:text-4xl mt-4 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent"
          repeat={Infinity}
        />
      </motion.div>
    </section>
  );
};

export default Hero;
