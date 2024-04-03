"use client";

import React from "react";
import SectionHeading from "./section-heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { useSectionInView } from "@/lib/hooks";
import { useTheme } from "@/context/theme-context";
import { TbSchool } from "react-icons/tb";
import "@/app/style.css"; // Import LinkedIn style CSS

export default function Education() {
  const { ref } = useSectionInView("EDUCATION");
  const { theme } = useTheme();

  return (
    <section id="education" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40">
      <SectionHeading>EDUCATION</SectionHeading>
      <div className="space-y-6">
        <div className="bg-black shadow-md rounded-lg p-4">
          <h3 className="text-lg text-white font-semibold">test</h3>
          <h4 className="text-md text-white">test</h4>
          <p className="text-sm text-white">test</p>
          <ul className="list-disc list-inside text-white">
            <li>1</li>
          </ul>
          <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            View Certificate | Transcript
          </button>
        </div>
      </div>
    </section>
  );
}
