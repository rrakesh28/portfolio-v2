"use client";
import React, { useState } from "react";
import { IoMdMail } from "react-icons/io";
import { MdLocalPhone } from "react-icons/md";
import { TiArrowSortedDown } from "react-icons/ti";
import { FaLink } from "react-icons/fa6";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/prism";

const Contact: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const getFormattedDate = (): string => {
    const options: Intl.DateTimeFormatOptions = {
      weekday: "short",
      day: "2-digit",
      month: "short",
    };
    return new Date().toLocaleDateString("en-US", options);
  };

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Message sent successfully!");
  };

  return (
    <div className="h-full flex">
      <div className="w-[22rem] border-r border-r-lines">
        <div className="mt-4">
          <button className="w-full px-4 flex items-center gap-2 text-white border-b border-b-lines">
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
            <a
              href="https://www.linkedin.com/in/rakeshrebbavarapu/"
              className="flex items-center gap-2"
            >
              <FaLink className="text-secondary-muted" />
              <span className="text-secondary-muted">LinkedIn</span>
            </a>
            <a
              href="https://github.com/rrakesh28"
              className="flex items-center gap-2"
            >
              <FaLink className="text-secondary-muted" />
              <span className="text-secondary-muted">Github</span>
            </a>
            <a
              href="https://x.com/theamigoooooo"
              className="flex items-center gap-2"
            >
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
          <div className="flex justify-center">
            <form onSubmit={submit} className="w-[30rem] mt-[10rem] ">
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-secondary-muted font-medium mb-2"
                >
                  _name:
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full text-white px-4 py-2 bg-primary-light border border-lines rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-secondary-muted font-medium mb-2"
                >
                  _email:
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full text-white px-4 py-2 bg-primary-light border border-lines rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-secondary-muted font-medium mb-2"
                >
                  _message:
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full text-white px-4 py-2 bg-primary-light border border-lines rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                ></textarea>
              </div>

              <div>
                <button
                  type="submit"
                  className="text-white bg-secondary-blue px-4 py-2 rounded-lg"
                >
                  submit-messgae
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="border-lines">
          <SyntaxHighlighter
            language="javascript"
            showLineNumbers={true}
            style={nightOwl}
            customStyle={{
              fontSize: "16px",
              height: "500px",
              width: "600px",
              overflow: "hidden",
            }}
          >
            {`
const button = document.querySelector('#sendBtn');

const message = {
	name: "${name}",
	email: "${email}",
	message: "${message}",
	date: "${getFormattedDate()}",
}

button.addEventListener('click', () => {
	form.send(message);
})`}
          </SyntaxHighlighter>
        </div>
      </div>
    </div>
  );
};

export default Contact;
