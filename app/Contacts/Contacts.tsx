import Link from "next/link";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";
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

        <div className="grid grid-row-2 justify-center mr-20">
          <div>
            <div className="grid grid-cols-7 w-[15em]">
              <div className="col-span-2">
                <p
                  className={`${
                    themeColor.status === true ? `text-warna2` : `text-warna5`
                  } text-lg`}
                >
                  Email
                </p>
              </div>
              <div className="col-span-1">
                <p
                  className={`${
                    themeColor.status === true ? `text-warna2` : `text-warna5`
                  } text-lg`}
                >
                  :
                </p>
              </div>
              <div className="col-span-4">
                <p className="text-warna1 text-lg">galangy11@gmail.com</p>
              </div>
            </div>
          </div>

          <div>
            <div className="grid grid-cols-7 w-[15em]">
              <div className="col-span-2">
                <Link href="https://github.com/galangyp11">
                  <p
                    className={`${
                      themeColor.status === true ? `text-warna2` : `text-warna5`
                    } text-lg`}
                  >
                    Github
                  </p>
                </Link>
              </div>
              <div className="cols-span-1">
                <p
                  className={`${
                    themeColor.status === true ? `text-warna2` : `text-warna5`
                  } text-lg`}
                >
                  :
                </p>
              </div>
              <div className="col-span-4">
                <p className="text-warna1 text-lg">galangyp11</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
