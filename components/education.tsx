"use client";

import React from "react";
import SectionHeading from "./section-heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { educationData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { useTheme } from "@/context/theme-context";

export default function Education() {
  const { ref } = useSectionInView("EDUCATION");
  const { theme } = useTheme();

  return (
    <section
      id="education"
      ref={ref}
      className="mb-20 scroll-mt-20 text-center sm:mb-28"
    >
      <SectionHeading>EDUCATION</SectionHeading>
      <VerticalTimeline lineColor={theme === "light" ? "#ddd" : "#333"}>
        {educationData.map((item, index) => (
          <VerticalTimelineElement
            key={index}
            date={item.period}
            icon={<item.icon />}
            iconStyle={{
              background:
                theme === "light" ? "#e5e7eb" : "rgba(255, 255, 255, 0.2)",
              fontSize: "2rem",
            }}
            contentStyle={{
              background:
                theme === "light" ? "#f9fafb" : "rgba(255, 255, 255, 0.08)",
              boxShadow: "none",
              textAlign: "left",
              padding: "2rem",
            }}
            contentArrowStyle={{
              borderRight:
                theme === "light"
                  ? "7px solid #cbd5e1"
                  : "7px solid rgba(255, 255, 255, 0.25)",
            }}
          >
            <h3 className="font-bold capitalize">{item.institution}</h3>
            <h4 className="font-semibold text-sm capitalize">{item.degree}</h4>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </section>
  );
}
