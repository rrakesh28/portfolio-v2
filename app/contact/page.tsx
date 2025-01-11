import React from "react";
import { IoMdMail } from "react-icons/io";
import { MdLocalPhone } from "react-icons/md";
import { TiArrowSortedDown } from "react-icons/ti";
import { FaLink } from "react-icons/fa6";

const Contact: React.FC = () => {
  return (
    <div className="h-full flex">
      <div className="w-[22rem] border-r border-r-lines">
        <div className="mt-4">
          <button className="w-full px-4 py-2 flex items-center gap-2 text-white border-b border-b-lines border-t border-t-lines">
            <TiArrowSortedDown />
            <span>contacts</span>
          </button>
          <div className="p-4">
            <a
              href="mailto:rebbavarapurakesh@gmail.com"
              className="flex items-center gap-2"
            >
              <IoMdMail className="text-secondary-muted" />
              <span className="text-secondary-muted">
                rebbavarapurakesh@gmail.com
              </span>
            </a>
            <a href="tel:+917288071875" className="flex items-center gap-2">
              <MdLocalPhone className="text-secondary-muted" />
              <span className="text-secondary-muted">+91 7288071875</span>
            </a>
          </div>
        </div>
        <div className="mt-4">
          <button className="w-full px-4 py-2 flex items-center gap-2 text-white border-b border-b-lines border-t border-t-lines">
            <TiArrowSortedDown />
            <span>find-me-also-in</span>
          </button>
          <div className="p-4">
            <a href="https://linkedin.com" className="flex items-center gap-2">
              <FaLink className="text-secondary-muted" />
              <span className="text-secondary-muted">LinkedIn</span>
            </a>
            <a href="https://github.com" className="flex items-center gap-2">
              <FaLink className="text-secondary-muted" />
              <span className="text-secondary-muted">Github</span>
            </a>
            <a href="https://twitter.com" className="flex items-center gap-2">
              <FaLink className="text-secondary-muted" />
              <span className="text-secondary-muted">Twitter</span>
            </a>
          </div>
        </div>
      </div>
      <div className="flex-2 w-full grid grid-cols-2">
        <div className="border border-lines">
          <div className="custom__scrollbar w-full border-b border-b-lines flex overflow-auto">
            <div
              className={`px-4 py-2 w-36 flex items-center justify-between text-secondary-muted border-r border-r-lines`}
            >
              <p className="text-sm w-full flex-1 whitespace-nowrap">contact</p>
              <button>x</button>
            </div>
          </div>
          <div>
            <p>asdf</p>
          </div>
        </div>
        <div className="border-lines"></div>
      </div>
    </div>
  );
};

export default Contact;
