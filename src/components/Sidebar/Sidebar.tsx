import React, { FC } from "react";
import ProfileImg from "assets/images/profile.jpg";
import ContactCallImg from "assets/images/PhoneIcon.png";
import ContactMailImg from "assets/images/MailIcon.png";
import Container from "layouts/Container";
import ContactContainer from "layouts/ContactContainer/ContactContainer";
import Headline from "components/Headline";
import Field from "components/Field";
import Contact from "components/Contact/Contact";
import { ISidebarProps } from "./Sidebar.interface";
import styles from "./Sidebar.module.scss";
import { TITLE } from "constants/data";

const Sidebar: FC<ISidebarProps> = ({ children }) => {
  return (
    <div className={styles["sidebar"]}>
      <img src={ProfileImg} alt="" className={styles["profile-img"]} />
      <h1 className={styles["name"]}>امیر غفورزاده</h1>
      <h2 className={styles["position"]}>{TITLE()}</h2>
      <Container className={styles["desc-cont"]}>
        <Headline>مشخصات فردی</Headline>
        <Field title="سن" desc="21 سال" />
        <Field title="جنسیت" desc="مرد" />
        <Field title="شهر محل سکونت" desc="اصفهان" />
        <Field title="وضعیت تاهل" desc="مجرد" />
        <Field title="خدمت سربازی" desc="معافیت تحصیلی" />
        <Field title="سابقه کاری" desc="4 سال" />
        <Headline>ترجیحات شغلی</Headline>
        <Field title="نوع قرارداد" desc="دورکاری ، تمام وقت" />
        <ContactContainer>
          <Contact image={ContactCallImg} title="+98-913-323-7325" />
          <Contact image={ContactMailImg} title="ghafourzadea@gmail.com" />
        </ContactContainer>
      </Container>
    </div>
  );
};

export default Sidebar;
