// Project data for the Projects page.
// To add a project: drop a screenshot in src/Images (WebP, ~900px wide), import it
// below and add an entry at the top of the list. `repo` and `live` are optional.
// For a private repository leave `repo` out and set `privateRepo: true` to show
// a "Private repo" label; client sites simply omit both.
// category: "web3" | "web2" | "ai"
import completeconcept from "../Images/completeconcept.webp";
import farhorizon from "../Images/farhorizon.webp";
import windowofhope from "../Images/windowofhope.webp";
import trezio from "../Images/trezio.webp";
import ccaccess from "../Images/ccaccess.webp";
import ccrides from "../Images/ccrides.webp";
import careledger from "../Images/careledger.webp";
import chalkline from "../Images/chalkline.webp";
import croplink from "../Images/croplink.webp";
import dapi from "../Images/dapi.webp";
import doravet from "../Images/doravet.webp";
import ecommerce from "../Images/ecommerce.webp";
import goldcart from "../Images/goldcart.webp";
import greenreward from "../Images/greenreward.webp";
import haven from "../Images/haven.webp";
import krypto from "../Images/krypto.webp";
import linkedinoyo from "../Images/linkedinoyo.webp";
import memoverse from "../Images/memoverse.webp";
import nature from "../Images/nature.webp";
import nectar from "../Images/nectar.webp";
import quorvane from "../Images/quorvane.webp";
import sectify from "../Images/sectify.webp";
import sente from "../Images/sente.webp";
import snowdrift from "../Images/snowdrift.webp";
import stikkverse from "../Images/stikkverse.webp";
import studentchain from "../Images/studentchain.webp";
import thriftchainapp from "../Images/thriftchainapp.webp";
import towhouse from "../Images/towhouse.webp";
import trustlance from "../Images/trustlance.webp";
import verko from "../Images/verko.webp";
import vetlyapp from "../Images/vetlyapp.webp";
import vulfund from "../Images/vulfund.webp";

export const projects = [
  // ── 2026 ─────────────────────────────────────────────────────────────────
  {
    id: 30,
    title: "Snowdrift",
    category: "web3",
    year: "2026",
    description:
      "A coordination layer for Avalanche ecosystem work — open-source issue discovery indexed from the Electric Capital taxonomy, plus volunteer and sponsored tasks with on-chain escrow. UUPS-upgradeable escrow and reputation contracts, verified on Fuji.",
    tags: ["Next.js 16", "Solidity", "Foundry", "wagmi", "Avalanche"],
    live: "https://snowdrift-aval.vercel.app",
    repo: "pheobeayo/snowdrift",
    img: snowdrift,
    badge: "Featured",
  },
  {
    id: 31,
    title: "Chalkline",
    category: "web2",
    year: "2026",
    description:
      "A modular, multi-tenant school management platform for creche to campus — results, attendance, fees, admissions and learning. Works offline, takes Paystack payments and issues QR-verified report sheets.",
    tags: ["React", "TypeScript", "Supabase", "Tailwind"],
    live: "https://chalkline-learning-studio.vercel.app",
    img: chalkline,
    privateRepo: true,
    badge: "Featured",
  },
  {
    id: 17,
    title: "Verko",
    category: "web3",
    year: "2026",
    description:
      "A decentralised micro-task marketplace on Celo mainnet. Workers earn G$ for real-world tasks, with GoodDollar identity verification, soul-bound NFT reputation tiers and UUPS-upgradeable contracts verified on-chain.",
    tags: ["Solidity", "Hardhat 3", "Celo", "TypeScript"],
    live: "https://verko.vercel.app/",
    repo: "pheobeayo/verko",
    img: verko,
    badge: "Proof of Ship",
  },
  {
    id: 32,
    title: "Quorvane",
    category: "web2",
    year: "2026",
    description:
      "Competition infrastructure for live quizzes and spelling bees — question banks, timed and fair attempts, integrity signals and results for churches, schools and organisations. Built with a teammate.",
    tags: ["Next.js", "Flask", "Tailwind"],
    live: "https://quorvane-six.vercel.app",
    img: quorvane,
    privateRepo: true,
  },
  {
    id: 36,
    title: "Trezio",
    category: "web2",
    year: "2026",
    description:
      "A financial operating system for finance teams — double-entry general ledger, journals routed through role-based approvals, cash and bank, expenses and reports, with a starter chart of accounts set up at sign-up.",
    tags: ["Next.js", "TypeScript", "FastAPI", "Python"],
    live: "https://trezio.vercel.app/",
    img: trezio,
    privateRepo: true,
  },
  {
    id: 33,
    title: "TrustLance",
    category: "web3",
    year: "2026",
    description:
      "Freelance escrow on 0G Chain — clients deposit any token, Uniswap's Universal Router swaps it to USDC, and KeeperHub executes the release on approval. Built for ETHGlobal Open Agents.",
    tags: ["Next.js 16", "Solidity", "Hardhat", "Uniswap", "0G"],
    live: "https://trustlance-og.vercel.app/",
    repo: "pheobeayo/trustlance",
    img: trustlance,
    badge: "ETHGlobal",
  },
  {
    id: 34,
    title: "Haven",
    category: "web2",
    year: "2026",
    description:
      "A free web app that gives adults in Nigeria the next safe step when they are worried about a child — scripted questions, clear guidance and nearby help, in English and Pidgin. Team project, currently a test version.",
    tags: ["React", "TanStack Start", "Supabase", "TypeScript"],
    live: "https://haven-for-your-child.vercel.app/",
    repo: "pheobeayo/haven-for-you",
    img: haven,
  },
  {
    id: 35,
    title: "SENTINEL",
    category: "ai",
    year: "2026",
    description:
      "An AI scam-conversation detector — paste a chat, SMS or email and get a verdict, confidence score and red-flag analysis from an NLP classifier. Flask and scikit-learn backend with a Next.js frontend.",
    tags: ["Python", "scikit-learn", "Flask", "Next.js"],
    repo: "pheobeayo/sentinel",
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
  // ── Client work ──────────────────────────────────────────────────────────
  {
    id: 37,
    title: "Complete Concept",
    category: "web2",
    year: "2026",
    description:
      "Company website for a Lagos logistics, real estate and financial services group — international shipping rates, frozen-food and importation services, property listings and a ship-now request flow.",
    tags: ["Next.js", "Framer Motion", "Tailwind"],
    live: "https://www.completeconcepts.com.ng/",
    img: completeconcept,
    badge: "Client",
  },
  {
    id: 38,
    title: "Complete Concept Rides",
    category: "web2",
    year: "2026",
    description:
      "Car hire and mobility booking site — car hire, airport transfers, daily commute shuttles on fixed routes, group buses and trucks, with indicative pricing and a booking flow confirmed by phone or WhatsApp.",
    tags: ["Booking flow", "Fleet & routes", "Responsive"],
    live: "https://completeconcept-rides.vercel.app/",
    img: ccrides,
    badge: "Client",
  },
  {
    id: 39,
    title: "Complete Concepts Access",
    category: "web2",
    year: "2026",
    description:
      "A staff attendance app — workers scan the office QR code, their phone confirms they are on the premises, and they clock in and out. Admins sign in to monitor attendance.",
    tags: ["QR check-in", "Geolocation", "Admin dashboard"],
    live: "https://completeconcept-access.vercel.app/",
    img: ccaccess,
    badge: "Client",
  },
  {
    id: 40,
    title: "FAR Horizon Consulting",
    category: "web2",
    year: "2026",
    description:
      "Multi-page website for a mining advisory firm — services, value chains, blog and contact, with email enquiries and a newsletter sign-up.",
    tags: ["Next.js", "EmailJS", "Supabase"],
    live: "https://farhorizonconsulting.com/",
    img: farhorizon,
    badge: "Client",
  },
  {
    id: 41,
    title: "Window of Hope Foundation",
    category: "web2",
    year: "2026",
    description:
      "Website for a foundation supporting widows and widowers in Akure — programmes, events, gallery, donation and volunteer pages, and a contact form.",
    tags: ["Website", "Non-profit", "Responsive"],
    live: "https://www.widowswindowofhope.org/",
    img: windowofhope,
    badge: "Client",
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

  // ── Earlier work ─────────────────────────────────────────────────────────
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
