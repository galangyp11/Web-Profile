import Link from "next/link";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa6";
import { ThemeColorType } from "../page";

type SetThemeColorType = {
  themeColor: ThemeColorType;
};

export default function Contacts({ themeColor }: SetThemeColorType) {
  return (
    <div className="flex justify-center items-center w-screen h-fit">
      <div className="grid grid-rows-2 gap-12">
        <div className="flex justify-center items-center">
          <div className="grid grid-cols-3">
            <div className="flex justify-center items-center">
              <BiRightArrow className="text-warna3 text-4xl" />
            </div>
            <div className="flex justify-center items-center">
              <p className="text-warna3 text-4xl tracking-widest font-semibold">
                Contacts
              </p>
            </div>
            <div className="flex justify-center items-center">
              <BiLeftArrow className="text-warna3 text-4xl" />
            </div>
          </div>
        </div>

        <div className="grid grid-rows-3 sm:grid-cols-3">
          <div className="flex justify-center sm:justify-end">
            <a href="https://github.com/galangyp11" target="_blank">
              <FaGithub
                className={`${
                  themeColor.status === true ? `text-warna1` : `text-warna5`
                } sm:cursor-pointer hover:scale-110 transition ease-in-out duration-300`}
                size="35"
              />
            </a>
          </div>
          <div className="grid grid-rows-2 justify-center">
            <MdEmail
              className={`${
                themeColor.status === true ? `text-warna1` : `text-warna5`
              } sm:cursor-pointer w-fit w-full peer hover:scale-110 transition ease-in-out duration-300`}
              size="35"
            />
            <p
              className={`${
                themeColor.status === true
                  ? `peer-hover:text-warna1`
                  : `peer-hover:text-warna5`
              } peer-hover:visible peer-focus:visible invisible sm:mt-5`}
            >
              galangy11@gmail.com
            </p>
          </div>
          <div className="flex justify-center sm:justify-start">
            <a
              href="https://www.linkedin.com/in/galang-yudi-putra-03729b252/"
              target="_blank"
            >
              <FaLinkedin
                className={`${
                  themeColor.status === true ? `text-warna1` : `text-warna5`
                } sm:cursor-pointer hover:scale-110 transition ease-in-out duration-300`}
                size="30"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
