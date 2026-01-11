import { ArrowRight, Calendar } from "lucide-react";

export default function FloatingCTA() {
  return (
    <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50">
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
  );
}