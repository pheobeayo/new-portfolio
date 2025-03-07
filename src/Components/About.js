import React from "react";
import { TbPhone, TbMail } from "react-icons/tb";
import { MdOutlineMyLocation } from "react-icons/md";
import img from "../Images/mine.JPG";
import { motion } from "framer-motion";

const About = ({ show }) => {
  return (
    <div
      className={`${show && "blur-sm"}  pt-2 px-2 sm:px-5 md:px-12 lg:pl-24 ff`}
    >
      <h1 className="text-name text-xl sm:text-2xl py-3 text-white">About</h1>
      <div className="flex flex-col sm:flex-row justify-center items-center font-thin">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{ duration: 0.5 }}
          className="sm:w-1/2 text-name sm:p-5 sm:pl-10 sm:text-xl "
        >
          I'm a Talented Front-end Developer skilled in both web2 and web3 technologies with proficiency in React JS, Next js, Cairo, Rust, WordPress,  Python & Django. I have a keen interest 
          in blockchain, designing and building fully responsive web applications as well as developing 
          and changing websites from the layout to the functionality.
          <section className=" mt-2 sm:text-l text-white text-center">
            <div className="flex items-center justify-start my-3 pt-6">
              <TbPhone />
              <p>+2348032215653</p>
            </div>
            <div className="flex items-center justify-start my-3">
              <TbMail />
              <p>pheobeayo@gmail.com</p>
            </div>
            <div className="flex items-center justify-start my-3">
              <MdOutlineMyLocation />
              <p>Nigeria</p>
            </div>
          </section>
        </motion.div>

        <motion.div
          initial={{ opacity: 0.4, zoom: 1 }}
          animate={{
            opacity: 1,
            zoom: 0,
          }}
          transition={{ duration: 0.5 }}
          className="sm:w-1/2 flex justify-center pt-5"
        >
          <div className=" sm:w-1/2 border-2 border-[#FF5823">
            <img src={img} alt="" className=" w-full  z-10 m-2 hover:ml-0" />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
