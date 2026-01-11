import AboutUs from "./Components/AboutUs"
import ClientShowcase from "./Components/ClientShowCase"
import Footer from "./Components/Footer"
import Hero from "./Components/Hero"
import OurAchievements from "./Components/OurAchievements"
import ProvenResults from "./Components/ProvenResults"
import TechnicalCapabilities from "./Components/TechnicalCapabilities"
import TechStackCarousel from "./Components/TechStackCarousel"
import TheCollective from "./Components/TheCollective"
import WorkTogether from "./Components/WorkTogether"

function App() {


  return (
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
  )
}

export default App
