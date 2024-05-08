import React from "react";
import styles from "./Projects.module.css";
import ProjectCard from "../../components/project-card/ProjectCard";
import botImg from "../../assets/project-images/bot_img.png";
import vsCodePortfolioImage from "../../assets/project-images/vs-code-portfolio.png";
import encodeImage from "../../assets/project-images/encode.png";

const projectsData = [
  {
    id: 1,
    name: "IntelliChat Chatbot",
    image: botImg,
    description: " Chat interface using MERNStack using openAI API",
    tags: [
      "javascript",
      "react",
      "axios",
      "Express",
      "MongoDB",
      "Typescript",
      "OpenAI",
    ],
    source_code: "#",
    demo: "#",
  },
];

const Projects = () => {
  return (
    <>
      <h3>Stuff I've Built So Far</h3>
      <div className={styles.container}>
        {projectsData.map((project) => (
          <ProjectCard project={project} key={project.id} />
        ))}
      </div>
    </>
  );
};

export default Projects;
