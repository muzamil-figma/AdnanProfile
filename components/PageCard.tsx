// components/PageCard.tsx
import React from "react";

export default function PageCard({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative z-10">
      {/* FULL-WIDTH CARD */}
      <div className="w-full bg-gray-50  text-gray-900 shadow-2xl rounded-b-[20px] md:rounded-b-[40px] overflow-hidden">
        {/* Inner content ko container me rakho; chaho to hata bhi sakte ho */}
        <div className="container-default">
          {children}
        </div>
      </div>

      {/* Footer reveal ke liye spacer (1 viewport height) */}
      <div aria-hidden className="h-screen pointer-events-none" />
    </div>
  );
}
