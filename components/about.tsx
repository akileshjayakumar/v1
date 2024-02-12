"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("ABOUT");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>ABOUT</SectionHeading>
      <p>
        I am a final-year Computer Science student at{" "}
        <a
          href="https://www.uow.edu.au/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ fontWeight: "bold", textDecoration: "underline" }}
        >
          University of Wollongong (SIM Campus)
        </a>{" "}
        in Singapore, focusing on Big Data and Cybersecurity. <br />
        <br />
      </p>
      <p>
        I am actively seeking opportunities for a 6-month, full-time
        credit-bearing internship in Software Engineering or Cybersecurity. I
        aim to leverage my academic background and technical skills to
        contribute effectively in a business environment.
      </p>

      <br />
      <p>
        I'm highly interested in advancing my skills in software development. I
        enjoy diving deeper into this field and actively contributing to
        projects. Motivated and eager to tackle new challenges, I always seek
        opportunities to improve my abilities and learn. Let's connect! 😁
      </p>
    </motion.section>
  );
}
