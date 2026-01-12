import AboutUs from "./Components/AboutUs"
import ClientShowcase from "./Components/ClientShowCase"
import FloatingCTA from "./Components/FloatingCTA"
import Footer from "./Components/Footer"
import Hero from "./Components/Hero"
import OurAchievements from "./Components/OurAchievements"
import ProjectDetails from "./Components/ProjectDetails"
import ProvenResults from "./Components/ProvenResults"
import TechnicalCapabilities from "./Components/TechnicalCapabilities"
import TechStackCarousel from "./Components/TechStackCarousel"
import TheCollective from "./Components/TheCollective"
import WorkTogether from "./Components/WorkTogether"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {


  return (
    <Router>
      <FloatingCTA />
      <Routes>
        <Route path="/" element={
          <>
            <Hero></Hero>
            <ClientShowcase></ClientShowcase>
            <TechnicalCapabilities></TechnicalCapabilities>
            <TechStackCarousel></TechStackCarousel>
            <ProvenResults></ProvenResults>
            <AboutUs></AboutUs>
            <OurAchievements></OurAchievements>
            <WorkTogether></WorkTogether>
            <TheCollective></TheCollective>
            <Footer></Footer>
          </>
        } />
        <Route path="/project/:id" element={<ProjectDetails />} />
      </Routes>
    </Router>
  )
}

export default App
