"use client";

import React, { useState } from "react";
import { MdLightMode } from "react-icons/md";
import { MdNightlightRound } from "react-icons/md";

export default function Footer() {
  const [themeColor, setThemeColor] = useState(true);

  const handleTheme = () => {
    setThemeColor(!themeColor);
  };
  return (
    <div className="flex justify-end items-center w-screen h-fit">
      {themeColor === true ? (
        <MdLightMode
          size="30"
          color="#F9F8DF"
          onClick={handleTheme}
          className="cursor-pointer"
        />
      ) : (
        <MdNightlightRound
          size="30"
          color="#F9F8DF"
          onClick={handleTheme}
          className="cursor-pointer"
        />
      )}
    </div>
  );
}
