"use client";

import { useMemo, useState } from "react";

type Plan = {
  id: string;
  title: string;
  subtitle: string;
  startingFrom: number;
  currency: string;
  unit: string;
  features: string[];
  delivery: string;
  revisions: string;
  stack: string[];
  reviews: { rating: number; count: number };
};

export default function PricingClient({ plans }: { plans: Plan[] }) {
  const safePlans = Array.isArray(plans) ? plans : [];

  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<Plan | null>(null);

  const formatter = useMemo(
    () =>
      new Intl.NumberFormat(undefined, {
        style: "currency",
        currency: "USD",
        maximumFractionDigits: 0,
      }),
    []
  );

  if (safePlans.length === 0) {
    return (
      <div className="mt-10 rounded-xl border border-dashed border-gray-300 p-8 text-center text-sm text-gray-600">
        No pricing plans found. Make sure <code>data/pricing.json</code> is a JSON array.
      </div>
    );
  }

  return (
    <>
      {/* Cards */}
      <section className="mt-10">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {safePlans.map((plan) => (
            <button
              key={plan.id}
              onClick={() => {
                setSelected(plan);
                setOpen(true); // 🔔 Open dialog on click
              }}
              className="group relative text-left rounded-2xl p-[2px] transition-all duration-300
                         hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500
                         bg-gradient-to-br from-indigo-300 via-fuchsia-300 to-amber-300"
            >
              <div className="rounded-2xl bg-white h-full p-6 shadow-sm ring-1 ring-gray-200 transition-all duration-300 group-hover:shadow-2xl">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-lg font-semibold text-gray-900">{plan.title}</h3>
                  <div className="flex items-center gap-1 text-amber-500 text-sm" aria-label={`${plan.reviews.rating} stars`}>
                    <span>★</span>
                    <span className="text-gray-600">{plan.reviews.rating.toFixed(1)}</span>
                  </div>
                </div>

                <p className="mt-1 text-sm text-gray-600 line-clamp-2">{plan.subtitle}</p>

                <div className="mt-4">
                  <div className="text-2xl font-bold text-gray-900">
                    {formatter.format(plan.startingFrom)}{" "}
                    <span className="text-sm font-medium text-gray-500">{plan.unit}</span>
                  </div>
                  <p className="mt-1 text-xs text-gray-500">
                    Flexible by scope — we’ll fit your budget and set milestones.
                  </p>
                </div>

                <ul className="mt-4 space-y-2 text-sm text-gray-700">
                  {plan.features.slice(0, 3).map((f, i) => (
                    <li key={`${plan.id}-f-${i}`} className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-indigo-500 shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex items-center justify-between text-xs text-gray-500">
                  <span>Delivery: {plan.delivery}</span>
                  <span>Revisions: {plan.revisions}</span>
                </div>

                <div className="mt-5 inline-flex items-center gap-2 text-indigo-700 font-medium">
                  <span className="group-hover:underline">View details</span>
                  <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707A1 1 0 118.707 5.293l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" />
                  </svg>
                </div>
              </div>

              {/* Soft glow on hover */}
              <span className="pointer-events-none absolute -inset-1 rounded-[18px] opacity-0 blur-2xl transition-opacity duration-300
                               group-hover:opacity-30 bg-gradient-to-br from-indigo-400 via-fuchsia-400 to-amber-400" />
            </button>
          ))}
        </div>
      </section>

      {/* Dialog */}
{open && selected && (
  <div
    className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
    role="dialog"
    aria-modal="true"
    onClick={() => {
      setOpen(false);
      setSelected(null);
    }}
  >
    {/* Dim overlay */}
    <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" aria-hidden="true" />

    {/* Modal */}
    <div
      className="
        relative z-10 w-full max-w-2xl
        rounded-2xl bg-white shadow-2xl ring-1 ring-gray-200 mt-20 
        /* 30px top & bottom space => 100vh - 60px */
        max-h-[calc(80vh-50px)]
        overflow-hidden
        flex flex-col
      "
      onClick={(e) => e.stopPropagation()}
    >
      {/* Sticky header (title + close) */}
      <div className="
        sticky top-0 z-10
        bg-white/95 backdrop-blur
        px-6 py-4
        border-b border-gray-200
        flex items-start justify-between gap-4
      ">
        <div>
          <h3 className="text-lg font-bold text-gray-900">{selected.title}</h3>
          <p className="mt-1 text-gray-600">{selected.subtitle}</p>
        </div>
        <button
          onClick={() => {
            setOpen(false);
            setSelected(null);
          }}
          className="rounded-full p-2 hover:bg-gray-100 text-gray-500"
          aria-label="Close dialog"
        >
          ✕
        </button>
      </div>

      {/* Scrollable body */}
      <div className="px-6 py-5 overflow-y-auto">
        {/* Review details */}
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl bg-gray-50 p-4 ring-1 ring-gray-200">
            <div className="text-sm text-gray-500">Starting from</div>
            <div className="text-2xl font-semibold text-gray-900">
              {formatter.format(selected.startingFrom)}{" "}
              <span className="text-sm text-gray-500">{selected.unit}</span>
            </div>
            <p className="mt-1 text-xs text-gray-500">
              Pricing is flexible — final quote based on scope and milestones.
            </p>
          </div>

          <div className="rounded-xl bg-gray-50 p-4 ring-1 ring-gray-200">
            <div className="text-sm text-gray-500">Delivery &amp; Revisions</div>
            <div className="mt-1 text-gray-900">
              <div><span className="font-medium">Delivery:</span> {selected.delivery}</div>
              <div><span className="font-medium">Revisions:</span> {selected.revisions}</div>
            </div>
            <div className="mt-2 text-sm text-gray-500">
              Reviews:&nbsp;
              <span className="text-amber-500">★</span>
              <span className="text-gray-900 font-medium ml-1">{selected.reviews.rating.toFixed(1)}</span>
              <span className="ml-1 text-gray-500">({selected.reviews.count}+)</span>
            </div>
          </div>
        </div>

        {/* What's included */}
        <div className="mt-6">
          <h4 className="text-sm font-semibold text-gray-900">What’s included</h4>
          <ul className="mt-2 grid gap-2 sm:grid-cols-2">
            {selected.features.map((f, i) => (
              <li key={`${selected.id}-detail-${i}`} className="flex items-start gap-2 text-sm text-gray-700">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-indigo-500 shrink-0" />
                <span>{f}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tech stack */}
        {selected.stack?.length > 0 && (
          <div className="mt-6">
            <h4 className="text-sm font-semibold text-gray-900">Tech stack</h4>
            <div className="mt-2 flex flex-wrap gap-2">
              {selected.stack.map((t) => (
                <span key={`${selected.id}-${t}`} className="rounded-full bg-indigo-50 text-indigo-700 text-xs px-3 py-1 ring-1 ring-indigo-100">
                  {t}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Contact */}
        <div className="mt-6 rounded-xl bg-indigo-50 ring-1 ring-indigo-100 p-4">
          <h4 className="text-sm font-semibold text-indigo-900">Contact</h4>
          <div className="mt-2 text-sm text-indigo-900">
            Phone:{" "}
            <a className="underline" href="tel:+923477060677">
              +92 347 7060677
            </a>
            <br />
            Email:{" "}
            <a className="underline" href="mailto:kingabdurrahman380@gmail.com">
              kingabdurrahman380@gmail.com
            </a>
          </div>
          <p className="mt-2 text-xs text-indigo-800">
            Share your scope and timeline — we’ll propose milestones and align to your budget.
          </p>
        </div>
      </div>
    </div>
  </div>
)}

    </>
  );
}
