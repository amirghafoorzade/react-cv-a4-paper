import React, { FC } from "react";
import ProfileImg from "assets/images/profile.jpg";
import Container from "layouts/Container";
import Headline from "components/Headline";
import { ISidebarProps } from "./Sidebar.interface";
import styles from "./Sidebar.module.scss";
import Field from "components/Field";

const Sidebar: FC<ISidebarProps> = ({ children }) => {
  return (
    <div className={styles["sidebar"]}>
      <img src={ProfileImg} alt="" className={styles["profile-img"]} />
      <h1 className={styles["name"]}>امیر غفورزاده</h1>
      <h2 className={styles["position"]}>Full Stack Developer</h2>
      <Container>
        <Headline>مشخصات فردی</Headline>
        <Field title="سن" desc="21 سال" />
        <Field title="جنسیت" desc="مرد" />
        <Field title="شهر محل سکونت" desc="اصفهان" />
        <Field title="وضعیت تاهل" desc="مجرد" />
        <Field title="خدمت سربازی" desc="معافیت تحصیلی" />
        <Field title="سابقه کاری" desc="4 سال" />
        <Headline>ترجیحات شغلی</Headline>
        <Field title="نوع قرارداد" desc="دورکاری ، تمام وقت" />
      </Container>
    </div>
  );
};

export default Sidebar;
