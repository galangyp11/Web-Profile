import React, { useState } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";

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
            isOpen === false
              ? "w-12 h-12 rounded-full"
              : "w-full h-auto rounded-lg shadow-lg px-4 py-2"
          } bg-warna1 flex justify-center items-center cursor-pointer z-10 duration-150`}
          onClick={handleMenu}
        >
          {isOpen === false ? (
            <HiMenuAlt3
              color="black"
              size="25px"
              className="active:animate-spin"
            />
          ) : (
            <div className="w-full h-full">
              <div className="flex justify-end">
                <HiX
                  color="black"
                  size="25px"
                  className="active:animate-spin"
                />
              </div>
              <ul className="list-none text-lg font-semibold text-bgHome divide-y-2 divide-warna3/25 w-full ">
                <li className="py-2">About</li>
                <li className="py-2">Projects</li>
                <li className="py-2">Contacts</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
