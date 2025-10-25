"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

/* ---------- Typewriter (sirf desktop ke liye render hoga) ---------- */
function Typewriter({
  lines,
  speed = 40,
  delayBetween = 1000,
}: {
  lines: string[];
  speed?: number;
  delayBetween?: number;
}) {
  const [displayed, setDisplayed] = useState<string[]>([]);
  const [currentLine, setCurrentLine] = useState(0);
  const [currentText, setCurrentText] = useState("");

  useEffect(() => {
    if (currentLine >= lines.length) return;

    let i = 0;
    const id = setInterval(() => {
      setCurrentText(lines[currentLine].slice(0, i + 1));
      i++;
      if (i >= lines[currentLine].length) {
        clearInterval(id);
        setDisplayed((prev) => [...prev, lines[currentLine]]);
        setCurrentText("");
        setTimeout(() => {
          setCurrentLine((prev) => prev + 1);
        }, delayBetween);
      }
    }, speed);

    return () => clearInterval(id);
  }, [currentLine, lines, speed, delayBetween]);

  return (
    <div className="flex flex-col space-y-3 text-left">
      {displayed.map((line, i) => (
        <motion.p
          key={i}
          className="text-gray-700 text-sm md:text-base"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {line}
        </motion.p>
      ))}
      {currentText && (
        <p className="text-gray-700 text-sm md:text-base">{currentText}</p>
      )}
    </div>
  );
}

export default function Showcase1() {
  return (
    <>
      {/* ---------- Desktop / Laptop (md+) : original layout + typewriter ---------- */}
      <section className="hidden from-white via-purple-100 to-purple-200 md:flex h-screen w-full flex-col items-center justify-center px-6 md:px-12 pt-20">
        {/* Heading + Description */}
        <div className="text-center max-w-2xl mb-8">
          <h1 className="text-2xl md:text-4xl font-bold text-gray-900">
            Adnan Ali Bhatti — (Professional-Dev)
          </h1>
          <p className="mt-3 text-gray-600 text-sm md:text-base leading-relaxed">
            Product designer & front-end developer crafting clean, performant
            interfaces. I help startups and enterprises ship elegant, user-centric
            experiences—from idea to production. Below are selected projects,
            case studies, and experiments.
          </p>
        </div>

        {/* Content Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center w-full max-w-5xl">
          {/* Left Popup Card */}
          <motion.div
            initial={{ opacity: 0, filter: "blur(10px)", y: 30 }}
            animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex justify-center"
          >
            <div className="bg-white border border-gray-200 shadow-2xl rounded-xl p-6 w-72 text-left">
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-sm font-semibold text-gray-900">Profile Snapshot</h4>
                {/* Red Spinner */}
                <div
                  aria-hidden
                  className="w-4 h-4 border-2 border-red-500 border-t-transparent rounded-full animate-spin"
                />
              </div>
              <p className="text-xs text-gray-600">Designer • Full Stack Developer</p>
              <p className="text-xs text-gray-600">React / Next.js • Tailwind • Framer</p>
            </div>
          </motion.div>

          {/* Center Image */}
          <div className="flex justify-center">
            <img
              src="/images/portrait.png"
              alt="Portrait of Adnan Ali Bhatti"
              className="max-h-[55vh] w-auto object-contain"
            />
          </div>

          {/* Right Chat (Typewriter) */}
          <div className="flex flex-col justify-center">
            <Typewriter
              lines={[
                "Adnan: Hi — I'm Adnan Ali Bhatti.",
                "Adnan: I design clean, modern interfaces and ship fast UIs.",
                "Client: Do you work with React/Next.js?",
                "Adnan: Yes — production-ready, responsive, and accessible.",
              ]}
              speed={40}
              delayBetween={1000}
            />
          </div>
        </div>
      </section>

      {/* ---------- Mobile (sm) : no typewriter, simple responsive stack ---------- */}
      <section className="md:hidden  from-white via-purple-100 to-purple-200  h-screen w-full flex flex-col items-center justify-center px-5 pt-16">
        {/* Heading + Description */}
        <motion.div
          initial={{ opacity: 0, filter: "blur(8px)", y: 12 }}
          animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="w-full max-w-md text-center mb-6"
        >
          <h1 className="text-xl font-bold text-gray-900">
            Adnan Ali Bhatti — Portfolio
          </h1>
          <p className="mt-3 text-gray-600 text-sm leading-relaxed">
            Product designer & front-end developer building polished, user-first
            experiences. Explore selected work and case studies below.
          </p>
        </motion.div>

        {/* Image */}
        <motion.img
          src="/images/portrait.png"
          alt="Portrait of Adnan Ali Bhatti"
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-h-[40vh] w-auto object-contain mb-6"
        />

        {/* Popup Card (stacked, full-width on small screens) */}
        <motion.div
          initial={{ opacity: 0, filter: "blur(8px)", y: 12 }}
          animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
          className="w-full max-w-md"
        >
          <div className="bg-white border border-gray-200 shadow-xl rounded-xl p-5">
            <div className="flex items-center justify-between mb-2">
              <h4 className="text-sm font-semibold text-gray-900">Profile Snapshot</h4>
              <div
                aria-hidden
                className="w-4 h-4 border-2 border-red-500 border-t-transparent rounded-full animate-spin"
              />
            </div>
            <p className="text-xs text-gray-600">React / Next.js • Tailwind • Framer</p>
            <p className="text-xs text-gray-600">Available for select projects</p>
          </div>
        </motion.div>
      </section>
    </>
  );
}
