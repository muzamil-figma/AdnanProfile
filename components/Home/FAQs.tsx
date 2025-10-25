"use client";
import data from "@/data/faqs.json";
import { useState } from "react";

export default function FAQs() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-gray-50 mb-20 sm:mb-32 lg:mb-40">
      <div className="container-default px-4 sm:px-6 md:px-12 lg:px-40 py-10 sm:py-14 lg:py-16 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        
        {/* Left title + description */}
        <div className="mb-6 md:mb-0">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold">
            {data.heading}
          </h2>
          <p className="text-gray-600 mt-2 text-sm sm:text-base">
            {data.sub}
          </p>
        </div>

        {/* Right accordion */}
        <div className="md:col-span-2">
          {data.items.map((f, i) => (
            <div key={i} className="border-b">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full py-3 sm:py-4 flex items-center justify-between text-left pr-2 sm:pr-4"
              >
                <span className="flex items-center gap-2 text-sm sm:text-base">
                  {f.q}
                </span>
                <span
                  className={`transform transition-transform duration-300 ${
                    open === i ? "rotate-180" : "rotate-0"
                  }`}
                >
                  ▼
                </span>
              </button>

              {/* Smooth transition */}
              <div
                className={`grid transition-all duration-300 ease-in-out ${
                  open === i
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="pb-3 sm:pb-4 text-gray-600 text-sm sm:text-base">
                    {f.a}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
