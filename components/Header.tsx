"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Header: React.FC = () => {
  const pathname = usePathname();

  return (
    <div className="flex justify-between border-b border-b-lines text-secondary-muted">
      <div className="flex">
        <Link
          href={"/"}
          className="block pl-4 pr-16 py-4 border-r border-r-lines hover:text-white"
        >
          micheal-weaver
        </Link>
        <Link
          href={"/"}
          className={`${
            pathname === "/" ? "border-b-[4px] border-b-accent-orange " : ""
          } block px-10 py-4 border-r border-r-lines text-white hover:text-white`}
        >
          _hello
        </Link>
        <Link
          href={"/about"}
          className={`${
            pathname === "/about"
              ? "border-b-[4px] border-b-accent-orange "
              : ""
          }  block px-10 py-4 border-r border-r-lines hover:text-white`}
        >
          _about-me
        </Link>
        <Link
          href={"/projects"}
          className={`${
            pathname === "/projects"
              ? "border-b-[4px] border-b-accent-orange "
              : ""
          } block px-10 py-4 border-r border-r-lines hover:text-white`}
        >
          _projects
        </Link>
      </div>
      <div>
        <Link
          href={"/contact"}
          className={`${
            pathname === "/contact"
              ? "border-b-[4px] border-b-accent-orange "
              : ""
          } block px-10 py-4 border-l border-l-lines hover:text-white`}
        >
          _contact_me
        </Link>
      </div>
    </div>
  );
};

export default Header;
