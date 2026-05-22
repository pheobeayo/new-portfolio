import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

const SharedLayout = ({ show, setShow }) => {
  return (
    <div className="relative min-h-screen">
      <Navbar show={show} setShow={setShow} />
      <main>
        <Outlet />
      </main>
    
      <footer className="py-6 px-5 md:px-12 lg:pl-24 ff">
        <p className="text-sub text-xs tracking-widest">
          © {new Date().getFullYear()} Ifeoluwa Sanni — Built with React &amp; ☕
        </p>
      </footer>
    </div>
  );
};

export default SharedLayout;