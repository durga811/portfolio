import React from "react";
import styles from "./About.module.css";

const aboutMe = [
  "Welcome to my portfolio!",
  "I'm Durga Prasad Pradhan, a final-year Civil Engineering dynamo at NIT Rourkela, igniting innovation in technology and software development.",
  "With a strong foundation in programming languages like C++, python and JavaScript, I've honed my skills in software development, including React and Node.js",
  "Let's connect and build something amazing together!",
];

const About = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.tag}>{"<p>"}</span>
      </p>
      {aboutMe.map((line, index) => (
        <p className={styles.line} key={index}>
          <span className={styles.tag}>{"   <span> "}</span>
          <span>{line}</span>
          <span className={styles.tag}>{" </span>"}</span>
        </p>
      ))}
      <p className={styles.line}>
        <span className={styles.tag}>{"</p>"}</span>
      </p>
    </div>
  );
};

export default About;
