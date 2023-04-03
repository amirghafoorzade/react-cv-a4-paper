import React, { FC } from "react";
import { TITLE as FULL_TITLE, AboutMe as FullAboutMe, TAGS as FULL_TAGS } from "constants/data/Full";
import { TITLE as WP_TITLE, AboutMe as WpAboutMe, TAGS as WP_TAGS } from "constants/data/Wordpress";

export enum CvType {
  FullStack,
  Wordpress,
}

const cvType = CvType.Wordpress as CvType;

export const TITLE = () => {
  switch (cvType) {
    case CvType.FullStack:
      return FULL_TITLE;
    case CvType.Wordpress:
      return WP_TITLE;
  }
};

export const AboutMe: FC = () => {
  switch (cvType) {
    case CvType.FullStack:
      return <FullAboutMe />;
    case CvType.Wordpress:
      return <WpAboutMe />;
  }
};

export const TAGS = () => {
  switch (cvType) {
    case CvType.FullStack:
      return FULL_TAGS;
    case CvType.Wordpress:
      return WP_TAGS;
  }
};
