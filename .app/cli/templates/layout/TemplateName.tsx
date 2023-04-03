import React, { FC } from "react";
import { ITemplateNameProps } from "./TemplateName.interface";
import styles from "./TemplateName.module.scss";

const TemplateName: FC<ITemplateNameProps> = ({ children }) => {
  return <div className={styles["templateName"]}>{children}</div>;
};

export default TemplateName;
