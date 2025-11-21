import gsap, { ScrollTrigger } from "gsap/all";
import React, { useEffect, useRef } from "react";

const Slider = () => {
  const first = useRef(null);
  const second = useRef(null);
  const third = useRef(null);
  const fourth = useRef(null);
  const parent = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: parent.current,
        start: "0 90%",
        scrub: 1,
      }
    });
    tl.to(first.current,{
      x: "10%",
      ease: "power4.out"
    }, 'a')
    tl.to(second.current,{
      x: "-50%",
      ease: "power4.out"
    }, 'a')
    tl.to(third.current,{
      x: "10%",
      ease: "power4.out"
    }, 'a')
    tl.to(fourth.current,{
      x: "-50%",
      ease: "power4.out"
    }, 'a')
  }, []);
  return (
        <div className="w-full h-[70vh] flex items-center justify-center">
        <div ref={parent} className="w-50 h-1/2 relative">
            <div ref={first} className="absolute sm:scale-[1.5] sm:-right-30 w-20 h-[7rem] -right-15 top-6"><img src="/Images/i1.webp"/></div>
            <div ref={second} className="absolute sm:scale-[1.5] sm:-left-40 w-[8rem] aspect-video -left-15 top-10"><video loop autoPlay muted className="w-full h-full object-cover" src="/Videos/v2.webm"/></div>
            <div ref={third} className="absolute sm:scale-[1.5] sm:-right-40 sm:-bottom-25 w-[9rem] aspect-video -right-[30%] -bottom-10"><video loop autoPlay muted className="h-full w-full object-cover" src="/Videos/v4.webm"/></div>
            <div ref={fourth} className="absolute sm:scale-[1.5] sm:-left-30 w-[8rem] aspect-video -left-[25%] -bottom-20 "><img src="/Images/i2.webp"/></div>
            <img className="object-cover h-full w-full absolute z-[-1] sm:scale-[1.5]" src="/Images/tech.webp" />
        </div>
      </div>
      
  );
};

export default Slider;
