import Hero from '../Components/Hero'
import Features from '../Components/Features'
import About from '../Components/About'
import Contact from '../Components/Contact'
import Footer from '../Components/Footer'

export default function Home() {
  return (
    <main className="scroll-smooth">
      <Hero />
      <Features />
      <About />
      <Contact />
      <Footer /> 
    </main>
  )
}