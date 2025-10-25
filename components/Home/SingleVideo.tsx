// =========================
// app/components/SingleVideo.tsx (Skills Grid)
// =========================
"use client";
import React, { useEffect, useState } from "react";
import data from "@/data/agents.json";
import { FaReact } from "react-icons/fa";
import {
  SiNextdotjs,
  SiNestjs,
  SiJavascript,
  SiPython,
  SiAndroidstudio,
  SiCss3,
  SiTailwindcss,
  SiLaravel,
  SiNodedotjs,
  SiMongodb,
  SiFirebase,
  SiMysql,
} from "react-icons/si";

type ExperienceBlock = {
  heading: string;
  bullets: string[];
};

type Skill = {
  name: string;
  icon: string; // now unused but still in JSON
  experience: ExperienceBlock[];
};

export default function SingleVideo() {
  const skills = (data.skills || []) as Skill[];
  const [selected, setSelected] = useState<Skill | null>(null);

  // lock body scroll when modal is open
  useEffect(() => {
    if (selected) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [selected]);

  // close on ESC
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelected(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // icon picker
  const renderIcon = (name: string) => {
    switch (name) {
      case "React":
        return <FaReact className="text-5xl text-cyan-400" />;
      case "Next.js":
        return <SiNextdotjs className="text-5xl text-gray-200" />;
      case "NestJS":
        return <SiNestjs className="text-5xl text-red-500" />;
      case "JavaScript":
        return <SiJavascript className="text-5xl text-yellow-400" />;
      case "Python":
        return <SiPython className="text-5xl text-blue-400" />;
      case "Android Studio":
        return <SiAndroidstudio className="text-5xl text-green-400" />;
      case "CSS3":
        return <SiCss3 className="text-5xl text-blue-500" />;
      case "Tailwind CSS":
        return <SiTailwindcss className="text-5xl text-cyan-300" />;
      case "Laravel":
        return <SiLaravel className="text-5xl text-red-400" />;
      case "Node.js":
        return <SiNodedotjs className="text-5xl text-green-500" />;
      case "MongoDB":
        return <SiMongodb className="text-5xl text-green-500" />;
      case "Firebase":
        return <SiFirebase className="text-5xl text-yellow-400" />;
      case "MySQL":
        return <SiMysql className="text-5xl text-blue-400" />;
      default:
        return <div className="text-3xl">⚙️</div>;
    }
  };

  return (
    <section id="skills" className="px-10 bg-[#0b0b12] text-white">
      <div className="container-default py-20 text-center">
        <h2 className="text-4xl font-extrabold">{data.heading}</h2>
        <p className="text-white/70 mt-2">{data.sub}</p>

        {/* Grid: square cards; lg+: 4 columns; mobile responsive */}
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
          {skills.map((s, idx) => (
            <button
              key={idx}
              onClick={() => setSelected(s)}
              className="group relative bg-white/5 border border-white/10 rounded-2xl p-5 aspect-square flex flex-col items-center justify-center hover:-translate-y-1 transition-transform focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
              aria-label={`Open experience for ${s.name}`}
            >
              <div className="mb-3">{renderIcon(s.name)}</div>
              <span className="font-semibold">{s.name}</span>

              {/* Hover tooltip */}
              <div className="pointer-events-none absolute -top-2 left-1/2 -translate-x-1/2 -translate-y-full opacity-0 group-hover:opacity-100 transition bg-black text-white text-xs px-3 py-1 rounded-lg shadow-lg border border-white/10 whitespace-nowrap">
                Click to view experience
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Modal / Dialog */}
      {selected && (
        <div className="fixed inset-0 z-[120] grid place-items-center p-4 sm:p-6">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/70"
            onClick={() => setSelected(null)}
            aria-hidden="true"
          />

          {/* Panel (centered on all screens, with margins) */}
          <div
            role="dialog"
            aria-modal="true"
            className="
              relative w-full max-w-3xl
              bg-[#111118] border border-white/10 rounded-2xl shadow-2xl
              max-h-[70vh] overflow-hidden
            "
          >
            {/* Sticky header (icon + title + close) */}
            <div className="sticky top-0 z-10 bg-[#111118] border-b border-white/10 px-5 sm:px-7 py-4 flex items-center gap-4">
              <div className="text-4xl">{renderIcon(selected.name)}</div>
              <h3 className="text-2xl sm:text-3xl font-bold">{selected.name}</h3>
              <button
                onClick={() => setSelected(null)}
                className="ml-auto rounded-full bg-white/10 hover:bg-white/20 w-9 h-9 grid place-items-center"
                aria-label="Close dialog"
              >
                ✕
              </button>
            </div>

            {/* Scrollable content area (only body scrolls) */}
            <div className="p-5 sm:p-7 overflow-y-auto max-h-[calc(70vh-64px)] sm:max-h-[calc(70vh-72px)]">
              <div className="space-y-6">
                {selected.experience.map((block, i) => (
                  <div
                    key={i}
                    className="bg-white/5 border border-white/10 rounded-2xl p-4 sm:p-6"
                  >
                    <h4 className="text-lg sm:text-xl font-semibold tracking-wide">
                      {block.heading}
                    </h4>
                    <ul className="mt-3 text-white/70 text-sm sm:text-base leading-relaxed list-disc pl-5 space-y-2 font-light">
                      {block.bullets.map((line, j) => (
                        <li key={j}>{line}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
