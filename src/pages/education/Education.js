import React from "react";
import styles from "./Education.module.css";
import EducationCode from "../../components/education-code/EducationCode";

const graduationData = {
  school: "National Institute of Technology, Rourkela",
  degree: "Bachelor's of Technology",
  major: "Civil Engineering",
  cgpa: "7.98/10",
  start: "Dec 2020",
  end: "May 2024",
};

const highSchoolData = {
  school: "Gyanvikash Jr College, Chhatrapur",
  degree: "XII",
  major: "Science",
  percentage: "74.33",
  start: "Apr 2016",
  end: "Mar 2018",
};

const Education = () => {
  return (
    <div className={styles.container}>
      <div className={styles.container__left}>
        <h3>Graduation</h3>
        <EducationCode jsonData={graduationData} />
      </div>
      <div className={styles.container__right}>
        <h3>High School</h3>
        <EducationCode jsonData={highSchoolData} />
      </div>
    </div>
  );
};

export default Education;
