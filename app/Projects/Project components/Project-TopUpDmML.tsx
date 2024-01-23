import React from "react";
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
    </div>
  );
}
