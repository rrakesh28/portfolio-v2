"use client";
import ProjectCard from "@/components/ProjectCard";
import { Project } from "@/utils/types";
import React, { useEffect, useMemo, useState } from "react";
import { TiArrowSortedDown } from "react-icons/ti";

const Projects: React.FC = () => {
  const projects: Project[] = useMemo(() => [
    {
      year: "2025",
      title: "AI Assistant",
      banner_image: "/assets/images/project_banner.png",
      made_at: "OpenAI Labs",
      built_with: ["TypeScript", "Python", "React"],
      project_link: "https://example.com/ai-assistant",
      github_link: "https://github.com/username/ai-assistant",
    },
    {
      year: "2024",
      title: "E-Commerce Platform",
      banner_image: "/assets/images/project_banner.png",
      made_at: "Freelance",
      built_with: ["JavaScript", "Node.js", "MongoDB"],
      project_link: "https://example.com/ecommerce-platform",
      github_link: "https://github.com/username/ecommerce-platform",
    },
    {
      year: "2023",
      title: "Portfolio Website",
      banner_image: "/assets/images/project_banner.png",
      made_at: "Personal Project",
      built_with: ["HTML", "CSS", "JavaScript"],
      project_link: "https://example.com/portfolio",
      github_link: "https://github.com/username/portfolio-website",
    },
    {
      year: "2023",
      title: "Weather App",
      banner_image: "/assets/images/project_banner.png",
      made_at: "Hackathon",
      built_with: ["Python", "Flask", "OpenWeather API"],
      project_link: "https://example.com/weather-app",
      github_link: "https://github.com/username/weather-app",
    },
    {
      year: "2022",
      title: "Chat Application",
      banner_image: "/assets/images/project_banner.png",
      made_at: "University Project",
      built_with: ["Java", "Spring Boot", "WebSocket"],
      project_link: "https://example.com/chat-application",
      github_link: "https://github.com/username/chat-application",
    },
    {
      year: "2022",
      title: "Game Engine",
      banner_image: "/assets/images/project_banner.png",
      made_at: "Game Jam",
      built_with: ["C++", "OpenGL"],
      project_link: null,
      github_link: "https://github.com/username/game-engine",
    },
  ],[]);

  const technologies = ["HTML", "CSS", "JavaScript", "Django", "Laravel"];

  const [selectedTechnologies, setSelectedTechnologies] = useState<string[]>(
    []
  );

  const [filteredProjects, setFilteredProjects] = useState<Project[]>(projects);

  useEffect(() => {
    if (selectedTechnologies.length < 1) {
      setFilteredProjects(projects);
      return;
    }
    setFilteredProjects(
      projects.filter((project) =>
        selectedTechnologies.every((tech) => project.built_with.includes(tech))
      )
    );
  }, [selectedTechnologies,projects]);

  const onCheck = (technology: string) => {
    if (selectedTechnologies.includes(technology)) {
      setSelectedTechnologies(
        selectedTechnologies.filter((item) => item !== technology)
      );
    } else {
      setSelectedTechnologies([...selectedTechnologies, technology]);
    }
  };

  return (
    <div className="h-full flex">
      <div className="w-[22rem] border-r border-r-lines">
        <button className="w-full px-4 py-2 flex items-center gap-2 text-white border-b border-b-lines">
          <TiArrowSortedDown />
          <span>projects</span>
        </button>
        <div className="w-full mt-5 px-4 space-y-4">
          {technologies.map((technology, index) => {
            return (
              <div key={index} className="flex items-center space-x-4">
                <input
                  type="checkbox"
                  id={`checkbox-${index}`}
                  value={technology}
                  className="w-5 h-5 text-red-600 bg-gray-100 border-gray-300 rounded focus:ring-2"
                  onChange={() => {
                    onCheck(technology);
                  }}
                />

                <label
                  htmlFor={`checkbox-${index}`}
                  className={`${
                    selectedTechnologies.includes(technology)
                      ? "text-white"
                      : "text-gray-700"
                  } text-lg`}
                >
                  {technology}
                </label>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex-1 w-full border border-lines">
        <div className="custom__scrollbar w-full border-b border-b-lines flex overflow-auto">
          <div className="px-4 py-2 w-full flex items-center space-x-4 text-secondary-muted">
            {selectedTechnologies.length < 1 && (
              <p className="opacity-0">technologies</p>
            )}
            <div>
              <p>{selectedTechnologies.join(", ")}</p>
            </div>
            {selectedTechnologies.length > 0 && (
              <button onClick={() => setSelectedTechnologies([])}>x</button>
            )}
          </div>
        </div>
        <div className="w-full px-4 mt-6 grid grid-cols-3 gap-20">
          {filteredProjects.map((project, index) => {
            return (
              <div key={`project_${index}`}>
                <div className="flex gap-2 items-center">
                  <p className="text-secondary-blue">Project ${index + 1}</p>
                  <p className="text-secondary-muted">{`// ${project.title}`}</p>
                </div>
                <ProjectCard project={project} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
