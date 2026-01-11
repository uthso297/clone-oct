// Expanded list of technology items
const techStack = [
  { name: "GoHighLevel", logo: "/logos/ghl.png" },
  { name: "React", logo: "/logos/react.png" },
  { name: "Next.js", logo: "/logos/nextjs.png" },
  { name: "ASP.NET", logo: "/logos/aspnet.png" },
  { name: "JavaScript", logo: "/logos/js.png" },
  { name: "MongoDB", logo: "/logos/mongodb.png" },
  { name: "PostgreSQL", logo: "/logos/postgres.png" },
  { name: "Prisma", logo: "/logos/prisma.png" },
  { name: "Mongoose", logo: "/logos/mongoose.png" },
  { name: "TypeScript", logo: "/logos/ts.png" },
  { name: "Tailwind CSS", logo: "/logos/tailwind.png" },
  { name: "Node.js", logo: "/logos/nodejs.png" },
];

// Duplicate the array for a seamless infinite scroll
const duplicatedStack = [...techStack, ...techStack];

import { useState } from 'react';

export default function TechStackCarousel() {
  const [paused, setPaused] = useState(false);
  return (
    <section className="bg-gradient-to-br from-blue-50 to-purple-50 py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-[#0F172A] mb-6">
          Our Tech Stack
        </h2>
        <p className="max-w-2xl mx-auto text-neutral-500 text-lg leading-relaxed">
          We leverage best-in-class tools to build robust, scalable automation ecosystems for your business.
        </p>
        
        <div className="mt-12">
          <span className="text-neutral-900 font-bold text-sm tracking-wide uppercase">
            General
          </span>
        </div>
      </div>

      {/* Infinite Carousel Container */}
      <div className="relative flex items-center">
        {/* Faded edges effect to match image */}
        <div className="pointer-events-none absolute left-0 z-10 h-full w-32 bg-gradient-to-r from-[#F8FAFC] to-transparent" />
        <div className="pointer-events-none absolute right-0 z-10 h-full w-32 bg-gradient-to-l from-[#F8FAFC] to-transparent" />

        {/* The Animated Track */}
        <div
          className={`flex gap-6 ${paused ? '' : 'animate-marquee'}`}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {duplicatedStack.map((tech, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center min-w-[180px] h-[160px] bg-white border border-neutral-100 rounded-2xl shadow-sm transition-all duration-300 hover:shadow-md hover:scale-[1.02]"
            >
              {/* Logo Placeholder - Replace src with your actual paths */}
              <div className="w-12 h-12 mb-4 flex items-center justify-center">
                <img 
                  src={tech.logo} 
                  alt={tech.name} 
                  className="max-w-full max-h-full object-contain transition-all"
                  onError={(e) => {
                    // Fallback for missing images
                    e.currentTarget.src = `https://ui-avatars.com/api/?name=${tech.name}&background=random`;
                  }}
                />
              </div>
              
              <span className="text-[#0F172A] font-bold text-sm">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}