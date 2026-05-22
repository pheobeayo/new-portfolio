import React from "react";
import { TbPhone, TbMail } from "react-icons/tb";
import { MdOutlineMyLocation } from "react-icons/md";
import img from "../Images/mine.JPG";
import { motion } from "framer-motion";

const skills = [
  "React JS", "Next.js", "TypeScript", "TailwindCSS",
  "Solidity", "Cairo", "Clarity", "Node.js", "Rust",
  "Python & Django", "AWS SAM / DynamoDB",
];

const About = ({ show }) => {
  return (
    <div className={`${show && "blur-sm"} pt-6 px-5 sm:px-8 md:px-12 lg:pl-24 ff`}>
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-10"
      >
        <p className="text-[#FF5823] text-xs tracking-widest mb-1">— The Backstory</p>
        <h1 className="text-name text-3xl sm:text-4xl font-bold">Who is Ifeoluwa?</h1>
      </motion.div>

      <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
        {/* Text side */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="lg:w-3/5"
        >
          <p className="text-sub text-sm sm:text-base leading-relaxed mb-5">
            Before I ever touched a line of code, I was deep in a{" "}
            <span className="text-[#FF5823]">Botany laboratory</span> classifying
            plants, running experiments, learning how complex systems self-organise.
            I spent years teaching mathematics and science, then made a deliberate leap
            into software in 2022.
          </p>
          <p className="text-sub text-sm sm:text-base leading-relaxed mb-5">
            Today I'm the{" "}
            <span className="text-[#FF5823]">Lead Full-Stack Blockchain Developer</span>{" "}
            at Confidios, building a ZKP-based cryptographic access-control system with
            Arweave-anchored audit trails. Outside of work, I contribute to Ethereum
            core merged PRs in{" "}
            <span className="text-name">ethereum/execution-specs, walletbeat</span>,
            Also contributing to Stellar, Soroban, Akash, and recognised as a top
            contributor by the Women in Ethereum Protocol fellowship and other Ecosystems, I am an Open-Source Devrel
          </p>
          <p className="text-sub text-sm sm:text-base leading-relaxed mb-8">
            I am also an independent AI researcher looking forward to pursuing a PHD in AI and blockchain Security. My non-traditional
            path from Botany to blockchain isn't a detour; it's the whole point.
          </p>

          {/* Skills grid */}
          <div className="mb-8">
            <p className="text-[#FF5823] text-xs tracking-widest mb-3">Technologies</p>
            <div className="grid grid-cols-2 gap-2">
              {skills.map((skill) => (
                <div key={skill} className="flex items-center gap-2 text-sub text-sm">
                  <span className="text-[#FF5823] text-xs">▸</span>
                  {skill}
                </div>
              ))}
            </div>
          </div>

          {/* Contact details */}
          <div className="border-t border-[#233554] pt-6 space-y-3">
            <div className="flex items-center gap-3 text-sub text-sm">
              <TbPhone className="text-[#FF5823]" />
              <span>+2348032215653</span>
            </div>
            <div className="flex items-center gap-3 text-sub text-sm">
              <TbMail className="text-[#FF5823]" />
              <a
                href="mailto:pheobeayo@gmail.com"
                className="hover:text-[#FF5823] transition-colors"
              >
                pheobeayo@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-3 text-sub text-sm">
              <MdOutlineMyLocation className="text-[#FF5823]" />
              <span>Nigeria</span>
            </div>
          </div>
        </motion.div>

        {/* Image side */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:w-2/5 flex justify-center lg:justify-start"
        >
          <div className="relative">
            <div
              className="absolute inset-0 border-2 border-[#FF5823] rounded-sm"
              style={{ transform: "translate(8px, 8px)", zIndex: 0 }}
            />
            <img
              src={img}
              alt="Ifeoluwa Sanni"
              className="relative z-10 w-64 sm:w-72 lg:w-80 object-cover rounded-sm grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;