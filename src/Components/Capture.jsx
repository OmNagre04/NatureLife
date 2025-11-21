import gsap, { Power4, ScrollTrigger } from "gsap/all";
import React, { useEffect, useRef } from "react";

const Capture = () => {
  const parent = useRef(null);
  const video = useRef(null);
  const play = useRef(null);
  const reel = useRef(null);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: parent.current,
        start: "top top",
        scrub: 1,
        pin: true,
      },
    });

    tl.to(
      video.current,
      {
        width: "105%",
        height: "105%",
        ease: Power4.easeOut,
      },
      "a"
    )
      .to(
        play.current,
        {
          x: "5.5vw",
          ease: Power4.easeOut,
        },
        "a"
      )
      .to(
        reel.current,
        {
          x: "-5.5vw",
          ease: Power4.easeOut,
        },
        "a"
      );
  }, []);

  return (
    <div
      ref={parent}
      className="w-full h-screen relative  bg-black overflow-hidden"
    >
      <div
        ref={video}
        className="w-45 scale-[1.2] sm:scale-[2] h-25 absolute aspect-video top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <video
          loop
          muted
          autoPlay
          className="w-full h-full object-cover"
          src="/Videos/ad.webm"
        />
      </div>
      <div className="w-full h-full absolute overlay py-15 sm:py-20 text-white flex flex-col justify-between">
        <div className="flex justify-center items-center gap-2 ">
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
          <h3 className="font-[TWK-400]">Crazyness in Veins </h3>
        </div>
        <h1 className="w-full justify-center flex items-center sm:gap-80 gap-20">
          <div ref={play} className="text-6xl sm:text-9xl font-[TWK-300]">
            Play
          </div>
          <div ref={reel} className="text-6xl sm:text-9xl font-[TWK-300]">
            Reel
          </div>
        </h1>
        <p className="text-center sm:text-lg px-10 sm:px-20">
          Step into the rhythm of TECHNOLOGY through this short reel — a glimpse
          into moments that breathe, move, and inspire.
        </p>
      </div>
    </div>
  );
};

export default Capture;
