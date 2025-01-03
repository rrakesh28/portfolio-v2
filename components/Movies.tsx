import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

const Movies: React.FC = () => {
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
* My Interest: Movies
* I'm an avid movie enthusiast who enjoys exploring films from a variety of genres, 
* ranging from thought-provoking dramas to action-packed blockbusters. I appreciate 
* the art of storytelling, cinematography, and the emotional depth that movies bring. 
* Watching movies is not just entertainment for me—it’s a way to connect with diverse 
* perspectives, cultures, and ideas. My love for movies often inspires my creativity 
* and gives me fresh insights into problem-solving and design.
*/`}
      </SyntaxHighlighter>
    </div>
  );
};

export default Movies;
