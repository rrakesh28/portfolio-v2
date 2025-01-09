import { Project } from "@/utils/types";
import Image from "next/image";
import React from "react";

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <div className=" rounded-xl border border-lines h-full">
      <Image
        src={project.banner_image}
        height={145}
        width={370}
        alt={project.title || "Project Banner"}
        className="w-full h-[145px] rounded-t-xl object-cover"
      />
      <div className="p-6 rounded-b-xl bg-primary-light">
        <p className="text-secondary-muted">
          @ {project.made_at}, {project.year}
        </p>
        <div className="flex gap-4 mt-2">
          {project.project_link && (
            <a
              href={project.project_link}
              target="_blank"
              className="text-white bg-secondary-blue px-4 py-2 rounded-lg"
            >
              view-project
            </a>
          )}
          {project.github_link && (
            <a
              href={project.github_link}
              target="_blank"
              className="text-white border border-secondary-blue px-4 py-2 rounded-lg"
            >
              view-github
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
