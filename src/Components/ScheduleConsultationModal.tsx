import { X, ChevronLeft, ChevronRight, Globe, Clock } from "lucide-react";
import { useState } from "react";

interface ScheduleConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ScheduleConsultationModal({
  isOpen,
  onClose,
}: ScheduleConsultationModalProps) {
  const [selectedDate, setSelectedDate] = useState(13); // Default for demo
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  if (!isOpen) return null;

  const timeSlots = [
    "04:00 AM", "04:30 AM", "05:00 AM", "05:30 AM", 
    "06:00 AM", "06:30 AM", "07:00 AM", "07:30 AM",
    "08:00 AM", "08:30 AM", "09:00 AM", "10:30 AM"
  ];

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-md p-4 sm:p-6">
      <div className="w-full max-w-5xl h-fit max-h-[90vh] bg-white rounded-xl shadow-2xl overflow-hidden flex flex-col md:flex-row border border-gray-200">
        
        {/* Left Side: Booking Info (35%) */}
        <div className="w-full md:w-[35%] border-r border-gray-100 p-8 flex flex-col gap-6 bg-white">
          <div className="space-y-4">
            <button onClick={onClose} className="p-2 -ml-2 hover:bg-gray-100 rounded-full md:hidden">
              <X className="w-6 h-6" />
            </button>
            <h2 className="text-xl font-bold text-gray-900 uppercase tracking-tight">AI & Automation Web</h2>
            <div className="flex items-center gap-2 text-gray-500 font-medium text-sm">
              <Clock className="w-4 h-4" />
              <span>30 Mins</span>
            </div>
            <div className="text-gray-500 font-medium text-sm">
              Tue, Jan 13, 2026
            </div>
          </div>
          
          <p className="text-sm text-gray-600 leading-relaxed">
            Strategy session to discuss your current workflows and identify automation opportunities.
          </p>
        </div>

        {/* Right Side: Calendar & Times (65%) */}
        <div className="w-full md:w-[65%] p-8 overflow-y-auto">
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-lg font-bold text-gray-900">Select Date & Time</h3>
            <button onClick={onClose} className="hidden md:block p-2 hover:bg-gray-100 rounded-full">
              <X className="w-6 h-6 text-gray-400" />
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Calendar View */}
            <div className="space-y-6">
              <div className="flex items-center justify-between px-2">
                <span className="font-bold text-gray-800">January 2026</span>
                <div className="flex gap-2">
                  <button className="p-1 hover:bg-gray-100 rounded"><ChevronLeft className="w-5 h-5" /></button>
                  <button className="p-1 hover:bg-gray-100 rounded"><ChevronRight className="w-5 h-5" /></button>
                </div>
              </div>

              <div className="grid grid-cols-7 gap-1 text-center">
                {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(d => (
                  <div key={d} className="text-[10px] font-bold text-gray-400 uppercase pb-2">{d}</div>
                ))}
                {[...Array(31)].map((_, i) => {
                  const day = i + 1;
                  const isPast = day < 13;
                  return (
                    <button
                      key={i}
                      disabled={isPast}
                      onClick={() => setSelectedDate(day)}
                      className={`h-10 w-10 flex items-center justify-center rounded-full text-sm font-semibold transition-all
                        ${day === selectedDate ? 'bg-black text-white' : 'hover:bg-gray-100 text-gray-800'}
                        ${isPast ? 'opacity-20 cursor-not-allowed' : ''}
                      `}
                    >
                      {day}
                    </button>
                  );
                })}
              </div>

              <div className="pt-4">
                <div className="flex items-center gap-2 text-xs font-bold text-gray-900 uppercase tracking-widest mb-2">
                  <Globe className="w-3 h-3" />
                  Time Zone
                </div>
                <select className="w-full text-sm font-medium text-gray-600 bg-transparent border-none p-0 focus:ring-0">
                  <option>GMT+06:00 Asia/Dhaka (GMT+6)</option>
                </select>
              </div>
            </div>

            {/* Time Slots View */}
            <div className="space-y-3">
              <div className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">Available Slots</div>
              <div className="grid grid-cols-1 gap-2 h-[350px] overflow-y-auto pr-2 custom-scrollbar">
                {timeSlots.map(time => (
                  <button
                    key={time}
                    onClick={() => setSelectedTime(time)}
                    className={`w-full py-3 px-4 border text-sm font-bold transition-all
                      ${selectedTime === time 
                        ? 'bg-black text-white border-black' 
                        : 'border-black/10 hover:border-black text-gray-900'}
                    `}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}