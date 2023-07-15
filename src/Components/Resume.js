import React from "react";
import res from "../Images/res.pdf";

const Resume = () => {
  return (
      <iframe
        title="Ifeoluwa Sanni Resume"
        id="resume"
        src={res}
        className="w-full h-screen pdf"
      ></iframe>
  );
};

export default Resume;
