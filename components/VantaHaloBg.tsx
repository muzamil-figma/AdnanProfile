"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function VantaHaloBg() {
  const elRef = useRef<HTMLDivElement | null>(null);
  const effectRef = useRef<{ destroy: () => void } | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return;

    let alive = true;
    (async () => {
      const HALO = (await import("vanta/dist/vanta.halo.min")).default as any;
      if (!alive || !elRef.current) return;

      effectRef.current = HALO({
        el: elRef.current,
        THREE,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        backgroundAlpha: 0,
        backgroundColor: 0x000000,
        baseColor: 0x6D28D9,
        size: 1.1,
        amplitudeFactor: 1.05,
      });
    })();

    return () => {
      alive = false;
      try { effectRef.current?.destroy(); } catch {}
      effectRef.current = null;
    };
  }, []);

  return (
    <div
      ref={elRef}
      aria-hidden
      className="absolute inset-0 z-0 pointer-events-none"
    />
  );
}
