import { useState, useEffect } from 'react'
import { Menu, X, TreePine } from 'lucide-react'
import { scrollToSection } from '../lib/scroll'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Process', href: '#process' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
          ? 'bg-[#F5F0E8]/95 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="#home" onClick={(e) => scrollToSection(e, '#home')} className="flex items-center gap-2 group">
            <TreePine
              className={`w-7 h-7 transition-colors ${scrolled ? 'text-[#5C3D2E]' : 'text-[#F5F0E8]'
                }`}
            />
            <span
              className={`text-xl font-semibold tracking-tight transition-colors ${scrolled ? 'text-[#3D2314]' : 'text-[#F5F0E8]'
                }`}
            >
              Darad Studio
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className={`text-sm font-medium transition-colors hover:text-[#C17817] ${scrolled ? 'text-[#3D2314]' : 'text-[#F5F0E8]'
                  }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, '#contact')}
              className="px-5 py-2.5 bg-[#5C3D2E] text-[#F5F0E8] text-sm font-medium rounded-md hover:bg-[#3D2314] transition-colors"
            >
              Get a Quote
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 transition-colors ${scrolled ? 'text-[#3D2314]' : 'text-[#F5F0E8]'
              }`}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-[#F5F0E8] border-t border-[#E8DDD0]">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  setIsOpen(false)
                  scrollToSection(e, link.href)
                }}
                className="block px-3 py-2.5 text-[#3D2314] font-medium hover:bg-[#E8DDD0] rounded-md transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => {
                setIsOpen(false)
                scrollToSection(e, '#contact')
              }}
              className="block px-3 py-2.5 mt-2 bg-[#5C3D2E] text-[#F5F0E8] text-center font-medium rounded-md hover:bg-[#3D2314] transition-colors"
            >
              Get a Quote
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
