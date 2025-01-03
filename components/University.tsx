import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

const University: React.FC = () => {
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
* University Experience
* My time at university was transformative, providing me with the skills, 
* knowledge, and experiences that shaped my career and personal growth. 
* I immersed myself in academics, participated in extracurricular activities, 
* and connected with diverse peers who inspired me to think differently. 
* University further strengthened my passion for reading and learning, 
* as I explored various subjects and perspectives.
*/`}
      </SyntaxHighlighter>
    </div>
  );
};

export default University;
