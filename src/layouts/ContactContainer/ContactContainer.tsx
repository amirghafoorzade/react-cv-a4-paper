import React, { FC } from "react";
import { IContactContainerProps } from "./ContactContainer.interface";
import styles from "./ContactContainer.module.scss";

const ContactContainer: FC<IContactContainerProps> = ({ children }) => {
  return <div className={styles["contactContainer"]}>{children}</div>;
};

export default ContactContainer;
