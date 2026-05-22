import React, { useState, useEffect } from "react";
import careledger from "../Images/careledger.jpeg";
import vetlyapp from "../Images/vetlyapp.jpeg";
import krypto from "../Images/krypto.jpeg";
import goldcart from "../Images/goldcart.jpeg";
import towhouse from "../Images/towhouse.jpg";
import nature from "../Images/nature.jpeg";
import ecommerce from "../Images/ecommerce.jpeg";
import sectify from "../Images/sectify.jpeg";
import dapi from "../Images/dapi.jpg";
import doravet from "../Images/doravet.jpg";
import greenreward from "../Images/greenreward.jpg";
import linkedinoyo from "../Images/linkedinoyo.jpeg";
import thriftchainapp from "../Images/thriftchainapp.jpg";
import studentchain from "../Images/studentchain.jpg";
import croplink from "../Images/croplink.jpg";
import vulfund from "../Images/vulfund.jpg";
import verko from "../Images/verko.png";
import memoverse from "../Images/memoverse.png";
import sente from "../Images/sente.png";
import stikkverse from "../Images/stikkverse.png";
import nectar from "../Images/nectar.png";
import { BsLink45Deg } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";
import { VscStarFull } from "react-icons/vsc";
import { BiGitCommit, BiGitPullRequest } from "react-icons/bi";
import { motion, AnimatePresence } from "framer-motion";

const staticProjects = [
 
  {
    id: 17,
    title: "Verko",
    category: "web3",
    year: "2026",
    description:
      "A decentralised micro-task marketplace on Celo Sepolia. Features GoodDollar face-verification, soul-bound NFT reputation tiers, decentralised arbitration pool, and a 6 % platform fee — 28/28 tests passing.",
    tags: ["Solidity", "Hardhat 3", "Celo", "TypeScript"],
    live: "https://verko.vercel.app/",
    repo: "pheobeayo/verko",
    img: verko,
    badge: "Proof of Ship",
  },

  {
     id: 24,
    title: "Nectar",
    category: "web3",
    year: "2026",
    description:
      "A DeFi savings pool protocol on Arbitrum Sepolia — integrates Aave V3 for yield generation and Chainlink VRF for randomised reward distribution. Full Solidity contract suite with Hardhat.",
    tags: ["Solidity", "Aave V3", "Chainlink VRF", "Arbitrum"],
    live: "https://nectar-protocol.vercel.app",
    repo: "pheobeayo/nectar",
    img: nectar,
  },

  {
    id: 22,
    title: "StikkVerse",
    category: "web2",
    year: "2026",
    description:
      "An industrial IoT monitoring dashboard — real-time machine health metrics, upload history, and predictive maintenance insights. Built with Next.js and React Query v5 against a FastAPI backend.",
    tags: ["Next.js", "React Query", "TypeScript", "FastAPI"],
    live: "https://stikkverse.vercel.app/",
    repo: "pheobeayo/StikkVerse",
    img: stikkverse,
  },
  {
     id: 21,
    title: "Sente DEX",
    category: "web3",
    year: "2025",
    description:
      "A decentralised exchange built on Stacks — swap, provide liquidity, and earn fees on Bitcoin L2.",
    tags: ["React", "Stacks", "Clarity"],
    live: "https://sente-dex.vercel.app/",
    repo: "pheobeayo/sente-dex",
    img: sente,
  },

  {
     id: 19,
    title: "MemoVerse",
    category: "web3",
    year: "2024",
    description:
      "A decentralised blog platform — create, publish, and permanently store posts on-chain.",
    tags: ["React", "Solidity", "IPFS"],
    live: "https://memoverse.vercel.app/",
    repo: "pheobeayo/memoverse",
    img: memoverse,
  },

  // ── EXISTING PROJECTS ────────────────────────────────────────────────────
  {
    id: 1,
    title: "StudentChain",
    category: "web3",
    year: "2023",
    description:
      "A blockchain-powered EdTech platform — tuition fees, exam fees, research expenses, and other educational funding needs, all on-chain.",
    tags: ["React", "Solidity", "Blockchain"],
    live: "https://studentchain.vercel.app/",
    repo: "pheobeayo/studentchain",
    img: studentchain,
  },
  {
    id: 2,
    title: "Vulfund",
    category: "web3",
    year: "2023",
    description:
      "A blockchain-powered crowdfunding platform for transparent, impactful fundraising for underprivileged communities across Africa.",
    tags: ["React", "Solidity", "Tailwind"],
    live: "https://vulfund.vercel.app/",
    repo: "pheobeayo/vulfund",
    img: vulfund,
  },
  {
    id: 3,
    title: "GreenReward",
    category: "web3",
    year: "2023",
    description:
      "A recycling Web3 application — earn tokens for sustainable, eco-friendly actions verified on-chain.",
    tags: ["React", "Tailwind", "Solidity"],
    live: "https://greenearns-six.vercel.app/",
    repo: "pheobeayo/greenearns",
    img: greenreward,
  },
  {
    id: 4,
    title: "ThriftChain",
    category: "web3",
    year: "2024",
    description:
      "A Web3 savings platform with yield-bearing pools — built with React, Vite, Tailwind CSS, and Solidity.",
    tags: ["React", "Vite", "Solidity"],
    live: "https://thrift-chain-v2.vercel.app/",
    repo: "pheobeayo/thriftchain-version2",
    img: thriftchainapp,
  },
  {
    id: 5,
    title: "Krypto Staking",
    category: "web3",
    year: "2023",
    description:
      "A DeFi blockchain platform for income generation — stake assets and earn rewards for the masses.",
    tags: ["React", "Solidity", "DeFi"],
    live: "https://krypto-frontend-snowy.vercel.app/",
    repo: "Hashgraph-KRYPTO-Staking/Krypto-frontend",
    img: krypto,
  },
  {
    id: 6,
    title: "Sectify",
    category: "web3",
    year: "2023",
    description:
      "A blockchain voting application built with ReactJS, Styled Components, Chakra UI, and Tailwind CSS on Fantom.",
    tags: ["React", "Chakra", "Solidity"],
    live: "https://sectify.vercel.app/",
    repo: "Fantom-Sectify/sectify",
    img: sectify,
  },
  {
    id: 7,
    title: "DAPI",
    category: "web3",
    year: "2023",
    description:
      "A developer Web3 application — API gateway for on-chain data, built with ReactJS, Tailwind CSS, Node.js, and Solidity.",
    tags: ["React", "Node.js", "Solidity"],
    live: "https://dapi-xyz.vercel.app/",
    repo: "DAPI-xyz/Frontend",
    img: dapi,
  },
  {
    id: 8,
    title: "DoraVet",
    category: "web3",
    year: "2023",
    description:
      "A voting Web3 application built with ReactJS, Tailwind CSS, Node.js, and Solidity.",
    tags: ["React", "Node.js", "Solidity"],
    live: "https://doravet-eta.vercel.app/",
    repo: "doravet/doravet",
    img: doravet,
  },
  {
    id: 9,
    title: "CropLink",
    category: "web3",
    year: "2024",
    description:
      "A Web3 agricultural marketplace — connecting farmers to buyers with on-chain escrow and supply chain transparency.",
    tags: ["Next.js", "Chakra", "Solidity"],
    live: "https://croplink-six.vercel.app/",
    repo: "max-clinch/croplink",
    img: croplink,
  },
  {
    id: 14,
    title: "Nature Defenders",
    category: "web3",
    year: "2023",
    description:
      "A blockchain wildlife crowdfunding application — ReactJS, Styled Components, and Tailwind CSS.",
    tags: ["React", "Solidity", "Tailwind"],
    live: "https://naturedefender-sao.vercel.app/",
    repo: "naturedefender-safariDAO/naturedefender",
    img: nature,
  },
  {
    id: 10,
    title: "CareLedger",
    category: "web2",
    year: "2022",
    description:
      "A healthcare application built with React JS and Tailwind CSS — patient records, appointments, and care coordination.",
    tags: ["React", "Tailwind"],
    live: "https://careledger-two.vercel.app/",
    repo: "CareLedger/new-careledger-frontend",
    img: careledger,
  },
  {
    id: 11,
    title: "Vetly",
    category: "web2",
    year: "2022",
    description:
      "A full-stack talent vetting application — React JS, ExpressJS, MongoDB, Styled-Components, and ChakraUI.",
    tags: ["React", "Express", "MongoDB"],
    live: "https://dev-vetlyapp.netlify.app/",
    repo: "Ayagigs/vetly-frontend",
    img: vetlyapp,
  },
  {
    id: 12,
    title: "GoldCart",
    category: "web2",
    year: "2023",
    description:
      "An e-commerce application built with HTML, JS, and Styled Components. Created during Square Dev Hackathon 2023.",
    tags: ["HTML", "JS", "Styled Components"],
    live: "https://goldcart.netlify.app/",
    repo: "GoldCart-SquareDev/gold-cart",
    img: goldcart,
  },
  {
    id: 13,
    title: "Townhouse",
    category: "web2",
    year: "2023",
    description:
      "A community engagement platform — React JS, Vite, Tailwind CSS, and Firebase for neighbourhood collaboration.",
    tags: ["React", "Firebase", "Tailwind"],
    live: "https://townhouse-webapp.web.app/landing_page",
    repo: "pheobeayo/townhouse",
    img: towhouse,
  },
  {
    id: 15,
    title: "Ecommerce App",
    category: "web2",
    year: "2022",
    description:
      "A full-stack ecommerce application built with ReactJS and Sanity CMS — products, cart, and checkout flow.",
    tags: ["React", "Sanity"],
    live: "https://ecommerce-pheobeayo.vercel.app/",
    repo: "pheobeayo/ecommerce",
    img: ecommerce,
  },
  {
    id: 16,
    title: "LinkedIn Oyo",
    category: "web2",
    year: "2023",
    description:
      "An event & professional networking application for the Oyo State tech community, built with React JS and Tailwind CSS.",
    tags: ["React", "Tailwind"],
    live: "https://linkedin-oyo.vercel.app/",
    repo: "pheobeayo/linkedin-oyo",
    img: linkedinoyo,
  },
];

const filters = ["all", "web3", "web2"];

// Fetch GitHub data for a single repo
const fetchRepoData = async (repoPath) => {
  try {
    const res = await fetch(`https://api.github.com/repos/${repoPath}`);
    if (!res.ok) return null;
    const data = await res.json();
    return {
      stars: data.stargazers_count,
      forks: data.forks_count,
      openIssues: data.open_issues_count,
      lastPush: data.pushed_at,
      language: data.language,
      watchers: data.watchers_count,
    };
  } catch {
    return null;
  }
};

// Format relative time (e.g. "3 days ago")
const timeAgo = (dateStr) => {
  const diff = Date.now() - new Date(dateStr).getTime();
  const days = Math.floor(diff / 86400000);
  if (days === 0) return "today";
  if (days === 1) return "yesterday";
  if (days < 30) return `${days}d ago`;
  const months = Math.floor(days / 30);
  if (months < 12) return `${months}mo ago`;
  return `${Math.floor(months / 12)}y ago`;
};

// Placeholder card for projects without images yet
const PlaceholderImage = ({ title, category }) => (
  <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-[#0d2137] to-[#1a3a5c]">
    <span className="text-[#FF5823] text-3xl font-bold opacity-30 select-none">
      {title.slice(0, 2).toUpperCase()}
    </span>
    <span className="text-sub text-xs mt-1 tracking-widest opacity-40 uppercase">
      {category}
    </span>
  </div>
);

const Project = ({ show }) => {
  const [active, setActive] = useState("all");
  const [githubData, setGithubData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAll = async () => {
      setLoading(true);
      const results = await Promise.allSettled(
        staticProjects.map((p) =>
          fetchRepoData(p.repo).then((d) => ({ id: p.id, data: d }))
        )
      );
      const map = {};
      results.forEach((r) => {
        if (r.status === "fulfilled" && r.value.data) {
          map[r.value.id] = r.value.data;
        }
      });
      setGithubData(map);
      setLoading(false);
    };
    fetchAll();
  }, []);

  const filtered =
    active === "all"
      ? staticProjects
      : staticProjects.filter((p) => p.category === active);

  const totalProjects = staticProjects.length;

  return (
    <div className={`${show && "blur-sm"} pt-6 px-5 sm:px-8 md:px-12 lg:pl-24 ff`}>
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-3"
      >
        <p className="text-[#FF5823] text-xs tracking-widest mb-1">— Portfolio</p>
        <h1 className="text-name text-3xl sm:text-4xl font-bold">Things I've Built</h1>
      </motion.div>

      {/* Live stats summary from GitHub */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.15 }}
        className="flex flex-wrap gap-6 mb-8"
      >
        <div>
          <p className="text-name text-2xl font-bold">{totalProjects}+</p>
          <p className="text-sub text-xs tracking-widest">Projects</p>
        </div>
        <div className="border-l border-[#233554] pl-6">
          <p className="text-name text-2xl font-bold">
            {Object.values(githubData).reduce((acc, d) => acc + (d?.stars || 0), 0)}
          </p>
          <p className="text-sub text-xs tracking-widest">GitHub Stars</p>
        </div>
        <div className="border-l border-[#233554] pl-6">
          <p className="text-name text-2xl font-bold">
            {Object.values(githubData).reduce((acc, d) => acc + (d?.forks || 0), 0)}
          </p>
          <p className="text-sub text-xs tracking-widest">Forks</p>
        </div>
        <div className="border-l border-[#233554] pl-6">
          <p className="text-name text-2xl font-bold">15+</p>
          <p className="text-sub text-xs tracking-widest">OSS Contributions</p>
        </div>
        {loading && (
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-[#FF5823] rounded-full animate-pulse" />
            <span className="text-sub text-xs">Fetching GitHub data…</span>
          </div>
        )}
      </motion.div>

      {/* Filter tabs */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25 }}
        className="flex gap-2 mb-8 flex-wrap"
      >
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setActive(f)}
            className={`px-4 py-1.5 text-xs tracking-widest rounded-sm border transition-all duration-200 capitalize ${
              active === f
                ? "bg-[#FF5823] text-[#0a192f] border-[#FF5823] font-bold"
                : "border-[#233554] text-sub hover:border-[#FF5823] hover:text-[#FF5823]"
            }`}
          >
            {f === "all" ? "All Projects" : f === "web3" ? "Web3" : "Web2"}
          </button>
        ))}
      </motion.div>

      {/* Project grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 pb-16">
        <AnimatePresence mode="popLayout">
          {filtered.map((project, i) => {
            const gh = githubData[project.id];
            return (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, delay: i * 0.04 }}
                className="group bg-[#112240] rounded-sm overflow-hidden hover:bg-[#1d3461] transition-colors duration-300 flex flex-col"
              >
                {/* Image / Placeholder */}
                <div className="overflow-hidden h-44 relative">
                  {project.img ? (
                    <img
                      src={project.img}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 grayscale group-hover:grayscale-0"
                    />
                  ) : (
                    <div className="w-full h-full group-hover:scale-105 transition-transform duration-500">
                      <PlaceholderImage title={project.title} category={project.category} />
                    </div>
                  )}

                  {/* Category + year badges */}
                  <div className="absolute top-2 left-2 flex gap-1 flex-wrap">
                    <span className="bg-[#0a192f] text-[#FF5823] text-xs px-2 py-0.5 rounded-sm tracking-wider capitalize">
                      {project.category}
                    </span>
                    <span className="bg-[#0a192f] text-sub text-xs px-2 py-0.5 rounded-sm">
                      {project.year}
                    </span>
                    {project.badge && (
                      <span className="bg-[#FF5823] text-[#0a192f] text-xs px-2 py-0.5 rounded-sm font-bold">
                        {project.badge}
                      </span>
                    )}
                  </div>

                  {/* GitHub language badge */}
                  {gh?.language && (
                    <div className="absolute top-2 right-2">
                      <span className="bg-[#0a192f] text-[#ccd6f6] text-xs px-2 py-0.5 rounded-sm">
                        {gh.language}
                      </span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-4 flex flex-col flex-1">
                  <h3 className="text-name font-bold text-base mb-2">{project.title}</h3>
                  <p className="text-sub text-xs leading-relaxed mb-3 line-clamp-3 flex-1">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-sub text-xs border border-[#233554] px-2 py-0.5 rounded-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* GitHub live stats row */}
                  {gh ? (
                    <div className="flex items-center gap-4 mb-3 py-2 border-t border-b border-[#233554]">
                      <span className="flex items-center gap-1 text-sub text-xs" title="Stars">
                        <VscStarFull className="text-[#FF5823]" />
                        {gh.stars}
                      </span>
                      <span className="flex items-center gap-1 text-sub text-xs" title="Forks">
                        <BiGitPullRequest className="text-[#FF5823]" />
                        {gh.forks}
                      </span>
                      {gh.lastPush && (
                        <span
                          className="flex items-center gap-1 text-sub text-xs ml-auto"
                          title="Last pushed"
                        >
                          <BiGitCommit className="text-[#FF5823]" />
                          {timeAgo(gh.lastPush)}
                        </span>
                      )}
                    </div>
                  ) : (
                    <div className="h-8 mb-3" />
                  )}

                  {/* Links */}
                  <div className="flex gap-4 text-lg">
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sub hover:text-[#FF5823] transition-colors flex items-center gap-1 text-xs tracking-wider"
                    >
                      <BsLink45Deg className="text-lg" /> Live ↗
                    </a>
                    <a
                      href={`https://github.com/${project.repo}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sub hover:text-[#FF5823] transition-colors flex items-center gap-1 text-xs tracking-wider"
                    >
                      <AiFillGithub className="text-lg" /> Repo ↗
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Project;