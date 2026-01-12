import { useEffect, useState } from "react";
import { ArrowRight, Calendar } from "lucide-react";
import ScheduleConsultationModal from "./ScheduleConsultationModal";

export default function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show the CTA only after scrolling down 200 pixels
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div
        className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500 ease-in-out ${
          isVisible
            ? "translate-y-0 opacity-100 pointer-events-auto"
            : "-translate-y-10 opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="flex items-center gap-3 rounded-full border border-neutral-200 bg-white/80 backdrop-blur-md px-5 py-2 shadow-lg cursor-pointer hover:shadow-xl transition-shadow"
          onClick={() => setIsModalOpen(true)}
        >
          <Calendar className="h-4 w-4 text-blue-600" />
          <span className="text-sm font-medium text-neutral-700">
            Book a{" "}
            <span className="rounded-full bg-yellow-100 px-2 py-0.5 text-[10px] font-bold text-yellow-700">
              FREE 30 MIN
            </span>{" "}
            consultation
          </span>
          <div className="ml-2 flex h-8 w-8 items-center justify-center rounded-full bg-neutral-900 text-white group">
            <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
          </div>
        </div>
      </div>

      <ScheduleConsultationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}