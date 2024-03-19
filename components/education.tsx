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

  const handleCertificateClick = (url: string | undefined) => {
    if (typeof url === "string") {
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
              boxShadow: "none",
              border: "1px solid white",
              textAlign: "left",
              padding: "25px",
              borderRadius: "10px",
              width: "20%",
            }}
            contentArrowStyle={{
              borderRight:
                theme === "light" ? "0.5rem solid white" : "0.5rem solid white",
            }}
            date={item.date}
            icon={<item.icon />}
            iconStyle={{
              background:
                theme === "light" ? "white" : "rgba(255, 255, 255, 0.15)",
              fontSize: "1rem",
            }}
          >
            <h3 className="font-bold text-xl capitalize">{item.institution}</h3>
            <br />
            <h4 className="font-semibold text-lg capitalize">{item.degree}</h4>
            <br />
            {item.modules && (
              <ul className="list-disc pl-5">
                {item.modules.map((module, idx) => (
                  <li key={idx}>{module}</li>
                ))}
              </ul>
            )}
            {item.certificateUrl && (
              <button
                className="mt-4 inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
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
