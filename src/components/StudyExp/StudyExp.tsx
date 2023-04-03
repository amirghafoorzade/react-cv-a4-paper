import React, { FC } from "react";
import { IStudyExpProps } from "./StudyExp.interface";
import styles from "./StudyExp.module.scss";

const StudyExp: FC<IStudyExpProps> = ({ photo, major, university, date }) => {
  return (
    <div className={styles["studyExp"]}>
      <img src={photo} alt="" className={styles["photo"]} />
    </div>
  );
};

export default StudyExp;
