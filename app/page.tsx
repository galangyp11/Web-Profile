"use client";
import Navbar from "./Navbar/Navbar(CSR)";
import HomePage from "./Homepage/homepage";
import About from "./About/about";
import Projects from "./Projects/Projects";
import Image from "next/image";
import garisHome from "./Image/garis-home.svg";

export default function Home() {
  return (
    <main className=" bg-bgHome overflow-x-hidden">
      <div className="container flex min-h-screen md:max-w-5xl sm:max-w-4xl px-8 flex-col items-center justify-between md:container sm:mx-auto">
        <div className="w-full ">
          <Navbar />
        </div>
        <div className="w-full h-full ">
          <HomePage />
        </div>
        <div className="md:w-full md:p-0 md:h-0 my-4">
          <Image src={garisHome} alt="garis pembatas" />
        </div>
        <div
          className="w-full md:h-screen h-full flex align-center items-center"
          id="about"
        >
          {/* <h1 className="text-warna3 text-5xl font-bold">01 ABOUT</h1> */}
          <About />
        </div>
        <div className="md:w-full md:p-0 md:h-0 md:mb-6">
          <Image src={garisHome} alt="garis pembatas" />
        </div>
        <div
          className="w-full h-screen flex align-center items-center"
          id="projects"
        >
          {/* <h1 className="text-warna3 text-5xl font-bold">01 ABOUT</h1> */}
          <Projects />
        </div>
      </div>
    </main>
  );
}
