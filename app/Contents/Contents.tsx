import React from "react";
import HomePage from "../Homepage/homepage";
import About from "../About/about";
import Projects from "../Projects/Projects";
import Contacts from "../Contacts/Contacts";

import Image from "next/image";
import garisHome from "../Image/garis-home.svg";
import { ThemeColorType } from "../page";

type SetThemeColorType = {
  themeColor: ThemeColorType;
};
export default function Contents({ themeColor }: SetThemeColorType) {
  return (
    <div
      className={`${
        themeColor.status === true ? `bg-bgHome` : `bg-bgLight`
      }lg:overflow-x-hidden`}
    >
      <div className="container flex h-fit lg:min-h-screen lg:max-w-5xl lg:max-w-4xl px-8 flex-col items-center justify-between lg:container lg:mx-auto">
        <div className="w-full h-full py-24 lg:py-0">
          <HomePage themeColor={themeColor} />
        </div>
        <div className="h-0" id="about">
          <Image src={garisHome} alt="garis pembatas" />
        </div>
        <div className="w-full h-fit lg:h-full py-24 lg:py-36 mb-10 lg:py-0 lg:my-10 flex align-center items-center">
          <About themeColor={themeColor} />
        </div>
        <div className="h-0" id="projects">
          <Image src={garisHome} alt="garis pembatas" />
        </div>
        <div className="w-full h-fit lg:h-full py-24 lg:py-36 mb-10 lg:py-0 lg:my-10 flex align-center items-center">
          <Projects themeColor={themeColor} />
        </div>
        <div className="h-0">
          <Image src={garisHome} alt="garis pembatas" />
        </div>
        <div
          className="w-full py-24 lg:py-0 h-fit lg:h-screen flex align-center items-center"
          id="contacts"
        >
          <Contacts themeColor={themeColor} />
        </div>
      </div>
    </div>
  );
}
