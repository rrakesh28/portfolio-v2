import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

const AboutMe: React.FC = () => {
  return (
    <div className="text-secondary-muted">
      <SyntaxHighlighter
        language="javascript"
        style={docco}
        customStyle={{
          background: "#011627",
          width: "700px",
        }}
        wrapLines={true}
        wrapLongLines={true}
      >
        {`/** 
* About me
* I have 5 years of experience in web development.
* Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
* tempor incididunt ut labore et dolore magna aliqua.
* Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
* nisi ut aliquip ex ea commodo consequat.
* Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
* dolore eu fugiat nulla pariatur.
* Excepteur sint occaecat officia deserunt mollit anim id est laborum.
*/`}
      </SyntaxHighlighter>
    </div>
  );
};

export default AboutMe;
