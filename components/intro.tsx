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
  "I'm passionate about software engineering and cybersecurity.",
  "I enjoy coding and learning new technologies.",
  "I'm tea enthusiast.",
];

export default function Intro() {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(50);
  const [textWidth, setTextWidth] = useState(0);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    const currentText = fullText[loopNum % fullText.length];

    if (isDeleting) {
      timer = setTimeout(() => {
        setText((prevText) => prevText.substring(0, prevText.length - 1));
        setTypingSpeed((prevSpeed) => (text.length > 10 ? 20 : 50));
      }, typingSpeed);
    } else {
      timer = setTimeout(() => {
        setText((prevText) => currentText.substring(0, prevText.length + 1));
        setTypingSpeed((prevSpeed) => (text.length > 10 ? 20 : 50));
      }, typingSpeed);
    }

    if (!isDeleting && text === currentText) {
      setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && text === "") {
      setIsDeleting(false);
      setLoopNum((prevLoopNum) => prevLoopNum + 1);
    }

    setTextWidth(textRef.current ? textRef.current.offsetWidth : 0);

    return () => clearTimeout(timer);
  }, [text, isDeleting, typingSpeed, loopNum]);

  useEffect(() => {
    const maxTextWidth = Math.max(...fullText.map((str) => str.length));
    setTextWidth(maxTextWidth * 10);

    setTimeout(() => {
      setIsDeleting(false);
    }, 1000);
  }, []);

  const { ref } = useSectionInView("HOME", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  const isMobile = typeof window !== "undefined" && window.innerWidth <= 768;

  const renderMobileButtonStyles = () => {
    if (isMobile) {
      return {
        width: "[3rem]",
        height: "[3rem]",
        justifyContent: "center",
      };
    } else {
      return {};
    }
  };

  return (
    <section
      ref={ref}
      id="home"
      className="mb-20 max-w-[50rem] text-center sm:mb-0"
    >
      <div className="flex flex-col items-center justify-center">
        <div className="relative mb-4">
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
        <motion.h1
          className="text-2xl m-[3.7rem] font-medium sm:text-5xl"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <span className="font-medium" ref={textRef}>
            {text}
          </span>
          <span className="typing-cursor">|</span>{" "}
        </motion.h1>
      </div>

      <motion.div
        className="flex mb-[2.2rem] flex-col sm:flex-row justify-center gap-5 px-4 text-lg"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        {/* LinkedIn Button */}
        <a
          className={`bg-white px-3 py-3 flex items-center gap-2 rounded-full focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10`}
          href="https://www.linkedin.com/in/akileshjayakumar/"
          target="_blank"
          rel="noopener noreferrer"
          style={renderMobileButtonStyles()}
        >
          <Image src={linkinlogo} alt="LinkedIn Logo" width={30} height={30} />
        </a>

        {/* GitHub Button */}
        <a
          className={`bg-white px-3 py-3 flex items-center gap-2 rounded-full focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10`}
          href="https://github.com/akileshjayakumar"
          target="_blank"
          rel="noopener noreferrer"
          style={renderMobileButtonStyles()}
        >
          <Image src={githublogo} alt="GitHub Logo" width={30} height={30} />
        </a>

        {/* Download Button */}
        <a
          className={`bg-white px-3 py-3 flex items-center gap-2 rounded-full focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10`}
          href="./Akilesh Jayakumar Resume.pdf"
          download="akileshjayakumar-resume.pdf"
          style={{ minWidth: "12rem", ...renderMobileButtonStyles() }}
        >
          Download CV/Resume{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>
      </motion.div>
    </section>
  );
}
