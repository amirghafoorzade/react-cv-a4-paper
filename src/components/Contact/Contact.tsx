import React, { FC } from "react";
import { IContactProps } from "./Contact.interface";
import styles from "./Contact.module.scss";

const Contact: FC<IContactProps> = ({ image, title }) => {
  return (
    <a className={styles["contact"]}>
      <img src={image} alt={title} />
      <span>{title}</span>
    </a>
  );
};

export default Contact;
