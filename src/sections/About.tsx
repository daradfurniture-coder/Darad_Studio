import { Award, Users, TreePine, Heart } from 'lucide-react'
import { scrollToSection } from '../lib/scroll'

export default function About() {
  const stats = [
    { icon: TreePine, value: '10+', label: 'Years of Craft' },
    { icon: Award, value: '500+', label: 'Projects Completed' },
    { icon: Users, value: '300+', label: 'Happy Clients' },
    { icon: Heart, value: '100%', label: 'Handcrafted' },
  ]

  return (
    <section id="about" className="py-24 lg:py-32 bg-[#F5F0E8] wood-grain">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div className="reveal relative">
            <div className="relative rounded-lg overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1588854337236-6889d631faa8?q=80&w=2070&auto=format&fit=crop"
                alt="Woodworker crafting furniture"
                className="w-full h-[500px] object-cover"
              />
            </div>
            {/* Floating card */}
            <div className="absolute -bottom-6 -right-6 bg-[#5C3D2E] text-[#F5F0E8] p-6 rounded-lg shadow-xl hidden sm:block">
              <p className="text-3xl font-bold">16+</p>
              <p className="text-sm opacity-80">Years of Experience</p>
            </div>
          </div>

          {/* Content Side */}
          <div>
            <div className="reveal">
              <span className="text-[#C17817] font-semibold text-sm uppercase tracking-wider">
                About Us
              </span>
              <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-[#3D2314] leading-tight">
                Passion Meets Precision in Every Grain
              </h2>
            </div>

            <div className="reveal reveal-delay-1 mt-6 space-y-4 text-[#5C3D2E] leading-relaxed">
              <p>
                Founded in 2010, Darad Studio has been transforming raw timber into
                timeless pieces of functional art. Our workshop, nestled in the heart
                of the countryside, is where traditional joinery techniques meet
                contemporary design sensibilities.
              </p>
              <p>
                Every piece that leaves our shop carries the mark of meticulous
                attention to detail — from hand-selected lumber to the final coat of
                finish. We believe that furniture should not only serve a purpose but
                tell a story.
              </p>
              <p>
                We source our wood exclusively from sustainable forests and reclaimed
                sources, ensuring that our craft respects the environment that provides
                our materials.
              </p>
            </div>

            <div className="reveal reveal-delay-2 mt-8">
              <a
                href="#portfolio"
                onClick={(e) => scrollToSection(e, '#portfolio')}
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#5C3D2E] text-[#F5F0E8] font-medium rounded-md hover:bg-[#3D2314] transition-colors"
              >
                Explore Our Craft
              </a>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="reveal mt-20 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="text-center p-6 bg-white rounded-lg shadow-sm border border-[#E8DDD0]"
            >
              <stat.icon className="w-8 h-8 mx-auto text-[#C17817] mb-3" />
              <p className="text-3xl font-bold text-[#3D2314]">{stat.value}</p>
              <p className="text-sm text-[#5C3D2E] mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
