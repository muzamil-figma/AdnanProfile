import NavBar from "@/components/NavBar";
import { listIndustries } from "@/lib/cms";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Suspense } from "react";
import Footer from "@/components/Footer";

export const metadata = { title: "Industries" };

export default function Industries() {
  return (
    <>
      <NavBar />

      {/* main as card */}
      <main className="pt-24 pb-16 relative z-10 w-full bg-gray-50 text-gray-900 shadow-2xl rounded-b-[20px] md:rounded-b-[40px] overflow-hidden">
        <div className="container-default">
          {/* ✅ responsive padding */}
          <div className="w-full px-4 sm:px-6 lg:px-20 xl:px-40">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
              Industries
            </h1>
            <p className="text-gray-600 mt-2 text-base sm:text-lg md:text-xl">
              Learn more about how Leaping AI is transforming different industries with its advanced voice AI.
            </p>
          </div>

          <hr className="my-8 border-gray-200" />

          <Suspense fallback={<IndustriesSkeleton />}>
            <IndustriesList />
          </Suspense>
        </div>
      </main>

      {/* spacer = footer height */}
      <div className="h-[320px] pointer-events-none relative z-0" aria-hidden />

      <Footer />
    </>
  );
}

async function IndustriesList() {
  const rows = await listIndustries();

  return (
    <section className="mt-10 px-4 sm:px-6 lg:px-20 xl:px-40 space-y-12">
      {rows.map((r) => (
        <div key={r.slug}>
          <article className="grid gap-6 md:grid-cols-12 md:items-center">
            {/* Left Content */}
            <div className="md:col-span-7 xl:col-span-7">
              <div className="text-sm text-brand font-semibold">
                <a
                  href={`/industries/${r.slug}`}
                  className="inline-flex items-center gap-1 hover:underline"
                >
                  View details →
                </a>
              </div>

              <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mt-1">
                {r.name}
              </h2>
              <p className="text-gray-600 mt-2 leading-relaxed text-sm sm:text-base md:text-lg max-w-prose">
                {r.html.replace(/<[^>]+>/g, "")}
              </p>

              {r.createdAt && (
                <div className="text-xs sm:text-sm text-gray-500 mt-2">
                  {new Date(r.createdAt).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </div>
              )}
            </div>

            {/* Right Image */}
            <div className="md:col-span-5 xl:col-span-5 md:pl-6">
              {r.image && (
                <a href={`/industries/${r.slug}`} className="block group">
                  <img
                    src={r.image}
                    alt={r.name}
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

function IndustriesSkeleton() {
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
