import React from "react";

const Footer = () => {
  return (
    <div className="bg-black w-full h-full">
      <div className="flex pt-40 pb-20 px-10 text-white sm:px-20 font-[TWK-500]">
        <div className="title w-[50vw] text-4xl sm:text-[6rem] md] lg:text-[9rem]">
          Our Tech-Zone
        </div>
        <div className="video">
          <video
            loop
            autoPlay
            muted
            className="h-full w-[50vw]"
            src="/Videos/footer.mp4"
          />
        </div>
      </div>
      <div className="px-10 text-white sm:px-20 font-[TWK-300]">
        <p>
          Rooted in nature, growing through design — thank you for wandering
          with us.
        </p>
        <a
          className="font-light border-b-[.3px] inline-block mt-10 border-zinc-100 pb-1"
          href="#"
        >
          Our Tech-Zone
        </a>
        <div className="w-full mt-10 h-[2px] bg-zinc-200"></div>
        <div className="flex justify-center sm:justify-start pb-10 items-center gap-25 mt-10">
          <div className="flex flex-col">
            <a className="font-light hover:border-b-[.3px] inline-block hover:border-zinc-100" href="#">Work</a>
            <a className="font-light hover:border-b-[.3px] inline-block hover:border-zinc-100" href="#">Moments</a>
            <a className="font-light hover:border-b-[.3px] inline-block hover:border-zinc-100" href="#">Contact</a>
            <a className="font-light hover:border-b-[.3px] inline-block hover:border-zinc-100" href="#">Library</a>
          </div>
          <div className="flex flex-col">
            <a className="font-light hover:border-b-[.3px] inline-block hover:border-zinc-100" href="#">Instagram</a>
            <a className="font-light hover:border-b-[.3px] inline-block hover:border-zinc-100" href="#">Facebook</a>
            <a className="font-light hover:border-b-[.3px] inline-block hover:border-zinc-100" href="#">LinkdIn</a>
            <a className="font-light hover:border-b-[.3px] inline-block hover:border-zinc-100" href="#">Pintrest</a>
          </div>
        </div>
        <p className="text-center text-xs"> &copy; 2025 - All rights reserved to Nature Life</p>
      </div>
    </div>
  );
};

export default Footer;
