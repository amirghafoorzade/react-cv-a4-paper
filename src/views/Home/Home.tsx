import React, { FC } from "react";
import Sidebar from "components/Sidebar";
import Content from "components/Content";
import { IHomeProps } from "./Home.interface";
import styles from "./Home.module.scss";

const Home: FC<IHomeProps> = () => {
  return (
    <div className={styles["home"]}>
      <Sidebar />
      <Content />
    </div>
  );
};

export default Home;
