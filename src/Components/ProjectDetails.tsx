import { useState, type SetStateAction } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ChevronLeft, ChevronRight, Play } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "GHL Automation Specialist | Automation Solutions",
    description: "In-Depth Process Assessment: I conduct a meticulous examination of your current workflows In-Depth Process Assessment: I conduct a meticulous examination of your current workflowsIn-Depth Process Assessment: I conduct a meticulous examination of your current workflowsIn-Depth Process Assessment: I conduct a meticulous examination of your current workflowsIn-Depth Process Assessment: I conduct a meticulous examination of your current workflowsIn-Depth Process Assessment: I conduct a meticulous examination of your current workflowsIn-Depth Process Assessment: I conduct a meticulous examination of your current workflowsIn-Depth Process Assessment: I conduct a meticulous examination of your current workflows...",
    images: [
      "https://img.freepik.com/free-photo/ai-robot-interacting-with-futuristic-data-interface_23-2152005489.jpg?semt=ais_hybrid&w=740&q=80",
      "https://media.istockphoto.com/id/1367967285/photo/automation-software-technology-process-system-business-concept.jpg?s=612x612&w=0&k=20&c=VnRZHYgIfInFhaShiStMroW7PnVyvAC4C9SodjBf4ns=",
      "https://img.freepik.com/free-photo/human-hand-passing-gear-robotic-hand_23-2152006116.jpg?semt=ais_hybrid&w=740&q=80",
      "https://thumbs.dreamstime.com/b/automation-software-technology-process-system-business-concept-97939148.jpg",
    ],
    videos: [
      "https://example.com/demo-video.mp4",
      "https://example.com/demo-video.mp4",
      "https://example.com/demo-video.mp4",
      "https://example.com/demo-video.mp4",
    ],
    skills: ["HighLevel", "Zapier", "Make", "System Integration"]
  },
  {
    id: 2,
    title: "GHL Automation Specialist | Automation Solutions",
    description: "In-Depth Process Assessment: I conduct a meticulous examination of your current workflows In-Depth Process Assessment: I conduct a meticulous examination of your current workflowsIn-Depth Process Assessment: I conduct a meticulous examination of your current workflowsIn-Depth Process Assessment: I conduct a meticulous examination of your current workflowsIn-Depth Process Assessment: I conduct a meticulous examination of your current workflowsIn-Depth Process Assessment: I conduct a meticulous examination of your current workflowsIn-Depth Process Assessment: I conduct a meticulous examination of your current workflowsIn-Depth Process Assessment: I conduct a meticulous examination of your current workflows...",
    images: [
      "https://img.freepik.com/free-photo/ai-robot-interacting-with-futuristic-data-interface_23-2152005489.jpg?semt=ais_hybrid&w=740&q=80",
      "https://media.istockphoto.com/id/1367967285/photo/automation-software-technology-process-system-business-concept.jpg?s=612x612&w=0&k=20&c=VnRZHYgIfInFhaShiStMroW7PnVyvAC4C9SodjBf4ns=",
      "https://img.freepik.com/free-photo/human-hand-passing-gear-robotic-hand_23-2152006116.jpg?semt=ais_hybrid&w=740&q=80",
      "https://thumbs.dreamstime.com/b/automation-software-technology-process-system-business-concept-97939148.jpg",
    ],
    videos: [
      "https://example.com/demo-video.mp4",
      "https://example.com/demo-video.mp4",
      "https://example.com/demo-video.mp4",
      "https://example.com/demo-video.mp4",
    ],
    skills: ["HighLevel", "Zapier", "Make", "System Integration"]
  },
  {
    id: 3,
    title: "GHL Automation Specialist | Automation Solutions",
    description: "In-Depth Process Assessment: I conduct a meticulous examination of your current workflows In-Depth Process Assessment: I conduct a meticulous examination of your current workflowsIn-Depth Process Assessment: I conduct a meticulous examination of your current workflowsIn-Depth Process Assessment: I conduct a meticulous examination of your current workflowsIn-Depth Process Assessment: I conduct a meticulous examination of your current workflowsIn-Depth Process Assessment: I conduct a meticulous examination of your current workflowsIn-Depth Process Assessment: I conduct a meticulous examination of your current workflowsIn-Depth Process Assessment: I conduct a meticulous examination of your current workflows...",
    images: [
      "https://img.freepik.com/free-photo/ai-robot-interacting-with-futuristic-data-interface_23-2152005489.jpg?semt=ais_hybrid&w=740&q=80",
      "https://media.istockphoto.com/id/1367967285/photo/automation-software-technology-process-system-business-concept.jpg?s=612x612&w=0&k=20&c=VnRZHYgIfInFhaShiStMroW7PnVyvAC4C9SodjBf4ns=",
      "https://img.freepik.com/free-photo/human-hand-passing-gear-robotic-hand_23-2152006116.jpg?semt=ais_hybrid&w=740&q=80",
      "https://thumbs.dreamstime.com/b/automation-software-technology-process-system-business-concept-97939148.jpg",
    ],
    videos: [
      "https://example.com/demo-video.mp4",
      "https://example.com/demo-video.mp4",
      "https://example.com/demo-video.mp4",
      "https://example.com/demo-video.mp4",
    ],
    skills: ["HighLevel", "Zapier", "Make", "System Integration"]
  }
];

export default function ProjectDetails() {
  const { id } = useParams();
  const project = projects.find(p => p.id === parseInt(id || '0'));
  
  // Separate states for image and video navigation
  const [currentImgIdx, setCurrentImgIdx] = useState(0);
  const [currentVidIdx, setCurrentVidIdx] = useState(0);

  if (!project) return <div className="p-10 text-center">Project Not Found</div>;

  // Navigation logic
  const nextMedia = (idx: number, setIdx: { (value: SetStateAction<number>): void; (value: SetStateAction<number>): void; (arg0: number): unknown; }, length: number) => setIdx((idx + 1) % length);
  const prevMedia = (idx: number, setIdx: { (value: SetStateAction<number>): void; (value: SetStateAction<number>): void; (arg0: number): unknown; }, length: number) => setIdx((idx - 1 + length) % length);

  return (
    <div className="min-h-screen bg-[#F8F9FB] text-[#1A1C21]">
      <div className="max-w-300 mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Left Column: Text Content */}
          <div className="flex flex-col gap-8">
            <Link to="/" className="flex items-center gap-2 text-sm text-gray-500 hover:text-black transition-colors">
              <ArrowLeft className="w-4 h-4" /> Back to Projects
            </Link>

            <h1 className="text-4xl font-bold leading-tight">{project.title}</h1>

            <div className="space-y-6">
              <h3 className="text-gray-400 font-medium">Project description.</h3>
              <p className="text-gray-600 leading-relaxed text-lg whitespace-pre-line">
                {project.description}
              </p>
            </div>

            <div className="pt-6">
              <h3 className="text-gray-400 font-medium mb-4">Skills and deliverables</h3>
              <div className="flex flex-wrap gap-2">
                {project.skills?.map((skill, i) => (
                  <span key={i} className="px-3 py-1 bg-white border border-gray-200 rounded text-sm text-gray-700">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Dual Media Sliders */}
          <div className="flex flex-col gap-8">
            
            {/* Image Slider Section */}
            <div className="relative aspect-16/10 bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden group">
              <div className="w-full h-full p-4 flex items-center justify-center">
                <img 
                  src={project.images[currentImgIdx]} 
                  alt={`Detail ${currentImgIdx + 1}`}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              
              {project.images.length > 1 && (
                <div className="absolute inset-0 flex items-center justify-between px-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button onClick={() => prevMedia(currentImgIdx, setCurrentImgIdx, project.images.length)} className="w-10 h-10 flex items-center justify-center bg-white/90 rounded-full shadow-lg border border-gray-100 hover:bg-white">
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button onClick={() => nextMedia(currentImgIdx, setCurrentImgIdx, project.images.length)} className="w-10 h-10 flex items-center justify-center bg-white/90 rounded-full shadow-lg border border-gray-100 hover:bg-white">
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </div>
              )}
              {/* Pagination Indicator */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1">
                {project.images.map((_, i) => (
                  <div key={i} className={`h-1 rounded-full transition-all ${i === currentImgIdx ? 'w-4 bg-black' : 'w-1 bg-gray-300'}`} />
                ))}
              </div>
            </div>

            {/* Video Slider Section */}
            <div className="relative aspect-16/10 bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden group">
              {project.videos && project.videos.length > 0 ? (
                <>
                  <div className="w-full h-full bg-black">
                    <video 
                      key={project.videos[currentVidIdx]} // Key forces re-render on video change
                      controls 
                      className="w-full h-full object-contain"
                      src={project.videos[currentVidIdx]}
                    />
                  </div>
                  
                  {project.videos.length > 1 && (
                    <div className="absolute top-4 right-4 z-10 flex gap-2">
                       <button onClick={() => prevMedia(currentVidIdx, setCurrentVidIdx, project.videos.length)} className="w-8 h-8 flex items-center justify-center bg-white/20 hover:bg-white/40 text-white backdrop-blur-md rounded-full transition-all">
                        <ChevronLeft className="w-4 h-4" />
                      </button>
                      <button onClick={() => nextMedia(currentVidIdx, setCurrentVidIdx, project.videos.length)} className="w-8 h-8 flex items-center justify-center bg-white/20 hover:bg-white/40 text-white backdrop-blur-md rounded-full transition-all">
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  )}
                </>
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center text-gray-400">
                  <Play className="w-10 h-10 mb-2 opacity-20" />
                  <p className="text-sm font-medium">No video uploaded</p>
                </div>
              )}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}