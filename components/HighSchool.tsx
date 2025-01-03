import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

const HighSchool: React.FC = () => {
  return (
    <div>
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
* High School Experience
* During high school, I developed a strong interest in technology and design, 
* which set the foundation for my career in web development. I participated in 
* various extracurricular activities, including art and coding clubs, where I 
* honed my skills and explored my creative side. High school was also a time 
* when I discovered my love for drawing, which became an integral part of my life.
*
*/`}
      </SyntaxHighlighter>
    </div>
  );
};

export default HighSchool;
