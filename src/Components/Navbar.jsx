/* eslint-disable no-unused-vars */
import { RiMenuFill } from "react-icons/ri";
import { motion } from "motion/react";
import { Power4 } from "gsap/all";

const Navbar = () => {
  return (
    <div className="w-full fixed bg-black/10 backdrop-blur-md z-[999]">
      <div className="max-w-screen-2xl p-5 sm:px-10 mx-auto flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ ease: Power4.easeInOut, duration: 2 }}
          className="logo"
        >
          <img src="/Images/logo.png" alt="Logo" className="w-30" />
        </motion.div>
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ ease: Power4.easeInOut, duration: 2 }}
          className="text-white text-2xl sm:hidden"
        >
          <RiMenuFill className="hover:scale-[1.5] transition-all"/>
        </motion.span>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ ease: Power4.easeInOut, duration: 2 }}
          className="hidden sm:flex links text-white gap-10 font-[TWK-500] "
        >
          {["Home", "About", "Work", "Contact"].map((item, index) => (
            <a key={index} className="text-sm hover:scale-[1.2] transition-all font-light">
              {item}
            </a>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Navbar;
