import React from "react";
import frontendmeta from "../Images/frontendmeta.jpeg";
import AYA_CERT from "../Images/AYA_CERT.png";
import html from "../Images/html.jpeg";
import uiux from "../Images/uiux.jpeg";
import { BsLink45Deg } from "react-icons/bs";
import { motion } from "framer-motion";

const Certification = ({ show }) => {
  return (
    <div
      className={`${show && "blur-sm"}  pt-2 px-2 sm:px-5 md:px-20 lg:pl-24 ff`}
    >
      <h1 className="text-name text-xl sm:text-2xl py-3 text-[#FF5823]">Certification</h1>
      <div>
        <section className="pb-5">
          <div className="flex justify-center items-center flex-col sm:flex-row ">
            <motion.article
              initial={{ opacity: 0.5, x: 100 }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{ duration: 1 }}
              className="sm:w-1/2 bg-[#233554] p-4 "
            >
              Frontend Certification with Meta.
              <div className="flex text-3xl">
                <a
                  href="https://drive.google.com/file/d/1t7nH2o6bhongT4U8xN_Lb8atWf09d0H5/view?usp=drivesdk"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BsLink45Deg className="mr-2" />
                </a>
              </div>
            </motion.article>
            <motion.img
              initial={{ opacity: 0.5, x: -100 }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{ duration: 1 }}
              src={frontendmeta}
              alt="frontendmeta"
              className="sm:w-1/2 rounded-b-lg sm:rounded-lg"
            />
          </div>
        </section>
      </div>
      
      <div>
        <section className="pb-5">
          <div className="flex justify-center items-center flex-col sm:flex-row ">
          <motion.img
              initial={{ opacity: 0.5, x: -100 }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{ duration: 1 }}
              src={html}
              alt="html"
              className="sm:w-1/2 rounded-b-lg sm:rounded-lg"
            />
            <motion.article
              initial={{ opacity: 0.5, x: 100 }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{ duration: 1 }}
              className="sm:w-1/2 bg-[#233554] p-4 "
            >
              HTML, CSS AND JAVASCRIPT CERTIFICATION.
              <div className="flex text-3xl">
                <a
                  href="https://confirm.udacity.com/GJTEDVLQ"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BsLink45Deg className="mr-2" />
                </a>
              </div>
            </motion.article>
            
          </div>
        </section>
      </div>

      <div>
        <section className="pb-5">
          <div className="flex justify-center items-center flex-col sm:flex-row ">
            <motion.article
              initial={{ opacity: 0.5, x: 100 }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{ duration: 1 }}
              className="sm:w-1/2 bg-[#233554] p-4 "
            >
              AYA Fellowship WEB3 Frontend Certificate.
              <div className="flex text-3xl">
                <a
                  href="https://opensea.io/assets/matic/0xbd6aa8a7f8b6241dd82b8e8c382412cb385372fc/15/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BsLink45Deg className="mr-2" />
                </a>
              </div>
            </motion.article>
            <motion.img
              initial={{ opacity: 0.5, x: -100 }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{ duration: 1 }}
              src={AYA_CERT}
              alt="WEB3 LMS application"
              className="sm:w-1/2 rounded-b-lg sm:rounded-lg"
            />
          </div>
        </section>
      </div>
      
      <div>
        <section className="pb-5">
          <div className="flex justify-center items-center flex-col sm:flex-row ">
          <motion.img
              initial={{ opacity: 0.5, x: -100 }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{ duration: 1 }}
              src={uiux}
              alt="evTOL application"
              className="sm:w-1/2 rounded-b-lg sm:rounded-lg"
            />
            <motion.article
              initial={{ opacity: 0.5, x: 100 }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{ duration: 1 }}
              className="sm:w-1/2 bg-[#233554] p-4 "
            >
              GOOGLE USER EXPERIENCE CERTIFICATE.
              <div className="flex text-3xl">
                <a
                  href="https://drive.google.com/file/d/17UOv-JI97q6N7yN06qXWp8zV8m7-TImi/view?usp=drivesdk"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BsLink45Deg className="mr-2" />
                </a>
              </div>
            </motion.article>
            
          </div>
        </section>
      </div>
    </div>
  );
};

export default Certification;
