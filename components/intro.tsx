"use client";

import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { HiDownload } from "react-icons/hi";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import "/app/animation.css";
import githublogo from "@/public/github-logo.png";
import linkinlogo from "@/public/linkedin-logo.png";

const fullText = [
  "Hi, I'm Akilesh!",
  "வணக்கம், நான் அகிலேஷ்!",
  "你好，我是阿基莱什！",
  "Hai, saya Akilesh!",
  "Bonjour, je suis Akilesh!",
  "I'm passionate about software engineering and cybersecurity.",
  "I enjoy coding and learning new technologies.",
  "I speak English and Tamil.",
  "I like to explore new places.",
  "I enjoy watching movies.",
  "I'm a coffee and tea enthusiast.",
];

export default function Intro() {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(0);
  const [textWidth, setTextWidth] = useState(0);
  const textRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    const currentText = fullText[loopNum % fullText.length];

    if (isDeleting) {
      timer = setTimeout(() => {
        setText(currentText.substring(0, text.length - 1));
        setTypingSpeed(50);
      }, typingSpeed);
    } else {
      timer = setTimeout(() => {
        setText(currentText.substring(0, text.length + 1));
        setTypingSpeed(50);
      }, typingSpeed);
    }

    if (!isDeleting && text === currentText) {
      setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && text === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
    }

    setTextWidth(textRef.current ? textRef.current.offsetWidth : 0);

    return () => clearTimeout(timer);
  }, [text, isDeleting, typingSpeed, loopNum]);

  useEffect(() => {
    const maxTextWidth = Math.max(...fullText.map((str) => str.length));
    setTextWidth(maxTextWidth * 10);

    // Start typing after a brief delay
    setTimeout(() => {
      setIsDeleting(false);
    }, 1000);
  }, []);

  const { ref } = useSectionInView("HOME", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "tween", duration: 0.1 }}
          >
            <Image
              src="/profile-photo.jpg"
              alt="profile-photo"
              width="400"
              height="400"
              quality="100"
              priority={true}
              className="rounded-full object-cover border-[0.3rem] border-white shadow-xl"
            />
          </motion.div>
        </div>
      </div>

      <motion.h1
        className="mb-200 mt-4 justify-center px-4 text-2xl font-medium !leading-[3] sm:text-4xl mb-9"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        style={{
          whiteSpace: "nowrap",
          display: "inline-block",
          textAlign: "center",
          alignContent: "flex-start",
          marginInline: `calc(50% - ${textWidth / 2}px)`,
        }}
      >
        <span className="font-bold" ref={textRef}>
          {text}
        </span>
        <span className="typing-cursor">|</span>{" "}
      </motion.h1>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-5 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        {/* LinkedIn Button */}
        <a
          className="bg-white px-4 py-2 flex items-center gap-2 rounded-full focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
          href="https://www.linkedin.com/in/akileshjayakumar/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src={linkinlogo} alt="LinkedIn Logo" width={30} height={30} />
        </a>

        {/* GitHub Button */}
        <a
          className="bg-white px-4 py-2 flex items-center gap-2 rounded-full focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
          href="https://github.com/akileshjayakumar"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src={githublogo} alt="GitHub Logo" width={30} height={30} />
        </a>

        {/* Download Button */}
        <a
          className="bg-white px-4 py-2 flex items-center gap-2 rounded-full focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
          href="./Akilesh Jayakumar Resume.pdf"
          download="akileshjayakumar-resume.pdf"
          style={{ minWidth: "12rem" }}
        >
          Download CV/Resume{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>
      </motion.div>
    </section>
  );
}
