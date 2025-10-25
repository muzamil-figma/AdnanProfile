"use client";

import Link from "next/link";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import VantaHaloBg from "./VantaHaloBg";

export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 text-white z-0">
      <div className="relative bg-black pointer-events-none">
        <VantaHaloBg />

        <div className="relative z-10 px-6 md:px-12 lg:px-20 pt-0 pb-6 pointer-events-auto">
          {/* TOP ROW */}
          <div className="grid grid-cols-2 md:grid-cols-12 gap-x-8 gap-y-8 items-start text-sm">
            {/* Brand */}
            <div className="col-span-2 md:col-span-3">
              <Link href="/" className="inline-flex items-center gap-2">
                <div className="h-7 w-7 rounded bg-white/15 border border-white/10" />
                <span className="font-bold text-lg tracking-tight">UAW</span>
              </Link>
            </div>

            {/* Company */}
            <div className="col-span-1 md:col-span-2">
              <h4 className="text-xs uppercase tracking-wide font-semibold text-white/60 mb-3">
                Company
              </h4>
              <ul className="space-y-2 text-sm leading-6">
                <li><Link href="/blog" className="footer-link">Blog</Link></li>
                <li><Link href="/#contact" className="footer-link">Contact us</Link></li>
              </ul>
            </div>

            {/* Product */}
            <div className="col-span-1 md:col-span-2">
              <h4 className="text-xs uppercase tracking-wide font-semibold text-white/60 mb-3">
                Product
              </h4>
              <ul className="space-y-2 text-sm leading-6">
                <li><Link href="/#features" className="footer-link">Features</Link></li>
                <li><Link href="/#use-cases" className="footer-link">Use Cases</Link></li>
                <li><Link href="/pricing" className="footer-link">Pricing</Link></li>
              </ul>
            </div>

            {/* Industries */}
            <div className="col-span-1 md:col-span-3">
              <h4 className="text-xs uppercase tracking-wide font-semibold text-white/60 mb-3">
                Industries
              </h4>
              <ul className="space-y-2 text-sm leading-6">
                <li><Link href="/customer" className="footer-link">Retail</Link></li>
                <li className="hidden md:block"><Link href="/industries/retail" className="footer-link">Real Estate</Link></li>
                <li className="hidden md:block"><Link href="/industries#real-estate" className="footer-link">Home Services</Link></li>
              </ul>
            </div>

            {/* Legal */}
            <div className="col-span-1 md:col-span-2">
              <h4 className="text-xs uppercase tracking-wide font-semibold text-white/60 mb-3">
                Legal
              </h4>
              <ul className="space-y-2 text-sm leading-6">
                <li><Link href="/termsCondition" className="footer-link">Terms of Service</Link></li>
                <li><Link href="/privacy" className="footer-link">Privacy Policy</Link></li>
              </ul>
            </div>
          </div>

          {/* BOTTOM ROW */}
          <div className="mt-6 flex flex-col gap-6 md:flex-row md:items-center md:justify-between text-xs text-white/70">
            <div className="flex items-center gap-4">
              <div className="hidden sm:flex items-center gap-2 rounded border border-white/10 bg-white/5 px-2.5 py-1.5">
                <span className="text-[9px] uppercase tracking-wide opacity-80">
                  SourceForge
                </span>
                <span className="text-xs font-medium">Customers Love Us</span>
              </div>
            </div>

            <div className="text-center flex-1">© 2025 UAW Inc.</div>

            <div className="flex items-center justify-end gap-4 text-lg">
              <Link
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition"
              >
                <FaLinkedin />
              </Link>
              <Link
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300 transition"
              >
                <FaGithub />
              </Link>
              <div className="flex items-center gap-2 text-xs">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-70" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400" />
                </span>
                <span>All services operational.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
