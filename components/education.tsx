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
import uowlogo from "@/public/uow.png";
import simlogo from "@/public/sim.png";

export const educationData = [
  {
    institution: "University of Wollongong (SIM Campus)",
    degree: "Bachelor of Computer Science, Big Data and Cybersecurity",
    date: "October 2022 - Present",
    icon: uowlogo,
  },
  {
    institution: "Singapore Institute of Management",
    degree: "Diploma in Information Technology",
    date: "October 2021 - September 2022",
    icon: simlogo,
    certificateUrl:
      "https://dashboard.accredify.io/verify?id=c903b57a-a109-44c3-8d04-f45d8536bc1f",
    modules: [
      "ITSD001 Business Statistics with Python",
      "ITSD002 Problem Solving",
      "ITSD003 Communications and Networks",
      "ITSD004 Programming Fundamentals",
      "ITSD005 Database Management and Security",
      "ITSD006 Interaction Design",
      "ITSD007 IT Project Management",
      "ITSD008 Systems Development Techniques",
    ],
  },
];

export default function Education() {
  const { ref } = useSectionInView("EXPERIENCE");
  const { theme } = useTheme();
  const handleCertificateClick = (url: string | undefined) => {
    if (typeof url === "string") {
      window.open(url, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <section id="education" className="scroll-mt-28 mb-28 sm:mb-40">
      <SectionHeading>EDUCATION</SectionHeading>
      <VerticalTimeline lineColor={theme === "light" ? "#ddd" : "#333"}>
        {educationData.map((item, index) => (
          <VerticalTimelineElement
            key={index}
            date={item.date}
            icon={<img src={item.icon.src} alt={`${item.institution} logo`} />}
            iconStyle={{ background: "#312e81", color: "#fff" }}
            contentStyle={{ background: "#1f2937", color: "#f3f4f6" }}
            contentArrowStyle={{ borderRight: "8px solid  #1f2937" }}
          >
            <h3 className="font-bold text-lg capitalize mb-2">
              {item.institution}
            </h3>
            <h4 className="font-semibold text-md capitalize mb-1">
              {item.degree}
            </h4>
            {item.modules && (
              <ul className="list-disc pl-5 mt-2 mb-2 text-white">
                {item.modules.map((module, idx) => (
                  <li key={idx} className="mb-1">
                    {module}
                  </li>
                ))}
              </ul>
            )}
            {item.certificateUrl && (
              <button
                className="mt-4 inline-flex items-center justify-center bg-blue-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition duration-150 ease-in-out"
                onClick={() => handleCertificateClick(item.certificateUrl)}
              >
                View Certificate | Transcript
              </button>
            )}
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </section>
  );
}
