// components/Loader.tsx
"use client";

type LoaderProps = {
  label?: string;
};

export default function Loader({ label = "Loading…" }: LoaderProps) {
  return (
    <div
      className="loader-wrap hidden" // 👈 yahan hidden laga diya
      role="status"
      aria-live="polite"
      aria-busy="true"
    >
      <div className="loader-stack">
        {/* Spinner */}
        <span className="loader-spinner" aria-hidden="true">
          <span className="loader-core" />
        </span>

        {/* Label */}
        <span className="loader-label">{label}</span>
      </div>
    </div>
  );
}
