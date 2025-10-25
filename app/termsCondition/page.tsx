"use client";

import Link from "next/link";
import termCondition from "@/data/termCondition";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export default function TermsPage() {
  return (
    <>
      <NavBar />

      {/* main as card */}
      <main className="pt-24 pb-16 relative z-10 w-full bg-gray-50 text-gray-900 shadow-2xl rounded-b-[20px] md:rounded-b-[40px] overflow-hidden">
        <div className="container-default px-6 md:px-16 lg:px-40">
          {/* Breadcrumb */}
          <nav className="mb-8 text-sm text-gray-600">
            <Link href="/" className="text-blue-600 hover:underline font-medium">
              Home
            </Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-gray-800 font-semibold">Terms</span>
          </nav>
           
          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center text-gray-900">
            {termCondition.title}
          </h1>

          {/* Sections */}
          <div className="space-y-10">
            {termCondition.sections.map((section, i) => (
              <div key={i}>
                <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                  {section.heading}
                </h2>
                <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                  {section.content}
                </p>
              </div>
            ))}
          </div>
        </div> 
      </main>

      {/* Spacer = footer height */}
      <div className="h-[320px] pointer-events-none relative z-0" aria-hidden />
 
      {/* footer fixed bottom */}
      <Footer />
    </>
  );
}
