import React from "react";
import { HiAcademicCap } from "react-icons/hi";
import { MdWork } from "react-icons/md";
import { GoCalendar } from "react-icons/go";
import { motion } from "framer-motion";

const Experience = ({ show }) => {
  const variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, x: -20 },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
      },
    },
  };

  const items = {
    hidden: { opacity: 0, x: 50 },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <div
      className={`${show && "blur-sm"}  pt-2 px-2 sm:px-5 md:px-12 lg:pl-24 ff`}
    >
      <div className="mb-10">
        <h1 className="text-xl sm:text-2xl py-3 text-white">Skills</h1>
        <p className=" font-light">
          Skills and technologies I can implement include:
        </p>
        <div className="flex justify-center items-center">
          <motion.div
            variants={variants}
            initial="hidden"
            animate="show"
            transition={{ duration: 0.01, delay: 0.05, staggerChildren: 0.2 }}
            className="text-center flex flex-wrap justify-center items-center text-name sm:w-2/3 md:w-1/2"
          >
            <motion.p
              variants={item}
              className="bg-[#233554] px-5 py-3 m-2 hover:text-white  hover:px-6"
            >
              HTML{" "}
            </motion.p>
            <motion.p
              variants={item}
              className="bg-[#233554] px-5 py-3 m-2 hover:text-white  hover:px-6"
            >
              CSS
            </motion.p>
            <motion.p
              variants={item}
              className="bg-[#233554] px-5 py-3 m-2 hover:text-white  hover:px-6"
            >
              JavaScript
            </motion.p>
            <motion.p
              variants={item}
              className="bg-[#233554] px-5 py-3 m-2 hover:text-white  hover:px-6"
            >
              UI/UX
            </motion.p>
            <motion.p
              variants={item}
              className="bg-[#233554] px-5 py-3 m-2 hover:text-white  hover:px-6"
            >
              React JS
            </motion.p>
            <motion.p
              variants={item}
              className="bg-[#233554] px-5 py-3 m-2 hover:text-white  hover:px-6"
            >
              Next JS
            </motion.p>
            
            <motion.p
              variants={item}
              className="bg-[#233554] px-5 py-3 m-2 hover:text-white  hover:px-6"
            >
              Styled-Components/ Bootstrap / Tailwind CSS / ChakraUI
            </motion.p>
            <motion.p
              variants={item}
              className="bg-[#233554] px-5 py-3 m-2 hover:text-white  hover:px-6"
            >
              Python
            </motion.p>
            <motion.p
              variants={item}
              className="bg-[#233554] px-5 py-3 m-2 hover:text-white  hover:px-6"
            >
              NodeJS 
            </motion.p>
            <motion.p
              variants={item}
              className="bg-[#233554] px-5 py-3 m-2 hover:text-white  hover:px-6"
            >
              MongoDB
            </motion.p>
            <motion.p
              variants={item}
              className="bg-[#233554] px-5 py-3 m-2 hover:text-white  hover:px-6"
            >
              Python Flask / Django
            </motion.p>
            <motion.p
              variants={item}
              className="bg-[#233554] px-5 py-3 m-2 hover:text-white  hover:px-6"
            >
              Solidity
            </motion.p>
          </motion.div>
        </div>
      </div>
      <div className="pb-5">
        <h1 className="text-name text-xl sm:text-2xl py-3">Qualifications</h1>
        <article className="sm:flex justify-center items-centr">
          <motion.section
            variants={variants}
            initial="hidden"
            animate="show"
            transition={{ duration: 0.01, delay: 0.05, staggerChildren: 0.2 }}
            className="sm:w-1/2"
          >
            <div className="flex items-center text-name text-lg pb-3">
              <HiAcademicCap />
              <h1 className="pl-2"> Education</h1>
            </div>

            <motion.article
              variants={items}
              className="pl-3 border-l-2 border-[#aa8b2d1] mb-3 font-thin"
            >
              <div>
                <h2 className="text-sub ">Frontend Bootcamp Training(JS) </h2>
                <h3>AYA WEB3 Fellowship</h3>
                <div className="flex items-center">
                  <GoCalendar />
                  <p>Oct. 2022 — April. 2023</p>
                </div>
              </div>
            </motion.article>

            <motion.article
              variants={items}
              className="pl-3 border-l-2 border-[#aa8b2d1] mb-3 font-thin"
            >
              <div>
                <h2 className="text-sub ">User Experience Design with Google </h2>
                <h3>GOOGLE</h3>
                <div className="flex items-center">
                  <GoCalendar />
                  <p>May. 2022 — Aug. 2022</p>
                </div>
              </div>
            </motion.article>

            <motion.article
              variants={items}
              className="pl-3 border-l-2 border-[#aa8b2d1] mb-3 font-thin"
            >
              <div>
                <h2 className="text-sub ">Introduction to Frontend development </h2>
                <h3>FRONT END Training</h3>
                <div className="flex items-center">
                  <GoCalendar />
                  <p>June 2022 - August 2022 </p>
                </div>
              </div>
            </motion.article>

            <motion.article
              variants={items}
              className="pl-3 border-l-2 border-[#aa8b2d1] mb-3 font-thin"
            >
              <div>
                <h2 className="text-sub ">B.SC BOTANY</h2>
                <h3>Obafemi Awolowo University</h3>
                <div className="flex items-center ">
                  <GoCalendar />
                  <p className="p-0">2002 - 2008</p>
                </div>
              </div>
            </motion.article>
          </motion.section>

          <motion.section
            variants={variants}
            initial="hidden"
            animate="show"
            transition={{ duration: 0.01, delay: 0.05, staggerChildren: 0.2 }}
            className="sm:w-1/2"
          >
            <div className="flex items-center text-name text-lg pb-3">
              <MdWork />
              <h1 className="pl-2"> Experience</h1>
            </div>

            <motion.article
              variants={items}
              className="pl-3 border-l-2 border-[#aa8b2d1] mb-3 font-thin"
            >
              <div>
                <h2 className="text-sub ">I4G x Zuri Internship </h2>
                <h3>14G Women Internship</h3>
                <div className="flex items-center ">
                  <GoCalendar />
                  <p className="p-0">January 2022 - April 2022</p>
                </div>
              </div>
            </motion.article>

            <motion.article
              variants={items}
              className="pl-3 border-l-2 border-[#aa8b2d1] mb-3 font-thin"
            >
              <div>
                <h2 className="text-sub ">Full Stack development Intern</h2>
                <h3>Delight Digital Concepts International</h3>
                <div className="flex items-center">
                  <GoCalendar />
                  <p>August 2022- present</p>
                </div>
              </div>
            </motion.article>

            <motion.article
              variants={items}
              className="pl-3 border-l-2 border-[#aa8b2d1] mb-3 font-thin"
            >
              <div>
                <h2 className="text-sub ">Web3 frontend developer</h2>
                <h3>Ayaversity</h3>
                <div className="flex items-center">
                  <GoCalendar />
                  <p>November 2022- April 2023</p>
                </div>
              </div>
            </motion.article>

            <motion.article
              variants={items}
              className="pl-3 border-l-2 border-[#aa8b2d1] mb-3 font-thin"
            >
              <div>
                <h2 className="text-sub ">Freelancing </h2>
                <h3>Freelancing through hackathons participation</h3>
                <div className="flex items-center">
                  <GoCalendar />
                  <p> 2022 -present </p>
                </div>
              </div>
            </motion.article>

            <motion.article
              variants={items}
              className="pl-3 border-l-2 border-[#aa8b2d1] mb-3 font-thin"
            >
              <div>
                <h2 className="text-sub ">
                  Searching For a Frontend Role{" "}
                </h2>
                <h3>Hire Me 🙂</h3>
                <div className="flex items-center">
                  <GoCalendar />
                  <p>Today</p>
                </div>
              </div>
            </motion.article>
          </motion.section>
        </article>
      </div>
    </div>
  );
};

export default Experience;
