import Image from "next/image";
import GarisProject from "../../Image/garis-projects.svg";
import ThumnailBdi from "../../Image/ThumbnailBDI.png";
import React from "react";
import Link from "next/link";

export default function ProjectBDI() {
  return (
    <div className="sm:grid sm:grid-cols-5 h-fit">
      <div className=" sm:col-span-2 h-fit w-full">
        <p className="text-warna1 text-2xl font-semibold sm:mb-4">
          Baca Dongeng Indonesia
        </p>
        <p className="text-warna4 hidden sm:block">
          Sebuah website yang menampilkan kumpulan dongeng-dongeng dibuat
          menggunakan React JS + Bootstrap dan Node JS + MySQL. Website ini
          memiliki animasi dan suara yang membuat membaca dongeng menjadi lebih
          menarik.
        </p>
      </div>
      <div className="hidden sm:block sm:h-fit">
        <Image src={GarisProject} alt="Garis Kebawah" />
      </div>
      <div className="sm:col-span-2">
        <div className="sm:mb-8">
          <Image
            src={ThumnailBdi}
            alt="Thumbnail BDI"
            className="w-full h-fit my-4 rounded-md"
          />
        </div>

        <div className="my-2">
          <Link
            href="https://bdi-fe-nodb-qs1u14i2v-galangyp11.vercel.app/"
            target="_blank"
          >
            <button className="w-full rounded-full bg-warna1 px-4 py-2 h-10 text-warna3 font-semibold">
              Website
            </button>
          </Link>
        </div>
        <div className="my-2">
          <Link href="https://github.com/galangyp11/BDI-FE" target="_blank">
            <button className="w-full rounded-full border-2 px-4 py-2 h-10 text-warna1 font-semibold">
              Github Repo
            </button>
          </Link>
        </div>
      </div>
      <div className="text-warna4 sm:hidden">
        <p>
          Sebuah website yang menampilkan kumpulan dongeng-dongeng dibuat
          menggunakan React JS + Bootstrap dan Node JS + MySQL. Website ini
          memiliki animasi dan suara yang membuat membaca dongeng menjadi lebih
          menarik.
        </p>
      </div>
    </div>
  );
}
