// Experience.js
"use client";

import React from "react";
import SectionHeading from "@/components/section-heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css"; // Ensure you have this CSS imported
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { useTheme } from "@/context/theme-context";
import "./Experience.css"; // Assuming you have a CSS file for additional styles

export default function Experience() {
  const { ref } = useSectionInView("EXPERIENCE");
  const { theme } = useTheme();

  return (
    <section id="experience" ref={ref} className="experience-section">
      <SectionHeading>EXPERIENCE</SectionHeading>
      <VerticalTimeline layout="1-column-left">
        {experiencesData.map((item, index) => (
          <VerticalTimelineElement
            key={index}
            className="vertical-timeline-element"
            date={item.date}
            iconStyle={{
              background: theme === "light" ? "#f0f0f0" : "#333",
              color: "#fff",
            }}
            icon={<item.icon />}
          >
            <h3 className="vertical-timeline-element-title">{item.company}</h3>
            <h4 className="vertical-timeline-element-subtitle">{item.title}</h4>
            <ul className="exp-description">
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
