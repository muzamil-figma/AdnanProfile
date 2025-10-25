// "use client";

// import { useRef, useState, useEffect } from "react";
// import { motion, useScroll, useTransform } from "framer-motion";
// import data from "@/data/showcase.json";

// /* === Simple Typewriter (word by word) === */
// function Typewriter({ text, speed = 50 }: { text: string; speed?: number }) {
//   const [out, setOut] = useState("");
//   useEffect(() => {
//     setOut("");
//     let i = 0;
//     const words = text.split(" ");
//     const id = setInterval(() => {
//       if (i < words.length) {
//         setOut((prev) => (prev ? prev + " " : "") + words[i]);
//         i++;
//       } else clearInterval(id);
//     }, speed);
//     return () => clearInterval(id);
//   }, [text, speed]);
//   return (
//     <span className="whitespace-pre-line">
//       {out}
//       <span className="border-r-2 border-current animate-pulse ml-1" />
//     </span>
//   );
// }

// export default function ShowcaseScroll() {
//   const hostRef = useRef<HTMLDivElement | null>(null);
//   const { scrollYProgress } = useScroll({
//     target: hostRef,
//     offset: ["start start", "end end"],
//   });

//   // Stages
//   const stage1 = useTransform(scrollYProgress, [0, 0.2], [1, 0]); // steps + popup
//   const stage2 = useTransform(scrollYProgress, [0.25, 0.45], [0, 1]); // skills
//   const stage3 = useTransform(scrollYProgress, [0.5, 0.7], [0, 1]); // fullscreen + cards
//   const stage4 = useTransform(scrollYProgress, [0.75, 1], [0, 1]); // final text

//   return (
//     <section ref={hostRef} className="relative h-[100vh] bg-gray-50">
//       <div className="sticky top-0 h-screen flex items-center justify-center">
//         {/* ==== FRAME + IMAGE ==== */}
//         <motion.div
//           style={{ opacity: stage1 }}
//           className="relative w-[250px] sm:w-[300px] md:w-[400px] bg-white rounded-[2rem] shadow-2xl overflow-hidden"
//         >
//           <img
//             src={data.image}
//             alt="Portrait"
//             className="w-full h-full object-cover mix-blend-multiply opacity-90"
//           />
//         </motion.div>

//         {/* ==== RIGHT: TYPEWRITER STEPS ==== */}
//         <motion.div
//           style={{ opacity: stage1 }}
//           className="absolute right-4 sm:right-12 top-1/3 max-w-xs text-right"
//         >
//           {data.steps.map((s: any, i: number) => (
//             <motion.div
//               key={i}
//               className="mb-6"
//               initial={{ opacity: 0 }}
//               whileInView={{ opacity: 1 }}
//               viewport={{ once: false }}
//               transition={{ delay: i * 0.6 }}
//             >
//               <h3 className="text-lg sm:text-xl font-bold text-gray-900">
//                 <Typewriter text={s.name} />
//               </h3>
//               <p className="text-sm sm:text-base text-gray-600 mt-1">
//                 <Typewriter text={s.line} speed={30} />
//               </p>
//             </motion.div>
//           ))}
//         </motion.div>

//         {/* ==== LEFT: POPUP DIV ==== */}
//         <motion.div
//           style={{ opacity: stage1 }}
//           className="absolute left-4 sm:left-12 top-1/3 bg-white/80 backdrop-blur border border-red-400 rounded-xl p-4 w-52 sm:w-64 shadow-md"
//         >
//           <div className="flex items-center justify-between mb-2">
//             <h4 className="text-sm font-bold text-gray-800">
//               {data.popup.heading}
//             </h4>
//             <div className="w-4 h-4 border-2 border-red-500 rounded-full animate-spin" />
//           </div>
//           {data.popup.lines.map((l: string, i: number) => (
//             <p key={i} className="text-xs text-gray-600">
//               {l}
//             </p>
//           ))}
//         </motion.div>

//         {/* ==== SKILLS ==== */}
//         <motion.div
//           style={{ opacity: stage2 }}
//           className="absolute inset-0 flex items-center justify-center"
//         >
//           <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-10">
//             {data.skills.slice(0, 6).map((skill: any, i: number) => (
//               <motion.img
//                 key={i}
//                 src={skill.src}
//                 alt={skill.name}
//                 className="w-12 h-12 sm:w-16 sm:h-16 opacity-70"
//                 initial={{ opacity: 0, scale: 0.8 }}
//                 animate={{ opacity: [0.4, 1, 0.4], scale: 1 }}
//                 transition={{
//                   duration: 2,
//                   repeat: Infinity,
//                   delay: i * 0.3,
//                 }}
//               />
//             ))}
//           </div>
//         </motion.div>

//         {/* ==== FULLSCREEN IMAGE + CARDS ==== */}
//         <motion.div
//           style={{ opacity: stage3 }}
//           className="absolute inset-0 bg-black"
//         >
//           <img
//             src={data.image}
//             alt="Portrait fullscreen"
//             className="w-full h-full object-cover"
//           />
//           <div className="absolute inset-0 flex justify-between items-center px-6">
//             {/* Left cards */}
//             <div className="space-y-6">
//               {data.cards.slice(0, 3).map((c: any, i: number) => (
//                 <div
//                   key={i}
//                   className="bg-white/80 backdrop-blur rounded-xl p-4 max-w-[180px] text-sm shadow-lg"
//                 >
//                   <h4 className="font-bold">{c.title}</h4>
//                   <p className="text-xs text-gray-600">{c.text}</p>
//                 </div>
//               ))}
//             </div>
//             {/* Right cards */}
//             <div className="space-y-6 text-right">
//               {data.cards.slice(3, 6).map((c: any, i: number) => (
//                 <div
//                   key={i}
//                   className="bg-white/80 backdrop-blur rounded-xl p-4 max-w-[180px] text-sm shadow-lg"
//                 >
//                   <h4 className="font-bold">{c.title}</h4>
//                   <p className="text-xs text-gray-600">{c.text}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </motion.div>

//         {/* ==== FINAL SECTION ==== */}
//         <motion.div
//           style={{ opacity: stage4 }}
//           className="absolute bottom-10 text-center max-w-md mx-auto"
//         >
//           <h2 className="text-2xl sm:text-3xl font-extrabold text-white drop-shadow-lg">
//             {data.final.heading}
//           </h2>
//           {data.final.lines.map((l: string, i: number) => (
//             <p key={i} className="text-sm sm:text-base text-white mt-2">
//               {l}
//             </p>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// }
"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ShowcaseScroll() {
  const textRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!textRef.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#showcase-wrapper", // 👈 wrapper not whole body
        start: "top top",
        end: "+=500%", // 5 steps
        scrub: true,
        pin: "#first-section", // 👈 only first section pinned
      },
    });

    // Zoom + text change animations
    tl.to(textRef.current, { scale: 1.2, textContent: "Two", duration: 1 })
      .to(textRef.current, { scale: 1.5, textContent: "Three", duration: 1 })
      .to(textRef.current, { scale: 1.8, textContent: "Four", duration: 1 })
      .to(textRef.current, { scale: 2.1, textContent: "Five", duration: 1 });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div id="showcase-wrapper">
      {/* First pinned section */}
      <section
        id="first-section"
        style={{
          height: "100vh",
          background: "#111", // dark background isolated
          color: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h1 ref={textRef} style={{ fontSize: "3rem" }}>
          One
        </h1>
      </section>
    </div>
  );
}
