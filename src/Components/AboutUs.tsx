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
    <section className="bg-[#F8FAFC] py-24 px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-neutral-900">
            About <span className="text-blue-600 underline decoration-blue-200 decoration-8 underline-offset-8">Us</span>
          </h2>
        </div>

        {/* Main Welcome Card */}
        <div className="relative bg-white rounded-4xl shadow-sm border border-neutral-100 p-12 mb-8 overflow-hidden text-center">
          {/* Top Gradient Border */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-linear-to-r from-blue-500 via-indigo-500 to-purple-500" />
          
          <p className="text-neutral-500 text-lg mb-8">Welcome.</p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex items-center gap-2 bg-neutral-50 px-5 py-2.5 rounded-full border border-neutral-100">
              <div className="w-2 h-2 rounded-full bg-blue-600" />
              <span className="text-sm font-bold text-neutral-700">320+ Total Projects</span>
            </div>
            <div className="flex items-center gap-2 bg-neutral-50 px-5 py-2.5 rounded-full border border-neutral-100">
              <div className="w-2 h-2 rounded-full bg-blue-600" />
              <span className="text-sm font-bold text-neutral-700">3500+ Hours Logged</span>
            </div>
          </div>
        </div>

        {/* Bottom Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col items-center justify-center p-8 rounded-3xl shadow-sm transition-transform hover:-translate-y-1 duration-300 min-h-45 text-center
                ${item.primary 
                  ? 'bg-blue-600 text-white shadow-blue-200' 
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