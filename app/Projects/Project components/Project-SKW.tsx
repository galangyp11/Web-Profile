import Image from "next/image";
import GarisProject from "../../Image/garis-projects.svg";
import ThumnailSKW from "../../Image/ThumbnailSKW.png";
import React from "react";
import Link from "next/link";

export default function ProjectSKW() {
  return (
    <div className="sm:grid sm:grid-cols-5 h-fit">
      <div className=" sm:col-span-2  h-fit w-full">
        <p className="text-warna1 text-2xl font-semibold sm:mb-4">
          Toko Online SKW
        </p>
        <p className="text-warna4 hidden sm:block">
          Sebuah website toko online untuk menjadi wadah transaksi pada suatu
          sekolah di jawa tengah. Dibuat menggunakan React JS + Bootstrap dan
          Node JS + MySQL. Terdapat 3 Route pada website ini Pengguna, Penjual,
          dan Admin yang dibedakan melalui login page.
        </p>
      </div>
      <div className="hidden sm:block sm:h-fit">
        <Image src={GarisProject} alt="Garis Kebawah" />
      </div>
      <div className="sm:col-span-2">
        <div className="sm:mb-8">
          <Image
            src={ThumnailSKW}
            alt="Thumbnail SKW"
            className="w-full h-fit my-4 rounded-md"
          />
        </div>

        <div className="my-2">
          <Link
            href="https://web-toko-1x4o1libk-galangyp11.vercel.app/"
            target="_blank"
          >
            <button className="w-full rounded-full bg-warna1 px-4 py-2 h-10 text-warna3 font-semibold">
              Website
            </button>
          </Link>
        </div>
        <div className="my-2">
          <Link
            href="https://github.com/galangyp11/Web-Toko-SKW"
            target="_blank"
          >
            <button className="w-full rounded-full border-2 px-4 py-2 h-10 text-warna1 font-semibold">
              Github Repo
            </button>
          </Link>
        </div>
      </div>
      <div className="text-warna4 sm:hidden">
        <p>
          Sebuah website toko online untuk menjadi wadah transaksi pada suatu
          sekolah di jawa tengah. Dibuat menggunakan React JS + Bootstrap dan
          Node JS + MySQL. Terdapat 3 Route pada website ini Pengguna, Penjual,
          dan Admin yang dibedakan melalui login page.
        </p>
      </div>
    </div>
  );
}
