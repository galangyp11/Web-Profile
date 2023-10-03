"use client";

import Link from "next/link";
import React, { useState } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="grid sm:grid-cols-8 grid-cols-2 w-full h-20 p-6 sm:px-0 bg-bgHome/30 backdrop-blur-sm">
      <div className="sm:col-span-5 col-span-1">
        <Link
          href="/"
          onClick={() => setIsOpen(false)}
          className="sm:text-5xl text-3xl font-semibold text-warna1 cursor-pointer"
        >
          GYP
        </Link>
      </div>
      <div className="sm:flex sm:justify-center sm:block sm:col-span-1 hidden">
        <Link
          href="#about"
          className="text-center font-medium text-lg text-warna4 cursor-pointer py-1"
        >
          About
        </Link>
      </div>
      <div className="sm:block hidden sm:flex sm:justify-center">
        <Link
          href="#projects"
          className="text-center font-medium text-lg text-warna4 cursor-pointer py-1"
        >
          Projects
        </Link>
      </div>
      <div className="sm:flex sm:justify-center sm:block hidden">
        <Link href="#contacts">
          <button className="w-[7.2rem] h-[2.5rem] bg-warna1 px-2 py-1 rounded-full text-warna3 font-semibold hover:scale-110 duration-300">
            Contacts
          </button>
        </Link>
      </div>
      <div className="sm:hidden col-span-1 flex justify-end">
        <div
          className={`${
            isOpen === false
              ? "w-12 h-12 rounded-full"
              : "w-full h-auto rounded-lg shadow-lg px-4 py-2"
          } bg-warna1 flex justify-center items-center z-10 duration-150`}
        >
          {isOpen === false ? (
            <HiMenuAlt3
              color="black"
              size="25px"
              className="active:animate-spin"
              onClick={handleMenu}
            />
          ) : (
            <div className="w-full h-full">
              <div className="flex justify-end">
                <HiX
                  color="black"
                  size="25px"
                  className="active:animate-spin"
                  onClick={handleMenu}
                />
              </div>
              <ul className="list-none text-lg font-semibold text-bgHome divide-y-2 divide-warna3/25 w-full ">
                <li className="py-2">
                  <Link href="#about" className="py-2" onClick={handleMenu}>
                    About
                  </Link>
                </li>
                <li className="py-2">
                  <Link href="#projects" className="py-2" onClick={handleMenu}>
                    Projects
                  </Link>
                </li>
                <li className="py-2">
                  <Link href="#contacts" className="py-2" onClick={handleMenu}>
                    Contacts
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
