/* eslint-disable no-unused-vars */
import { Power4 } from "gsap/all";
import React, { useState } from "react";
import { motion } from "motion/react";


const Library = () => {
  const [elems, useElems] = useState([
    {
      heading: "Sunlit Stillness",
      description: "Golden rays warming a quiet forest trail.",
      image: "/Images/p-1.jpg",
      video: "/Videos/v-1.mp4",
    },
    {
      heading: "Whispers of Rain",
      description: "Raindrops dancing on leaves in soft silence.",
      image: "/Images/p-2.jpg",
      video: "/Videos/v-2.mp4",
    },
    {
      heading: "Flutter Pause",
      description: "A butterfly pausing mid-flight on a blooming petal.",
      image: "/Images/p-3.jpg",
      video: "/Videos/v-3.mp4",
    },
    {
      heading: "Dawn’s Embrace",
      description: " Mountains glowing under the first light of dawn.",
      image: "/Images/p-4.jpg",
      video: "/Videos/v-4.mp4",
    },
  ]);

  return (
    <div className="w-full relative">
      <div className="max-w-screen-2xl py-20 mx-auto px-5 sm:px-10">
        <div className="featured flex gap-2">
          <svg
            data-v-669b4a84=""
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-4"
          >
            <path
              data-v-669b4a84=""
              d="M7.41908 4.56679L6.13722 0L4.85418 4.92566L0 6L4.85418 7.25435L6.13722 12L7.3276 7.25435L12 6L7.41908 4.56679Z"
              fill="currentColor"
            ></path>
          </svg>
          <h3 className="font-[TWK-400]">Featured Moments</h3>
        </div>
        <h1 className="text-6xl overflow-hidden sm:text-[10rem] my-10 font-[TWK-500]">
          <motion.span
            initial={{ rotate: 90, y: "40%", opacity: 0 }}
            whileInView={{ rotate: 0, y: 0, opacity: 1 }}
            viewport={{once: true}}
            transition={{
              ease:[0.22, 1, 0.36, 1],
              duration: .5,
            }}
            className="inline-block origin-left"
          >
            Moments
          </motion.span>
        </h1>
        <p className="font-[TWK-300] text-lg sm:text-2xl">
          Moments that move you — a glimpse into the beauty, stillness, and
          wonder that nature offers every day.
        </p>

        <div className="elements sm:flex sm:flex-wrap justify-between mt-10">
          {elems.map((item, index) => {
            return (
              <div className="element w-full sm:w-[48%] mt-10">
                <div className="video relative overflow-hidden w-full h-[104vw] sm:h-[50vw]">
                  <motion.img
                    initial={{ opacity:1}}
                    whileHover={{ opacity: 0}}
                    data-scroll
                    data-scroll-speed="-.5"
                    className="hidden sm:block absolute z-[99] w-full h-full object-cover"
                    src={item.image}
                  />
                  <video
                    data-scroll
                    data-scroll-speed="-.1"
                    loop
                    muted
                    autoPlay
                    className="block w-full h-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-210 absolute"
                    src={item.video}
                  />
                </div>
                <div className="font-[TWK-300] text-sm sm:text-xl mt-5">
                  <p className="font-bold">{item.heading}</p>
                  <p className="opacity-50">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Library;
