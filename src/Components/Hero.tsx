import { ArrowRight, Calendar } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="mx-auto max-w-7xl px-6 pt-28 pb-24 text-center">
        {/* Top floating CTA */}
        <div className="mb-10 flex justify-center">
          <div className="flex items-center gap-3 rounded-full border border-neutral-200 bg-white px-5 py-2 shadow-sm">
            <Calendar className="h-4 w-4 text-blue-600" />
            <span className="text-sm text-neutral-700">
              Book a{" "}
              <span className="rounded-full bg-yellow-100 px-2 py-0.5 text-xs font-semibold text-yellow-700">
                FREE 30 MIN
              </span>{" "}
              consultation
            </span>
            <div className="ml-2 flex h-8 w-8 items-center justify-center rounded-full bg-neutral-900 text-white">
              <ArrowRight size={14} />
            </div>
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-5xl font-semibold leading-tight tracking-tight text-neutral-900 md:text-6xl lg:text-7xl">
          We Build
          <br />
          <span className="text-blue-600">Autonomous Systems.</span>
        </h1>

        {/* Subtitle */}
        <p className="mx-auto mt-6 max-w-2xl text-lg text-neutral-500">
          Replacing manual workflows with bespoke intelligence. We engineer the
          backend infrastructure that powers the next generation of business.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <button className="flex items-center gap-2 rounded-full bg-neutral-900 px-8 py-4 text-sm font-medium text-white shadow-lg transition hover:opacity-90">
            See our Technology <ArrowRight size={16} />
          </button>

          <button className="flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-8 py-4 text-sm font-medium text-neutral-900 shadow-sm transition hover:bg-neutral-50">
            ✨ Explore Services
          </button>
        </div>
      </div>
    </section>
  );
}
