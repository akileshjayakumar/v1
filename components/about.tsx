"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("ABOUT");

  return (
    <section
      ref={ref}
      className="mt-[9rem] max-w-[45rem] text-center sm:mb-40 scroll-mt-28"
      id="about"
    >
      <SectionHeading>ABOUT</SectionHeading>
      <p className="text-2xl text-center leading-[3rem] tracking-wider">
        Hello! I am currently studying computer science at the{" "}
        <a
          className=" hover:bg-blue-700 text-white 
          justify-center items-center rounded duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
          href="https://www.uow.edu.au/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ fontWeight: "bold", textDecoration: "underline" }}
        >
          University of Wollongong (SIM Campus)
        </a>{" "}
        , focusing on big data and cybersecurity. <br />
        <br />
        I'm passionate about building and designing software that is both
        functional and user-friendly. <br /> <br />
        I'm also interested in data science and UI/UX, and I'm always looking
        for opportunities to grow my skill set. <br />
      </p>

      <br />
    </section>
  );
}
