import './index.css'
import ParticlesBackground from './components/ParticlesBackground'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Divider from './components/Divider'
import Loader from './components/Loader'
import CustomCursor from './components/CustomCursor'
import ProgressBar from './components/ProgressBar'

function App() {
  return (
    <>
      <Loader />
      <CustomCursor />
      <ProgressBar />
      <div className="bg-dark min-h-screen relative">
        <ParticlesBackground />
        <Navbar />
        <Hero />
        <Divider />
        <About />
        <Divider />
        <Skills />
        <Divider />
        <Projects />
        <Divider />
        <Contact />
        <Footer />
        <ScrollToTop />
      </div>
    </>
  )
}

export default App