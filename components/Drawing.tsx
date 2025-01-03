import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
const Drawing: React.FC = () => {
  return (
    <div>
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
* My Interest: Drawing
* I have a passion for drawing and sketching, which allows me to express 
* creativity and explore ideas visually. Whether it's realistic portraits, 
* abstract concepts, or experimenting with colors and textures, I find 
* drawing to be both relaxing and inspiring. It has greatly influenced my 
* perspective on design and problem-solving in web development.
*/`}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export default Drawing;
