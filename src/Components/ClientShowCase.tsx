import { useRef } from 'react';

const clients = [
  { id: 11, image: "/clients/client1.webp" },
  { id: 12, image: "/clients/client2.webp" },
  { id: 13, image: "/clients/client3.webp" },
  { id: 14, image: "/clients/client1.webp" },
];

// Duplicate the array to create the infinite loop effect
const duplicatedClients = [...clients, ...clients];

export default function ClientShowcase() {
  const marqueeRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => {
    if (marqueeRef.current) {
      marqueeRef.current.style.animationPlayState = 'paused';
    }
  };

  const handleMouseLeave = () => {
    if (marqueeRef.current) {
      marqueeRef.current.style.animationPlayState = 'running';
    }
  };
  return (
    <section className="bg-white py-24 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 mb-16 text-center">
        <h2 className="text-4xl font-semibold text-neutral-900 md:text-5xl">
          Trusted by <span className="text-blue-600">Global Clients</span>
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-neutral-500">
          Snapshots from real client meetings, showcasing authentic collaborations and lasting partnerships.
        </p>
      </div>

      {/* Container with Faded Edges */}
      <div className="group relative flex overflow-hidden">
        {/* Left Gradient Overlay (Fade effect) */}
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-32 bg-linear-to-r from-white to-transparent" />
        
        {/* The Animated Track */}
        <div ref={marqueeRef} className="flex gap-6 animate-marquee whitespace-nowrap">
          {duplicatedClients.map((client, i) => (
            <div
              key={i}
              className="relative aspect-video w-[320px] md:w-100 shrink-0 overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-100 shadow-sm transition-transform duration-300 hover:scale-[1.02]"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              {/* Badge Styling */}
              <div className="absolute left-4 top-4 z-20">
                <span className="rounded-lg bg-white/90 px-3 py-1 text-[12px] font-bold text-neutral-800 shadow-sm backdrop-blur-md border border-white/20">
                  Client Call #{client.id}
                </span>
              </div>
              
              {/* Image */}
              <img
                src={client.image}
                alt={`Client call ${client.id}`}
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Right Gradient Overlay (Fade effect) */}
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-32 bg-linear-to-l from-white to-transparent" />
      </div>
    </section>
  );
}