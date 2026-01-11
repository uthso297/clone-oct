import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

const team = [
  {
    id: "01",
    name: "Niyamul Islam",
    role: "Marketing Automation Expert",
    image: "/team/niyamul.jpg", 
    description: "CRM workflows and pipelines streamline sales and service processes efficiently. Automated workflows track every customer journey stage, prioritize tasks, and integrate seamlessly with you...",
  },
  {
    id: "02",
    name: "Mehedi Hasan (Babu)",
    role: "Marketing Associate",
    image: "/team/mehedi.webp", 
    description: "Mehedi Hasan (Babu) is a Marketing Associate who supports brand growth through content creation, social media management, and day-to-day marketing execution. He focuses...",
  }
];

export default function TheCollective() {
  const [activeMember, setActiveMember] = useState(team[0]);

  return (
    <section className="bg-[#020617] py-24 px-6 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        
        {/* Header Section */}
        <div className="mb-20">
          <h2 className="text-6xl font-bold text-white mb-6">
            The <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-purple-500">Collective</span>
          </h2>
          <p className="max-w-md text-neutral-400 text-sm leading-relaxed">
            We are a multidisciplinary team of engineers, researchers, and strategists dedicated to the future of work.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-16 items-start">
          
          {/* Left Side: Dynamic Image Card */}
          <div className="relative w-full lg:w-100 aspect-3/4 rounded-2xl overflow-hidden shadow-2xl transition-all duration-700 ease-in-out">
            {/* Background Image with Key-based re-render for smooth fade */}
            <img
              key={activeMember.id}
              src={activeMember.image}
              alt={activeMember.name}
              className="h-full w-full object-cover animate-in fade-in zoom-in-95 duration-700"
            />
            
            {/* Bottom Gradient Overlay */}
            <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent" />
            
            {/* Floating Info on Image */}
            <div className="absolute bottom-0 left-0 p-6 w-full">
               <span className="inline-block bg-white/10 backdrop-blur-md border border-white/20 px-3 py-1 rounded-full text-[10px] font-bold text-white uppercase tracking-widest mb-4">
                  {activeMember.role}
               </span>
               <p className="text-neutral-300 text-xs leading-relaxed line-clamp-3">
                  {activeMember.description}
               </p>
               
               {/* Social Icons Placeholder */}
               <div className="flex gap-3 mt-4">
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white text-xs border border-white/10">in</div>
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white text-xs border border-white/10">🌐</div>
               </div>
            </div>
          </div>

          {/* Right Side: Interactive Name List */}
          <div className="flex-1 w-full space-y-0">
            {team.map((member) => (
              <div
                key={member.id}
                onMouseEnter={() => setActiveMember(member)}
                className={`group cursor-pointer border-t border-neutral-800 py-10 flex items-center justify-between transition-all duration-300 
                ${activeMember.id === member.id ? 'opacity-100' : 'opacity-30 hover:opacity-100'}`}
              >
                <div>
                  <div className="flex items-center gap-4">
                    <h3 className={`text-4xl md:text-5xl font-bold transition-all duration-300 ${activeMember.id === member.id ? 'text-white' : 'text-neutral-500'}`}>
                      {member.name}
                    </h3>
                    <span className="text-[10px] font-mono text-blue-500 font-bold mb-4">{member.id}</span>
                  </div>
                  <p className={`text-sm mt-2 font-medium transition-all ${activeMember.id === member.id ? 'text-blue-400' : 'text-neutral-600'}`}>
                    {member.role}
                  </p>
                </div>
                
                <ArrowRight 
                  className={`w-8 h-8 transition-all duration-500 transform 
                  ${activeMember.id === member.id ? 'text-blue-500 translate-x-0' : 'text-neutral-800 -translate-x-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-0'}`} 
                />
              </div>
            ))}
            <div className="border-t border-neutral-800 w-full" />
          </div>

        </div>
      </div>
    </section>
  );
}