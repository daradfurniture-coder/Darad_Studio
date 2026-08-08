import { ArrowDown, Hammer } from 'lucide-react'
import { scrollToSection } from '../lib/scroll'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1558618666-fcd25c85f82e?q=80&w=2070&auto=format&fit=crop')`,
          }}
        />
        <div className="absolute inset-0 hero-gradient" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="reveal">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#F5F0E8]/10 backdrop-blur-sm rounded-full border border-[#F5F0E8]/20 mb-8">
            <Hammer className="w-4 h-4 text-[#D4A574]" />
            <span className="text-sm text-[#F5F0E8]/90 font-medium">
              Handcrafted Since 2010
            </span>
          </div>
        </div>

        <h1 className="reveal reveal-delay-1 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#F5F0E8] leading-tight tracking-tight mb-6">
          Where Wood Becomes
          <span className="block text-[#D4A574]">Art</span>
        </h1>

        <p className="reveal reveal-delay-2 text-lg sm:text-xl text-[#F5F0E8]/80 max-w-2xl mx-auto mb-10 leading-relaxed">
          Bespoke furniture, custom cabinetry, and handcrafted woodwork pieces
          built with precision, passion, and the finest sustainably sourced timber.
        </p>

        <div className="reveal reveal-delay-3 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#portfolio"
            onClick={(e) => scrollToSection(e, '#portfolio')}
            className="px-8 py-4 bg-[#D4A574] text-[#3D2314] font-semibold rounded-md hover:bg-[#C17817] transition-colors"
          >
            View Our Work
          </a>
          <a
            href="#contact"
            onClick={(e) => scrollToSection(e, '#contact')}
            className="px-8 py-4 bg-transparent text-[#F5F0E8] font-semibold rounded-md border-2 border-[#F5F0E8]/30 hover:border-[#F5F0E8]/60 hover:bg-[#F5F0E8]/5 transition-all"
          >
            Start a Project
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a
        href="#about"
        onClick={(e) => scrollToSection(e, '#about')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[#F5F0E8]/60 hover:text-[#F5F0E8] transition-colors animate-bounce"
      >
        <ArrowDown className="w-6 h-6" />
      </a>
    </section>
  )
}
