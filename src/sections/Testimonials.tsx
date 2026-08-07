import { Star, Quote } from 'lucide-react'

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Margaret Chen',
      role: 'Homeowner',
      text: 'The walnut dining table Darad Studio crafted for us is the centerpiece of our home. The grain is stunning, and the craftsmanship is impeccable. Worth every penny.',
      rating: 5,
    },
    {
      name: 'David Okafor',
      role: 'Interior Designer',
      text: 'I have commissioned Darad Studio for multiple client projects. Their attention to detail and ability to translate design concepts into reality is unmatched.',
      rating: 5,
    },
    {
      name: 'Sarah Lindqvist',
      role: 'Restaurant Owner',
      text: 'They built all the tables and bar seating for our restaurant. Two years in and they still look brand new. The live edge bar is a customer favorite.',
      rating: 5,
    },
  ]

  return (
    <section className="py-24 lg:py-32 bg-[#EDE6DA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="reveal text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#C17817] font-semibold text-sm uppercase tracking-wider">
            Testimonials
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-[#3D2314]">
            What Our Clients Say
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <div
              key={i}
              className={`reveal reveal-delay-${i + 1} p-8 bg-[#F5F0E8] rounded-lg border border-[#E8DDD0] relative`}
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-[#E8DDD0]" />

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, j) => (
                  <Star
                    key={j}
                    className="w-5 h-5 fill-[#C17817] text-[#C17817]"
                  />
                ))}
              </div>

              <p className="text-[#5C3D2E] leading-relaxed mb-6 relative z-10">
                "{testimonial.text}"
              </p>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#5C3D2E] flex items-center justify-center text-[#F5F0E8] font-semibold">
                  {testimonial.name[0]}
                </div>
                <div>
                  <p className="font-semibold text-[#3D2314]">{testimonial.name}</p>
                  <p className="text-sm text-[#5C3D2E]">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
