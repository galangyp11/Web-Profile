import Link from "next/link";

export default function Contacts() {
  return (
    <div className="flex justify-center items-center w-screen  h-fit">
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
  );
}
