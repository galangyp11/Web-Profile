import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="grid sm:grid-cols-8 grid-cols-2 w-full h-20 py-6">
      <div className="sm:col-span-5 col-span-1">
        <p className="sm:text-5xl text-3xl font-semibold text-warna1 cursor-pointer">
          GYP
        </p>
      </div>
      <div className="sm:block sm:col-span-1 hidden">
        <p className="text-center font-medium text-lg text-warna4 cursor-pointer py-1">
          About
        </p>
      </div>
      <div className="sm:block hidden">
        <p className="text-center font-medium text-lg text-warna4 cursor-pointer py-1">
          Projects
        </p>
      </div>
      <div className="flex justify-center sm:block hidden">
        <button className="w-[7.2rem] h-[2.5rem] bg-warna1 px-2 py-1 rounded-full text-warna3 font-semibold hover:scale-110 duration-300">
          Contacts
        </button>
      </div>
      <div className="sm:hidden col-span-1 flex justify-end">
        <div
          className={`${
            isOpen === true
              ? "w-12 h-12 rounded-full"
              : "w-full h-24 rounded-lg"
          } bg-warna1 flex justify-center items-center cursor-pointer z-10 duration-150`}
          onClick={handleMenu}
        >
          <HiMenuAlt3
            color="black"
            size="35px"
            className={isOpen === true ? "visible" : "hidden"}
          />
        </div>
      </div>
    </div>
  );
}
