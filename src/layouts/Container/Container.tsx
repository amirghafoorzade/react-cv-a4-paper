import clsx from "clsx";
import React, { FC } from "react";
import { IContainerProps } from "./Container.interface";
import styles from "./Container.module.scss";

const Container: FC<IContainerProps> = ({ children, className }) => {
  return <div className={clsx(styles["container"], className)}>{children}</div>;
};

export default Container;
