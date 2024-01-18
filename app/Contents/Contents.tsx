import React from "react";
import HomePage from "../Homepage/homepage";
import About from "../About/about";
import Projects from "../Projects/Projects";
import Contacts from "../Contacts/Contacts";

import Image from "next/image";
import garisHome from "../Image/garis-home.svg";

export default function Contents() {
  return (
    <div className="sm:overflow-x-hidden bg-bgHome ">
      <div className="container flex h-fit sm:min-h-screen md:max-w-5xl sm:max-w-4xl px-8 flex-col items-center justify-between md:container sm:mx-auto">
        <div className="w-full h-full ">
          <HomePage />
        </div>
        <div className="h-4 md:w-full md:p-0 md:h-0 my-4">
          <Image src={garisHome} alt="garis pembatas" />
        </div>
        <div
          className="w-full md:h-screen py-36 sm:py-0 h-fit sm:h-full flex align-center items-center"
          id="about"
        >
          <About />
        </div>
        <div className="h-4 md:w-full md:p-0 md:h-0 my-4 md:mb-6">
          <Image src={garisHome} alt="garis pembatas" />
        </div>
        <div
          className="w-full h-fit my-16 py-36 sm:py-0 sm:my-10 flex align-center items-center"
          id="projects"
        >
          <Projects />
        </div>
        <div className="h-4 md:w-full md:p-0 md:h-0 my-4 md:mb-6">
          <Image src={garisHome} alt="garis pembatas" />
        </div>
        <div
          className="w-full md:h-screen py-36 sm:py-0 h-fit sm:h-full flex align-center items-center"
          id="contacts"
        >
          <Contacts />
        </div>
      </div>
    </div>
  );
}
