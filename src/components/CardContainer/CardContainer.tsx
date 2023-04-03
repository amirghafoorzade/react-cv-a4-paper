import React, { FC } from "react";
import { ICardContainerProps } from "./CardContainer.interface";
import styles from "./CardContainer.module.scss";

const CardContainer: FC<ICardContainerProps> = ({ children }) => {
  return <div className={styles["cardContainer"]}>{children}</div>;
};

export default CardContainer;
