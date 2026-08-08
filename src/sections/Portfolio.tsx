import { useState } from 'react'
import { X, ZoomIn } from 'lucide-react'

export default function Portfolio() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const img = (name: string) => `${import.meta.env.BASE_URL}images/portfolio/${name}`

  const projects = [
    {
      title: 'Mandala Art Curved Table (9×4 ft)',
      category: 'Furniture',
      image: img('mandala-table.jpg'),
    },
    {
      title: 'Modern Kitchen Drawers',
      category: 'Cabinetry',
      image: img('kitchen-drawers.jpg'),
    },
    {
      title: 'Mandala Swahili Headboard',
      category: 'Carvings',
      image: img('mandala-headboard.jpg'),
    },
    {
      title: 'Modern Curved Bed',
      category: 'Beds',
      image: img('curved-bed.jpg'),
    },
    {
      title: 'Swahili Bench Day Bed (3×6 ft)',
      category: 'Beds',
      image: img('swahili-bench.jpg'),
    },
    {
      title: 'Hardwood Driveway Gate',
      category: 'Gates',
      image: img('wooden-gate.jpg'),
    },
  ]

  return (
    <section id="portfolio" className="py-24 lg:py-32 bg-[#F5F0E8] wood-grain">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="reveal text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#C17817] font-semibold text-sm uppercase tracking-wider">
            Portfolio
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-[#3D2314]">
            Pieces We're Proud Of
          </h2>
          <p className="mt-4 text-[#5C3D2E] text-lg leading-relaxed">
            Each project is a unique collaboration between our craft and your vision.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <div
              key={i}
              className={`reveal reveal-delay-${(i % 3) + 1} group relative img-zoom rounded-lg overflow-hidden cursor-pointer`}
              onClick={() => setSelectedImage(project.image)}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-72 object-cover"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#3D2314]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <span className="text-[#D4A574] text-sm font-medium">
                  {project.category}
                </span>
                <h3 className="text-[#F5F0E8] text-xl font-bold mt-1">
                  {project.title}
                </h3>
              </div>
              {/* Zoom Icon */}
              <div className="absolute top-4 right-4 w-10 h-10 bg-[#F5F0E8]/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <ZoomIn className="w-5 h-5 text-[#3D2314]" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-8 h-8" />
          </button>
          <img
            src={selectedImage}
            alt="Full view"
            className="max-w-full max-h-[90vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  )
}
