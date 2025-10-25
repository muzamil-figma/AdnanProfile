"use client";

import { motion } from "framer-motion";

export default function Showcase5() {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-purple-100 to-purple-400 z-0" />

      {/* Full Zoomed Image (centered, larger for desktop) */}
      <motion.img
        src="/images/portrait.png"
        alt="portrait"
        className="relative z-10 object-contain mx-auto"
        initial={{ scale: 1, opacity: 0 }}
        animate={{ scale: 1.2, opacity: 1 }}
        transition={{ duration: 1.8, ease: "easeOut" }}
        style={{ maxHeight: "70vh", width: "auto" }} // laptop par badi image
      />

      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-purple-800/50 via-purple-600/20 to-transparent z-20" />

      {/* Heading + Description (center bottom, over image) */}
      <motion.div
        className="absolute bottom-8 w-full text-center px-6 max-w-3xl mx-auto z-30"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 1 }}
      >
       <h2 className="text-2xl font-thin md:text-4xl  text-white drop-shadow-lg">
  Adnan Ali Bhatti Portfolio
</h2>
<p className="mt-3  font-thin text-gray-100 text-sm md:text-sm leading-relaxed drop-shadow">
  Designing modern web experiences that convert and scale fast.
</p>
<p className="text-gray-100 font-thin text-sm md:text-sm leading-relaxed drop-shadow">
  Clean UI, reliable code, measurable business results.
</p>
<p className="text-gray-100 font-thick  text-sm md:text-sm leading-relaxed drop-shadow">
  On time and on budget.
</p>

      </motion.div>
    </section>
  );
}
