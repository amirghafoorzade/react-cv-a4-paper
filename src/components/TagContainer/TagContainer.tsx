import React, { FC } from "react";
import { ITagContainerProps } from "./TagContainer.interface";
import styles from "./TagContainer.module.scss";

const TagContainer: FC<ITagContainerProps> = ({ children, style }) => {
  return (
    <div style={style} className={styles["tagContainer"]}>
      {children}
    </div>
  );
};

export default TagContainer;
