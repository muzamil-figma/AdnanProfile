import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import PricingClient from "./PricingClient";
// ✅ Static JSON from root /data/pricing.json (array of plans)
import plans from "@/data/pricing.json";

export const metadata = { title: "Pricing" };

export default async function PricingPage() {
  const safePlans = Array.isArray(plans) ? plans : [];

  return (
    <>
      <NavBar />
      <main className="pt-24 px-4 sm:px-6 lg:px-20 xl:px-40 pb-16 relative z-10 w-full bg-gray-50 text-gray-900 shadow-2xl rounded-b-[20px] md:rounded-b-[40px] overflow-hidden">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">Pricing</h1>
        <p className="text-gray-700 mt-3 text-base sm:text-lg md:text-xl">
          Pricing isn’t fixed — we tailor it to your scope and goals. We’re happy to align with your budget and lock a clear plan.
        </p>
        <p className="text-gray-600 mt-1 text-sm sm:text-base">
          Final quotes are collaborative: milestone-based, transparent, and flexible — so great clients never bounce for price alone.
        </p>

        {/* 👉 All cards & dialog handled inside the client component */}
        <PricingClient plans={safePlans} />
      </main>
      {/* spacer = footer height */}
      <div className="h-[220px] pointer-events-none relative z-0" aria-hidden />

      <Footer />
    </>
  );
}
