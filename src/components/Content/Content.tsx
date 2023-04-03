import React, { FC } from "react";
import Container from "layouts/Container";
import Headline from "components/Headline";
import TagContainer from "components/TagContainer";
import Tag from "components/Tag";
import CardContainer from "components/CardContainer";
import WorkExp from "components/WorkExp";
import StudyExp from "components/StudyExp";
import WorkExpPhoto from "assets/images/WorkExpPhoto.svg";
import StudyPhoto from "assets/images/StudyPhoto.svg";
import { IContentProps } from "./Content.interface";
import styles from "./Content.module.scss";
import AboutMe from "components/AboutMe/AboutMe";
import { TAGS } from "constants/data";

const Content: FC<IContentProps> = () => {
  return (
    <div className={styles["content"]}>
      <Container>
        <Headline variant="secondary">درباره من</Headline>
        <AboutMe style={{ marginTop: "2mm" }} />
        <Headline variant="secondary">سایر مهارت ها</Headline>
        <TagContainer style={{ marginTop: "2mm" }}>
          {TAGS().map((t, index) => (
            <Tag key={index}>{t}</Tag>
          ))}
        </TagContainer>
        <Headline variant="secondary">سوابق شغلی</Headline>
        <CardContainer>
          <WorkExp
            photo={WorkExpPhoto}
            title="تاراسپهر"
            position="برنامه نویس فرانت اند"
            desc="فعالیت تخصصی در زمینه تولید و سفارشی سازی سیستم های اطلاعاتی سازمانی در
          حوزه محصولات برنامه ریزی راهبردی، بودجه و اعتبارات، مدیریت پروژه و قراردادها"
            date="از 99 تا کنون"
          />
          <WorkExp
            photo={WorkExpPhoto}
            title="فریلنسر"
            position="برنامه نویس فول استک"
            desc="طراحی و سفارشی سازی سایت و داشبورد با استفاده از مطابق ترین و بروزترین
            تکنولوژی بسته به خواست کارفرما"
            date="از 97 تا کنون"
          />
        </CardContainer>
        <Headline variant="secondary">سوابق تحصیلی</Headline>
        <CardContainer>
          <StudyExp photo={StudyPhoto} major="مهندسی کامپیوتر" university="دانشگاه آزاد" date="از 99 تا کنون" />
          <StudyExp photo={StudyPhoto} major="ریاضی" university="استعداد های درخشان" date="از 96 تا 99" />
        </CardContainer>
      </Container>
    </div>
  );
};

export default Content;
