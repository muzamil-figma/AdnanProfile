export const dynamic = "force-dynamic";

import NavBar from "@/components/NavBar";
import { getIndustryBySlug } from "@/lib/cms";
import Footer from "@/components/Footer";
import Link from "next/link";

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const item = await getIndustryBySlug(params.slug);
  return { title: item?.seo?.title || item?.name || "Industry" };
}

export default async function IndustryDetail({ params }: { params: { slug: string } }) {
  const item = await getIndustryBySlug(params.slug);
  if (!item) return <div>Not found</div>;

  return (
    <>
      <NavBar />

      {/* main as card */}
      <main className="pt-24 px-4 sm:px-6 lg:px-20 xl:px-40 pb-16 relative z-10 w-full bg-gray-50 text-gray-900 shadow-2xl rounded-b-[20px] md:rounded-b-[40px] overflow-hidden">
        {/* ✅ breadcrumb */}
        <div className="mb-6 text-sm text-gray-600">
          <Link href="/industries" className="hover:underline text-blue-600">
            Industries
          </Link>{" "}
          / <span className="text-gray-800 font-medium">{item.name}</span>
        </div>

        <div className="grid gap-6 md:gap-8 md:grid-cols-2 items-start">
          <div>
            {item.image && (
              <img
                src={item.image}
                alt={item.name}
                className="rounded-2xl w-full object-cover border border-gray-200"
                loading="lazy"
              />
            )}
          </div>

          <article>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight">
              {item.name}
            </h1>
            <div
              className="prose max-w-none mt-4 text-sm sm:text-base md:text-lg"
              dangerouslySetInnerHTML={{ __html: item.html }}
            />
          </article>
        </div>
      </main>

      {/* spacer = footer height */}
      <div className="h-[320px] pointer-events-none relative z-0" aria-hidden />

      {/* footer fixed bottom */}
      <Footer />
    </>
  );
}
