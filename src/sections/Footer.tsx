import { TreePine, Instagram, Facebook, Twitter } from 'lucide-react'
import { scrollToSection } from '../lib/scroll'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#3D2314] text-[#F5F0E8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="#home" onClick={(e) => scrollToSection(e, '#home')} className="flex items-center gap-2 mb-4">
              <TreePine className="w-7 h-7 text-[#D4A574]" />
              <span className="text-xl font-semibold">Darad Studio</span>
            </a>
            <p className="text-[#F5F0E8]/60 text-sm leading-relaxed">
              Handcrafted furniture and woodwork since 2010. Where every grain tells a story.
            </p>
            <div className="flex gap-3 mt-6">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  className="w-10 h-10 bg-[#F5F0E8]/10 rounded-lg flex items-center justify-center hover:bg-[#D4A574] hover:text-[#3D2314] transition-all"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-[#D4A574]">Quick Links</h4>
            <ul className="space-y-2.5">
              {['Home', 'About', 'Services', 'Portfolio', 'Contact'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    onClick={(e) => scrollToSection(e, `#${link.toLowerCase()}`)}
                    className="text-[#F5F0E8]/60 hover:text-[#F5F0E8] transition-colors text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4 text-[#D4A574]">Services</h4>
            <ul className="space-y-2.5">
              {[
                'Custom Furniture',
                'Kitchen Cabinetry',
                'Doors & Windows',
                'Restoration',
                'Live Edge Slabs',
              ].map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    onClick={(e) => scrollToSection(e, '#services')}
                    className="text-[#F5F0E8]/60 hover:text-[#F5F0E8] transition-colors text-sm"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-semibold mb-4 text-[#D4A574]">Newsletter</h4>
            <p className="text-[#F5F0E8]/60 text-sm mb-4">
              Subscribe for workshop updates and new project showcases.
            </p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-3 py-2.5 bg-[#F5F0E8]/10 border border-[#F5F0E8]/20 rounded-md text-sm text-[#F5F0E8] placeholder:text-[#F5F0E8]/40 focus:outline-none focus:ring-1 focus:ring-[#D4A574]"
              />
              <button
                type="submit"
                className="px-4 py-2.5 bg-[#D4A574] text-[#3D2314] text-sm font-medium rounded-md hover:bg-[#C17817] transition-colors"
              >
                Join
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#F5F0E8]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#F5F0E8]/40 text-sm">
            &copy; {currentYear} Darad Studio. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" onClick={(e) => e.preventDefault()} className="text-[#F5F0E8]/40 hover:text-[#F5F0E8]/60 text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" onClick={(e) => e.preventDefault()} className="text-[#F5F0E8]/40 hover:text-[#F5F0E8]/60 text-sm transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
