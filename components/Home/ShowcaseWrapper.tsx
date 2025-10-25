"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
// Next.js friendly imports:
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";

import Showcase1 from "./Showcase1";
import Showcase2 from "./Showcase2";
import Showcase3 from "./Showcase3";
import Showcase4 from "./Showcase4";
import Showcase5 from "./Showcase5";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const showcases = [Showcase1, Showcase2, Showcase3, Showcase4, Showcase5];

export default function ShowcaseWrapper() {
  const containerRef = useRef<HTMLDivElement>(null);
  const stRef = useRef<ScrollTrigger | null>(null);

  const [index, setIndex] = useState(0);
  const lastIndex = useRef(0);
  const snappingRef = useRef(false); // recursion guard

  useEffect(() => {
    if (!containerRef.current) return;

    const total = showcases.length;

    // ✅ pin only — NO scrub, NO snap
    const st = ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top top",
      end: `+=${(total - 1) * window.innerHeight}`,
      pin: true,
      anticipatePin: 1,
      invalidateOnRefresh: true,
      onUpdate: (self) => {
        if (snappingRef.current) return;

        const step = Math.min(
          total - 1,
          Math.max(0, Math.round(self.progress * (total - 1)))
        );

        if (step !== lastIndex.current) {
          lastIndex.current = step;
          setIndex(step);

          snappingRef.current = true;
          // 🔧 FIX: use self.start instead of st.start (avoids TDZ)
          const y = self.start + step * window.innerHeight;

          gsap.to(window, {
            scrollTo: y,
            duration: 0,
            overwrite: "auto",
            onComplete: () => {
              requestAnimationFrame(() => (snappingRef.current = false));
            },
          });
        }
      },
      onRefresh: (self) => {
        const y = self.start + lastIndex.current * window.innerHeight;
        gsap.set(window, { scrollTo: y });
      },
    });

    stRef.current = st;

    // initial align (index 0)
    gsap.set(window, { scrollTo: st.start });

    return () => {
      st.kill();
      stRef.current = null;
    };
  }, []);

  const ActiveShowcase = showcases[index];

  return (
    <div ref={containerRef} className="relative h-screen">
      <section className="sticky top-0 h-screen w-full bg-gray-50 flex items-center justify-center will-change-transform">
        <ActiveShowcase />
      </section>
    </div>
  );
}
