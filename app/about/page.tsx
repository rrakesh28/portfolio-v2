"use client";

import React, { useState } from "react";
import { BsFillTerminalFill } from "react-icons/bs";
import { TbInfoCircleFilled } from "react-icons/tb";
import { GiArtificialHive } from "react-icons/gi";
import { TiArrowSortedDown } from "react-icons/ti";
import { IoMdMail } from "react-icons/io";
import { MdLocalPhone } from "react-icons/md";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { IoIosArrowForward } from "react-icons/io";
import { FaFolder } from "react-icons/fa";
import { FaMarkdown } from "react-icons/fa";
import AboutMe from "@/components/AboutMe";
import Drawing from "@/components/Drawing";
import Reading from "@/components/Reading";
import Movies from "@/components/Movies";
import HighSchool from "@/components/HighSchool";
import University from "@/components/University";
import CodeSnippetsCarousel from "@/components/CodeSnippetsCarousel";

type Page<T = {}> = {
  name: string;
  component: React.ComponentType<T>;
};

const About: React.FC = () => {
  const pages: Page[] = [
    { name: "about-me", component: AboutMe },
    { name: "drawing", component: Drawing },
    { name: "reading", component: Reading },
    { name: "movies", component: Movies },
    { name: "high-school", component: HighSchool },
    { name: "university", component: University },
  ];

  const [activePages, setActivePages] = useState<Page[]>([]);
  const [activePage, setActivePage] = useState<Page | null>(null);

  const onPageClick = (page: Page) => {
    const pageExists = activePages.some((p) => p.name === page.name);

    if (!pageExists) {
      setActivePages([...activePages, page]);
    }

    setActivePage(page);
  };

  const removeActivePage = (index: number) => {
    const updatedActivePages = [...activePages];
    const removedPage = updatedActivePages.splice(index, 1)[0];

    setActivePages(updatedActivePages);

    if (activePage == removedPage) {
      if (updatedActivePages.length == 0) {
        setActivePage(null);
      } else {
        const newIndex =
          index === 0 ? 0 : Math.min(index, updatedActivePages.length - 1);
        setActivePage(updatedActivePages[newIndex]);
      }
    }
  };

  return (
    <div className="h-full flex">
      <div className="p-4 border-r border-r-lines">
        <BsFillTerminalFill className="text-secondary-muted" size={24} />
        <TbInfoCircleFilled className="text-secondary-muted mt-4" size={28} />
        <GiArtificialHive className="text-secondary-muted mt-4" size={26} />
      </div>
      <div className="w-[22rem] border-r border-r-lines">
        <div>
          <button className="w-full px-4 py-2 flex items-center gap-2 text-white border-b border-b-lines">
            <TiArrowSortedDown />
            <span>personal-info</span>
          </button>
          <div className="w-full">
            <div className="px-4">
              <Disclosure as="div" defaultOpen={true}>
                {({ open }) => (
                  <>
                    <DisclosureButton className="group flex w-full items-center gap-2">
                      <IoIosArrowForward
                        className={`text-secondary-muted ${
                          open ? "transform rotate-90" : ""
                        }`}
                      />
                      <FaFolder className="text-accent-orange" />
                      <span
                        className={`${
                          open ? "text-white" : "text-secondary-muted"
                        } text-sm/6`}
                      >
                        bio
                      </span>
                    </DisclosureButton>
                    <DisclosurePanel className="mt-2 text-sm/5 text-white/50">
                      <button
                        onClick={() => {
                          setActivePages([...activePages, pages[0]]);
                          setActivePage(pages[0]);
                        }}
                        className="flex items-center gap-2 pl-6 mt-2"
                      >
                        <FaMarkdown className="text-secondary-muted" />
                        <span>about-me</span>
                      </button>
                    </DisclosurePanel>
                  </>
                )}
              </Disclosure>
              <Disclosure as="div" defaultOpen={true} className="mt-4">
                {({ open }) => (
                  <>
                    <DisclosureButton className="group flex w-full items-center gap-2">
                      <IoIosArrowForward
                        className={`text-secondary-muted ${
                          open ? "transform rotate-90" : ""
                        }`}
                      />
                      <FaFolder className="text-accent-green" />
                      <span
                        className={`${
                          open ? "text-white" : "text-secondary-muted"
                        } text-sm/6`}
                      >
                        intrests
                      </span>
                    </DisclosureButton>
                    <DisclosurePanel className="mt-2 text-sm/5 text-white/50">
                      <button
                        onClick={() => {
                          onPageClick(pages[1]);
                        }}
                        className="flex items-center gap-2 pl-6 mt-2"
                      >
                        <FaMarkdown className="text-secondary-muted" />
                        <span>drawing</span>
                      </button>
                      <button
                        onClick={() => {
                          onPageClick(pages[2]);
                        }}
                        className="flex items-center gap-2 pl-6 mt-2"
                      >
                        <FaMarkdown className="text-secondary-muted" />
                        <span>reading</span>
                      </button>
                      <button
                        onClick={() => {
                          onPageClick(pages[3]);
                        }}
                        className="flex items-center gap-2 pl-6 mt-2"
                      >
                        <FaMarkdown className="text-secondary-muted" />
                        <span>movies</span>
                      </button>
                    </DisclosurePanel>
                  </>
                )}
              </Disclosure>
              <Disclosure as="div" defaultOpen={true} className="mt-4">
                {({ open }) => (
                  <>
                    <DisclosureButton className="group flex w-full items-center gap-2">
                      <IoIosArrowForward
                        className={`text-secondary-muted ${
                          open ? "transform rotate-90" : ""
                        }`}
                      />
                      <FaFolder className="text-accent-blue" />
                      <span
                        className={`${
                          open ? "text-white" : "text-secondary-muted"
                        } text-sm`}
                      >
                        bio
                      </span>
                    </DisclosureButton>
                    <DisclosurePanel className="mt-2 text-sm/5 text-white/50">
                      <button
                        onClick={() => {
                          onPageClick(pages[5]);
                        }}
                        className="flex items-center gap-2 pl-6 mt-2"
                      >
                        <FaMarkdown className="text-secondary-muted" />
                        <span>university</span>
                      </button>
                      <button
                        onClick={() => {
                          onPageClick(pages[4]);
                        }}
                        className="flex items-center gap-2 pl-6 mt-2"
                      >
                        <FaMarkdown className="text-secondary-muted" />
                        <span>high-scholl</span>
                      </button>
                    </DisclosurePanel>
                  </>
                )}
              </Disclosure>
            </div>
          </div>
        </div>
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
      </div>
      <div className="flex-2 w-full grid grid-cols-2">
        <div className="border border-lines">
          <div className="custom__scrollbar w-full border-b border-b-lines flex overflow-auto">
            {activePages.map((page, index) => {
              return (
                <div
                  key={`page_${index}`}
                  className={`${
                    activePage === page ? "border-b border-accent-orange" : ""
                  } px-4 py-2 w-36 flex items-center justify-between text-secondary-muted border-r border-r-lines`}
                >
                  <button
                    onClick={() => onPageClick(page)}
                    className="text-sm w-full flex-1 whitespace-nowrap"
                  >
                    {page.name}
                  </button>
                  <button onClick={() => removeActivePage(index)}>x</button>
                </div>
              );
            })}
          </div>
          {activePage && activePage.component && <activePage.component />}
        </div>
        <div className="border-lines">
          <CodeSnippetsCarousel />
        </div>
      </div>
    </div>
  );
};

export default About;
