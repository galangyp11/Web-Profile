import React from "react";
import Image from "next/image";
import GarisProject from "../../Image/garis-projects.svg";
import ThumbnailML from "../../Image/ThumbnailML.png";
import Link from "next/link";
import { ThemeColorType } from "../../page";

type SetThemeColorType = {
  themeColor: ThemeColorType;
};

export default function ProjectTopUpDmML({ themeColor }: SetThemeColorType) {
  return (
    <div className="sm:grid sm:grid-cols-5 h-fit ">
      <div className=" sm:col-span-2 h-fit w-full">
        <p className="text-warna1 text-2xl font-semibold sm:mb-4">
          Website Top Up Diamonds Mobile Legends
        </p>
        <p
          className={`${
            themeColor.status === true ? `text-warna4` : `text-warna5`
          } hidden sm:block`}
        >
          Sebuah website untuk melakukan top up diamonds pada game Mobile
          Legends. Dibuat menggunakan React JS + Bootstrap, terintegrasi dengan
          <a
            href="https://apigames.id"
            className="underline underline-offset-4"
          >
            {" "}
            apigames{" "}
          </a>
          sehingga dapat cek akun melalui Id dan Server. Tersedia dalam tampilan
          dekstop dan mobile
        </p>
      </div>
      <div className="hidden sm:block sm:h-fit">
        <Image src={GarisProject} alt="Garis Kebawah" />
      </div>
      <div className="sm:col-span-2">
        <div className="sm:mb-8">
          <Image
            src={ThumbnailML}
            alt="Thumbnail BDI"
            className="w-full h-fit my-4 rounded-md"
          />
        </div>

        <div className="my-2">
          <Link href="https://kadal-store.vercel.app/#/" target="_blank">
            <button className="w-full rounded-full bg-warna1 px-4 py-2 h-10 text-warna3 font-semibold">
              Website
            </button>
          </Link>
        </div>
        <div className="my-2">
          <Link
            href="https://github.com/galangyp11/TopUp-DM-MLBB"
            target="_blank"
          >
            <button className="w-full rounded-full border-2 px-4 py-2 h-10 text-warna1 font-semibold">
              Github Repo
            </button>
          </Link>
        </div>
      </div>
      <div
        className={`${
          themeColor.status === true ? `text-warna4` : `text-warna5`
        } sm:hidden`}
      >
        <p>
          Sebuah website untuk melakukan top up diamonds pada game Mobile
          Legends. Dibuat menggunakan React JS + Bootstrap, terintegrasi dengan
          <a
            href="https://apigames.id"
            className="underline underline-offset-4"
          >
            {" "}
            apigames{" "}
          </a>
          sehingga dapat cek akun melalui Id dan Server. Tersedia dalam tampilan
          dekstop dan mobile
        </p>
      </div>
    </div>
  );
}
