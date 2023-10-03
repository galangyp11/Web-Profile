import ProjectBDI from "./Project components/Project-BDI";
import ProjectSKW from "./Project components/Project-SKW";
import ProjectBlogNEXT from "./Project components/Project-BlogNEXT";
import React from "react";
import Link from "next/link";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";

export default function Projects() {
  return (
    <div className="grid grid-rows-4 gap-12">
      <div className="flex justify-center items-center">
        <div className="grid grid-cols-3">
          <div className=" flex justify-center items-center">
            <BiRightArrow className="text-warna3 text-4xl" />
          </div>
          <div className="flex justify-center items-center">
            <p className="text-warna3 text-4xl tracking-widest font-semibold">
              Projects
            </p>
          </div>
          <div className="flex justify-center items-center">
            <BiLeftArrow className="text-warna3 text-4xl" />
          </div>
        </div>
      </div>
      <div>
        <ProjectBDI />
      </div>
      <div>
        <ProjectSKW />
      </div>
      <div className="flex justify-center">
        <p className="text-sm text-warna2">
          Ada beberapa projek yang tidak saya hosting hanya disimpan di Github.
        </p>
      </div>
    </div>
  );
}
