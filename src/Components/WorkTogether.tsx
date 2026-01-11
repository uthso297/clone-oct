import { ArrowRight } from 'lucide-react';

export default function WorkTogether() {
  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-neutral-900">
            Let's Work <span className="text-blue-600">Together</span>
          </h2>
        </div>

        {/* Main CTA Card */}
        <div className="relative overflow-hidden rounded-[48px] bg-[#0F172A] py-20 px-6 text-center shadow-2xl">
          
          {/* Subtle Background Radial Gradient for "Glow" Effect */}
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-150 h-150 bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center">
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
              Ready to Start Your Project?
            </h3>
            
            <p className="max-w-2xl text-neutral-400 text-lg mb-10 leading-relaxed">
              Click below to send us a message, and let's schedule a call to discuss your automation needs!
            </p>

            {/* Primary Action Button */}
            <button className="group flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-10 py-5 rounded-full font-bold text-lg transition-all shadow-lg hover:shadow-blue-500/25 active:scale-95">
              Partner with Us
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>

            {/* Bottom Status Indicators */}
            <div className="mt-12 flex flex-wrap justify-center gap-8">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-blue-500" />
                <span className="text-neutral-500 font-bold text-sm tracking-wide">
                  320+ Total Projects
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-blue-500" />
                <span className="text-neutral-500 font-bold text-sm tracking-wide">
                  3500+ Hours of Experience
                </span>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
}