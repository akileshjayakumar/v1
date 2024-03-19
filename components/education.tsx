// Education.js
"use client";

import React from "react";
import SectionHeading from "@/components/section-heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css"; // Ensure you have this CSS imported
import { educationData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { useTheme } from "@/context/theme-context";
import "./Education.css"; // Assuming you have a CSS file for additional styles

export default function Education() {
  const { ref } = useSectionInView("EDUCATION");
  const { theme } = useTheme();

  const handleCertificateClick = (url: string | undefined) => {
    if (typeof url === "string") {
      window.open(url, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <section id="education" ref={ref} className="education-section">
      <SectionHeading>EDUCATION</SectionHeading>
      <VerticalTimeline layout="1-column-left">
        {educationData.map((item, index) => (
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
            <h3 className="vertical-timeline-element-title">
              {item.institution}
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              {item.degree}
            </h4>
            <ul className="edu-modules">
              {item.modules?.map((module, idx) => (
                <li key={idx}>{module}</li>
              ))}
            </ul>
            {item.certificateUrl && (
              <button
                className="certificate-button"
                onClick={() => handleCertificateClick(item.certificateUrl)}
              >
                View Certificate
              </button>
            )}
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </section>
  );
}
