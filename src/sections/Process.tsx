import { ClipboardList, Scissors, Hammer, Paintbrush, CheckCircle } from 'lucide-react'

export default function Process() {
  const steps = [
    {
      icon: ClipboardList,
      number: '01',
      title: 'Consultation',
      description:
        'We start with a detailed discussion of your vision, space, and requirements. Measurements, sketches, and wood selection happen here.',
    },
    {
      icon: Scissors,
      number: '02',
      title: 'Design & Planning',
      description:
        'Our designers create detailed drawings and 3D renderings. You approve every detail before a single cut is made.',
    },
    {
      icon: Hammer,
      number: '03',
      title: 'Crafting',
      description:
        'Our master woodworkers bring the design to life using traditional joinery and modern precision tools in our workshop.',
    },
    {
      icon: Paintbrush,
      number: '04',
      title: 'Finishing',
      description:
        'Multiple coats of hand-rubbed oil, stain, or lacquer are applied and cured to achieve a durable, beautiful finish.',
    },
    {
      icon: CheckCircle,
      number: '05',
      title: 'Delivery',
      description:
        'We carefully transport and install your piece in your home, ensuring it fits perfectly and meets your expectations.',
    },
  ]

  return (
    <section id="process" className="py-24 lg:py-32 bg-[#5C3D2E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="reveal text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#D4A574] font-semibold text-sm uppercase tracking-wider">
            Our Process
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F5F0E8]">
            From Tree to Treasure
          </h2>
          <p className="mt-4 text-[#F5F0E8]/70 text-lg leading-relaxed">
            Every piece follows a meticulous journey from raw lumber to finished masterpiece.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-[#F5F0E8]/20" />

          <div className="space-y-12 lg:space-y-0">
            {steps.map((step, i) => (
              <div
                key={i}
                className={`reveal reveal-delay-${(i % 3) + 1} relative lg:grid lg:grid-cols-2 lg:gap-16 items-center ${
                  i % 2 === 1 ? 'lg:text-right' : ''
                }`}
              >
                {/* Content */}
                <div className={`${i % 2 === 1 ? 'lg:order-2' : ''} mb-6 lg:mb-0`}>
                  <div
                    className={`inline-flex items-center gap-3 mb-4 ${
                      i % 2 === 1 ? 'lg:flex-row-reverse' : ''
                    }`}
                  >
                    <div className="w-12 h-12 bg-[#D4A574] rounded-lg flex items-center justify-center">
                      <step.icon className="w-6 h-6 text-[#3D2314]" />
                    </div>
                    <span className="text-5xl font-bold text-[#F5F0E8]/10">
                      {step.number}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-[#F5F0E8] mb-3">
                    {step.title}
                  </h3>
                  <p className="text-[#F5F0E8]/70 leading-relaxed max-w-md">
                    {step.description}
                  </p>
                </div>

                {/* Timeline Dot */}
                <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-[#D4A574] rounded-full border-4 border-[#5C3D2E]" />

                {/* Spacer for alternating layout */}
                <div className={i % 2 === 1 ? 'lg:order-1' : ''} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
