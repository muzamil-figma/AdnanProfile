import NavBar from "@/components/NavBar";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Suspense } from "react";
import Footer from "@/components/Footer";

// ✅ no Firebase
import posts from "@/data/blog.json";

export const metadata = { title: "Blog" };

export default function Blog() {
  return (
    <>
      <NavBar />

      {/* main as card */}
      <main className="pt-24 pb-16 relative z-10 w-full bg-gray-50 text-gray-900 shadow-2xl rounded-b-[20px] md:rounded-b-[40px] overflow-hidden">
        <div className="container-default">
          {/* ✅ responsive padding */}
          <div className="w-full px-4 sm:px-6 lg:px-20 xl:px-40">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
              Blog
            </h1>
            <p className="text-gray-600 mt-2 text-base sm:text-lg md:text-xl">
              Insights by Adnan Ali Bhatti on modern engineering & design.
            </p>
          </div>

          <hr className="my-8 border-gray-200" />

          <Suspense fallback={<BlogSkeleton />}>
            <BlogList />
          </Suspense>
        </div>
      </main>

      {/* spacer = footer height */}
      <div className="h-[220px] pointer-events-none relative z-0" aria-hidden />

      <Footer />
    </>
  );
}

async function BlogList() {
  // posts comes from JSON import above
  return (
    <section className="mt-10 px-4 sm:px-6 lg:px-20 xl:px-40 space-y-12">
      {posts.map((p: any) => (
        <div key={p.id}>
          <article className="grid gap-6 md:grid-cols-12 md:items-center">
            {/* Left Content */}
            <div className="md:col-span-7 xl:col-span-7">
              <div className="text-sm text-brand font-semibold">
                <a
                  href={`/blog/${p.id}`}
                  className="inline-flex items-center gap-1 hover:underline"
                >
                  View details →
                </a>
              </div>

              <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mt-1">
                {p.title}
              </h2>
              <p className="text-gray-600 mt-2 leading-relaxed text-sm sm:text-base md:text-lg max-w-prose">
                {p.summary || ""}
              </p>

              {p.createdAt && (
                <div className="text-xs sm:text-sm text-gray-500 mt-2">
                  {new Date(p.createdAt).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </div>
              )}
            </div>

            {/* Right Image */}
            <div className="md:col-span-5 xl:col-span-5 md:pl-6">
              {p.image && (
                <a href={`/blog/${p.id}`} className="block group">
                  <img
                    src={p.image}
                    alt={p.title}
                    loading="lazy"
                    className="rounded-2xl w-full h-[160px] sm:h-[200px] md:h-[220px] object-cover border border-gray-200 shadow-sm transition-transform duration-200 group-hover:scale-[1.02]"
                  />
                </a>
              )}
            </div>
          </article>

          <hr className="my-8 border-gray-200" />
        </div>
      ))}
    </section>
  );
}

function BlogSkeleton() {
  return (
    <section className="mt-10 px-4 sm:px-6 lg:px-20 xl:px-40 space-y-12">
      {[...Array(3)].map((_, i) => (
        <div key={i}>
          <article className="grid gap-6 md:grid-cols-12 md:items-center">
            <div className="md:col-span-7">
              <Skeleton width={80} height={14} />
              <Skeleton width={200} height={24} className="mt-2" />
              <Skeleton count={2} className="mt-2" />
              <Skeleton width={100} height={14} className="mt-2" />
            </div>
            <div className="md:col-span-5 md:pl-6">
              <Skeleton height={160} className="rounded-2xl sm:h-[200px] md:h-[220px]" />
            </div>
          </article>
          <hr className="my-8 border-gray-200" />
        </div>
      ))}
    </section>
  );
}
