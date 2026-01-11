import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="mx-auto max-w-7xl px-6 pt-28 pb-24 text-center">

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
