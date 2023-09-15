import Image from "next/image";
import GarisProject from "../Image/garis-projects.svg";
import ThumnailBdi from "../Image/ThumbnailBDI.png";
import React from "react";

export default function Projects() {
  return (
    <div className="grid grid-cols-3">
      <div>
        <p className="text-warna1 text-2xl font-semibold mb-4">
          Baca Dongeng Indonesia
        </p>
        <p className="text-warna4">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate,
          architecto non atque, ad laborum delectus asperiores eaque voluptas
          voluptatem nesciunt harum? Quo labore, dicta alias ipsum animi sunt at
          magnam repellat quasi deserunt obcaecati numquam assumenda id cumque
          accusantium sapiente libero maiores adipisci quibusdam tempore sed.
          Recusandae numquam veniam iure?
        </p>
      </div>
      <div className="max-h-full">
        <Image src={GarisProject} alt="Garis Kebawah" />
      </div>
      <div className="max-h-full grid grid-rows-2">
        <Image src={ThumnailBdi} alt="Thumbnail BDI" />
        <button className="rounded-full bg-warna1 px-4 py-2 h-10 text-warna3 font-semibold">
          Github Repo
        </button>
      </div>
    </div>
  );
}
