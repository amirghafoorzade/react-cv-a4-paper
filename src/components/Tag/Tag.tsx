import React, { FC } from "react";
import { ITagProps } from "./Tag.interface";
import styles from "./Tag.module.scss";

const Tag: FC<ITagProps> = ({ children }) => {
  return <div className={styles["tag"]}>{children}</div>;
};

export default Tag;
