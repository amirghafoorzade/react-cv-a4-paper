import React, { FC } from "react";
import { IFieldProps } from "./Field.interface";
import styles from "./Field.module.scss";

const Field: FC<IFieldProps> = ({ title, desc }) => {
  return (
    <div className={styles["field"]}>
      <span>{title} :</span>
      <span>{desc}</span>
    </div>
  );
};

export default Field;
