import { Award, Clock, Target, Heart } from 'lucide-react';

const stats = [
  { 
    label: "TOP RATED!", 
    icon: Award, 
    primary: true 
  },
  { 
    label: "3500+ HOURS LOGGED", 
    icon: Clock, 
    primary: false 
  },
  { 
    label: "HIGH-QUALITY DELIVERY", 
    icon: Target, 
    primary: true 
  },
  { 
    label: "LONG-TERM RELATIONSHIPS", 
    icon: Heart, 
    primary: false 
  },
];

export default function AboutUs() {
  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-neutral-900">
            About <span className="text-blue-600 underline decoration-blue-200 decoration-8 underline-offset-8">Us</span>
          </h2>
        </div>

        {/* Bottom Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col items-center justify-center p-8 rounded-3xl shadow-sm transition-transform hover:-translate-y-1 duration-300 min-h-45 text-center
                ${item.primary 
                  ? 'bg-black text-white shadow-blue-200' 
                  : 'bg-white text-neutral-900 border border-neutral-100'
                }`}
            >
              <item.icon className={`w-8 h-8 mb-4 ${item.primary ? 'text-white' : 'text-blue-600'} ${item.label.includes('LONG-TERM') ? 'text-red-500' : ''}`} />
              
              <span className="text-sm font-black uppercase tracking-tight leading-tight">
                {item.label}
              </span>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}