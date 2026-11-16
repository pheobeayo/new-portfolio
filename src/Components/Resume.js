import React from "react";
import res from "../Images/res.pdf";

const Resume = () => {
  return (
    <div className="px-5 sm:px-8 md:px-12 lg:pl-24 ff pt-4">
      <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
        <div>
          <p className="text-[#FF5823] text-xs tracking-widest mb-1">— Resume</p>
          <h1 className="text-name text-2xl sm:text-3xl font-bold">Ifeoluwa Sanni</h1>
        </div>
        {/* Phones often can't render an embedded PDF, so always offer the file. */}
        <a
          href={res}
          download="Ifeoluwa-Sanni-Resume.pdf"
          className="bg-[#FF5823] text-[#0a192f] px-5 py-2.5 text-xs tracking-widest font-bold hover:bg-[#e04a1a] transition-all duration-300 rounded-sm"
        >
          Download PDF ↓
        </a>
      </div>
      <iframe
        title="Ifeoluwa Sanni Resume"
        id="resume"
        src={res}
        className="w-full h-[85vh] rounded-sm border border-[#233554] bg-white"
      ></iframe>
    </div>
  );
};

export default Resume;
