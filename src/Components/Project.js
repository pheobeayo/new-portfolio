import React from "react";
import careledger from "../Images/careledger.jpeg";
import vetlyapp from "../Images/vetlyapp.jpeg";
import krypto from "../Images/krypto.jpeg";
import memoverse from "../Images/memoverse.jpg";
import qualify from "../Images/qualify.jpeg";
import nature from "../Images/nature.jpeg";
import ecommerce from "../Images/ecommerce.jpeg";
import sectify from "../Images/sectify.jpeg";
import dapi from "../Images/dapi.jpg";
import doravet from "../Images/doravet.jpg";
import greenreward from "../Images/greenreward.jpg";
import linkedinoyo from "../Images/linkedinoyo.jpeg";
import thriftchainapp from "../Images/thriftchainapp.jpg";
import croplink from "../Images/croplink.jpg"
import { BsLink45Deg } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";

const Project = ({ show }) => {
  return (
    <div
      className={`${show && "blur-sm"}  pt-2 px-2 sm:px-5 md:px-20 lg:pl-24 ff`}
    >
      <h1 className="text-xl sm:text-2xl py-3 text-[#FF5823]">Projects</h1>
      <div>
        <section className="pb-5">
          <h2 className="text-name sm:text-xl py-3">
            <span className="text-white">01.</span> Talent Vetting
            Application
          </h2>
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
              This FullStack web3 Talent Vetting application was created with react JS, ExpressJS, MongoDB styled with Styled-Components and ChakraUI. I created this application while undergoing Frontend development bootcamp training at Ayaversity.
              <div className="flex text-3xl">
                <a
                  href="https://dev-vetlyapp.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BsLink45Deg className="mr-2" />
                </a>
                <a
                  href="https://github.com/Ayagigs/vetly-frontend"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiFillGithub />
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
              src={vetlyapp}
              alt="vetlyapp"
              className="sm:w-1/2 rounded-b-lg sm:rounded-lg"
            />
          </div>
        </section>
      </div>
      
      <div>
        <section className="pb-5">
          <h2 className="text-name sm:text-xl py-3">
            <span className="text-white">02.</span> Krypto-staking Platform
            Application
          </h2>
          <div className="flex justify-center items-center flex-col sm:flex-row ">
          <motion.img
              initial={{ opacity: 0.5, x: -100 }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{ duration: 1 }}
              src={krypto}
              alt="krypto"
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
              This is a Defi Blockchain platform for income generation for Masses.
              <div className="flex text-3xl">
                <a
                  href="https://krypto-frontend-snowy.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BsLink45Deg className="mr-2" />
                </a>
                <a
                  href="https://github.com/Hashgraph-KRYPTO-Staking/Krypto-frontend"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiFillGithub />
                </a>
              </div>
            </motion.article>
            
          </div>
        </section>
      </div>

      <div>
        <section className="pb-5">
          <h2 className="text-name sm:text-xl py-3">
            <span className="text-white">03.</span> Careledger Health
            Application
          </h2>
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
              This healthCare application was created with React JS, styled with
              Tailwind CSS. I created this application to help me learn how to use Tailwind CSS Framework and react JS.
              <div className="flex text-3xl">
                <a
                  href="https://careledger-two.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BsLink45Deg className="mr-2" />
                </a>
                <a
                  href="https://github.com/CareLedger/new-careledger-frontend"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiFillGithub />
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
              src={careledger}
              alt="careledger"
              className="sm:w-1/2 rounded-b-lg sm:rounded-lg"
            />
          </div>
        </section>
      </div>

      <div>
        <section className="pb-5">
          <h2 className="text-name sm:text-xl py-3">
            <span className="text-white">04.</span> A blockchain application for blog post 
            
          </h2>
          <div className="flex justify-center items-center flex-col sm:flex-row ">
          <motion.img
              initial={{ opacity: 0.5, x: -100 }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{ duration: 1 }}
              src={memoverse}
              alt="memoverse"
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
              This e-commerce application was created with HTML, JS, styled with
              tailwind CSS. I created this application during Lisk hackathon 2023.
              <div className="flex text-3xl">
                <a
                  href="https://memoverse-seven.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BsLink45Deg className="mr-2" />
                </a>
                <a
                  href="https://github.com/pheobeayo/memoverse"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiFillGithub />
                </a>
              </div>
            </motion.article>
           
          </div>
        </section>
      </div>

      <div>
        <section className="pb-5">
          <h2 className="text-name sm:text-xl py-3">
            <span className="text-white">05.</span> Qualify
            Application
          </h2>
          <div className="flex justify-center items-center flex-col sm:flex-row-reverse ">
            <motion.article
              initial={{ opacity: 0.5, x: 100 }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{ duration: 1 }}
              className="sm:w-1/2   bg-[#233554] p-4"
            >
              This is a Talent Vetting app created with React JS chakraUI and styled Components. It's a project
            I am still working on it.
              <div className="flex text-3xl">
                <a
                  href="https://qualify-rosy.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BsLink45Deg className="mr-2" />
                </a>
                <a
                  href="https://github.com/Chainlink-Qualify/qualify"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiFillGithub />
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
              src={qualify}
              alt="qualify"
              className="sm:w-1/2 rounded-b-lg sm:rounded-lg"
            />
          </div>
        </section>
      </div>

      <div>
        <section className="pb-5">
          <h2 className="text-name sm:text-xl py-3">
            <span className="text-white">06.</span>Voting Application
          </h2>
          <div className="flex justify-center items-center flex-col sm:flex-row ">
            <motion.article
              initial={{ opacity: 0.5, x: 100 }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{ duration: 1 }}
              className="sm:w-1/2 bg-[#233554] p-4"
            >
              This is a Blockchain Voting Application created with ReactJs, styled components, chakra UI
              Tailwind  CSS. This is still a project undergoing modification.
              <div className="flex text-3xl">
              <a
                  href="https://sectify.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BsLink45Deg className="mr-2" />
                </a>
                <a
                  href="https://github.com/Fantom-Sectify/sectify"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiFillGithub />
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
              src={sectify}
              alt="sectify"
              className="sm:w-1/2 rounded-b-lg sm:rounded-lg"
            />
          </div>
        </section>
      </div>

      <div>
        <section className="pb-5">
          <h2 className="text-name sm:text-xl py-3">
            <span className="text-white">07.</span>Nature Defenders
          </h2>
          <div className="flex justify-center items-center flex-col sm:flex-row-reverse ">
            <motion.article
              initial={{ opacity: 0.5, x: 100 }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{ duration: 1 }}
              className="sm:w-1/2 bg-[#233554] p-4"
            >
              This is a Blockchain Wildlife Crowdfunding Application. It is an ongoing project 
              created with ReactJs, Styled components, Tailwind CSS.
              <div className="flex text-3xl">
                <a
                  href="https://naturedefender-sao.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BsLink45Deg className="mr-2" />
                </a>
                <a
                  href="https://github.com/naturedefender-safariDAO/naturedefender"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiFillGithub />
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
              src={nature}
              alt="nature"
              className="sm:w-1/2  rounded-b-lg sm:rounded-lg"
            />
          </div>
        </section>
      </div>

      <div>
        <section className="pb-5">
          <h2 className="text-name sm:text-xl py-3">
            <span className="text-white">08.</span> Event Application
            
          </h2>
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
              This Event application was created with react JS, styled with Tailwind CSS.
              <div className="flex text-3xl">
                <a
                  href="https://linkedin-oyo.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BsLink45Deg className="mr-2" />
                </a>
                <a
                  href="https://github.com/pheobeayo/linkedin-oyo"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiFillGithub />
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
              src={linkedinoyo}
              alt="linkedinoyo"
              className="sm:w-1/2 rounded-b-lg sm:rounded-lg"
            />
          </div>
        </section>
      </div>

      <div>
        <section className="pb-5">
          <h2 className="text-name sm:text-xl py-3">
            <span className="text-white">09.</span>E-commerce{" "}
          </h2>
          <div className="flex justify-center items-center flex-col sm:flex-row ">
            <motion.article
              initial={{ opacity: 0.5, x: 100 }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{ duration: 1 }}
              className="sm:w-1/2 bg-[#233554] p-4"
            >
              A simple Ecommerce Full Stack Application page created with ReactJS and Sanity.
              <div className="flex text-3xl">
                <a
                  href="https://ecommerce-pheobeayo.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BsLink45Deg className="mr-2" />
                </a>
                <a
                  href="https://github.com/pheobeayo/ecommerce"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiFillGithub />
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
              src={ecommerce}
              alt="ecommerce"
              className="sm:w-1/2 rounded-b-lg sm:rounded-lg"
            />
          </div>
        </section>
        <div>
        <section className="pb-5">
          <h2 className="text-name sm:text-xl py-3">
            <span className="text-white">10.</span>Dapi{" "}
          </h2>
          <div className="flex justify-center items-center flex-col sm:flex-row ">
            <motion.article
              initial={{ opacity: 0.5, x: 100 }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{ duration: 1 }}
              className="sm:w-1/2 bg-[#233554] p-4"
            >
              A developer Web 3 Application page created with ReactJS, Tailwind CSS, Node js and Solidity.
              <div className="flex text-3xl">
                <a
                  href="https://dapi-xyz.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BsLink45Deg className="mr-2" />
                </a>
                <a
                  href="https://github.com/DAPI-xyz/Frontend"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiFillGithub />
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
              src={dapi}
              alt="dapi"
              className="sm:w-1/2 rounded-b-lg sm:rounded-lg"
            />
          </div>
        </section>
        </div>
        <div>
        <section className="pb-5">
          <h2 className="text-name sm:text-xl py-3">
            <span className="text-white">11.</span>Doravet{" "}
          </h2>
          <div className="flex justify-center items-center flex-col sm:flex-row ">
            <motion.article
              initial={{ opacity: 0.5, x: 100 }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{ duration: 1 }}
              className="sm:w-1/2 bg-[#233554] p-4"
            >
              A Voting Web 3 Application page created with ReactJS, Tailwind CSS Node js and Solidity.
              <div className="flex text-3xl">
                <a
                  href="https://doravet-eta.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BsLink45Deg className="mr-2" />
                </a>
                <a
                  href="https://github.com/doravet/doravet"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiFillGithub />
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
              src={doravet}
              alt="doravet"
              className="sm:w-1/2 rounded-b-lg sm:rounded-lg"
            />
          </div>
        </section>
        </div>
        <div>
        <section className="pb-5">
          <h2 className="text-name sm:text-xl py-3">
            <span className="text-white">12.</span>GreenReward{" "}
          </h2>
          <div className="flex justify-center items-center flex-col sm:flex-row ">
            <motion.article
              initial={{ opacity: 0.5, x: 100 }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{ duration: 1 }}
              className="sm:w-1/2 bg-[#233554] p-4"
            >
              A Recycling Web 3 Application page created with ReactJS, Tailwind CSS Node js and Solidity.
              <div className="flex text-3xl">
                <a
                  href="https://greenrewards-ottochain.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BsLink45Deg className="mr-2" />
                </a>
                <a
                  href="https://github.com/greenrewards-ottochain/greenrewards"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiFillGithub />
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
              src={greenreward}
              alt="greenreward"
              className="sm:w-1/2 rounded-b-lg sm:rounded-lg"
            />
          </div>
        </section>
        <section className="pb-5">
          <h2 className="text-name sm:text-xl py-3">
            <span className="text-white">13.</span>Thriftchain{" "}
          </h2>
          <div className="flex justify-center items-center flex-col sm:flex-row ">
            <motion.article
              initial={{ opacity: 0.5, x: 100 }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{ duration: 1 }}
              className="sm:w-1/2 bg-[#233554] p-4"
            >
              A Recycling Web 3 Application page created with ReactJS, Tailwind CSS Node js and Solidity.
              <div className="flex text-3xl">
                <a
                  href="https://thriftchain.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BsLink45Deg className="mr-2" />
                </a>
                <a
                  href="https://github.com/thriftchain/thriftchain"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiFillGithub />
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
              src={thriftchainapp}
              alt="thriftchainapp"
              className="sm:w-1/2 rounded-b-lg sm:rounded-lg"
            />
          </div>
        </section>
        <section className="pb-5">
          <h2 className="text-name sm:text-xl py-3">
            <span className="text-white">14.</span>Croplink{" "}
          </h2>
          <div className="flex justify-center items-center flex-col sm:flex-row ">
            <motion.article
              initial={{ opacity: 0.5, x: 100 }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{ duration: 1 }}
              className="sm:w-1/2 bg-[#233554] p-4"
            >
              A Recycling Web 3 Application page created with NextJS, Chakra UI, Node js and Solidity.
              <div className="flex text-3xl">
                <a
                  href="https://croplink-six.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BsLink45Deg className="mr-2" />
                </a>
                <a
                  href="https://github.com/max-clinch/croplink"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiFillGithub />
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
              src={croplink}
              alt="croplink"
              className="sm:w-1/2 rounded-b-lg sm:rounded-lg"
            />
          </div>
        </section>
        </div>
        
      </div>
    </div>
  );
};

export default Project;
