import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react'
import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const projectTypeLabels: Record<string, string> = {
    furniture: 'Custom Furniture',
    cabinetry: 'Kitchen Cabinetry',
    restoration: 'Restoration',
    'live-edge': 'Live Edge Piece',
    other: 'Other',
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const lines = [
      "Hello Darad Workshop! I'd like to start a project.",
      '',
      `Name: ${formData.name}`,
      `Email: ${formData.email}`,
      formData.phone ? `Phone: ${formData.phone}` : '',
      formData.projectType
        ? `Project type: ${projectTypeLabels[formData.projectType] ?? formData.projectType}`
        : '',
      '',
      `Details: ${formData.message}`,
    ].filter((line, i) => line !== '' || i === 1 || i === 6)
    const url = `https://wa.me/254745948866?text=${encodeURIComponent(lines.join('\n'))}`
    window.open(url, '_blank', 'noopener')
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 5000)
    setFormData({ name: '', email: '', phone: '', projectType: '', message: '' })
  }

  const contactInfo = [
    {
      icon: MapPin,
      label: 'Visit Us',
      value: 'Diani Beach Road, Opposite Psalm Beach Hospital',
    },
    {
      icon: Phone,
      label: 'Call Us',
      value: '(+254) 745948866',
    },
    {
      icon: Mail,
      label: 'Email Us',
      value: 'darad_furniture@gmail.com or Info@launchpadke.org',
    },
    {
      icon: Clock,
      label: 'Hours',
      value: 'Mon–Sat: 8am – 6pm',
    },
  ]

  return (
    <section id="contact" className="py-24 lg:py-32 bg-[#F5F0E8] wood-grain">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="reveal text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#C17817] font-semibold text-sm uppercase tracking-wider">
            Get in Touch
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-[#3D2314]">
            Start Your Project
          </h2>
          <p className="mt-4 text-[#5C3D2E] text-lg leading-relaxed">
            Tell us about your vision and we will help bring it to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-8">
            {contactInfo.map((info, i) => (
              <div key={i} className="reveal flex items-start gap-4">
                <div className="w-12 h-12 bg-[#5C3D2E] rounded-lg flex items-center justify-center flex-shrink-0">
                  <info.icon className="w-5 h-5 text-[#F5F0E8]" />
                </div>
                <div>
                  <p className="text-sm text-[#C17817] font-medium">{info.label}</p>
                  <p className="text-[#3D2314] font-medium mt-0.5">{info.value}</p>
                </div>
              </div>
            ))}

            {/* Map placeholder */}
            <div className="reveal mt-8 rounded-lg overflow-hidden border border-[#E8DDD0] h-48 bg-[#E8DDD0] flex items-center justify-center">
              <div className="text-center text-[#5C3D2E]">
                <MapPin className="w-8 h-8 mx-auto mb-2 text-[#C17817]" />
                <p className="font-medium">Diani Beach Road</p>
                <p className="text-sm"> ,Opposite Psalm Beach Hospital</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="reveal reveal-delay-2 p-8 bg-white rounded-lg border border-[#E8DDD0] shadow-sm"
            >
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-[#5C3D2E] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Send className="w-8 h-8 text-[#F5F0E8]" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#3D2314] mb-2">
                    Opening WhatsApp...
                  </h3>
                  <p className="text-[#5C3D2E]">
                    Your message is pre-filled — just press send. We will get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <>
                  <div className="grid sm:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-sm font-medium text-[#3D2314] mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="w-full px-4 py-3 bg-[#F5F0E8] border border-[#E8DDD0] rounded-md focus:outline-none focus:ring-2 focus:ring-[#C17817] focus:border-transparent text-[#3D2314]"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#3D2314] mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full px-4 py-3 bg-[#F5F0E8] border border-[#E8DDD0] rounded-md focus:outline-none focus:ring-2 focus:ring-[#C17817] focus:border-transparent text-[#3D2314]"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-sm font-medium text-[#3D2314] mb-2">
                        Phone
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className="w-full px-4 py-3 bg-[#F5F0E8] border border-[#E8DDD0] rounded-md focus:outline-none focus:ring-2 focus:ring-[#C17817] focus:border-transparent text-[#3D2314]"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#3D2314] mb-2">
                        Project Type
                      </label>
                      <select
                        value={formData.projectType}
                        onChange={(e) =>
                          setFormData({ ...formData, projectType: e.target.value })
                        }
                        className="w-full px-4 py-3 bg-[#F5F0E8] border border-[#E8DDD0] rounded-md focus:outline-none focus:ring-2 focus:ring-[#C17817] focus:border-transparent text-[#3D2314]"
                      >
                        <option value="">Select a type</option>
                        <option value="furniture">Custom Furniture</option>
                        <option value="cabinetry">Kitchen Cabinetry</option>
                        <option value="restoration">Restoration</option>
                        <option value="live-edge">Live Edge Piece</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div className="mb-6">
                    <label className="block text-sm font-medium text-[#3D2314] mb-2">
                      Project Details
                    </label>
                    <textarea
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full px-4 py-3 bg-[#F5F0E8] border border-[#E8DDD0] rounded-md focus:outline-none focus:ring-2 focus:ring-[#C17817] focus:border-transparent text-[#3D2314] resize-none"
                      placeholder="Tell us about your project, dimensions, wood preferences, timeline..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-[#5C3D2E] text-[#F5F0E8] font-semibold rounded-md hover:bg-[#3D2314] transition-colors flex items-center justify-center gap-2"
                  >
                    <Send className="w-5 h-5" />
                    Send via WhatsApp
                  </button>
                </>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
