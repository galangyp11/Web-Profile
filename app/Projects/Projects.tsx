import ProjectBDI from "./Project components/Project-BDI";
import ProjectSKW from "./Project components/Project-SKW";
import ProjectBlogNEXT from "./Project components/Project-BlogNEXT";
import ProjectTopUpDmML from "./Project components/Project-TopUpDmML";
import React from "react";
import Link from "next/link";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";
import { ThemeColorType } from "../page";

type SetThemeColorType = {
  themeColor: ThemeColorType;
};

export default function Projects({ themeColor }: SetThemeColorType) {
  return (
    <div>
      <div className="flex justify-center items-center h-10 sm:h-auto my-8">
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
      <div className="mt-24 mb-12">
        <ProjectBDI themeColor={themeColor} />
      </div>
      <div className="my-12">
        <ProjectSKW themeColor={themeColor} />
      </div>
      <div className="my-12">
        <ProjectTopUpDmML themeColor={themeColor} />
      </div>
      <div className="flex justify-center">
        <p className="text-sm text-warna2">
          Ada beberapa projek yang tidak saya hosting hanya disimpan di Github.
        </p>
      </div>
    </div>
  );
}
