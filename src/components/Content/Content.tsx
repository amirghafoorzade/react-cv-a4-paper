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

const Content: FC<IContentProps> = () => {
  return (
    <div className={styles["content"]}>
      <Container>
        <Headline variant="secondary">درباره من</Headline>
        <p style={{ marginTop: "2mm" }}>
          برنامه نویس فول استک متمرکز بر <b>Typescript</b> و <b>Javascript</b> و<b>ReactJs</b> در حوزه Frontend و <b>Dotnet Core</b> در حوزه Backend . تجربه کار
          با دیتابیس های <b>PostgreSql</b> و <b>MsSql(SqlServer)</b> .
        </p>
        <p>
          آشنا با استاندارد های <b>UI</b> و <b>UX</b> و مباحث SSR و Module Bundling با ابزار های <b>NextJs</b> و <b>Webpack</b> .
        </p>
        <p>
          تجربه کار با State Management های <b>Redux</b> و <b>Recoil</b> و <b>Zustand</b> و <b>React Context</b> برای مدیریت State ها در React .
        </p>
        <p>
          تجربه کار با <b>React Router</b> برای مباحث Routing در React .
        </p>
        <p>درک پروتکل HTTP و ساختار Rest API ها و MVC Design Pattern .</p>
        <p>آشنا با سینتکس و ساختار Php و ExpressJs برای همکاری موثر تر با تیم توسعه بک اند .</p>
        <p>علاقه مند به کار تیمی و گروهی و یادگیری مداوم تکنولوژی های به روز .</p>
        <p>آشنا با مستند سازی (documentation) و تست نویسی .</p>
        <Headline variant="secondary">سایر مهارت ها</Headline>
        <TagContainer style={{ marginTop: "2mm" }}>
          <Tag>Git</Tag>
          <Tag>GitHub</Tag>
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
            position="برنامه نویس فرانت اند"
            desc="طراحی و سفارشی سازی سایت و داشبورد با استفاده از مطابق ترین و بروزترین
            تکنولوژی بسته به خواست کارفرما (Wordpress, NextJs, ReactJs)"
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
