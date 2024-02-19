"use client";

import SectionHeading from "./section-heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "../lib/data";
import { useSectionInView } from "../lib/hooks";
import { useTheme } from "../context/theme-context";

const Experience = () => {
  const { ref } = useSectionInView("EXPERIENCE");
  const { theme } = useTheme();

  const renderExperienceElements = () => {
    return experiencesData.map((item, index) => (
      <VerticalTimelineElement
        key={index}
        contentStyle={{
          boxShadow: "none",
          textAlign: "right",
        }}
        date={item.date}
        icon={item.icon}
        iconStyle={{
          background: theme === "light" ? "white" : "rgba(255, 255, 255, 0.15)",
          fontSize: "1.5rem",
        }}
      >
        <h3 className="font-bold capitalize">{item.company}</h3>
        <h3 className="font-semibold capitalize">{item.title}</h3>
        <br />
        <ul className="m-2 list-disc !mt-1">
          {item.description.map((point, idx) => (
            <li key={idx} className="font-normal text-white-600">
              {point}
            </li>
          ))}
        </ul>
      </VerticalTimelineElement>
    ));
  };

  return (
    <section
      id="experience"
      ref={ref}
      className="scroll-mt-28 mb-28 sm:mb-40 m-5"
    >
      <SectionHeading>EXPERIENCE</SectionHeading>
      <VerticalTimeline lineColor="">
        {renderExperienceElements()}
      </VerticalTimeline>
    </section>
  );
};

export default Experience;
