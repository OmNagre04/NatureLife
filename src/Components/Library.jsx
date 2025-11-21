/* eslint-disable no-unused-vars */
import { Power4 } from "gsap/all";
import React, { useState } from "react";
import { motion } from "motion/react";


const Library = () => {
  const [elems, useElems] = useState([
    {
      heading: "Wireless Earbuds",
      description: "Follow the new voice of freedom.",
      image: "/Images/i1.webp",
      video: "/Videos/v1.webm",
    },
    {
      heading: "Bluetooth Headphones",
      description: "Dance to your own rhythm in your own world.",
      image: "/Images/i2.webp",
      video: "/Videos/v2.webm",
    },
    {
      heading: "Laptops",
      description: "The machine which is always available for your work.",
      image: "/Images/i3.webp",
      video: "/Videos/v3.webm",
    },
    {
      heading: "Smart Phones",
      description: " Pocket-sized powerhouses that keep you connected.",
      image: "/Images/i4.webp",
      video: "/Videos/v4.webm",
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
          <h3 className="font-[TWK-400]">Featured Product</h3>
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
            Product Library
          </motion.span>
        </h1>
        <p className="font-[TWK-300] text-lg sm:text-2xl">
          Finest product for your everyday use which you don't wanna miss out, The best in segment & the value for money.
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
