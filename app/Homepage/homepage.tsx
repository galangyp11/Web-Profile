import React from "react";
import foto from "../Image/foto-galang.jpg";
import Image from "next/image";
import { ThemeColorType } from "../page";

type SetThemeColorType = {
  themeColor: ThemeColorType;
};

export default function Homepage({ themeColor }: SetThemeColorType) {
  return (
    <div className=" lg:grid lg:grid-cols-2 flex flex-col h-full lg:py-24 ">
      <div className="lg:block hidden w-full h-full lg:py">
        <p
          className={`${
            themeColor.status === true ? `text-warna2` : `text-warna5`
          } text-2xl font-medium`}
        >
          Hi, I&apos;m
        </p>
        <p className="text-warna1 text-5xl font-semibold">Galang Yudi Putra</p>
      </div>
      <div className="lg:flex hidden w-full h-full justify-end py-[5rem]">
        <div
          className={`${
            themeColor.status === true ? `bg-warna3` : `bg-warna6`
          } w-[16rem] h-[16rem] rounded-full p-4`}

          //className="w-[16rem] h-[16rem] rounded-full p-4 bg-warna3"
        >
          <Image
            src={foto}
            width={400}
            height={400}
            alt="foto"
            className="rounded-full"
          />
        </div>
      </div>
      <div className="lg:hidden w-full h-fit p-0">
        <div className="w-[16rem] h-[16rem] rounded-full bg-warna3 overflow-hidden p-4 mx-auto">
          <Image
            src={foto}
            width={400}
            height={400}
            alt="foto"
            className="rounded-full"
          />
        </div>
      </div>
      <div className="lg:hidden mx-auto">
        <p
          className={`${
            themeColor.status === true ? `text-warna2` : `text-warna5`
          } text-2xl font-medium`}
        >
          Hi, I&apos;m
        </p>
        <p className="text-warna1 text-3xl font-semibold">Galang Yudi Putra</p>
      </div>
    </div>
  );
}
