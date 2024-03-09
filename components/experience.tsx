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
    <section id="EXPERIENCE" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40">
      <SectionHeading>EXPERIENCE</SectionHeading>
      <VerticalTimeline lineColor="">
        {experiencesData.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              contentStyle={{
                background:
                  theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
                boxShadow: "none",
                border:
                  theme === "light"
                    ? "1px solid #ddd"
                    : "1px solid rgba(255, 255, 255, 0.1)",
                textAlign: "right",
                padding: "1rem 1rem",
                color: theme === "light" ? "#1f2937" : "#e5e7eb",
              }}
              contentArrowStyle={{
                borderRight:
                  theme === "light"
                    ? "7px solid #ddd"
                    : "7px solid rgba(255, 255, 255, 0.3)",
              }}
              date={item.date}
              icon={<item.icon />}
              iconStyle={{
                background:
                  theme === "light" ? "#ffffff" : "rgba(255, 255, 255, 0.15)",
                color: theme === "light" ? "#1f2937" : "#e5e7eb",
                boxShadow: "0 0 0 4px rgba(0, 0, 0, 0.1)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <h3 className="font-bold capitalize">{item.company}</h3>
              <h4 className="font-semibold capitalize">{item.title}</h4>
              <br />
              <ul className="m-2 list-disc !mt-1">
                {item.description.map((point, idx) => (
                  <li
                    key={idx}
                    className="font-normal"
                    style={{ color: theme === "light" ? "#4b5563" : "#e5e7eb" }}
                  >
                    {point}
                  </li>
                ))}
              </ul>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}
