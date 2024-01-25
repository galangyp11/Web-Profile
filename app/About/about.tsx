import React from "react";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";
import { ThemeColorType } from "../page";
// import CV from "../../public/CV_Galang-Yudi-Putra_2023.pdf";

type SetThemeColorType = {
  themeColor: ThemeColorType;
};

export default function About({ themeColor }: SetThemeColorType) {
  return (
    <div>
      <div className="flex justify-center items-center h-10 sm:h-auto my-8">
        <div className="grid grid-cols-3">
          <div className="flex justify-center items-center">
            <BiRightArrow className="text-warna3 text-4xl" />
          </div>
          <div className="flex justify-center items-center">
            <p className="text-warna3 text-4xl tracking-widest font-semibold">
              About
            </p>
          </div>
          <div className="flex justify-center items-center">
            <BiLeftArrow className="text-warna3 text-4xl" />
          </div>
        </div>
      </div>
      <div>
        <p
          className={`${
            themeColor.status === true ? `text-warna4` : `text-warna5`
          } text-xl tracking-wide`}
        >
          <span className="text-3xl text-warna1">H</span>alo, perkenalkan saya
          Galang Yudi Putra. Saya merupakan lulusan S1 Universitas Gunadarma
          fakultas Teknik Informatika 2023. Tertarik pada web development
          terutama frontend development. Dalam project saya biasa menggunakan
          javascript, ReactJs, NextJs, MySQL, Rest API, Bootstrap dan Tailwind.
        </p>
      </div>
      <div className="w-full flex justify-center">
        <a
          href="CV_Galang-Yudi-Putra_2023.pdf"
          download="CV_Galang_Yudi_Putra"
          target="_blank"
        >
          <button
            className={`${
              themeColor.status === true
                ? `text-warna4 hover:bg-warna2 hover:text-warna5 border-warna2`
                : `text-warna5 hover:bg-bgHome hover:text-warna4 border-bgHome`
            } rounded-lg border py-2 px-8 text-md font-medium `}
          >
            Unduh Cv
          </button>
        </a>
      </div>
    </div>
  );
}
