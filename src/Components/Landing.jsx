/* eslint-disable no-unused-vars */
import { motion } from "motion/react";
import { Power4 } from "gsap/all";

const Landing = () => {
  return (
    <div className="relative h-[150vh] sm:h-[200vh] w-full">
      <div className="image overflow-hidden w-full h-full">
        <img
          data-scroll
          data-scroll-speed="-1.1"
          className="w-full h-full object-cover"
          src="/Images/land.webp"
        />
      </div>
      <div className="absolute text max-w-screen-2xl mx-auto px-5 sm:px-10 text-white h-full top-0">
        <div className="paragraph mt-96 sm:mt-[30rem] px-5">
          {[
            "Reconnect with the rhythms of the Tech — ",
            "where every ring whispers a story and every",
            "breeze carries the power of freedom.",
          ].map((item, index) => {
            return (
              <p key={index} className="text-xl sm:text-2xl font-[TWK-300] overflow-hidden">
                <motion.span
                  initial={{ rotate: 90, y: "100%", opacity: 0 }}
                  animate={{ rotate: 0, y: 0, opacity: 1 }}
                  transition={{
                    ease: Power4.easeInOut,
                    duration: 1,
                    delay: index * 0.1,
                  }}
                  className="inline-block origin-left"
                >
                  {item}
                </motion.span>
              </p>
            );
          })}
        </div>
        <div className="headings mt-5 px-5 sm:mt-10">
          {["Tech", "Wander", "Feel"].map((item, index) => {
            return (
              <h1 key={index} className="text-7xl overflow-hidden sm:text-[12rem] font-[TWK-500] tracking-tighter leading-none">
                <motion.span
                  initial={{ rotate: 90, y: "100%", opacity: 0 }}
                  animate={{ rotate: 0, y: 0, opacity: 1 }}
                  transition={{
                    ease: Power4.easeInOut,
                    duration: 1,
                    delay: 1+index * 0.1,
                  }}
                  className="inline-block origin-left"
                >
                  {item}
                </motion.span>
              </h1>
            );
          })}

        </div>
        <div className="paragraph-2 sm:w-1/3 mt-10 sm:mt-20 px-5 ">
          <p className="text-xl sm:text-2xl font-[TWK-300]">
            Tech isn't just a product to carry, it's a way of day to day life that helps us and reminds us of who we truly are.
          </p>
          <a
            className="font-light border-b-[.3px] inline-block mt-10 border-zinc-100 pb-1"
            href="#"
          >
            The Library
          </a>
        </div>
      </div>
    </div>
  );
};

export default Landing;
