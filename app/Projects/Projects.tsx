import ProjectBDI from "./Project components/Project-BDI";
import ProjectSKW from "./Project components/Project-SKW";
import ProjectBlogNEXT from "./Project components/Project-BlogNEXT";
import React from "react";
import Link from "next/link";

export default function Projects() {
  return (
    <div className="grid grid-rows-3 gap-12">
      <div>
        <ProjectBDI />
      </div>
      <div>
        <ProjectSKW />
      </div>
      <div>
        <ProjectBlogNEXT />
      </div>
    </div>
  );
}
