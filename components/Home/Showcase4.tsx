"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Showcase5() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStep((prev) => (prev + 1) % 3); // 0 → 1 → 2 loop
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* ---------- Large Screen Section ---------- */}
      <section className="hidden lg:flex h-screen bg-gradient-to-b from-white via-purple-100 to-purple-300 z-0 w-full items-center justify-center relative overflow-hidden">
        {/* Center Image */}
        <motion.img
          src="/images/portrait.png"
          alt="Portrait — Adnan Ali Bhatti"
          className="z-10 object-contain mt-4"
          initial={{ scale: 1, opacity: 0 }}
          animate={{ scale: 1.2, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          style={{ maxHeight: "50vh", width: "auto" }}
        />

        {/* Left Popup */}
        {step === 0 && (
          <motion.div
            className="absolute left-[8%] top-1/2 -translate-y-1/2 bg-white/90 border border-purple-200 shadow-2xl rounded-2xl px-4 py-3 w-[14rem] md:w-64 min-h-24 flex flex-col items-center justify-center text-center"
            initial={{ opacity: 0, filter: "blur(12px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, filter: "blur(12px)" }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <h4 className="font-semibold text-sm text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
              UI/UX Focus
            </h4>
            <p className="text-xs text-gray-700 mt-1">
              Clean layouts, smooth micro-interactions, and design systems that scale.
            </p>
          </motion.div>
        )}

        {/* Right Popup */}
        {step === 1 && (
          <motion.div
            className="absolute right-[8%] top-1/2 -translate-y-1/2 bg-white/90 border border-purple-200 shadow-2xl rounded-2xl px-4 py-3 w-[14rem] md:w-64 min-h-24 flex flex-col items-center justify-center text-center"
            initial={{ opacity: 0, filter: "blur(12px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, filter: "blur(12px)" }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <h4 className="font-semibold text-sm text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-indigo-600">
              Front-End Stack
            </h4>
            <p className="text-xs text-gray-700 mt-1">
              React / Next.js • Tailwind • Framer Motion — fast, responsive, accessible.
            </p>
          </motion.div>
        )}

      
      </section>

      {/* ---------- Mobile Section ---------- */}
      <section className="flex lg:hidden flex-col bg-gradient-to-b from-white via-purple-100 to-purple-200 z-0 items-center justify-center h-screen w-full overflow-hidden relative">
        {/* Center Image (blur → clear, full visible, no cut) */}
        <motion.img
          src="/images/portrait.png"
          alt="Portrait — Adnan Ali Bhatti"
          className="object-contain"
          initial={{ opacity: 0, filter: "blur(16px)", scale: 1.1 }}
          animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
          transition={{ duration: 1.8, ease: "easeOut" }}
          style={{ maxHeight: "45vh", width: "auto" }}
        />

        {/* Bottom Popups */}
        <div className="absolute bottom-10 w-full flex justify-center px-5">
          {step === 0 && (
            <motion.div
              className="bg-white/95 border border-purple-200 shadow-2xl rounded-2xl p-5 w-full max-w-sm min-h-28 flex flex-col items-center justify-center text-center"
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 40, scale: 0.9 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            >
              <h4 className="font-bold text-lg text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                Recent Work
              </h4>
              <p className="text-sm text-gray-700 mt-1">
                Shipped production-ready UI for startups & agencies — smooth UX, clean code.
              </p>
            </motion.div>
          )}

          {step === 1 && (
            <motion.div
              className="bg-white/95 border border-purple-200 shadow-2xl rounded-2xl p-5 w-full max-w-sm min-h-28 flex flex-col items-center justify-center text-center"
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 40, scale: 0.9 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            >
              <h4 className="font-bold text-lg text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-indigo-600">
                What I Deliver
              </h4>
              <p className="text-sm text-gray-700 mt-1">
                Modern React/Next.js front-ends • Tailwind design systems • Motion that feels right.
              </p>
            </motion.div>
          )}

          
          
        </div>
      </section>
    </>
  );
}
