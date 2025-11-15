
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Education from './components/Education'
import Skills from './components/Skills'
import Contact from './components/Contact'
import ScrollTop from './components/ScrollTop'
import FloatingChat from './components/FloatingChat'
import './index.css'

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-6">
        <Hero />
        <Projects />
        <Education />
        <Experience />
        <Skills />
        <Contact />
      </main>
      <ScrollTop />
      <FloatingChat />
    </div>
  )
}

export default App
