import AboutUs from "./Components/AboutUs"
import ChatbotUI from "./Components/ChatBotUI"
import ClientShowcase from "./Components/ClientShowCase"
import FloatingCTA from "./Components/FloatingCTA"
import Footer from "./Components/Footer"
import Hero from "./Components/Hero"
import OurAchievements from "./Components/OurAchievements"
import ProjectDetails from "./Components/ProjectDetails"
import ProvenResults from "./Components/ProvenResults"
import ScrollToTop from "./Components/ScrollToTop"
import TechnicalCapabilities from "./Components/TechnicalCapabilities"
import TechStackCarousel from "./Components/TechStackCarousel"
import TheCollective from "./Components/TheCollective"
import WorkTogether from "./Components/WorkTogether"

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <FloatingCTA />
      
      <ChatbotUI />

      <ScrollToTop></ScrollToTop>

      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <ClientShowcase />
            <TechnicalCapabilities />
            <TechStackCarousel />
            <ProvenResults />
            <AboutUs />
            <OurAchievements />
            <WorkTogether />
            <TheCollective />
            <Footer />
          </>
        } />
        <Route path="/project/:id" element={<ProjectDetails />} />
      </Routes>
    </Router>
  )
}

export default App