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
      transition: { staggerChildren: 0.15 },
    },
  };

  const item = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0, transition: { duration: 0.3 } },
  };

  const items = {
    hidden: { opacity: 0, x: 50 },
    show: { opacity: 1, x: 0, transition: { duration: 0.3 } },
  };

  // Skill groups
  const skillGroups = [
    {
      label: "Smart Contracts",
      skills: ["Solidity", "Cairo (StarkNet)", "Clarity (Stacks)", "Hardhat", "Foundry"],
    },
    {
      label: "Frontend",
      skills: ["React JS", "Next JS", "TypeScript", "Tailwind CSS", "Vite", "Wagmi / Ethers.js"],
    },
    {
      label: "Backend & Infra",
      skills: ["Node.js", "Express", "Python", "DynamoDB", "AWS SAM", "MongoDB"],
    },
    {
      label: "Protocols & Tools",
      skills: ["Ethereum", "StarkNet", "Celo", "Stellar/Soroban", "IPFS", "The Graph"],
    },
    {
      label: "Tooling & Craft",
      skills: ["Git", "GitHub Actions", "Figma", "Docusaurus", "Notion", "Technical Writing"],
    },
  ];

  // Open-source contributions
  const ossContributions = [
    {
      repo: "ethereum/execution-specs",
      detail: "Merged PRs #1443 and #1673",
      type: "Ethereum Protocol",
    },
    {
      repo: "ChainSafe/lodestar",
      detail: "PR #8579 — VoluntaryExitDelayedBroadcaster",
      type: "Ethereum Consensus",
    },
    {
      repo: "hyperledger/besu",
      detail: "PR #9345 — eth_estimateGas EIP-7702 authorizationList fix",
      type: "Ethereum Client",
    },
    {
      repo: "walletbeat/walletbeat",
      detail: "Chain-verification & commit-hash enforcement",
      type: "Wallet Tooling",
    },
    {
      repo: "enkryptcom/enkrypt",
      detail: "PR #792 — Helios light client integration",
      type: "Wallet",
    },
  ];

  return (
    <div className={`${show && "blur-sm"} pt-2 px-2 sm:px-5 md:px-12 lg:pl-24 ff`}>

      {/* ── SKILLS ──────────────────────────────────────────────────────────── */}
      <div className="mb-12">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <p className="text-[#FF5823] text-xs tracking-widest mb-1">— Stack</p>
          <h1 className="text-name text-xl sm:text-2xl py-2 font-bold">Skills & Technologies</h1>
        </motion.div>

        <motion.div
          variants={variants}
          initial="hidden"
          animate="show"
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4"
        >
          {skillGroups.map((group) => (
            <motion.div
              key={group.label}
              variants={item}
              className="bg-[#112240] p-4 rounded-sm border border-[#233554] hover:border-[#FF5823] transition-colors duration-300"
            >
              <p className="text-[#FF5823] text-xs tracking-widest mb-3 uppercase">
                {group.label}
              </p>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="bg-[#0a192f] text-sub text-xs px-2 py-1 rounded-sm border border-[#233554]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* ── OPEN SOURCE ─────────────────────────────────────────────────────── */}
      <div className="mb-12">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <p className="text-[#FF5823] text-xs tracking-widest mb-1">— Protocol Work</p>
          <h1 className="text-name text-xl sm:text-2xl py-2 font-bold">
            Open-Source Contributions
          </h1>
          <p className="text-sub text-sm mb-4 font-light">
            Active contributor across 15+ Ethereum and StarkNet repositories.
          </p>
        </motion.div>

        <motion.div
          variants={variants}
          initial="hidden"
          animate="show"
          className="flex flex-col gap-3"
        >
          {ossContributions.map((oss) => (
            <motion.a
              key={oss.repo}
              variants={item}
              href={`https://github.com/${oss.repo}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start justify-between bg-[#112240] px-4 py-3 rounded-sm border border-[#233554] hover:border-[#FF5823] transition-colors duration-300 group"
            >
              <div>
                <p className="text-name text-sm font-medium group-hover:text-[#FF5823] transition-colors">
                  {oss.repo}
                </p>
                <p className="text-sub text-xs mt-0.5">{oss.detail}</p>
              </div>
              <span className="text-[#FF5823] text-xs border border-[#FF5823] px-2 py-0.5 rounded-sm shrink-0 ml-3">
                {oss.type}
              </span>
            </motion.a>
          ))}
        </motion.div>
      </div>

      {/* ── QUALIFICATIONS ──────────────────────────────────────────────────── */}
      <div className="pb-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.15 }}
        >
          <p className="text-[#FF5823] text-xs tracking-widest mb-1">— Background</p>
          <h1 className="text-name text-xl sm:text-2xl py-2 font-bold">Qualifications</h1>
        </motion.div>

        <article className="sm:flex justify-between items-start gap-8 mt-2">
          {/* Education */}
          <motion.section
            variants={variants}
            initial="hidden"
            animate="show"
            className="sm:w-1/2"
          >
            <div className="flex items-center text-name text-lg pb-3">
              <HiAcademicCap />
              <h1 className="pl-2">Education</h1>
            </div>

            <motion.article variants={items} className="pl-3 border-l-2 border-[#233554] mb-4 font-thin">
              <h2 className="text-sub text-sm">Frontend Bootcamp Training (JS)</h2>
              <h3 className="text-name text-xs mt-0.5">AYA WEB3 Fellowship</h3>
              <div className="flex items-center gap-1 mt-1 text-xs text-sub">
                <GoCalendar />
                <p>Oct 2022 — Apr 2023</p>
              </div>
            </motion.article>

            <motion.article variants={items} className="pl-3 border-l-2 border-[#233554] mb-4 font-thin">
              <h2 className="text-sub text-sm">User Experience Design</h2>
              <h3 className="text-name text-xs mt-0.5">Google Career Certificates</h3>
              <div className="flex items-center gap-1 mt-1 text-xs text-sub">
                <GoCalendar />
                <p>May 2022 — Aug 2022</p>
              </div>
            </motion.article>

            <motion.article variants={items} className="pl-3 border-l-2 border-[#233554] mb-4 font-thin">
              <h2 className="text-sub text-sm">Introduction to Frontend Development</h2>
              <h3 className="text-name text-xs mt-0.5">Frontend Training Programme</h3>
              <div className="flex items-center gap-1 mt-1 text-xs text-sub">
                <GoCalendar />
                <p>Jun 2022 — Aug 2022</p>
              </div>
            </motion.article>

            <motion.article variants={items} className="pl-3 border-l-2 border-[#233554] mb-4 font-thin">
              <h2 className="text-sub text-sm">B.Sc. Botany</h2>
              <h3 className="text-name text-xs mt-0.5">Obafemi Awolowo University</h3>
              <div className="flex items-center gap-1 mt-1 text-xs text-sub">
                <GoCalendar />
                <p>2002 — 2008</p>
              </div>
            </motion.article>
          </motion.section>

          {/* Experience */}
          <motion.section
            variants={variants}
            initial="hidden"
            animate="show"
            className="sm:w-1/2"
          >
            <div className="flex items-center text-name text-lg pb-3">
              <MdWork />
              <h1 className="pl-2">Experience</h1>
            </div>

            {/* Current role — highlighted */}
            <motion.article
              variants={items}
              className="pl-3 border-l-2 border-[#FF5823] mb-4"
            >
              <div className="flex items-center gap-2">
                <h2 className="text-[#FF5823] text-sm font-semibold">
                  Lead Full-Stack Blockchain Developer
                </h2>
                <span className="bg-[#FF5823] text-[#0a192f] text-xs px-1.5 py-0.5 rounded-sm font-bold">
                  Current
                </span>
              </div>
              <h3 className="text-name text-xs mt-0.5">Confidios</h3>
              <p className="text-sub text-xs mt-1 leading-relaxed font-light">
                Building a ZKP-based cryptographic access control system over encrypted documents with Arweave-anchored audit trails. Node.js / TypeScript microservice on AWS SAM + DynamoDB.
              </p>
              <div className="flex items-center gap-1 mt-1 text-xs text-sub">
                <GoCalendar />
                <p>2024 — Present</p>
              </div>
            </motion.article>

            <motion.article variants={items} className="pl-3 border-l-2 border-[#233554] mb-4 font-thin">
              <h2 className="text-sub text-sm">Women in Ethereum Protocol — Fellow & Top Contributor</h2>
              <h3 className="text-name text-xs mt-0.5">Women in Ethereum Protocol</h3>
              <p className="text-sub text-xs mt-1 leading-relaxed">
                Selected fellow; recognised as top contributor. Worked on Ethereum protocol-level code and tooling alongside core developers.
              </p>
              <div className="flex items-center gap-1 mt-1 text-xs text-sub">
                <GoCalendar />
                <p>Aug 2025 — Oct 2025</p>
              </div>
            </motion.article>

            <motion.article variants={items} className="pl-3 border-l-2 border-[#233554] mb-4 font-thin">
              <h2 className="text-sub text-sm">Open-Source DevRel</h2>
              <h3 className="text-name text-xs mt-0.5">Dev3Pack</h3>
              <p className="text-sub text-xs mt-1 leading-relaxed">
                Mentoring developers and students on Web3 open-source contribution workflows; running workshops and writing technical guides.
              </p>
              <div className="flex items-center gap-1 mt-1 text-xs text-sub">
                <GoCalendar />
                <p>2024 — Present</p>
              </div>
            </motion.article>

            <motion.article variants={items} className="pl-3 border-l-2 border-[#233554] mb-4 font-thin">
              <h2 className="text-sub text-sm">Web3 Frontend Developer</h2>
              <h3 className="text-name text-xs mt-0.5">Ayaversity</h3>
              <div className="flex items-center gap-1 mt-1 text-xs text-sub">
                <GoCalendar />
                <p>Nov 2022 — Apr 2023</p>
              </div>
            </motion.article>

            <motion.article variants={items} className="pl-3 border-l-2 border-[#233554] mb-4 font-thin">
              <h2 className="text-sub text-sm">Full Stack Development Intern</h2>
              <h3 className="text-name text-xs mt-0.5">Delight Digital Concepts International</h3>
              <div className="flex items-center gap-1 mt-1 text-xs text-sub">
                <GoCalendar />
                <p>Aug 2022 — 2023</p>
              </div>
            </motion.article>

            <motion.article variants={items} className="pl-3 border-l-2 border-[#233554] mb-4 font-thin">
              <h2 className="text-sub text-sm">I4G x Zuri Internship</h2>
              <h3 className="text-name text-xs mt-0.5">I4G Women Internship</h3>
              <div className="flex items-center gap-1 mt-1 text-xs text-sub">
                <GoCalendar />
                <p>Jan 2022 — Apr 2022</p>
              </div>
            </motion.article>

            <motion.article variants={items} className="pl-3 border-l-2 border-[#233554] mb-4 font-thin">
              <h2 className="text-sub text-sm">Freelance & Hackathon Building</h2>
              <h3 className="text-name text-xs mt-0.5">Independent</h3>
              <p className="text-sub text-xs mt-1 leading-relaxed">
                20+ projects shipped across Ethereum, Stacks, Celo, Stellar, and StarkNet ecosystems; multiple hackathon placements.
              </p>
              <div className="flex items-center gap-1 mt-1 text-xs text-sub">
                <GoCalendar />
                <p>2022 — Present</p>
              </div>
            </motion.article>
          </motion.section>
        </article>
      </div>
    </div>
  );
};

export default Experience;