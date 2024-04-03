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
import "@/app/style.css"

export const educationData = [
  {
    institution: "University of Wollongong (SIM Campus)",
    degree: "Bachelor of Computer Science, Big Data and Cybersecurity",
    date: "October 2022 - Present",
    icon: TbSchool,
    certificateUrl: undefined,
    subjects: [
      "CSCI203 Algorithms and Data Structures",
      "CSCI235 Database Systems",
      "CSCI251 Advanced Programming",
      "CSCI262 System Security",
      "CSCI317 Database Performance Tuning",
      "CSIT302 Cybersecurity",
      "CSIT314 Software Development Methodologies",
      "MATH221 Mathematics for Computer Science",
    ],
  },
  {
    institution: "Singapore Institute of Management (SIM Campus)",
    degree: "Diploma in Information Technology",
    date: "October 2021 - September 2022",
    icon: TbSchool,
    certificateUrl:
      "https://dashboard.accredify.io/verify?id=c903b57a-a109-44c3-8d04-f45d8536bc1f",
    subjects: [
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
  const { ref } = useSectionInView("EDUCATION");
  const { theme } = useTheme();
  const handleCertificateClick = (url: string | undefined) => {
    if (typeof url === "string") {
      window.open(url, "_blank", "noopener,noreferrer");
    }
  };

  // JSX for the education section
  return (
    <section id="education" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40">
      <SectionHeading>EDUCATION</SectionHeading>
      <VerticalTimeline lineColor={theme === "light" ? "#ddd" : "#333"}>
        {educationData.map((item, index) => (
          <VerticalTimelineElement
            key={index}
            className="vertical-timeline-element"
            contentStyle={{
              background: theme === "light" ? "#ffffff" : "#1f2937",
              color: theme === "light" ? "#1f2937" : "#f3f4f6",
            }}
            contentArrowStyle={{
              borderRight: "8px solid #fff",
            }}
            date={item.date}
            icon={<item.icon />}
            iconStyle={{
              background: theme === "light" ? "#60a5fa" : "#000000",
              color: "#fff",
            }}
          >
            <h3 className="institution-heading">{item.institution}</h3>
            <h4 className="degree">{item.degree}</h4>
            <ul className="subject-list">
              {item.subjects.map((subject, idx) => (
                <li key={idx}>{subject}</li>
              ))}
            </ul>
            <button
              className="certificate-button"
              onClick={() => handleCertificateClick(item.certificateUrl)}
            >
              View Certificate | Transcript
            </button>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </section>
  );
}
