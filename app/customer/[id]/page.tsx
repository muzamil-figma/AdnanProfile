"use client";

import stories from "@/data/stories.json";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { useEffect, useState } from "react";

export const dynamic = "force-dynamic";

interface StoryPageProps {
  params: { id: string };
}

export default function StoryPage({ params }: StoryPageProps) {
  const story = stories.cases.find((c) => c.id === params.id);

  // Typewriter states
  const [displayedText, setDisplayedText] = useState("");
  const [isDone, setIsDone] = useState(false);
  const fullText = story ? story.title : "";

  useEffect(() => {
    if (!fullText) return;
    let i = 0;
    const interval = setInterval(() => {
      setDisplayedText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) {
        clearInterval(interval);
        setIsDone(true);
      }
    }, 70); // typing speed
    return () => clearInterval(interval);
  }, [fullText]);

  if (!story) {
    return <div className="p-10">Story not found.</div>;
  }

  const related = stories.cases.filter((c) => c.id !== story.id).slice(0, 2);

  return (
    <>
      <NavBar />

      <main className="relative z-10 w-full shadow-2xl rounded-b-[20px] bg-gray-50 text-gray-900 overflow-hidden">
        {/* Hero Section */}
        {/* Hero Section */}
<section className="relative w-full">
  <div className="relative bg-gradient-to-r from-blue-400 via-blue-500 to-indigo-500 text-white overflow-hidden min-h-[300px] sm:min-h-[380px] md:min-h-[420px]">
    <div className="max-w-6xl mx-auto px-6 lg:px-40 pt-24 pb-28 relative z-10">
      {/* Breadcrumb */}
      <div className="text-sm text-white/80 mb-4">
        <Link href="/customer" className="hover:underline">
          Customers
        </Link>{" "}
        / <span className="font-semibold">{story.company}</span>
      </div>

      {/* Typewriter Heading */}
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-snug max-w-2xl">
        {displayedText}
        <span className="border-r-2 border-white animate-pulse ml-1" />
      </h1>

      {/* Subtitle (show after typing done) */}
      {isDone && (
        <p className="mt-3 text-sm sm:text-base opacity-90 animate-fadeInSlow">
          {story.company} • {story.category}
        </p>
      )}
    </div>

    {/* Bottom Wave */}
    <div className="absolute bottom-[-1px] left-0 w-full overflow-hidden leading-[0]">
      <svg
        className="relative block w-[calc(100%+1.3px)] h-[120px]"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        viewBox="2 5 250 100"
      >
        <path
          transform="rotate(180 600 60)"
          d="M0,0V46.29c47.73,22,98.68,29,146.27,27.22,48.51-1.85,95.07-13.59,143.2-21.16,62.32-9.8,127.63-8.5,188.84,7.05,59.34,15.08,113.79,42.9,172.37,54.05,86,16.56,175.83,3.54,261.13-22.87,58.25-18.35,113.54-41.29,173.06-47.45,30.2-3.12,59.3-.36,88.13,6.14,31,6.93,60.9,17.52,90,29.7V0Z"
          fill="#f9fafb"
        ></path>
      </svg>
    </div>
  </div>
</section>


        {/* Story detail */}
        <section className="max-w-6xl mx-auto px-6 lg:px-20 py-12 sm:py-16">
          <p className="text-slate-600 text-sm sm:text-base md:text-lg mb-4">
            {story.category} • {story.employees}
          </p>
          <article className="text-slate-700 text-base md:text-lg leading-relaxed whitespace-pre-line">
            {story.story}
          </article>
        </section>

        {/* Related Articles */}
        <section className="max-w-6xl mx-auto px-6 lg:px-20 py-12 sm:py-16">
          <h2 className="text-slate-800 text-xl font-bold mb-8">
            Related Stories
          </h2>
          <div className="grid sm:grid-cols-2 gap-8">
            {related.map((r) => (
              <Link
                key={r.id}
                href={`/customer/${r.id}`}
                className="group block bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1 overflow-hidden"
              >
                <div className="overflow-hidden">
                  <img
                    src={r.image}
                    alt={r.company}
                    className="w-full h-48 object-cover group-hover:scale-105 transition duration-500"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-indigo-600 transition">
                    {r.title}
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">{r.company}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>

      {/* spacer */}
      <div className="h-[220px] pointer-events-none relative z-0" aria-hidden />
      <Footer />
    </>
  );
}

/* Add this in globals.css */
