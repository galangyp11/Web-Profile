import Link from "next/link";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";

export default function Contacts() {
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

        <div className="grid grid-rows-3 ">
          <div>
            <p className="text-warna2 text-lg">
              Email : <span className="text-warna1">galangy11@gmail.com</span>
            </p>
          </div>
          <div>
            <Link href="https://github.com/galangyp11">
              <p className="text-warna2 text-lg">
                Github :<span className="text-warna1"> galangyp11</span>
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
