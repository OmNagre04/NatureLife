/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef } from "react";

const Cursor = () => {
  const cursorRef = useRef(null);
  const textRef = useRef(null);
  let mouseX = 0,
    mouseY = 0;
  let currentX = 0,
    currentY = 0;

  // Smooth animation loop
  useEffect(() => {
    const updatePosition = () => {
      currentX += (mouseX - currentX) * 0.1;
      currentY += (mouseY - currentY) * 0.1;
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;
      }
      requestAnimationFrame(updatePosition);
    };
    updatePosition();
  }, []);

  // Mouse move listener
  useEffect(() => {
    const moveCursor = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };
    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <div>
      <div className="hidden sm:block">
        <div
          ref={cursorRef}
          className="fixed top-0 left-0 z-[9999] w-20 h-20 pointer-events-none flex items-center justify-center rounded-full backdrop-blur-sm bg-black/30 overflow-hidden"
        >
          <div
            ref={textRef}
            className="whitespace-nowrap animate-marquee text-[10px] uppercase text-white"
          >
            • Scroll
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cursor;
