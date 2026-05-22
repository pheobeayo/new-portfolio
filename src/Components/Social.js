import React from "react";
import { FaLinkedinIn, FaMediumM } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { TbBrandGithub } from "react-icons/tb";
import { SiHashnode } from "react-icons/si";

const Social = () => {
  const links = [
    {
      href: "https://twitter.com/pheobeayolove1",
      icon: <BsTwitter />,
      label: "Twitter",
    },
    {
      href: "https://github.com/pheobeayo",
      icon: <TbBrandGithub />,
      label: "GitHub",
    },
    {
      href: "https://www.linkedin.com/in/ifeoluwa-sanni-569979151/",
      icon: <FaLinkedinIn />,
      label: "LinkedIn",
    },
    {
      href: "https://hashnode.com/@Piaslove",
      icon: <SiHashnode />,
      label: "Hashnode",
    },
    {
      href: "https://medium.com/@pheobeayo",
      icon: <FaMediumM />,
      label: "Medium",
    },
  ];

  return (
    <div className="flex flex-col items-center gap-5 text-base sm:text-xl">
      {links.map(({ href, icon, label }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className="text-sub hover:text-[#FF5823] transition-colors duration-200 hover:-translate-y-0.5 transform"
        >
          {icon}
        </a>
      ))}
      {/* Vertical line below */}
      <div className="w-px h-16 bg-[#233554]" />
    </div>
  );
};

export default Social;