import { Sofa, Box, Ruler, DoorOpen, TreeDeciduous, Paintbrush } from 'lucide-react'

export default function Services() {
  const services = [
    {
      icon: Sofa,
      title: 'Custom Furniture',
      description:
        'Bespoke tables, chairs, beds, and shelving designed to your exact specifications and space requirements.',
    },
    {
      icon: Box,
      title: 'Kitchen Cabinetry',
      description:
        'Hand-built kitchen cabinets and islands that combine beauty with durability for the heart of your home.',
    },
    {
      icon: DoorOpen,
      title: 'Doors & Windows',
      description:
        'Solid wood doors, window frames, and custom millwork that add character and insulation to any building.',
    },
    {
      icon: Ruler,
      title: 'Restoration',
      description:
        'Expert repair and restoration of antique furniture, preserving history while ensuring lasting function.',
    },
    {
      icon: TreeDeciduous,
      title: 'Live Edge Slabs',
      description:
        'Stunning one-of-a-kind tables and countertops showcasing the natural edge of the tree.',
    },
    {
      icon: Paintbrush,
      title: 'Finishing & Treatment',
      description:
        'Professional staining, oiling, and lacquering using eco-friendly products for lasting protection.',
    },
  ]

  return (
    <section id="services" className="py-24 lg:py-32 bg-[#EDE6DA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="reveal text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#C17817] font-semibold text-sm uppercase tracking-wider">
            Our Services
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-[#3D2314]">
            Crafted for Every Space
          </h2>
          <p className="mt-4 text-[#5C3D2E] text-lg leading-relaxed">
            From concept to completion, we bring your vision to life with
            masterful woodworking and personalized service.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <div
              key={i}
              className={`reveal reveal-delay-${(i % 3) + 1} group p-8 bg-[#F5F0E8] rounded-lg border border-[#E8DDD0] hover:border-[#C17817] hover:shadow-lg transition-all duration-300`}
            >
              <div className="w-14 h-14 bg-[#5C3D2E] rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#C17817] transition-colors">
                <service.icon className="w-7 h-7 text-[#F5F0E8]" />
              </div>
              <h3 className="text-xl font-bold text-[#3D2314] mb-3">
                {service.title}
              </h3>
              <p className="text-[#5C3D2E] leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
