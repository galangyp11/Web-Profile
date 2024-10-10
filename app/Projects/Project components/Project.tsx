import Image from "next/image";
import GarisProject from "../../Image/garis-projects.svg";
import React from "react";
import Link from "next/link";
import { ThemeColorType } from "../../page";

type Props = {
  data: any;
  themeColor: ThemeColorType;
};

export default function Project({ themeColor, data }: Props) {
  return (
    <div className="lg:grid lg:grid-cols-5 h-fit">
      <div className=" lg:col-span-2  h-fit w-full">
        <p className="text-warna1 text-2xl font-semibold lg:mb-4">
          {data.Judul}
        </p>
        <p
          className={`${
            themeColor.status === true ? `text-warna4` : `text-warna5`
          } hidden lg:block`}
        >
          {data.Deksripsi}
        </p>
      </div>
      <div className="hidden lg:block lg:h-fit">
        <Image src={GarisProject} alt="Garis Kebawah" />
      </div>
      <div className="lg:col-span-2">
        <div className="lg:mb-8">
          <img
            src={data.Thumbnail}
            alt="Thumbnail SKW"
            className="w-full h-fit my-4 rounded-md"
          />
        </div>

        <div className="my-2">
          <Link href={data.LinkHost} target="_blank">
            <button className="w-full rounded-full bg-warna1 px-4 py-2 h-10 text-warna3 font-semibold">
              Website
            </button>
          </Link>
        </div>
        <div className="my-2">
          <Link href={data.LinkRepo} target="_blank">
            <button className="w-full rounded-full border-2 px-4 py-2 h-10 text-warna1 font-semibold">
              Github Repo
            </button>
          </Link>
        </div>
      </div>
      <div
        className={`${
          themeColor.status === true ? `text-warna4` : `text-warna5`
        } lg:hidden`}
      >
        <p>{data.Deksripsi}</p>
      </div>
    </div>
  );
}
