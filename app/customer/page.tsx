import data from "@/data/trusted.json";
import stories from "@/data/stories.json";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export const dynamic = "force-dynamic";
export const metadata = { title: "Customers" };

export default function CustomerPage() {
  const cards = data.trusted.cards;

  return (
    <>
      <NavBar />

      {/* main card layout */}
      <main className="pt-24 px-6 md:px-12 lg:px-20 pb-16 relative z-10 w-full bg-gray-50 text-gray-900 shadow-2xl rounded-b-[20px] md:rounded-b-[40px] overflow-hidden">
        {/* Heading */}
        <section className="mx-auto max-w-4xl text-center py-12 sm:py-16 md:py-20">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900">
            Meet our customers
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Companies of all sizes trust Leaping AI to optimize their operations
            using voice agents.
          </p>
        </section>

        {/* Cards */}
        <section className="mx-auto w-full pb-16">
          <div className="grid gap-6 md:grid-cols-[1.35fr_1fr] md:grid-rows-2 md:h-[560px]">
            <ShowcaseCard {...cards[0]} className="md:row-span-2" />
            <ShowcaseCard {...cards[1]} className="md:col-start-2 md:row-start-1" />
            <ShowcaseCard {...cards[2]} className="md:col-start-2 md:row-start-2" />
          </div>
        </section>

        {/* All case studies table */}
        <section className="mt-12">
          <h2 className="text-xl font-bold mb-4">All case studies</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b text-sm text-slate-500">
                  <th className="py-3 px-2">Company</th>
                  <th className="py-3 px-2">Category</th>
                  <th className="py-3 px-2">Employees</th>
                  <th className="py-3 px-2"></th>
                </tr>
              </thead>
              <tbody>
                {stories.cases.map((c) => (
                  <tr key={c.id} className="border-b text-sm hover:bg-gray-50">
                    <td className="py-3 px-2">{c.company}</td>
                    <td className="py-3 px-2">{c.category}</td>
                    <td className="py-3 px-2">{c.employees}</td>
                    <td className="py-3 px-2 text-blue-600 font-medium">
                      <a href={`/customer/${c.id}`} className="hover:underline">
                        Read Story &gt;
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </main>

      {/* spacer */}
      <div className="h-[320px] pointer-events-none relative z-0" aria-hidden />
      <Footer />
    </>
  );
}

function ShowcaseCard({ title, image, href = "#", className = "", badge, variant }) {
  return (
    <a
      href={href}
      className={`relative block overflow-hidden rounded-2xl group ${className}`}
    >
      {variant === "stripe" ? (
        <>
          <div className="absolute inset-0 bg-slate-900" />
          <div className="absolute inset-0 opacity-70 bg-[repeating-linear-gradient(90deg,rgba(255,255,255,0.08),rgba(255,255,255,0.08)_2px,transparent_2px,transparent_12px)]" />
          <img
            className="absolute inset-0 h-full w-full object-cover mix-blend-overlay"
            src={image}
            alt={title}
            loading="lazy"
          />
        </>
      ) : (
        <img
          className="absolute inset-0 h-full w-full object-cover"
          src={image}
          alt={title}
          loading="lazy"
        />
      )}

      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent transition-opacity duration-200 group-hover:opacity-100" />
      <div className="relative z-10 flex h-full items-end p-6">
        <div className="text-white">
          {badge && (
            <div className="mb-3 inline-flex rounded-md bg-white/10 px-2.5 py-1 text-xs font-medium backdrop-blur">
              {badge}
            </div>
          )}
          <h3 className="text-lg sm:text-xl md:text-2xl font-semibold leading-snug max-w-xl">
            {title}
          </h3>
          <span className="mt-3 inline-block text-sm opacity-90 underline underline-offset-4">
            Read story
          </span>
        </div>
      </div>
    </a>
  );
}
