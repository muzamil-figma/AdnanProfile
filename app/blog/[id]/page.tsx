export const dynamic = "force-dynamic";

import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Link from "next/link";
import posts from "@/data/blog.json";

export async function generateMetadata({ params }: { params: { id: string } }) {
  const post = (posts as any[]).find((x) => x.id === params.id);
  return { title: post ? post.title : "Blog" };
}

export default async function BlogDetail({ params }: { params: { id: string } }) {
  const post = (posts as any[]).find((x) => x.id === params.id);
  if (!post) return <div>Not found</div>;

  return (
    <>
      <NavBar />

      {/* main as card */}
      <main className="pt-24 px-4 sm:px-6 lg:px-20 xl:px-40 pb-16 relative z-10 w-full bg-gray-50 text-gray-900 shadow-2xl rounded-b-[20px] md:rounded-b-[40px] overflow-hidden">
        <div className="grid gap-8 items-start px-0 sm:px-2 md:px-4 md:grid-cols-2">
          <div>
            {/* ✅ Breadcrumb placed above image, aligned left with image */}
            <div className="mb-4 text-sm text-gray-600">
              <Link href="/blog" className="hover:underline text-blue-600">
                Blog
              </Link>{" "}
              / <span className="text-gray-800 font-medium">Detail</span>
            </div>

            {post.image && (
              <img
                src={post.image}
                alt=""
                className="rounded-2xl w-full object-cover border border-gray-200"
                loading="lazy"
              />
            )}
          </div>

          <article>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight">
              {post.title}
            </h1>
            <div
              className="prose prose-gray max-w-none mt-4 text-sm sm:text-base md:text-lg"
              dangerouslySetInnerHTML={{ __html: post.html }}
            />
          </article>
        </div>
      </main>

      {/* spacer = footer height */}
      <div className="h-[220px] pointer-events-none relative z-0" aria-hidden />

      {/* footer fixed bottom */}
      <Footer />
    </>
  );
}
