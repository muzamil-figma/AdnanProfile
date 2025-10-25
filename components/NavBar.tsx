"use client";
import nav from "@/data/navbar.json";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState, useMemo } from "react";
import { usePathname } from "next/navigation";

/* ---- Social links ---- */
const SOCIALS = {
  whatsapp: "https://wa.me/923477060677",
  facebook: "https://www.facebook.com/share/1GRngm37M3/",
  instagram:
    "https://www.instagram.com/adnan.expert.freelancer?igsh=MW85a3doZjJnb293NA==",
};

/* ---- Inline SVG icons ---- */
const IconWhatsApp = (props: any) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
    <path d="M20.52 3.48A11.86 11.86 0 0 0 12.06 0C5.57.02.29 5.3.31 11.79c.01 2.07.56 4.09 1.61 5.86L0 24l6.52-1.86a11.75 11.75 0 0 0 5.52 1.41h.05c6.49-.02 11.77-5.3 11.79-11.79 0-3.15-1.23-6.11-3.36-8.27ZM12.09 21.3c-1.76 0-3.49-.47-5.01-1.36l-.36-.21-3.87 1.11 1.13-3.77-.23-.39a9.52 9.52 0 0 1-1.42-5.09C2.3 6.52 6.77 2.05 12.06 2.03h.03c5.29 0 9.75 4.43 9.73 9.72-.02 5.29-4.44 9.73-9.73 9.73Zm5.6-7.3c-.31-.16-1.86-.92-2.15-1.03-.29-.11-.5-.16-.71.16-.21.31-.81 1.03-1 1.24-.19.21-.37.24-.68.08-.31-.16-1.31-.48-2.49-1.53-.92-.82-1.54-1.83-1.72-2.14-.18-.31-.02-.47.13-.63.14-.14.31-.37.47-.55.16-.19.21-.32.33-.53.11-.21.06-.4-.03-.55-.08-.16-.71-1.7-.97-2.33-.26-.63-.52-.55-.71-.55-.19 0-.4-.02-.62-.02-.21 0-.55.08-.84.4-.29.31-1.1 1.08-1.1 2.64s1.13 3.06 1.29 3.27c.16.21 2.23 3.39 5.4 4.76.76.33 1.35.53 1.81.68.76.24 1.46.21 2.01.13.61-.09 1.86-.76 2.13-1.49.26-.73.26-1.35.18-1.49-.08-.13-.29-.21-.61-.37Z" />
  </svg>
);

const IconFacebook = (props: any) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
    <path d="M22.676 0H1.326C.593 0 0 .593 0 1.326v21.348C0 23.407.593 24 1.326 24h11.495v-9.294H9.847V11.01h2.974V8.413c0-2.944 1.797-4.549 4.422-4.549 1.259 0 2.339.094 2.653.136v3.073h-1.82c-1.43 0-1.707.679-1.707 1.677v2.26h3.413l-.444 3.696h-2.969V24h5.822C23.407 24 24 23.407 24 22.674V1.326C24 .593 23.407 0 22.676 0z" />
  </svg>
);

const IconInstagram = (props: any) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
    <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm12 2.75a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" />
  </svg>
);

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const [lastY, setLastY] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 8);
      if (Math.abs(y - lastY) > 4) {
        setShowNav(y < lastY || y < 32);
        setLastY(y);
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [lastY]);

  const isImageLike = useMemo(() => {
    const v = String(nav.logoText || "");
    return v.startsWith("/") || /\.(png|jpe?g|svg|webp)$/i.test(v);
  }, []);

  const linkClasses = (href: string) => {
    const active = pathname === href || pathname.startsWith(href + "/");
    return [
      "relative transition-colors",
      "text-sm",
      active ? "text-purple-700" : "text-gray-700",
      "hover:text-purple-700",
    ].join(" ");
  };

  return (
    <header
      className={[
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        showNav ? "translate-y-0 opacity-100" : "-translate-y-6 opacity-0",
        scrolled
          ? "backdrop-blur-xl bg-white/70 shadow-sm"
          : "backdrop-blur-0 bg-white/90",
        "nav-border",
      ].join(" ")}
    >
      <nav className="container-default flex items-center justify-between px-4 sm:px-6 lg:px-40 h-16 lg:h-[72px]">
        <Link href="/" prefetch className="flex items-center gap-3 h-full" aria-label="Home">
          {isImageLike ? (
            <div className="relative h-full w-[200px] sm:w-[220px] lg:w-[260px]">
              <Image
                src={String(nav.logoText)}
                alt="UAW logo"
                fill
                priority
                sizes="(min-width:1024px) 460px, (min-width:640px) 320px, 400px"
                className="object-contain"
              />
            </div>
          ) : (
            <span className="font-extrabold text-2xl lg:text-3xl tracking-tight leading-none">
              {nav.logoText || "UAW"}
            </span>
          )}
        </Link>

        <div className="hidden sm:flex items-center flex-1 ml-10">
          <ul className="flex items-center gap-8">
            {nav.links?.map((l: any) => (
              <li key={l.href} className="h-16 flex items-center">
                <Link href={l.href} prefetch className={linkClasses(l.href)}>
                  <span className="px-1">{l.label}</span>
                  <span
                    className={[
                      "absolute left-0 -bottom-2 h-0.5 w-full rounded",
                      pathname === l.href || pathname.startsWith(l.href + "/")
                        ? "bg-gradient-to-r from-purple-500 to-fuchsia-500"
                        : "bg-transparent",
                      "transition-colors",
                    ].join(" ")}
                  />
                </Link>
              </li>
            ))}
          </ul>

          {/* External socials (use <a> to fix type error) */}
          <div className="ml-auto flex items-center gap-3">
            <a
              href={SOCIALS.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="p-2 rounded-full bg-white/70 hover:bg-white shadow-sm border border-purple-100 text-green-600 hover:shadow-md transition"
            >
              <IconWhatsApp className="w-5 h-5" />
            </a>
            <a
              href={SOCIALS.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="p-2 rounded-full bg-white/70 hover:bg-white shadow-sm border border-purple-100 text-blue-600 hover:shadow-md transition"
            >
              <IconFacebook className="w-5 h-5" />
            </a>
            <a
              href={SOCIALS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="p-2 rounded-full bg-white/70 hover:bg-white shadow-sm border border-purple-100 text-pink-600 hover:shadow-md transition"
            >
              <IconInstagram className="w-5 h-5" />
            </a>
          </div>
        </div>

        <button
          className="sm:hidden p-2 text-2xl"
          onClick={() => setOpen(true)}
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </nav>

      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40 sm:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 left-0 h-full w-72 sm:hidden bg-white shadow-2xl z-[60] transform transition-transform duration-300 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="h-16 flex items-center justify-between px-4 border-b border-gray-200 bg-white">
          <div className="flex items-center gap-3">
            {isImageLike ? (
              <div className="relative h-10 w-44">
                <Image
                  src={String(nav.logoText)}
                  alt="UAW logo"
                  fill
                  priority
                  sizes="176px"
                  className="object-contain"
                />
              </div>
            ) : (
              <span className="font-extrabold text-2xl tracking-tight text-gray-900">
                {nav.logoText || "UAW"}
              </span>
            )}
          </div>
          <button onClick={() => setOpen(false)} className="text-2xl" aria-label="Close menu">
            ✕
          </button>
        </div>

        <ul className="flex flex-col py-2">
          {nav.links?.map((l: any) => {
            const active =
              typeof window !== "undefined" &&
              (location.pathname === l.href ||
                location.pathname.startsWith(l.href + "/"));
            return (
              <li key={l.href}>
                <Link
                  href={l.href}
                  prefetch
                  onClick={() => setOpen(false)}
                  className={[
                    "block w-full px-6 py-3 text-base whitespace-nowrap transition-colors",
                    active ? "text-purple-700 bg-purple-50" : "text-gray-800",
                    "hover:bg-purple-50 hover:text-purple-700",
                  ].join(" ")}
                >
                  {l.label}
                </Link>
              </li>
            );
          })}

          {/* Mobile Socials */}
          <li className="mt-2 px-6">
            <div className="flex items-center gap-2">
              <a
                href={SOCIALS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="flex-1 p-3 rounded-xl bg-white border border-gray-200 text-green-600 shadow-sm hover:shadow-md hover:bg-purple-50 transition flex items-center justify-center gap-2"
                onClick={() => setOpen(false)}
              >
                <IconWhatsApp className="w-5 h-5" />
                <span className="font-medium">WhatsApp</span>
              </a>
            </div>
            <div className="mt-2 grid grid-cols-2 gap-2">
              <a
                href={SOCIALS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="p-3 rounded-xl bg-white border border-gray-200 text-blue-600 shadow-sm hover:shadow-md hover:bg-purple-50 transition flex items-center justify-center gap-2"
                onClick={() => setOpen(false)}
              >
                <IconFacebook className="w-5 h-5" />
                <span className="font-medium">Facebook</span>
              </a>
              <a
                href={SOCIALS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="p-3 rounded-xl bg-white border border-gray-200 text-pink-600 shadow-sm hover:shadow-md hover:bg-purple-50 transition flex items-center justify-center gap-2"
                onClick={() => setOpen(false)}
              >
                <IconInstagram className="w-5 h-5" />
                <span className="font-medium">Instagram</span>
              </a>
            </div>
          </li>
        </ul>
      </div>
    </header>
  );
}
