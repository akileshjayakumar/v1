"use client";

import React from "react";
import SectionHeading from "./section-heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { useTheme } from "@/context/theme-context";

export default function Experience() {
  const { ref } = useSectionInView("EXPERIENCE");
  const { theme } = useTheme();

  return (
    <section
      id="experience"
      ref={ref}
      className="mb-20 scroll-mt-20 text-center sm:mb-28"
    >
      <SectionHeading>EXPERIENCE</SectionHeading>
      <VerticalTimeline lineColor={theme === "light" ? "#ddd" : "#333"}>
        {experiencesData.map((item, index) => (
          <VerticalTimelineElement
            key={index}
            contentStyle={{
              background:
                theme === "light" ? "#f9fafb" : "rgba(255, 255, 255, 0.08)",
              boxShadow: "none",
              border: "1px solid rgba(0, 0, 0, 0.1)",
              textAlign: "left",
              padding: "2rem",
            }}
            contentArrowStyle={{
              borderRight:
                theme === "light"
                  ? "7px solid #cbd5e1"
                  : "7px solid rgba(255, 255, 255, 0.25)",
            }}
            date={item.date}
            icon={<item.icon />}
            iconStyle={{
              background:
                theme === "light" ? "#e5e7eb" : "rgba(255, 255, 255, 0.2)",
              fontSize: "1.25rem",
            }}
          >
            <h3 className="font-bold capitalize">{item.company}</h3>
            <h4 className="font-semibold text-sm capitalize">{item.title}</h4>
            <ul
              className="text-left flex flex-wrap list-disc"
              style={{
                color: theme === "light" ? "#374151" : "#e5e7eb",
                listStylePosition: "inside",
                paddingLeft: "1em",
                marginLeft: "1em",
              }}
            >
              {item.description.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </section>
  );
}
