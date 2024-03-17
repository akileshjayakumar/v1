"use client";

import React from "react";
import SectionHeading from "@/components/section-heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { educationData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { useTheme } from "@/context/theme-context";
import "@/app/globals.css";

export default function Education() {
  const { ref } = useSectionInView("EDUCATION");
  const { theme } = useTheme();

  const handleCertificateClick = (url: string) => {
    if (url) {
      window.open(url, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <section id="education" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40">
      <SectionHeading>EDUCATION</SectionHeading>
      <VerticalTimeline lineColor={theme === "light" ? "#ddd" : "#333"}>
        {educationData.map((item, index) => (
          <VerticalTimelineElement
            key={index}
            className="vertical-timeline-element"
            contentStyle={{
              background:
                theme === "light" ? "#f9fafb" : "rgba(255, 255, 255, 0.12)",
              boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
              border: "1px solid rgba(0, 0, 0, 0.1)",
              textAlign: "left",
              padding: "30px",
              width: "100%",
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
              boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
            }}
          >
            <h3 className="font-bold text-xl capitalize">{item.institution}</h3>
            <br />
            <h4 className="font-semibold text-lg capitalize">{item.degree}</h4>
            <br />
            {item.modules && (
              <ul
                className="modules-list"
                style={{ paddingLeft: 0, marginBottom: "15px" }}
              >
                {item.modules.map((module, idx) => (
                  <li key={idx} className="module-item">
                    {module}
                  </li>
                ))}
              </ul>
            )}
            {item.certificateUrl && (
              <button
                className="certificate-button"
                onClick={() =>
                  item.certificateUrl
                    ? handleCertificateClick(item.certificateUrl)
                    : null
                }
                style={{ marginTop: "10px" }}
              >
                View Diploma Certificate | Transcript
              </button>
            )}
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </section>
  );
}
