"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { RiTwitterXLine } from "react-icons/ri";
import { useSectionInView } from "@/lib/hooks";
import { SiLeetcode } from "react-icons/si";
import { FaMedium } from "react-icons/fa";
import { useState, useEffect, useRef } from "react";


import { GrDocumentPdf } from "react-icons/gr";

import { PiMicrosoftOutlookLogo } from "react-icons/pi";


const fullText = [
  "welcome to my portfolio website!",
  "i love learning new technologies.",
  "i am currently learning Svelte, RAG and AWS.",
  "i love building and designing software.",
  "i love solving puzzles and the rubik's cube.",
  "cardistry and magic tricks are my hobbies.",
  "sci-fi and comic book movies are my favourites.",
  "let's connect!",
];

export default function Intro() {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const [hasVisited, setHasVisited] = useState(false);
  const textRef = useRef<HTMLSpanElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 700);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (hasVisited) {
      const currentText = fullText[loopNum % fullText.length];
      let timer: NodeJS.Timeout;

      const handleTyping = () => {
        setText(currentText.substring(0, text.length + 1));
        setTypingSpeed(40);
      };

      const handleDeleting = () => {
        setText(currentText.substring(0, text.length - 1));
        setTypingSpeed(20);
      };

      if (!isDeleting && text === currentText) {
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, 2000);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingSpeed(1);
      } else if (!isDeleting) {
        timer = setTimeout(handleTyping, typingSpeed);
      } else {
        timer = setTimeout(handleDeleting, typingSpeed);
      }

      return () => clearTimeout(timer);
    }
  }, [text, isDeleting, loopNum, typingSpeed, hasVisited]);

  useEffect(() => {
    setHasVisited(true);
  }, []);

  const { ref } = useSectionInView("HOME", 0.5);
  const iconStyle = isMobile ? "text-5xl" : "text-5xl";

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <div className="flex flex-col sm:m-1 items-center justify-center">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="cursor-pointer"
          whileHover={{ scale: 1.2 }}
        >
          <Image
            src="/profile-photo.jpg"
            alt="profile-photo"
            width={350}
            height={350}
            quality={100}
            priority={true}
            className="rounded-full mb-[1rem] sm:mb-[3rem] object-cover border-[0.2rem] border-[cyan] no-shadow"
          />
        </motion.div>

        <motion.h1
          className="font-bold tracking-wider sm:m-2 mt-[1rem] sm:text-5xl text-5xl text-white"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          hi, i'm akilesh
        </motion.h1>

        <motion.h1 className="tracking-wider font-medium sm:m-4 mt-[2rem] sm:text-2xl text-2xl text-white">
          <span
            ref={textRef}
            style={{ whiteSpace: isMobile ? "normal" : "nowrap" }}
          >
            {text}
          </span>
          <span className="typing-cursor">_</span>
        </motion.h1>
      </div>

      <motion.div
        className="flex flex-col items-center justify-center m-9 sm:m-8 mb-[15rem] mt-[2rem] text-2xl font-bold text-white"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <div className="flex flex-wrap gap-[1rem] ml-[1rem] sm:gap-[3rem]">
          <a
            href="https://g.dev/akileshjayakumar"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FcGoogle
              className={iconStyle + " hover:scale-110 transition-transform"}
            />
          </a>

          <a
            href="https://github.com/akileshjayakumar"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub
              className={iconStyle + " hover:scale-110 transition-transform"}
            />
          </a>

          <a
            href="https://akileshjayakumar.medium.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaMedium
              className={iconStyle + " hover:scale-110 transition-transform"}
            />
          </a>

          <a
            href="https://leetcode.com/u/akileshjayakumar/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiLeetcode
              className={
                iconStyle +
                " hover:scale-110 transition-transform text-yellow-400"
              }
            />
          </a>
        </div>
        <div className="flex flex-wrap gap-[1rem] ml-[1rem] sm:gap-[3rem] mt-4">
          <a
            href="https://x.com/StrangeDoctorGo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <RiTwitterXLine
              className={
                iconStyle +
                " hover:scale-110 transition-transform text-orange-600"
              }
            />
          </a>

          <a
            href="https://www.linkedin.com/in/akileshjayakumar/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin
              className={
                iconStyle +
                " hover:scale-110 transition-transform text-blue-600"
              }
            />
          </a>

          <a
            href="https://google.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GrDocumentPdf
              className={iconStyle + " hover:scale-110 transition-transform"}
            />
          </a>

          <a
            href="mailto:jayakuma006@mymail.sim.edu.sg"
            target="_blank"
            rel="noopener noreferrer"
          >
            <PiMicrosoftOutlookLogo
              className={iconStyle + " hover:scale-110 transition-transform"}
            />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
