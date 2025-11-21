import React from "react";

const Slider_text = () => {
  
  return (
    <div className="w-full">
      <div data-scroll data-scroll-speed=".1" className="max-w-screen-2xl sm:mt-15 mx-auto px-5 sm:px-10">
        <div className="svg  flex gap-2 justify-center items-center">
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
          <h3 className="font-[TWK-400]">In the media</h3>
        </div>
        <div className="heading font-[TWK-400] text-center text-7xl sm:text-[10rem] my-10">
          <h1>Spread</h1>
          <h1>the Word</h1>
        </div>
        <div className="my-15 flex flex-col items-center justify-center">
          <p className="text-sm sm:text-2xl font-[TWK-300] text-center">
            Discover how our passion for Technology comes to life across leading{" "}
          </p>
          <p className="text-sm sm:text-2xl font-[TWK-300] text-center">
            design and tech platforms — where digital meets the wild.
          </p>
        <a className="font-light border-b-[.3px] inline-block mt-10 border-zinc-400 pb-1" href="#">Browse all pictures</a>
        </div>
      </div>
    </div>
  );
};

export default Slider_text;
