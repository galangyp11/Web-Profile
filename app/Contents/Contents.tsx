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
      }sm:overflow-x-hidden`}
    >
      <div className="container flex h-fit sm:min-h-screen md:max-w-5xl sm:max-w-4xl px-8 flex-col items-center justify-between md:container sm:mx-auto">
        <div className="w-full h-full py-24 sm:py-0">
          <HomePage themeColor={themeColor} />
        </div>
        <div className="h-0">
          <Image src={garisHome} alt="garis pembatas" />
        </div>
        <div
          className="w-full h-fit sm:h-full py-24 sm:py-36 mb-10 sm:py-0 sm:my-10 flex align-center items-center"
          id="about"
        >
          <About themeColor={themeColor} />
        </div>
        <div className="h-0">
          <Image src={garisHome} alt="garis pembatas" />
        </div>
        <div
          className="w-full h-fit sm:h-full py-24 sm:py-36 mb-10 sm:py-0 sm:my-10 flex align-center items-center"
          id="projects"
        >
          <Projects themeColor={themeColor} />
        </div>
        <div className="h-0">
          <Image src={garisHome} alt="garis pembatas" />
        </div>
        <div
          className="w-full py-24 sm:py-0 h-fit sm:h-screen border flex align-center items-center"
          id="contacts"
        >
          <Contacts themeColor={themeColor} />
        </div>
      </div>
    </div>
  );
}
