// import Navbar from "./Navbar/Navbar(CSR)";
"use client";

import React, { useEffect, useState } from "react";
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
    <div className={themeColor.status === true ? `bg-bgHome` : `bg-bgLight`}>
      <div className="sticky top-0">
        <Navbar setThemeColor={setThemeColor} themeColor={themeColor} />
      </div>
      <div>
        <Contents themeColor={themeColor} />
      </div>
    </div>
  );
}
