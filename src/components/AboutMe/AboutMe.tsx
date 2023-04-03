import React, { FC } from "react";
import { AboutMe as DataAboutMe } from "constants/data";
import { IAboutMeProps } from "./AboutMe.interface";
import styles from "./AboutMe.module.scss";

const AboutMe: FC<IAboutMeProps> = ({ style }) => {
  return (
    <div className={styles["aboutMe"]} style={style}>
      <DataAboutMe />
    </div>
  );
};

export default AboutMe;
