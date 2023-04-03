import clsx from "clsx";
import React, { FC } from "react";
import { IHeadlineProps } from "./Headline.interface";
import styles from "./Headline.module.scss";

const Headline: FC<IHeadlineProps> = ({ children, variant = "primary" }) => {
  return (
    <h4 className={clsx(styles["headline"], styles[variant])}>
      <span></span>
      {children}
    </h4>
  );
};

export default Headline;
