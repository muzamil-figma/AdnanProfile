"use client";

import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaAndroid,
  FaApple,
} from "react-icons/fa";
import { useState, useEffect } from "react";

const icons = [
  <FaHtml5 className="text-orange-500" />,
  <FaCss3Alt className="text-blue-500" />,
  <FaReact className="text-cyan-400" />,
  <FaNodeJs className="text-green-600" />,
  <FaAndroid className="text-green-500" />,
  <FaApple className="text-gray-800" />,
];

// fixed slots desktop orbit ke settle ke liye
const leftSlots = [
  { x: "-22vw", y: "-18vh" },
  { x: "-26vw", y: "12vh" },
  { x: "-18vw", y: "12vh" },
];

const rightSlots = [
  { x: "22vw", y: "-18vh" },
  { x: "18vw", y: "12vh" },
  { x: "26vw", y: "12vh" },
];

export default function Showcase3() {
  const [settled, setSettled] = useState<number[]>([]);

  useEffect(() => {
    // Desktop orbit settle (icons ek ek karke rukenge)
    const timers: NodeJS.Timeout[] = [];
    icons.forEach((_, i) => {
      timers.push(
        setTimeout(() => {
          setSettled((prev) => [...prev, i]);
        }, 10000 + i * 1000)
      );
    });
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <>
      {/* ---------- Large Screen Section ---------- */}
      <section className="hidden lg:flex  bg-gradient-to-b from-white via-purple-100 to-purple-200  h-screen w-full items-center justify-center relative bg-white overflow-hidden pt-24">
        {/* Center Image */}
        <motion.img
          src="/images/portrait.png"
          alt="portrait"
          className="z-10 object-contain"
          initial={{ scale: 1, opacity: 0 }}
          animate={{ scale: 1.15, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          style={{ maxHeight: "48vh", width: "auto" }}
        />

        {/* Orbiting icons */}
        <motion.div
          className="absolute flex items-center justify-center"
          animate={{ rotate: 360 }}
          transition={{ duration: 8, ease: "linear", repeat: Infinity }}
          style={{ width: "480px", height: "480px" }}
        >
          <div className="relative w-full h-full">
            {icons.map((icon, i) => {
              if (settled.includes(i)) return null;

              const angle = (i / icons.length) * 2 * Math.PI;
              const radius = 220;
              const x = radius * Math.cos(angle);
              const y = radius * Math.sin(angle);

              return (
                <div
                  key={i}
                  className="absolute"
                  style={{
                    left: `calc(50% + ${x}px)`,
                    top: `calc(50% + ${y}px)`,
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  <div className="text-6xl drop-shadow-xl animate-pulse">
                    {icon}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Settled icons */}
        {settled.map((i) => {
          const slot =
            i % 2 === 0
              ? leftSlots[Math.floor(i / 2)]
              : rightSlots[Math.floor(i / 2)];

          return (
            <motion.div
              key={i}
              className="absolute bg-white shadow-lg rounded-xl p-5 text-5xl flex items-center justify-center hover:scale-110 hover:shadow-2xl transition-all duration-300"
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                x: slot.x,
                y: slot.y,
              }}
              transition={{ duration: 1.6, ease: "easeInOut" }}
            >
              {icons[i]}
            </motion.div>
          );
        })}
      </section>

      {/* ---------- Mobile Section ---------- */}
    <section className="lg:hidden flex flex-col items-center justify-center w-full h-screen bg-gradient-to-b from-white via-purple-100 to-purple-200 px-6 py-12 space-y-8">
  {/* Centered Image (no zoom, no animation) */}
  <img
    src="/images/portrait.png"
    alt="portrait"
    className="z-10 object-contain"
    style={{ maxHeight: "35vh", width: "auto" }}
  />

  {/* Skills grid */}
  <div className="grid grid-cols-3 gap-6 w-full max-w-md mt-6">
    {icons.map((icon, i) => (
      <motion.div
        key={i}
        className="w-20 h-20 bg-white shadow-lg rounded-xl flex items-center justify-center text-4xl"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: i * 0.4 }}
      >
        {icon}
      </motion.div>
    ))}
  </div>
</section>

    </>
  );
}
