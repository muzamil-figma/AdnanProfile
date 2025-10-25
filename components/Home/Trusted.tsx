import data from "@/data/trusted.json";

export default function HomePage() {
  return (
    <main className="w-full bg-white">
      {/* === Trusted by Industry Leaders Section === */}
      <section className="mx-auto w-full px-4 md:px-6 py-2 md:py-2">
      <header className="mb-8 md:mb-10 flex flex-col md:flex-row items-start md:items-center justify-between">
  <h2 className="px-4 sm:px-6 md:px-10 lg:px-20 mt-10 sm:mt-16 md:mt-20 text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight">
    <span className="block">{data.trusted.heading.line1}</span>
    <span className="block">{data.trusted.heading.line2}</span>
  </h2>

  {/* ✅ CTA visible on all screens, styled responsive */}
  <a
    href={data.trusted.heading.ctaHref}
    className="mt-6 md:mt-20 px-4 sm:px-6 md:px-10 lg:px-20 inline-flex items-center text-sm font-medium hover:underline"
  >
    {data.trusted.heading.ctaLabel}
    <svg
      className="ml-1 h-4 w-4"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9 18l6-6-6-6"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </a>
</header>


     <div className="grid gap-6 px-4 sm:px-8 md:px-10 lg:px-20 md:grid-cols-[1.35fr_1fr] md:grid-rows-2 md:h-[560px]">
  {/* Left big card */}
  <ShowcaseCard
    {...data.trusted.cards[0]}
    className="md:row-span-2"
  />

  {/* Top-right card */}
  <ShowcaseCard
    {...data.trusted.cards[1]}
    className="md:col-start-2 md:row-start-1"
  />

  {/* Bottom-right card */}
  <ShowcaseCard
    {...data.trusted.cards[2]}
    className="md:col-start-2 md:row-start-2"
  />
</div>

      </section>

      {/* === Enterprise Security Section === */}
      <section className="relative px-4 sm:px-6 md:px-10 lg:px-20 isolate overflow-hidden bg-white border-b border-gray-200">
        {/* Background image */}
        <div className="absolute inset-0 -z-10 flex justify-center">
          <img
            src={data.enterprise.backgroundImage}
            alt="Security background"
            className="w-full h-auto"
          />
          <div className="absolute inset-0 bg-gradient-to-b" />
        </div>

        <div className="relative mx-auto max-w-7xl px-2 sm:px-4 md:px-6 py-16 sm:py-20 md:py-28">
          <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold leading-[1.15] md:leading-[1.05] tracking-tight text-slate-900">
            <span className="block">{data.enterprise.heading.line1}</span>
            <span className="block">{data.enterprise.heading.line2}</span>
          </h2>
          <p className="mt-3 sm:mt-4 max-w-xl text-sm sm:text-base md:text-lg text-slate-600">
            {data.enterprise.subtext}
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="mx-auto px-4 sm:px-6 md:px-10 lg:px-20 max-w-7xl py-12 sm:py-16 md:py-24">
        <div className="grid gap-8 sm:gap-10 md:grid-cols-12">
          <div className="md:col-span-5 text-slate-700 leading-relaxed text-sm sm:text-base">
            <p>{data.enterprise.features.paragraph}</p>
          </div>
          <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 md:gap-10">
            {data.enterprise.features.list.map((f, idx) => (
              <Feature key={idx} title={f.title}>
                {f.text}
              </Feature>
            ))}
          </div>
        </div>
      </section>
    </main>
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
            alt=""
            loading="lazy"
          />
        </>
      ) : (
        <img className="absolute inset-0 h-full w-full object-cover" src={image} alt="" loading="lazy" />
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

function Feature({ title, children }) {
  return (
    <div>
      <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-600">{children}</p>
    </div>
  );
}
