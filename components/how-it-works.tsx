import { Ship, Package, Handshake } from 'lucide-react'

export default function HowItWorks() {
  const steps = [
    {
      icon: <Ship className="w-12 h-12 text-green-700" />,
      title: "Commercial Vision",
      description:
        "We've expanded into diverse global markets by cultivating strong business relationships with our clients founded on principles of transparency, open communication, and unwavering commitment. Looking ahead, our vision encompasses reaching additional countries with an expanded product portfolio while pioneering innovative distribution channels to better serve our customers worldwide.",
    },
    {
      icon: <Package className="w-12 h-12 text-green-700" />,
      title: "Advanced Quality Management",
      description:
        "Our operations span a comprehensive network of packing facilities across Peru. Each facility adheres to superior safety protocols and features cutting-edge infrastructure. We implement advanced preservation and refrigeration technologies that extend product longevity while preserving their inherent qualities and natural characteristics.",
    },
    {
      icon: <Handshake className="w-12 h-12 text-green-700" />,
      title: "Building Trust Across Peru's Fields",
      description:
        "Our company maintains a comprehensive supplier network spanning all of Peru's production regions. Throughout our history, we have fostered transparent partnerships with each supplier, supporting their field development and business assessment processes while connecting their products with premium market opportunities..",
    },
  ]

  return (
    <section id="how-it-works" className="py-24 bg-gray-200">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="h-px w-8 bg-green-700"></div>
              <span className="text-green-700 font-medium text-sm">Our Values</span>
              <div className="h-px w-8 bg-green-700"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Our Approach in Action</h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Domel Produce: Growing Quality, Shipping Taste.
            </p>
          </div>

          <div className="flex flex-col space-y-8">
            {steps.map((step, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/4 p-6 flex items-center justify-center bg-green-50">
                    <div className="p-4 rounded-full w-16 h-16 flex items-center justify-center">
                      {step.icon}
                    </div>
                  </div>
                  <div className="md:w-3/4 p-6">
                    <h3 className="text-xl font-bold text-foreground mb-4">{step.title}</h3>
                    <p className="text-foreground/70 text-base leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

