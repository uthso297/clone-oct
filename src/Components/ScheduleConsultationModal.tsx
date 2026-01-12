import { X, ChevronLeft, ChevronRight, Clock } from "lucide-react";
import { useState } from "react";

interface ScheduleConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ScheduleConsultationModal({
  isOpen,
  onClose,
}: ScheduleConsultationModalProps) {
  // State for navigation
  const [viewDate, setViewDate] = useState(new Date(2026, 0, 1)); // Starts at Jan 2026
  const [selectedDate, setSelectedDate] = useState<number | null>(13);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  if (!isOpen) return null;

  // Calendar Helper Functions
  const daysInMonth = (year: number, month: number) => new Date(year, month + 1, 0).getDate();
  const firstDayOfMonth = (year: number, month: number) => new Date(year, month, 1).getDay();

  const handlePrevMonth = () => {
    setViewDate(new Date(viewDate.getFullYear(), viewDate.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setViewDate(new Date(viewDate.getFullYear(), viewDate.getMonth() + 1, 1));
  };

  const monthName = viewDate.toLocaleString('default', { month: 'long' });
  const year = viewDate.getFullYear();
  const totalDays = daysInMonth(year, viewDate.getMonth());
  const blankSlots = firstDayOfMonth(year, viewDate.getMonth());

  const timeSlots = ["04:00 AM", "04:30 AM", "05:00 AM", "05:30 AM", "06:00 AM", "06:30 AM", "07:00 AM", "07:30 AM"];

  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center bg-black/60 backdrop-blur-md p-4">
      <div className="w-full max-w-5xl bg-white rounded-xl shadow-2xl overflow-hidden flex flex-col md:flex-row border border-gray-200">
        
        {/* Left Side: Info */}
        <div className="w-full md:w-[35%] border-r border-gray-100 p-8 flex flex-col gap-6 bg-white">
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-gray-900 uppercase tracking-tight">AI & Automation Web</h2>
            <div className="flex items-center gap-2 text-gray-500 font-medium text-sm">
              <Clock className="w-4 h-4" /> <span>30 Mins</span>
            </div>
          </div>
          <p className="text-sm text-gray-600">Strategy session to discuss your current workflows.</p>
        </div>

        {/* Right Side: Dynamic Calendar */}
        <div className="w-full md:w-[65%] p-8 overflow-y-auto">
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-lg font-bold text-gray-900">Select Date & Time</h3>
            <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full"><X className="w-6 h-6" /></button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              {/* Month/Year Navigation */}
              <div className="flex items-center justify-between px-2">
                <span className="font-bold text-gray-800">{monthName} {year}</span>
                <div className="flex gap-2">
                  <button onClick={handlePrevMonth} className="p-1 hover:bg-gray-100 rounded"><ChevronLeft className="w-5 h-5" /></button>
                  <button onClick={handleNextMonth} className="p-1 hover:bg-gray-100 rounded"><ChevronRight className="w-5 h-5" /></button>
                </div>
              </div>

              {/* Grid with Blank Slots */}
              <div className="grid grid-cols-7 gap-1 text-center">
                {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(d => (
                  <div key={d} className="text-[10px] font-bold text-gray-400 uppercase pb-2">{d}</div>
                ))}
                
                {/* Empty days before the 1st of the month */}
                {[...Array(blankSlots)].map((_, i) => <div key={`empty-${i}`} className="h-10 w-10" />)}
                
                {/* Actual Days */}
                {[...Array(totalDays)].map((_, i) => {
                  const day = i + 1;
                  return (
                    <button
                      key={day}
                      onClick={() => setSelectedDate(day)}
                      className={`h-10 w-10 flex items-center justify-center rounded-full text-sm font-semibold transition-all
                        ${day === selectedDate ? 'bg-black text-white' : 'hover:bg-gray-100 text-gray-800'}
                      `}
                    >
                      {day}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Time Slots (Scrollable) */}
            <div className="space-y-3">
              <div className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">Available Slots</div>
              <div className="grid grid-cols-1 gap-2 h-75 overflow-y-auto pr-2">
                {timeSlots.map(time => (
                  <button
                    key={time}
                    onClick={() => setSelectedTime(time)}
                    className={`w-full py-3 border text-sm font-bold transition-all
                      ${selectedTime === time ? 'bg-black text-white' : 'border-black/10 hover:border-black'}
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