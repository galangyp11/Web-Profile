// import Navbar from "./Navbar/Navbar(CSR)";
"use client";

import React, { useState } from "react";
import Contents from "./Contents/Contents";
import Navbar from "./Navbar/navbar";

export type ThemeColorType = {
  status: boolean;
};

export default function Home() {
  const [themeColor, setThemeColor] = useState<ThemeColorType>({
    status: true,
  });

  return (
    <div>
      <div className="sticky top-0 md:max-w-5xl sm:max-w-4xl md:container sm:mx-auto container bg-bgHome ">
        <Navbar setThemeColor={setThemeColor} themeColor={themeColor} />
      </div>
      <div>
        <Contents />
      </div>
    </div>
  );
}
