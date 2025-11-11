import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Results from './components/Results'
import Portfolio from './components/Portfolio'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-black selection:bg-indigo-500/40 selection:text-white">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <About />
        <Services />
        <Results />
        <Portfolio />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
