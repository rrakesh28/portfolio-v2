import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
const Footer: React.FC = () => {
  return (
    <div className="flex justify-between border-t border-t-lines text-secondary-muted">
      <div className="flex">
        <p className="block px-6 py-2 border-r border-r-lines hover:text-white">
          find me in:
        </p>
        <a
          href={"https://x.com/theamigoooooo"}
          target="_blank"
          className="px-6 py-2 border-r border-r-lines hover:text-white flex items-center"
        >
          <FaXTwitter className="text-secondary-muted" />
        </a>
        <a
          href={"https://github.com/rrakesh28"}
          className="px-6 py-2 border-r border-r-lines hover:text-white flex items-center"
        >
          <FaGithub className="text-secondary-muted" />
        </a>
        <a
          href={"https://www.linkedin.com/in/rakeshrebbavarapu/"}
          className="px-6 py-2 border-r border-r-lines hover:text-white flex items-center"
        >
          <FaLinkedin className="text-secondary-muted" />
        </a>
      </div>
      <div>
        <a
          href={"https://buymeacoffee.com/rebbavarapurakesh"}
          target="_blank"
          className="block px-6 py-2 border-l border-l-lines hover:text-white"
        >
          _buy_me_a_coffee
        </a>
      </div>
    </div>
  );
};

export default Footer;
