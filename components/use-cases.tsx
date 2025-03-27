import Image from "next/image"

export default function UseCases() {
  const useCases = [
    {
      title: "Global Gap",
      description: "Our commitment to agricultural excellence, ensuring traceability, sustainability, and safety at every stage of fruit production.",
      image: "/globalgap.png",
      metrics: ["98% reduction in phytosanitary risks", "100% traceability control throughout the production chain", "95% compliance with agricultural sustainability protocols"],
    },
    {
      title: "HACCP",
      description: "We implement rigorous food control protocols that prevent risks, ensuring the highest quality and safety of our fruits.",
      image: "/haccp.png",
      metrics: ["99.7% accuracy in critical control points", "99% elimination of potential contaminants", "99% elimination of potential contaminants"],
    },
    {
      title: "ISO 22000",
      description: "We support our management with an international food safety system that optimizes processes and maintains world-class standards.",
      image: "/iso22000.png",
      metrics: ["85% improvement in operational efficiency", "92% reduction in process errors", "78% optimization of quality costs"],
    },
    {
      title: "Organic Certification",
      description: "We confirm our commitment to natural agricultural practices, chemical-free, that preserve the ecosystem and consumer health.",
      image: "/organic.png",
      metrics: ["100% free of synthetic pesticides", "90% lower environmental impact vs traditional agriculture", "85% biodiversity conservation in cultivation areas"],
    },
  ]

  return (
    <section id="use-cases" className="py-24 bg-background border-b border-border/10">
      <div className="container mx-w-full">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="h-px w-8 bg-green-700"></div>
              <span className="text-green-700 font-medium text-sm">WHAT BACKS OUR QUALITY</span>
              <div className="h-px w-8 bg-purple-500"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Certifications</h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Our products have leading international certifications such as Global GAP, HACCP, ISO 22000, Fair Trade, and Organic Certification. These accreditations guarantee a sustainable, safe, and highest quality production process.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-gray-200 rounded-xl p-7 hover:bg-muted transition-colors duration-300">
                <div className="flex items-center justify-center mb-6"><Image src={useCase.image} alt={useCase.title} width={48} height={48} /></div>
                <h3 className="text-xl font-bold text-foreground mb-3">{useCase.title}</h3>
                <p className="text-foreground/70 mb-6">{useCase.description}</p>
                <ul className="grid gap-2">
                  {useCase.metrics.map((metric, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-foreground/60">
                      <div className="h-1 w-1 rounded-full bg-purple-500"></div>
                      {metric}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

