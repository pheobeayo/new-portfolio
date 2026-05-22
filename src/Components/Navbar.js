import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { RiMenu4Fill } from "react-icons/ri";
import { MdClose } from "react-icons/md";
import { motion } from "framer-motion";
import Social from "./Social";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const location = useLocation();

  const navLinks = [
    { to: "/about", label: "About" },
    { to: "/projects", label: "Projects" },
    { to: "/experience", label: "Experience" },
    { to: "/certificates", label: "Certification" },
    { to: "/resume", label: "Resume" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="py-5 px-5 md:px-12 ff">
      <section className="flex items-center justify-between">
        {/* Logo — styled like KR.dev but personalised */}
        <Link to="/">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2"
          >
            <div
              className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold"
              style={{ background: "#FF5823", color: "#0a192f" }}
            >
              IS
            </div>
            <span className="text-white text-sm font-light tracking-widest hidden sm:block">
              .dev
            </span>
          </motion.div>
        </Link>

        {/* Desktop nav */}
        <motion.nav
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="hidden sm:flex items-center gap-8 text-sm"
        >
          {navLinks.map((link, i) =>
            link.label === "Resume" ? (
              <motion.div
                key={link.label}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i + 0.2 }}
              >
                <Link
                  to={link.to}
                  className="border border-[#FF5823] text-[#FF5823] px-4 py-1.5 rounded-sm text-xs tracking-widest hover:bg-[#FF5823] hover:text-[#0a192f] transition-all duration-300"
                >
                  Resume
                </Link>
              </motion.div>
            ) : (
              <motion.div
                key={link.label}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i + 0.2 }}
              >
                <Link
                  to={link.to}
                  className={`relative tracking-wider transition-colors duration-200 ${
                    isActive(link.to)
                      ? "text-[#FF5823]"
                      : "text-[#ccd6f6] hover:text-[#FF5823]"
                  }`}
                >
                  {link.label}
                  {isActive(link.to) && (
                    <span className="absolute -bottom-1 left-0 w-full h-px bg-[#FF5823]" />
                  )}
                </Link>
              </motion.div>
            )
          )}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <a
              href="mailto:pheobeayo@gmail.com"
              className="text-[#ccd6f6] hover:text-[#FF5823] tracking-wider transition-colors duration-200"
            >
              Contact
            </a>
          </motion.div>
        </motion.nav>

        {/* Mobile hamburger */}
        <div
          className="sm:hidden text-4xl z-50 cursor-pointer text-white"
          onClick={() => setShow(!show)}
        >
          {show ? <MdClose /> : <RiMenu4Fill />}
        </div>
      </section>

      {/* Mobile menu */}
      <nav
        className={`sm:hidden top-0 right-0 bg-navv absolute h-screen w-2/3 z-40 ease-in-out duration-300 flex items-center justify-center
        ${show ? "translate-x-0" : "translate-x-full"}`}
        style={{ boxShadow: "-4px 0 30px rgba(0,0,0,0.5)" }}
      >
        <div className="flex flex-col text-xl gap-8 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              onClick={() => setShow(false)}
              className={`tracking-widest transition-colors duration-200 ${
                isActive(link.to)
                  ? "text-[#FF5823]"
                  : "text-[#ccd6f6] hover:text-[#FF5823]"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="mailto:pheobeayo@gmail.com"
            onClick={() => setShow(false)}
            className="text-[#ccd6f6] hover:text-[#FF5823] tracking-widest"
          >
            Contact
          </a>
        </div>
      </nav>

      <div className="fixed bottom-32 right-4 sm:right-8">
        <Social />
      </div>
    </header>
  );
};

export default Navbar;