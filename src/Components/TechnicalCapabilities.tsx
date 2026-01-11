import { 
  Database, 
  Phone, 
  MessageSquare, 
  Megaphone, 
  Unlink, 
  Settings 
} from 'lucide-react';

const capabilities = [
  {
    title: "GoHighLevel Ecosystems",
    description: "We architect complete GHL snapshots with custom sub-account logic, workflows, and white-label configurations.",
    icon: Database,
  },
  {
    title: "Voice AI Agents",
    description: "Deploy human-parity voice assistants for inbound/outbound calls, integrated directly into your CRM.",
    icon: Phone,
  },
  {
    title: "Intelligent Chatbots",
    description: "RAG-based support agents trained on your specific business knowledge base, available 24/7.",
    icon: MessageSquare,
  },
  {
    title: "Marketing Automation",
    description: "Complex multi-channel sequences (Email, SMS, Voice) triggered by behavioral data points.",
    icon: Megaphone,
  },
  {
    title: "API Orchestration",
    description: "We unify your disparate tech stack using Make.com, Zapier, and custom Python middleware.",
    icon: Unlink,
  },
  {
    title: "Data Architecture",
    description: "Clean data structures, tagging strategies, and pipeline hygiene to ensure scalability.",
    icon: Settings,
  },
];

export default function TechnicalCapabilities() {
  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <span className="text-blue-600 font-bold text-xs uppercase tracking-widest">
            Our Expertise
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mt-2 mb-6">
            Technical Capabilities
          </h2>
          <p className="max-w-2xl text-neutral-500 text-lg leading-relaxed">
            We don't just use tools; we build systems. Our engineering approach ensures your automation stack is robust, scalable, and secure.
          </p>
        </div>

        {/* 3x2 Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 border border-neutral-200 rounded-2xl overflow-hidden shadow-sm">
          {capabilities.map((item, index) => (
            <div
              key={index}
              className={`group p-10 flex flex-col items-start transition-colors duration-300 hover:bg-neutral-50/50
                ${index < 3 ? 'md:border-b' : ''} 
                ${(index + 1) % 3 !== 0 ? 'md:border-r' : ''} 
                border-neutral-200 border-b last:border-b-0 md:last:border-b-0
              `}
            >
              {/* Dynamic Icon Box */}
              <div className="mb-6 flex items-center justify-center p-3 rounded-xl bg-neutral-100 transition-all duration-300 group-hover:bg-blue-600 shadow-sm">
                <item.icon className="w-5 h-5 text-neutral-800 transition-colors duration-300 group-hover:text-white" />
              </div>

              <h3 className="text-xl font-bold text-neutral-900 mb-4">
                {item.title}
              </h3>
              <p className="text-neutral-500 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}