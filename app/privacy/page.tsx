import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Link from "next/link";
import privacy from "@/data/privacy.json";

export const metadata = { title: "Privacy Policy" };

export default function PrivacyPage() {
  const p = privacy as {
    title: string;
    updated?: string;
    sections: { h: string; html: string }[];
  };

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
            <span className="text-gray-800 font-semibold">Privacy</span>
          </nav>

          {/* Header */}
          <header className="mb-10">
            <h1 className="text-5xl font-extrabold leading-tight tracking-tight text-gray-900">
              {p.title}
            </h1>
            {p.updated && (
              <p className="text-gray-500 mt-3 text-lg">Last updated: {p.updated}</p>
            )}
          </header>

          {/* Content */}
          <article className="prose prose-gray max-w-none">
            {p.sections.map((s, i) => (
              <section key={i} className="mb-12">
                <h2 className="text-2xl font-bold text-gray-800 mt-0 mb-3">
                  {s.h}
                </h2>
                <div dangerouslySetInnerHTML={{ __html: s.html }} />
              </section>
            ))}
          </article>
        </div>
      </main>

      {/* Spacer = footer height */}
      <div className="md:h-[320px] sm:h-[100px] pointer-events-none relative z-0" aria-hidden />

      {/* footer fixed bottom */}
      <Footer />
    </>
  );
}
