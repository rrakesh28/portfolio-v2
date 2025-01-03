import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

const Reading: React.FC = () => {
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
* My Interest: Reading
* I have a deep love for reading, which allows me to explore new worlds, ideas, 
* and perspectives. Whether it's fiction, non-fiction, or technical books, 
* reading is my go-to activity for learning, relaxation, and inspiration. 
* It fuels my creativity, sharpens my mind, and continuously broadens my horizons.
*/`}
      </SyntaxHighlighter>
    </div>
  );
};

export default Reading;
