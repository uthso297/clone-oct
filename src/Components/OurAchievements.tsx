import { Star, Award, CheckCircle } from 'lucide-react';

const achievements = [
  {
    title: "Exceptional Job Success",
    description: "Consistently delivering outstanding results for clients across the globe.",
    icon: Star,
  },
  {
    title: "Certified Expert",
    description: "Sales Funnel & Web Development Specialists with verified credentials.",
    icon: Award,
  },
  {
    title: "Platform Mastery",
    description: "Experienced with GoHighLevel, Kajabi, React, and custom AI integrations.",
    icon: CheckCircle,
  },
];

export default function OurAchievements() {
  return (
    <section className="bg-[#F8FAFC] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-neutral-900">
            Our <span className="text-blue-600 underline decoration-blue-200 decoration-8 underline-offset-8">Achievements</span>
          </h2>
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {achievements.map((item, index) => (
            <div
              key={index}
              className="group flex flex-col items-center text-center p-12 bg-white rounded-4xl border border-neutral-100 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
            >
              {/* Circular Icon Wrapper */}
              <div className="mb-8 p-6 rounded-full bg-blue-50 transition-colors duration-300 group-hover:bg-blue-100">
                <item.icon className="w-8 h-8 text-blue-600" fill={index === 0 ? "currentColor" : "none"} />
              </div>

              {/* Text Content */}
              <h3 className="text-xl font-bold text-neutral-900 mb-4">
                {item.title}
              </h3>
              <p className="text-neutral-500 text-sm leading-relaxed max-w-60">
                {item.description}
              </p>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}