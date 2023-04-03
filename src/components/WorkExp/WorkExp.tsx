import React, { FC } from "react";
import { IWorkExpProps } from "./WorkExp.interface";
import styles from "./WorkExp.module.scss";

const WorkExp: FC<IWorkExpProps> = ({ photo, title, position, desc, date }) => {
  return (
    <div className={styles["workExp"]}>
      <img src={photo} alt="" className={styles["photo"]} />
      <div className={styles["content"]}>
        <div className={styles["header"]}>
          <h3>{title}</h3>
          <p>{position}</p>
        </div>
        <p className={styles["desc"]}>{desc}</p>
      </div>
      <p className={styles["date"]}>{date}</p>
    </div>
  );
};

export default WorkExp;
