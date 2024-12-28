import React from "react";
import works from "@/data/work";
import Project from "./Project";
function Work() {
  const projects = works.slice().reverse();
  return (
    <div>
      {/* {projects.map((project, i) => {
        return <Project project={project} index={i} />;
      })} */}
    </div>
  );
}

export default Work;
