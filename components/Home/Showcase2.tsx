"use client";

import { motion } from "framer-motion";

// Platforms / Companies shown on badges (left/right)
const companiesLeft = ["Fiverr", "Upwork", "Guru"];
const companiesRight = ["BISM ", "Khan Sahib", "Global"];

export default function Showcase1() {
  return (
    <>
      {/* ---------- Large Screens Section (Desktop/Laptop only) ---------- */}
      <section className="hidden lg:flex bg-gradient-to-b from-white via-purple-100 to-purple-200  h-screen w-full flex-col items-center justify-center px-6 md:px-12 pt-20 relative">
        {/* Heading + Description */}
        <motion.div
          className="text-center max-w-2xl mb-8"
          initial={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          animate={{ opacity: 0, filter: "blur(10px)", y: -60 }}
          transition={{ duration: 1, ease: "easeInOut", delay: 1 }}
        >
          <h1 className="text-2xl md:text-4xl font-bold text-gray-900">
            Adnan Ali Bhatti — Collaborations & Platforms
          </h1>
          <p className="mt-3 text-gray-600 text-sm md:text-base leading-relaxed">
            Full-stack minded front-end specialist working with global clients via
            Fiverr, Upwork, and Guru — plus studio stints with Bism Software House,
            Khan Sahib Freelance Place, and Global Freelancing Hub. Selected collabs,
            client feedback, and highlights below.
          </p>
        </motion.div>

        {/* Content Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center w-full max-w-5xl">
          {/* Left Popup Card */}
          <motion.div
            initial={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            animate={{ opacity: 0, filter: "blur(10px)", y: 40 }}
            transition={{ duration: 1, ease: "easeInOut", delay: 4 }}
            className="flex justify-center"
          >
            <div className="bg-white border border-gray-200 shadow-2xl rounded-xl p-6 w-72 text-left">
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-sm font-semibold text-gray-900">Highlights</h4>
                {/* Red Spinner */}
                <div className="w-4 h-4 border-2 border-red-500 border-t-transparent rounded-full animate-spin"></div>
              </div>
              <p className="text-xs text-gray-600">React/Next.js • Tailwind • Framer</p>
              <p className="text-xs text-gray-600">100+ deliveries • 5★ client feedback</p>
            </div>
          </motion.div>

          {/* Center Image */}
          <motion.img
            src="/images/portrait.png"
            alt="Portrait of Adnan Ali Bhatti"
            className="z-10 object-contain"
            initial={{ scale: 1, opacity: 1, y: 0 }}
            animate={{ scale: 1.25, opacity: 1, y: -60 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 2
             }}
            style={{ maxHeight: "65vh", width: "auto" }}
          />

          {/* Right Chat */}
          <motion.div
            className="flex flex-col justify-center space-y-2"
            initial={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            animate={{ opacity: 0, filter: "blur(10px)", y: 40 }}
            transition={{ duration: 1, ease: "easeInOut", delay: 3 }}
          >
            <p className="text-sm text-gray-700">Client: Where have you shipped work?</p>
            <p className="text-sm text-gray-700">
              Adnan: Fiverr, Upwork, Guru — plus studio projects at Bism &amp; Global Freelancing Hub.
            </p>
            <p className="text-sm text-gray-700">Client: Tech stack?</p>
            <p className="text-sm text-gray-700">
              Adnan: React/Next.js, Tailwind, Framer — fast, responsive, accessible.
            </p>
          </motion.div>
        </div>

        {/* Left Company Cards */}
        <div className="absolute left-6 md:left-20 flex flex-col items-center space-y-6">
          <motion.div
            className="w-32 h-14 flex items-center justify-center bg-white rounded-xl text-sm font-semibold text-gray-800 shadow-lg animate-pulse"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 7, duration: 0.6 }}
          >
            {companiesLeft[0]}
          </motion.div>
          <div className="flex space-x-6">
            {companiesLeft.slice(1).map((name, i) => (
              <motion.div
                key={i}
                className="w-32 h-14 flex items-center justify-center bg-white rounded-xl text-sm font-semibold text-gray-800 shadow-lg animate-pulse"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 7.5 + i * 0.5, duration: 0.6 }}
              >
                {name}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Company Cards */}
        <div className="absolute right-6 md:right-20 flex flex-col items-center space-y-6">
          <motion.div
            className="w-32 h-14 flex items-center justify-center bg-white rounded-xl text-sm font-semibold text-gray-800 shadow-lg animate-pulse"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 8, duration: 0.6 }}
          >
            {companiesRight[0]}
          </motion.div>
          <div className="flex space-x-6">
            {companiesRight.slice(1).map((name, i) => (
              <motion.div
                key={i}
                className="w-32 h-14 flex items-center justify-center bg-white rounded-xl text-sm font-semibold text-gray-800 shadow-lg animate-pulse"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 8.5 + i * 0.5, duration: 0.6 }}
              >
                {name}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Mobile Section (Only small/medium screens) ---------- */}
      <section className="lg:hidden relative w-full h-screen bg-gradient-to-b from-white via-purple-100 to-purple-200 flex flex-col items-center justify-center">
        {/* Image zoom center */}
        <motion.img
          src="/images/portrait.png"
          alt="Portrait of Adnan Ali Bhatti"
          className="z-10 object-contain"
          initial={{ scale: 1, opacity: 1, y: 0 }}
          animate={{ scale: 1.2, opacity: 1, y: 0 }} // center par rakha, upar nahi jaayegi
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.5 }}
          style={{ maxHeight: "40vh", width: "auto" }}
        />

        {/* Company cards grid */}
        <div className="grid grid-cols-3 gap-4 w-full px-5 max-w-md mt-8 z-20">
          {[...companiesLeft, ...companiesRight].map((name, i) => (
            <motion.div
              key={i}
              className="w-full  h-16 flex items-center justify-center bg-white rounded-xl text-sm font-semibold text-gray-800 shadow-lg animate-pulse"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7 + i * 0.2, duration: 0.6 }}
            >
              {name}
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
