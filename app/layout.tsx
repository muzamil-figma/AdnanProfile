import type { Metadata } from "next";
import NextTopLoader from "nextjs-toploader";
import "./globals.css";
import Footer from "@/components/Footer";

export const metadata: Metadata = { title: "Adnan Ali" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-black antialiased" suppressHydrationWarning>
        <NextTopLoader color="#3b82f6" height={3} showSpinner={false} />

        {/* Page content */}
        <div className="relative z-10">
          {children}
        </div>

        {/* Footer always fixed at bottom, on top layer */}
      
      </body>
    </html>
  );
}
 