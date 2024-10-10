import Project from "./Project components/Project";
import React, { useState } from "react";
import ProjectsJson from "./Projects.json";
import Link from "next/link";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";
import { ThemeColorType } from "../page";

type SetThemeColorType = {
  themeColor: ThemeColorType;
};

export default function Projects({ themeColor }: SetThemeColorType) {
  return (
    <div>
      <div className="flex justify-center items-center h-10 lg:h-auto my-8">
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
      {ProjectsJson.Projects.map((data, index) => {
        return (
          <div className="my-12" key={index}>
            <Project themeColor={themeColor} data={data} />
          </div>
        );
      })}
      <div className="flex justify-center">
        <p className="text-sm text-warna2">
          Ada beberapa projek yang tidak saya hosting hanya disimpan di Github.
        </p>
      </div>
    </div>
  );
}
