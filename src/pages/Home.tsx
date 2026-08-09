import { useScrollAnimation } from '../hooks/useScrollAnimation'
import Navbar from '../sections/Navbar'
import Hero from '../sections/Hero'
import About from '../sections/About'
import Services from '../sections/Services'
import Portfolio from '../sections/Portfolio'
import Process from '../sections/Process'
import Testimonials from '../sections/Testimonials'
import Contact from '../sections/Contact'
import Footer from '../sections/Footer'
import WhatsAppButton from '../components/WhatsAppButton'

export default function Home() {
  useScrollAnimation()

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Process />
      <Testimonials />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
