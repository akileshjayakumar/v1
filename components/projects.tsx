"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";

export default function Projects() {
  const { ref } = useSectionInView("PROJECTS", 0.5);

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28 px-4 sm:px-0">
      <SectionHeading>PROJECTS</SectionHeading>
      <div className="flex flex-col items-center">
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
