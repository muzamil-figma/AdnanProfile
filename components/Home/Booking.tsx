"use client";

import React, { useEffect, useMemo, useState, useRef } from "react";

// ============================
// ✅ ZERO‑ERROR, SELF‑CONTAINED PAGE
// - No external icon libs
// - Seamless + faster marquee
// - Hover: pause + scrollbar
// - First two cards fully visible
// - Click card → modal with details
// - Light white/blue/purple gradient background
// ============================

// ----------------------------
// Intro Text (Left)
// ----------------------------
const textData = {
  title: "Meet Our Professional Team",
  highlight: "Experts You Can Trust",
  paragraph:
    "We’re introducing you to our in‑house specialists — designers, developers, editors and marketers — ready to plan, build and scale your project with care.",
};

const typingLines = [
  "Strategy that aligns with your goals.",
  "Design that attracts and converts.",
  "Development that ships and scales.",
  "Support that stays with you.",
  "Results you can measure.",
];

// ----------------------------
// Types
// ----------------------------
export type Testimonial = {
  id: number;
  name: string; // keep: first name then position format unchanged
  position: string;
  image: string;
  message: string; // 3-line client-catching summary
  details?: string; // long description for modal
  links?: { label: string; href: string }[];
};

// ----------------------------
// Team Cards (messages rewritten, role-related)
// ----------------------------
const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Adnan Ali Bhatti",
    position: "CEO Of Global Freelancing Hub",
    image: "/images/adnan.jpg",
    message:
      "Growth‑focused leadership.\nClear roadmaps, clear ROI.\nLet’s build something enduring.",
    details:
      "Adnan drives outcomes through lean strategy, tight execution loops and transparent KPIs. He mentors cross‑functional teams and ensures delivery cadence stays aligned to revenue goals. Engagement model: discovery → scoped milestones → iterative delivery with weekly business reviews.",
  },
  {
    id: 2,
    name: "Shahid Iqbal",
    position: "Freelancer & Wordpress Developer",
    image: "/images/shahid.jpg",
    message:
      "Pixel‑perfect WordPress.\nSpeed, SEO, security baked in.\nLaunch and grow fast.",
    details:
      "Shahid builds modern WordPress stacks (Gutenberg/Elementor), Lighthouse‑optimized themes, and secure plugin setups. Expertise: WooCommerce, custom post types, ACF, on‑page SEO, performance tuning (caching/CDN).",
  },
  {
    id: 3,
    name: "Muzamil Nawaz Khan",
    position: "Full Stack React Developer",
    image: "/images/muzamilkhan.png",
    message:
      "Production‑ready React.\nClean, scalable, type‑safe.\nFrom idea to impact.",
    details:
      "Muzamil is a full‑stack engineer focused on React/Next.js ecosystems with strong UI craft and backend fluency.\n\nFrontend: React, Next.js (App Router), Redux/Zustand, TypeScript, Tailwind, shadcn/ui, Framer Motion, accessibility and testing (Jest/RTL).\nMobile: React Native for iOS/Android with native module integration.\nWeb & Android: Progressive Web Apps, responsive layouts, offline patterns.",
     
    links: [
      { label: "Portfolio", href: "https://portfolio-to-show-work.vercel.app" },
      { label: "Resto by Muzamil", href: "https://resto-by-muzamil.vercel.app/" },
      { label: "Get me a chai", href: "https://get-me-a-chai-by-muzamil-7o75.vercel.app/" },
      { label: "Projects Gallery", href: "http://muzamilnawazkhan-001-site1.qtempurl.com/#projects" },
    ],
  },
  {
    id: 4,
    name: "Azaz Kharal",
    position: "React Native Developer",
    image: "/images/azaz.jpg",
    message:
      "Smooth mobile apps.\nNative feel, fast releases.\nShip to iOS & Android.",
    details:
      "Azaz crafts cross‑platform apps with React Native, integrating device APIs, push notifications, and clean offline patterns. Strong attention to performance and animations.",
  },
  {
    id: 5,
    name: "Ayesha Malik",
    position: "Grapic Designer, Creatives Inc.",
    image: "/images/aysha.jpg",
    message:
      "Brand stories that stick.\nSharp visuals, clear hierarchy.\nDesign that sells.",
    details:
      "Ayesha develops brand systems, marketing kits, and UI assets. Tools: Figma, Adobe CC. Deliverables include logo suites, style guides, and conversion‑focused creatives.",
  },
  {
    id: 6,
    name: "Samia Rajpoot",
    position: "Video Editor",
    image: "/images/aysha2.jpg",
    message:
      "Edit. Rhythm. Impact.\nStory‑first motion design.\nReady for paid & organic.",
    details:
      "Samia produces engaging short‑form and long‑form video with crisp pacing, subtitles, sound design and aspect‑ratio variants for all major platforms.",
  },
  {
    id: 7,
    name: "Haroon Malik",
    position: "DataBase Adminstrator",
    image: "/images/awan.jpg",
    message:
      "Data you can trust.\nBackups, scaling, tuning.\nAlways‑on reliability.",
    details:
      "Haroon manages PostgreSQL/MySQL instances, implements HA, PITR backups, index tuning, and query optimization with tight observability.",
  },
  {
    id: 8,
    name: "Saba Choudary",
    position: "3d Animator",
    image: "/images/aysha3.jpg",
    message:
      "Characters that breathe.\nCinematic lighting & motion.\nFrom concept to render.",
    details:
      "Saba delivers product and character animations for campaigns and product demos. Pipeline from storyboard to final export.",
  },
  {
    id: 9,
    name: "Tasawer Abbas",
    position: "Social Media Marketing",
    image: "/images/Tasawer.jpg",
    message:
      "Win attention ethically.\nAudience research → content.\nTrack, learn, iterate.",
    details:
      "Tasawer builds growth frameworks across Meta, TikTok, and LinkedIn: content calendars, creatives, UTM tracking and reporting dashboards.",
  },
  {
    id: 10,
    name: "Nayab Khan",
    position: "Expert In SEO",
    image: "/images/aysha4.jpg",
    message:
      "Rank with intent.\nTechnical + content SEO.\nTraffic that converts.",
    details:
      "Nayab handles audits, schema, Core Web Vitals, content strategy and backlink outreach with measurable KPIs.",
  },
   {
    id: 11,
    name: "Muhammad Irfan",
    position: "Larawel Developer",
    image: "/images/irfan.jpg",
    message:
      "Rank with intent.\nTechnical + content SEO.\nTraffic that converts.",
    details:
      "Nayab handles audits, schema, Core Web Vitals, content strategy and backlink outreach with measurable KPIs.",
  },
  {
    id: 11,
    name: "Zaheer Shahzaib",
    position: "Next.JS Developer",
    image: "/images/zaheer.jpg",
    message:
      "Rank with intent.\nTechnical + content SEO.\nTraffic that converts.",
    details:
      "Nayab handles audits, schema, Core Web Vitals, content strategy and backlink outreach with measurable KPIs.",
  },
];

// ----------------------------
// Simple Typewriter (no deps)
// ----------------------------
const TypeWriter: React.FC<{ lines: string[] }> = ({ lines }) => {
  const [lineIdx, setLineIdx] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const full = lines[lineIdx % lines.length];
    const speed = deleting ? 20 : 40;
    const t = setTimeout(() => {
      if (!deleting) {
        const next = full.slice(0, text.length + 1);
        setText(next);
        if (next === full) setTimeout(() => setDeleting(true), 1200);
      } else {
        const next = full.slice(0, Math.max(0, text.length - 1));
        setText(next);
        if (next.length === 0) {
          setDeleting(false);
          setLineIdx((i) => (i + 1) % lines.length);
        }
      }
    }, speed);
    return () => clearTimeout(t);
  }, [text, deleting, lineIdx, lines]);

  return (
    <p className="mt-4 text-base sm:text-lg md:text-xl text-gray-700 min-h-[1.5em]">
      <span className="whitespace-pre">{text}</span>
      <span className="animate-pulse">▌</span>
    </p>
  );
};

// ----------------------------
// Inline SVG Icons (no external deps)
// ----------------------------
const WhatsAppIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor"><path d="M20.52 3.48A11.9 11.9 0 0 0 12.06 0C5.46.03.1 5.39.12 11.99c.01 2 .54 3.95 1.53 5.68L0 24l6.5-1.7a11.86 11.86 0 0 0 5.56 1.42h.05c6.6 0 11.96-5.36 11.98-11.96a11.86 11.86 0 0 0-3.57-8.28ZM12.11 22a9.86 9.86 0 0 1-5.03-1.38l-.36-.21-3.86 1.01 1.03-3.76-.24-.38A9.88 9.88 0 0 1 2.12 12C2.1 6.5 6.59 2.02 12.08 2a9.88 9.88 0 0 1 9.9 9.9c-.02 5.48-4.5 9.97-9.87 9.97Zm5.68-7.38c-.31-.16-1.84-.9-2.13-1.01-.29-.11-.5-.16-.72.16-.21.31-.82 1.01-1 1.22-.18.21-.37.24-.68.08-.31-.16-1.31-.48-2.5-1.53-.92-.82-1.54-1.83-1.72-2.14-.18-.31-.02-.48.14-.64.15-.15.31-.37.47-.55.16-.18.21-.31.31-.52.1-.21.05-.4-.03-.56-.08-.16-.72-1.75-.98-2.39-.26-.64-.52-.55-.72-.56l-.61-.01c-.21 0-.56.08-.85.4-.29.31-1.12 1.09-1.12 2.66 0 1.56 1.15 3.07 1.31 3.28.16.21 2.26 3.46 5.48 4.86.77.33 1.37.53 1.83.68.77.24 1.47.21 2.02.13.62-.09 1.84-.75 2.1-1.49.26-.74.26-1.37.18-1.49-.08-.11-.29-.18-.6-.34Z"/></svg>
);
const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor"><path d="M22 12.07C22 6.48 17.52 2 11.93 2S2 6.48 2 12.07C2 17.08 5.66 21.2 10.44 22v-7.03H7.9v-2.9h2.54V9.41c0-2.5 1.49-3.88 3.77-3.88 1.09 0 2.23.2 2.23.2v2.45h-1.26c-1.24 0-1.63.77-1.63 1.56v1.87h2.78l-.44 2.9h-2.34V22C18.34 21.2 22 17.08 22 12.07Z"/></svg>
);
const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor"><path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm11 2.75a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z"/></svg>
);

// ----------------------------
// Card Component
// ----------------------------
const Card: React.FC<{ data: Testimonial; onClick: () => void }> = ({ data, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="text-left bg-white rounded-xl p-4 shadow hover:shadow-md transition-all duration-200 h-auto min-h-[150px] flex flex-col justify-start break-words focus:outline-none focus:ring-2 focus:ring-indigo-300"
    >
      <div className="flex items-center mb-2">
        <img
          src={data.image}
          alt={data.name}
          className="w-12 h-12 rounded-full object-cover mr-3"
        />
        <div className="flex flex-col justify-start">
          <h4 className="font-bold text-md">{data.name}</h4>
          <p className="text-sm text-gray-500">{data.position}</p>
        </div>
      </div>
      <p className="text-sm text-gray-600 leading-relaxed whitespace-pre-line">
        {data.message}
      </p>
    </button>
  );
};

// ----------------------------
// Modal (no portal, fixed overlay)
// ----------------------------
const Modal: React.FC<{ open: boolean; onClose: () => void; data?: Testimonial | null }> = ({ open, onClose, data }) => {
  if (!open || !data) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" role="dialog" aria-modal="true">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={onClose} />
      <div className="relative z-10 w-full max-w-2xl rounded-2xl bg-white p-6 shadow-xl">
        <div className="flex items-start gap-4">
          <img src={data.image} alt={data.name} className="w-16 h-16 rounded-full object-cover" />
          <div>
            <h3 className="text-xl font-semibold leading-tight">{data.name}</h3>
            <p className="text-sm text-gray-500">{data.position}</p>
          </div>
        </div>
        {data.details && (
          <div className="mt-4 space-y-3 text-sm text-gray-700 leading-relaxed">
            {data.details.split("\n").map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        )}
        {data.links && data.links.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {data.links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                target="_blank"
                rel="noreferrer"
                className="px-3 py-1.5 rounded-full bg-gray-100 hover:bg-gray-200 text-sm"
              >
                {l.label}
              </a>
            ))}
          </div>
        )}
        <div className="mt-6 flex justify-end">
          <button onClick={onClose} className="px-4 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700">Close</button>
        </div>
      </div>
    </div>
  );
};

// ----------------------------
// Page Component
// ----------------------------
const Booking: React.FC = () => {
  const [selected, setSelected] = useState<Testimonial | null>(null);
  const looped = useMemo(() => [...testimonials, ...testimonials], []); // seamless

  return (
    <section
      className="flex flex-col md:flex-row px-4 md:px-6 py-12 md:py-12 gap-10 md:gap-8"
      style={{
        background:
          "linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(244,245,255,1) 45%, rgba(243,246,255,1) 100%)",
      }}
    >
      {/* LEFT */}
      <div className="w-full md:w-1/2 flex items-center justify-center">
        <div className="text-left md:pr-8">
          <button className="bg-indigo-100 text-indigo-600 px-4 py-2.5 rounded text-sm mb-2">
            🡕 <span className="text-black font-semibold text-base">Our Team</span>
          </button>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light leading-tight">
            {textData.title}
            <br />
            <span className="font-bold">{textData.highlight}</span>
          </h2>

          <p className="mt-4 text-gray-600 max-w-md">{textData.paragraph}</p>
          <TypeWriter lines={typingLines} />

          {/* Contact */}
          <div className="mt-8">
            <h4 className="font-semibold mb-3">Contact us:</h4>
            <div className="flex items-center gap-3 text-indigo-700">
              <a
                href="https://wa.me/923477060677"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-white shadow hover:shadow-md"
                title="WhatsApp"
              >
                <WhatsAppIcon /> <span className="hidden sm:inline">WhatsApp</span>
              </a>
              <a
                href="https://www.facebook.com/share/1GRngm37M3/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-white shadow hover:shadow-md"
                title="Facebook"
              >
                <FacebookIcon /> <span className="hidden sm:inline">Facebook</span>
              </a>
              <a
                href="https://www.instagram.com/adnan.expert.freelancer?igsh=MW85a3doZjJnb293NA=="
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-white shadow hover:shadow-md"
                title="Instagram"
              >
                <InstagramIcon /> <span className="hidden sm:inline">Instagram</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT — auto scrolling grid */}
      <div className="relative w-full md:w-1/2 h-[520px] overflow-hidden group rounded-2xl">
        {/* scrolling content */}
        <div className="absolute inset-0 overflow-hidden group-hover:overflow-y-auto">
          <div className="marquee pt-10 pb-10">
            {/* copy 1 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {looped.slice(0, testimonials.length).map((item, index) => (
                <Card key={`a-${item.id}-${index}`} data={item} onClick={() => setSelected(item)} />
              ))}
            </div>
            {/* copy 2 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {looped.slice(testimonials.length).map((item, index) => (
                <Card key={`b-${item.id}-${index}`} data={item} onClick={() => setSelected(item)} />
              ))}
            </div>
          </div>
        </div>

        {/* subtle fades so first two cards stay visible */}
        <div className="pointer-events-none absolute top-0 left-0 w-full h-8 bg-gradient-to-b from-[rgba(245,244,255,1)] via-[rgba(245,244,255,0.7)] to-transparent z-10" />
        <div className="pointer-events-none absolute bottom-0 left-0 w-full h-8 bg-gradient-to-t from-[rgba(245,250,255,1)] via-[rgba(245,250,255,0.7)] to-transparent z-10" />
      </div>

      {/* Styles */}
      <style jsx>{`
        @keyframes scrollUp { 0% { transform: translateY(0); } 100% { transform: translateY(-50%); } }
        .marquee {
          position: absolute; inset: 0; display: flex; flex-direction: column; gap: 1rem;
          will-change: transform; animation: scrollUp 12s linear infinite; /* faster */
          padding-top: 2.5rem; padding-bottom: 2.5rem;
        }
        /* Pause on hover of parent */
        .group:hover .marquee { animation-play-state: paused; }

        /* Scrollbar styling on hover */
        .group:hover { overflow: hidden; }
        .group:hover .absolute.inset-0 { overflow-y: auto; }
        .group:hover .absolute.inset-0::-webkit-scrollbar { width: 8px; }
        .group:hover .absolute.inset-0::-webkit-scrollbar-thumb { background: rgba(0,0,0,0.25); border-radius: 9999px; }

        /* No jump: -50% equals height of first copy */
      `}</style>

      <Modal open={!!selected} onClose={() => setSelected(null)} data={selected} />
    </section>
  );
};

export default Booking;
``