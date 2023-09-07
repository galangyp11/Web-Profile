import React from "react";
import foto from "../Image/foto-galang.jpg";
import Image from "next/image";

export default function Homepage() {
  return (
    <div className=" sm:grid sm:grid-cols-2 flex flex-col h-full sm:py-24">
      <div className="sm:block hidden w-full h-full sm:py-28 z-10">
        <p className="text-warna2 text-3xl font-medium">Hi, I&apos;m</p>
        <p className="text-warna1 text-5xl font-semibold">Galang Yudi Putra</p>
      </div>
      <div className="sm:flex hidden w-full h-full justify-end py-[5rem]">
        <div className="w-[16rem] h-[16rem] rounded-full bg-warna3 p-4">
          <Image
            src={foto}
            width={400}
            height={400}
            alt="foto"
            className="rounded-full"
          />
        </div>
      </div>
      <div className="sm:hidden w-full h-fit p-0">
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
      <div className="sm:hidden sm:py-28 mx-auto">
        <p className="text-warna2 text-2xl font-medium">Hi, I&apos;m</p>
        <p className="text-warna1 text-3xl font-semibold">Galang Yudi Putra</p>
      </div>
    </div>
  );
}
