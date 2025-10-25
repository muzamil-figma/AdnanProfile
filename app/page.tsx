import NavBar from "@/components/NavBar";
import ShowcaseWrapper from "@/components/Home/ShowcaseWrapper";
import SingleVideo from "@/components/Home/SingleVideo";
import Trusted from "@/components/Home/Trusted";
import Booking from "@/components/Home/Booking";
import FAQs from "@/components/Home/FAQs";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ADNAD | Senior Softwear Developer",
  description:
    "UAW helps enterprises automate their call centers with self-improving AI voice agents. Deliver better customer satisfaction at scale.",
  keywords: ["call center automation", "AI voice agents", "UAW"],
};

export default function HomePage() {
  return (
    <>
      <NavBar />
      <main className="pt-10 relative z-10 w-full bg-gray-50 text-gray-900 shadow-2xl rounded-b-[20px] md:rounded-b-[40px] overflow-hidden">
        <div className="container-default space-y-0.5">
          <ShowcaseWrapper />
          <SingleVideo />
          <Trusted />
          <Booking />
          <FAQs />
        </div>
      </main>
      <div className="h-[220px] pointer-events-none relative z-0" aria-hidden />
      <Footer />
    </>
  );
}
