import Header from "./components/Header"
import VisionSection from "./components/VisionSection"
import HeroSection from "./components/HeroSection"
import CurriculumSection from "./components/CurriculumSection"
import AboutSection from "./components/AboutSection"
import RightForYouSection from "./components/RightForYouSection"
import MentorsSection from "./components/MentorsSection"
import ApplicationProcessSection from "./components/ApplicationProcessSection"
import CTASection from "./components/CTASection"
import FAQSection from "./components/FAQSection"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="App">
      <Header />
      <VisionSection />
      {/* <HeroSection /> */}
      <AboutSection />
      <RightForYouSection />
      <CurriculumSection />
      
      
      <MentorsSection />
      <ApplicationProcessSection />
      <CTASection />
      <FAQSection />
      <Footer />
    </div>
  )
}

export default App
