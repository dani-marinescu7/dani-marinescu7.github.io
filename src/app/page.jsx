"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {toast} from "react-toastify";

const Homepage = () => {

  const buttonClick = (buttonType) => {
    if (buttonType === 'work') {
      window.location.href = '/about';
    } else if (buttonType === 'contact') {
      window.location.href = '/contact';
    }
  }
  return (
      <motion.div
          className="h-full"
          initial={{ y: "-200vh" }}
          animate={{ y: "0%" }}
          transition={{ duration: 1 }}
      >
        <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
          {/* IMAGE CONTAINER */}
          <div className="h-1/2 lg:h-full lg:w-1/2 relative">
            <Image src="/hero.png" alt="" fill className="object-contain" />
          </div>
          {/* TEXT CONTAINER */}
          <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center">
            {/* TITLE */}
            <h1 className="text-4xl md:text-6xl font-bold">
              Transforming Visions into Code
            </h1>
            {/* DESC */}
            <p className="md:text-xl">
              Step into my digital realm, where code transforms ideas into seamless, innovative experiences.
              My portfolio unveils a tapestry of projects, each intricately woven with precision and creativity.
              Explore the intersection of aesthetics and technology, where every project reflects
              my commitment to code craftsmanship.
            </p>
            {/* BUTTONS */}
            <div className="w-full flex gap-4">
              <button onClick={() => buttonClick('work')} className="p-4 rounded-lg ring-1 ring-black bg-black text-white">
                View My Work
              </button>
              <button onClick={() => buttonClick('contact')} className="p-4 rounded-lg ring-1 ring-black">
                Contact Me
              </button>
            </div>
          </div>
        </div>
      </motion.div>
  );
};

export default Homepage;