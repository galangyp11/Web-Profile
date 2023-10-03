import React from "react";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";

export default function About() {
  return (
    <div className="grid grid-rows-2 gap-12">
      <div className="flex justify-center items-center">
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
        <p className="text-warna4 text-xl tracking-wide">
          <span className="text-3xl text-warna1">H</span>alo, perkenalkan saya
          Galang Yudi Putra. Saya merupakan lulusan S1 Universitas Gunadarma
          fakultas Teknik Informatika 2023. Tertarik pada web development
          terutama frontend development. Dalam project saya biasa menggunakan
          javascript, ReactJs, NextJs, MySQL, Rest API, Bootstrap dan Tailwind.
        </p>
      </div>
    </div>
  );
}
