import Link from "next/link";
import React from "react";

const Footer: React.FC = () => {
  return (
    <div className="flex justify-between border-t border-t-lines text-secondary-muted">
      <div className="flex">
        <p className="block px-6 py-2 border-r border-r-lines hover:text-white">
          find me in:
        </p>
        <a
          href={"/"}
          className="block px-6 py-2 border-r border-r-lines hover:text-white"
        >
          _hello
        </a>
        <a
          href={"/about"}
          className="block px-6 py-2 border-r border-r-lines hover:text-white"
        >
          _about-me
        </a>
      </div>
      <div>
        <Link
          href={"/contact"}
          className="block px-6 py-2 border-l border-l-lines hover:text-white"
        >
          _contact_me
        </Link>
      </div>
    </div>
  );
};

export default Footer;
