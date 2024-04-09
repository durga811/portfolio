import React from "react";
import styles from "./ContactsCode.module.css";

const socialsData = [
  {
    social: "website",
    link: "durgaprasadpradhan.me",
    href: "https://durgaprasadpradhan.me",
  },
  {
    social: "email",
    link: "pradhandurgaprasad8114@gmail.com",
    href: "mailto:pradhandurgaprasad8114@gmail.com",
  },
  {
    social: "github",
    link: "durga811_github",
    href: "https://github.com/durga811",
  },
  {
    social: "linkedin",
    link: "Durgaprasad_NITR",
    href: "https://www.linkedin.com/in/durga811/",
  },
  // {
  //   social: "Leetcode",
  //   link: "Debasish_870",
  //   href: "https://leetcode.com/mishradebasish870/",
  // },
  // {
  //   social: "telegram",
  //   link: "Debasish__",
  //   href: "https://t.me/debasish870",
  // },
];

const ContactsCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>.socials</span> &#123;
      </p>
      {socialsData.map((socialItem, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;{socialItem.social} :{" "}
          <a href={socialItem.href} target="_blank" rel="noreferrer">
            {socialItem.link}
          </a>
        </p>
      ))}
      <p className={styles.line}>&#125;</p>
    </div>
  );
};

export default ContactsCode;
