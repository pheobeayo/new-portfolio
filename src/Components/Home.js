import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Home = ({ show }) => {
  const roles = [
    "Lead Full-Stack Blockchain Developer",
    "Frontend developer",
    "Full-stack developer",
    "Protocol Contributor",
    "Open-Source Builder",
    "Technical writer",
    "AI Researcher",
  ];

  return (
    <div
      className={`${
        show && "blur-md"
      } min-h-[80vh] flex flex-col justify-center pt-5 px-5 md:px-12 lg:pl-24`}
    >
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-[#FF5823] ff text-sm tracking-widest mb-4"
      >
        Hi, I'm
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-name font-bold text-5xl sm:text-7xl lg:text-8xl tracking-tight leading-none mb-3"
      >
        Ifeoluwa
        <br />
        <span className="text-[#ccd6f6]">Sanni.</span>
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.25 }}
        className="flex flex-wrap gap-2 mb-6"
      >
        {roles.map((role) => (
          <span
            key={role}
            className="text-sub ff text-xs sm:text-sm tracking-widest px-3 py-1 border border-[#233554] rounded-sm"
          >
            {role}
          </span>
        ))}
      </motion.div>

      <motion.p
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.35 }}
        className="text-sub ff text-sm sm:text-base max-w-lg leading-relaxed mb-8"
      >
        I started out studying plants. Now I build the protocols that move trust.
        From Botany labs to Frontend development, Blockchain development, AI research and development; every step taught me how systems
        work, and how to make them better.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.45 }}
        className="flex gap-4 flex-wrap"
      >
        <Link to="/projects">
          <button className="bg-[#FF5823] text-[#0a192f] px-6 py-3 text-sm tracking-widest font-bold hover:bg-[#e04a1a] transition-all duration-300 ff rounded-sm">
            View Projects ↗
          </button>
        </Link>
        <Link to="/about">
          <button className="border border-[#ccd6f6] text-[#ccd6f6] px-6 py-3 text-sm tracking-widest hover:border-[#FF5823] hover:text-[#FF5823] transition-all duration-300 ff rounded-sm">
            About Me
          </button>
        </Link>
      </motion.div>

      {/* Decorative initials */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.07 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="absolute right-8 top-1/3 text-[120px] sm:text-[200px] font-bold text-white select-none pointer-events-none hidden lg:block"
        style={{ lineHeight: 1 }}
      >
        IS
      </motion.div>
    </div>
  );
};

export default Home;