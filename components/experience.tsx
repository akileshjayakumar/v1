"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { BsBriefcase, BsGeoAlt } from "react-icons/bs";

export default function Education() {
  const { ref } = useSectionInView("EDUCATION");

  return (
    <section id="experience" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40">
      <SectionHeading>EXPERIENCE</SectionHeading>
      {experiencesData.map((item, index) => (
        <div
          key={index}
          className="bg-white dark:bg-gray-900 shadow-md rounded-lg m-4 p-6"
        >
          <div className="flex items-center mb-4">
            <BsBriefcase className="text-xl text-gray-600 dark:text-gray-300 mr-2" />
            <h1 className="text-xl font-bold capitalize">{item.company}</h1>
          </div>
          <h2 className="text-lg font-semibold capitalize mb-1">
            {item.title}
          </h2>
          <h3 className="text-sm mb-4">{item.date}</h3>
          <div className="flex justify-between items-center">
            <div>
              {item.description && (
                <div className="mt-4">
                  <h4 className="text-md font-semibold mb-2">Modules:</h4>
                  <ul className="list-disc space-y-2 pl-5 text-sm">
                    {item.description.map((module, idx) => (
                      <li key={idx} className="leading-relaxed">
                        {module}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
